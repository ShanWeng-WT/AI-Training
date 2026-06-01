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

## 📁 檔案命名與目錄結構規範
- **講義與講稿**：請維持 `ClassXX_Handout.html` 與 `ClassXX_SpeakerNotes.md` 的命名慣例 (XX 為兩碼數字，如 01, 02)。
- **範例與挑戰**：實作範例與測試程式碼請放置於 `Examples/` 目錄下。
- **教材獨立性**：每堂課的講義應能獨立運作，並連結至共用的 CSS/JS 資源。

---
*提示：此檔案 (`AGENTS.md`) 會被 AI Agent在讀取專案時自動解析，作為全局的上下文與護欄 (Guardrails)，確保 AI Agent的產出符合團隊規範。*
