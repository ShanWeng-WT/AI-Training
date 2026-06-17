<#
.SYNOPSIS
  Builds the canonical data-entity inventory for the data-usage-analysis skill.

.DESCRIPTION
  Enumerates the server CustomData folder and the client Unity Data folder,
  normalizes each file to a "data entity" (filename without extension), groups
  wave-family files (WaveKind*, WaveBonusKind*) into a single 'WaveKindXXX'
  entity, and emits a presence matrix as JSON.

  For each entity it reports:
    - InServer : the entity has a file in the server CustomData path
    - InClient : the entity has a file in the client Unity Data path
    - ServerFiles / ClientFiles : the concrete filenames (so reference search can
      look for the exact name WITH extension as well as the bare entity name)

  The presence matrix already determines the "-" (N/A) cells: if InServer is
  false the Server column is "-", if InClient is false the Client column is "-".
  Whether the remaining cells are O / X / ? is decided by reference search
  (see SKILL.md).

.PARAMETER ServerCustomData
  Absolute path to ...\Model.Server\Deployment\DeployUpdate\CustomData

.PARAMETER ClientData
  Absolute path to ...\Model.Unity\Assets\Game<N>\Data

.EXAMPLE
  pwsh -File Build-DataInventory.ps1 -ServerCustomData <path> -ClientData <path>
#>
[CmdletBinding()]
param(
    [Parameter(Mandatory)] [string] $ServerCustomData,
    [Parameter(Mandatory)] [string] $ClientData
)

$ErrorActionPreference = 'Stop'

function Get-Entity([string] $fileName) {
    $base = [System.IO.Path]::GetFileNameWithoutExtension($fileName)
    if ($base -match '^(WaveKind|WaveBonusKind)') { return 'WaveKindXXX' }
    return $base
}

function Get-Map([string] $path) {
    $map = @{}
    if (Test-Path -LiteralPath $path) {
        Get-ChildItem -LiteralPath $path -Recurse -File |
            Where-Object { $_.Extension -ne '.meta' } |
            ForEach-Object {
                $e = Get-Entity $_.Name
                if (-not $map.ContainsKey($e)) { $map[$e] = New-Object System.Collections.Generic.List[string] }
                if (-not $map[$e].Contains($_.Name)) { $map[$e].Add($_.Name) }
            }
    }
    return $map
}

$serverMap = Get-Map $ServerCustomData
$clientMap = Get-Map $ClientData

$all = @($serverMap.Keys + $clientMap.Keys) | Sort-Object -Unique

$rows = foreach ($e in $all) {
    [pscustomobject]@{
        Entity      = $e
        InServer    = $serverMap.ContainsKey($e)
        InClient    = $clientMap.ContainsKey($e)
        ServerFiles = if ($serverMap.ContainsKey($e)) { @($serverMap[$e]) } else { @() }
        ClientFiles = if ($clientMap.ContainsKey($e)) { @($clientMap[$e]) } else { @() }
    }
}

[pscustomobject]@{
    ServerCustomData = $ServerCustomData
    ClientData       = $ClientData
    EntityCount      = $all.Count
    Entities         = @($rows)
} | ConvertTo-Json -Depth 6
