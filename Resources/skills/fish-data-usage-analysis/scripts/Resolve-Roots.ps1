<#
.SYNOPSIS
  Auto-detects the four key roots for the data-usage-analysis skill in a Fish/OSX
  workspace, tolerating project-specific numbers (Game<N>, FishHunter<N>).

.DESCRIPTION
  The data/code paths differ between projects in the series. Rather than hard-code
  "Game190" or "FishHunter4", this resolves them from the workspace root by pattern.

  Emits JSON with:
    WorkspaceRoot, ServerCustomData, ClientDataRoot, ClientAssetsRoot,
    ServerCodeRoot, FishModuleRoot, GameFolder, FishModuleName
  Any value that could not be found is reported as null so the caller can decide
  how to proceed (and flag it for the user).

.PARAMETER WorkspaceRoot
  Absolute path to the workspace root (the folder containing Model.Server,
  Model.Unity, Modules). Defaults to the current directory.
#>
[CmdletBinding()]
param(
    [string] $WorkspaceRoot = (Get-Location).Path
)

$ErrorActionPreference = 'Stop'

function FirstDir([string] $parent, [string] $filter) {
    if (-not (Test-Path -LiteralPath $parent)) { return $null }
    Get-ChildItem -LiteralPath $parent -Directory -Filter $filter -ErrorAction SilentlyContinue |
        Select-Object -First 1 -ExpandProperty FullName
}

$serverCustomData = Join-Path $WorkspaceRoot 'Model.Server\Deployment\DeployUpdate\CustomData'
$clientAssets     = Join-Path $WorkspaceRoot 'Model.Unity\Assets'

# Game<N>: the Unity game-content folder that actually contains a Data subfolder.
$gameFolder = $null
$clientDataRoot = $null
if (Test-Path -LiteralPath $clientAssets) {
    foreach ($d in Get-ChildItem -LiteralPath $clientAssets -Directory -Filter 'Game*' -ErrorAction SilentlyContinue) {
        $cand = Join-Path $d.FullName 'Data'
        if (Test-Path -LiteralPath $cand) { $gameFolder = $d.FullName; $clientDataRoot = $cand; break }
    }
}

# FishHunter<N> server module: under Modules\OSX\FishHunter<N> (the one with GameModel.Internal).
$modulesOsx = Join-Path $WorkspaceRoot 'Modules\OSX'
$fishModuleRoot = $null
if (Test-Path -LiteralPath $modulesOsx) {
    foreach ($d in Get-ChildItem -LiteralPath $modulesOsx -Directory -Filter 'FishHunter*' -ErrorAction SilentlyContinue) {
        if (Test-Path -LiteralPath (Join-Path $d.FullName 'GameModel.Internal')) { $fishModuleRoot = $d.FullName; break }
    }
    if (-not $fishModuleRoot) { $fishModuleRoot = FirstDir $modulesOsx 'FishHunter*' }
}

[pscustomobject]@{
    WorkspaceRoot    = $WorkspaceRoot
    ServerCustomData = if (Test-Path -LiteralPath $serverCustomData) { $serverCustomData } else { $null }
    ClientDataRoot   = $clientDataRoot
    ClientAssetsRoot = if (Test-Path -LiteralPath $clientAssets) { $clientAssets } else { $null }
    ServerCodeRoot   = if (Test-Path -LiteralPath (Join-Path $WorkspaceRoot 'Modules')) { Join-Path $WorkspaceRoot 'Modules' } else { $null }
    FishModuleRoot   = $fishModuleRoot
    GameFolder       = $gameFolder
    FishModuleName   = if ($fishModuleRoot) { Split-Path $fishModuleRoot -Leaf } else { $null }
} | ConvertTo-Json -Depth 4
