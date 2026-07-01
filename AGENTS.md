# 專案與 Agent 上下文配置 (AGENTS.md)

這是一個用於指導 AI Agent在操作本儲存庫時的行為指南，同時也作為本系列課程中關於 Context Files 相關教學的實作範例。

## 🎯 專案背景 (Context)
- **專案目標**：建立企業內部 AI 輔助開發教育訓練系列教材。
- **目標受眾**：Unity 前端與 .NET 後端開發人員。
- **課程架構**：系列課程每堂約 30 分鐘。強調「先實作體驗 -> 後原理解析」。

## 🛠️ 技術堆疊與檔案格式 (Tech Stack & Formats)
- **教材格式**：主要使用 HTML, CSS, JavaScript 與 Markdown。
- **禁用格式**：**絕對不要**使用或生成 PowerPoint (PPT/PPTX)。所有講義與簡報載體皆須為網頁 (HTML)。
- **共用樣式**：新增教材時，請套用專案中既有的 `Scripts/style.css` 與 `template.html` 以保持視覺一致性。

## 🤖 AI Agent行為準則 (Agent Rules)
當你在本專案中協助開發、修改教材或生成程式碼時，請嚴格遵守以下規則：

1. **語言設定**：所有教材內容、文件與註解請使用**繁體中文 (Traditional Chinese)**。技術專有名詞可保留英文。
2. **語氣與風格**：專業、具啟發性、條理清晰。避免冗長的學術論述，著重於實戰應用。
3. **範例程式碼 (Unity / .NET)**：
   - 產出的範例程式碼必須符合企業級開發標準（例如包含適當的防呆與例外處理）。
   - 必須加上詳盡的註解，並著重於解釋「為什麼這樣做」而不僅是「這段程式碼做什麼」。
4. **名詞統一**：請遵循計畫書中的核心概念名詞，如 Agent Skills, Subagents, Context Engineering, PlanMode, Human-In-The-Loop (HITL), Agentic Workflow 等。
5. **模組化排版規範 (Modular Layouts)**：
   **【⚠️ 核心排版原則：先分析內容，再決定版面】**
   `template.html` 內提供了許多優質的排版模組，這些版面**必須在「內容適合」的前提下使用，絕對不要盲目套用預設版面**。在生成或修改每一張投影片（Slide Card）時，你必須先**分析該張 Slide 的教學目的與內容屬性**，如果下方排版模組中有適合的就可以直接拿來使用，沒有的話就額外設計一個新的。務必在高資訊密度與視覺疲勞之間控制好平衡（樣式定義於 `Scripts/style.css`）：
   - **Top-Title Layout (經典上標下內文，主要骨幹)**：卡片套用 `top-title-layout` 類別。標題置於頂部並帶有底線，最適合長段文字、一般概念講解與清單列舉。
   - **Console Split (主控台雙欄，程式碼優先)**：卡片套用 `console-dashboard-layout`，內含雙欄網格 `.console-split`，右側使用 IDE 視窗樣式 `.ide-window` 展示代碼或配置檔。最適合 Unity C#、.NET 代碼或 yaml 說明的場景。
   - **Comparison Layout (雙欄對照/對比，概念衝突)**：卡片套用 `comparison-layout`，內含雙欄網格 `.comparison-grid` 與 `.comparison-card`，可用 `.highlight-card` 為關鍵選項加上強調發光邊框，下方可搭配全寬 `blockquote` 引言。最適合新舊思維對比、優缺點分析或結論總結投影片。
   - **Bento Box Layout (便當盒排版，靈活模組)**：卡片套用 `bento-layout`，內部使用 `bento-grid` 與 `bento-item`，可透過 `bento-span-X` 控制跨欄。適合總結多個不同維度的重點與亮點展示。
   - **Chat Bubble Layout (情境對話，破除迷思)**：卡片套用 `chat-layout`，內部使用 `chat-container` 與左右對話泡泡 `chat-bubble chat-left` / `chat-right`。最適合常見誤區 Q&A 與情境帶入。
   - **Timeline Layout (時間軸，發展脈絡)**：卡片套用 `timeline-layout`，橫向展開多個 `timeline-item` 節點。適合呈現課程大綱、歷史演進或學習計畫。
   - **Flashcard Layout (極簡字卡，單點聚焦)**：卡片套用 `flashcard-layout`，畫面僅保留 `flashcard-content` 居中。適合過場、大腦重置與震撼教育金句。


## 📁 檔案命名與目錄結構規範
- **講義與講稿**：請維持 `ClassXX_Handout.html` 的命名慣例 (XX 為兩碼數字，如 01, 02)。注意：所有 Handout 的標題與大綱（如 `<title>` 或 `<h1>`）中**不要**加上「第 X 堂：」的前綴，以利後續課程順序的彈性調整。
- **共用資源**：共用的 JavaScript 與 CSS 資源（如 `style.css`, `slides.js`）請放置於 `Scripts/` 目錄下。
- **備用排版**：其他版面配置範本與測試檔案請置於 `Alternative_Layouts/` 目錄下。
- **範例與挑戰**：實作範例、測試程式碼與相關圖片等資源請放置於 `Resources/` 目錄下。
- **教材獨立性**：每堂課的講義應能獨立運作，並正確連結至共用的 CSS/JS 資源。
