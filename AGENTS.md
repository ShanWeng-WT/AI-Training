# PDD3 AI Training - 專案與 Agent 上下文配置 (AGENTS.md)

這是一個用於指導 AI Agent在操作本儲存庫時的行為指南，同時也作為本系列課程中關於 Context Files 相關教學的實作範例。

## 🎯 專案背景 (Context)
- **專案目標**：建立企業內部 AI 輔助開發教育訓練系列教材。
- **目標受眾**：Unity 前端與 .NET 後端開發人員。
- **課程架構**：系列課程每堂約 30 分鐘。強調「先實作體驗 -> 後原理解析」。

## 🛠️ 技術堆疊與檔案格式 (Tech Stack & Formats)
- **教材格式**：主要使用 HTML, CSS, JavaScript 與 Markdown。
- **禁用格式**：**絕對不要**使用或生成 PowerPoint (PPT/PPTX)。所有講義與簡報載體皆須為網頁 (HTML)。
- **共用樣式**：新增教材時，請套用專案中既有的 `style.css` 與 `template.html` 以保持視覺一致性。

## 🤖 AI Agent行為準則 (Agent Rules)
當你在本專案中協助開發、修改教材或生成程式碼時，請嚴格遵守以下規則：

1. **語言設定**：所有教材內容、文件與註解請使用**繁體中文 (Traditional Chinese)**。技術專有名詞可保留英文。
2. **語氣與風格**：專業、具啟發性、條理清晰。避免冗長的學術論述，著重於實戰應用。
3. **範例程式碼 (Unity / .NET)**：
   - 產出的範例程式碼必須符合企業級開發標準（例如包含適當的防呆與例外處理）。
   - 必須加上詳盡的註解，並著重於解釋「為什麼這樣做」而不僅是「這段程式碼做什麼」。
4. **名詞統一**：請遵循計畫書中的核心概念名詞，如 Agent Skills, Subagents, Context Engineering, PlanMode, Human-In-The-Loop (HITL), Agentic Workflow 等。
5. **模組化排版規範 (Modular Layouts)**：
   為了維持高資訊密度與避免學員視覺疲勞，所有講義的投影片（Slide Card）必須依據內容屬性，靈活使用以下四種排版模組（具體結構請參考 [template.html](file:///D:/Projects/AI%20Training/template.html)，樣式定義於 [style.css](file:///D:/Projects/AI%20Training/style.css)）：
   - **Top-Title Layout (經典上標下內文，主要骨幹)**：卡片套用 `top-title-layout` 類別。標題置於頂部並帶有底線，最適合長段文字、一般概念講解與清單列舉。
   - **Console Split (主控台雙欄，程式碼優先)**：卡片套用 `console-dashboard-layout`，內含雙欄網格 `.console-split`，右側使用 IDE 視窗樣式 `.ide-window` 展示代碼或配置檔。最適合 Unity C#、.NET 代碼或 yaml 說明的場景。
   - **Dashboard Grid (指標儀表板三欄，多維並列)**：卡片套用 `console-dashboard-layout`，內含三欄網格 `.dashboard-grid` 與 `.sub-card`。適合總結、三個概念並列（如黃金鐵三角）、常見誤區 Q&A 的投影片。
   - **Comparison Layout (雙欄對照/對比，概念衝突)**：卡片套用 `comparison-layout`，內含雙欄網格 `.comparison-grid` 與 `.comparison-card`，可用 `.highlight-card` 為關鍵選項加上強調發光邊框，下方可搭配全寬 `blockquote` 引言。最適合新舊思維對比、優缺點分析或結論總結投影片。


## 📁 檔案命名與目錄結構規範
- **講義與講稿**：請維持 `ClassXX_Handout.html` 與 `ClassXX_SpeakerNotes.md` 的命名慣例 (XX 為兩碼數字，如 01, 02)。注意：所有 Handout 的標題與大綱（如 `<title>` 或 `<h1>`）中**不要**加上「第 X 堂：」的前綴，以利後續課程順序的彈性調整。
- **範例與挑戰**：實作範例與測試程式碼請放置於 `Resources/` 目錄下。
- **教材獨立性**：每堂課的講義應能獨立運作，並連結至共用的 CSS/JS 資源。

---
*提示：此檔案 (`AGENTS.md`) 會被 AI Agent在讀取專案時自動解析，作為全局的上下文與護欄 (Guardrails)，確保 AI Agent的產出符合團隊規範。*
