# 功能規格與實作計畫 (Implementation Plan)

## 功能描述
實作「玩家登入」功能，包含前端 Unity 的 UI 介面，以及後端 .NET 的驗證邏輯。

## 實作步驟
1. **[Backend] 定義 Domain Entity**: 建立 `User` 實體，包含 `Id`, `Username`, `PasswordHash`。
2. **[Backend] 實作 Infrastructure**: 使用 Entity Framework Core 建立 `UserRepository`，連接 SQL Server。
3. **[Backend] 實作 Application Service**: 建立 `AuthService.LoginAsync(string username, string password)`，驗證邏輯並回傳 JWT token。
4. **[Backend] 建立 gRPC Service**: 定義 `.proto` 檔案，實作 `Login` RPC 節點。
5. **[Frontend] Unity View**: 建立 LoginUI (帳號輸入框、密碼輸入框、登入按鈕)。
6. **[Frontend] Unity Presenter**: 建立 `LoginPresenter`，處理登入按鈕點擊事件，呼叫 gRPC 客戶端。

## AI 輔助開發指令 (PlanMode)
> 請根據上述的「實作步驟」，一步步進行開發。每完成一個步驟後，請暫停並向開發者確認程式碼，確認無誤後再進行下一步。不要一次把所有程式碼全部寫完。
