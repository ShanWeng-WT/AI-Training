# 企業內部 Unity/.NET 開發規範 (Agent Context File)

當你身為 AI 開發助手時，請遵守以下團隊規範：

## 1. 專案架構 (Architecture)
- **前端 (Unity)**: 採用 MVP (Model-View-Presenter) 架構。避免在 View 裡面直接寫邏輯。
- **後端 (.NET)**: 採用 Clean Architecture，分為 Domain, Application, Infrastructure, Presentation 層。
- **通訊**: Unity 與 .NET 之間透過 gRPC 溝通。

## 2. 程式碼風格 (Coding Style)
- C# 變數命名使用 CamelCase (`myVariable`)，屬性與方法使用 PascalCase (`MyMethod`)。
- 介面 (Interface) 必須以 `I` 開頭，例如 `IUserService`。
- 不要使用 `var` 宣告變數，除非型別非常明顯（例如 `var list = new List<string>();`）。

## 3. 錯誤處理 (Error Handling)
- 統一拋出繼承自 `AppException` 的自訂例外。
- 所有的非同步方法必須加上 `Async` 後綴，並傳遞 `CancellationToken`。

## 4. 工具與套件 (Tools & Packages)
- 日誌紀錄請使用 `Serilog`。
- 單元測試請使用 `xUnit` 與 `Moq`。
