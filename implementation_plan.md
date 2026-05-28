# 企業內部 AI 輔助開發教育訓練系列課程計畫 (進階擴充版：12 堂課)

這份計畫旨在為公司內部的程式開發人員（Unity 前端、.NET 後端）設計一系列的教育訓練課程。每堂課設計為 30 分鐘，以確保學員能在高專注度下吸收核心知識，並迅速應用於實際開發中。

本計畫擴充為 **12 堂課**，保留了**「先實作體驗 -> 後原理解析」**的連貫性。前兩階段涵蓋了從個人自動化到系統化工作流的建構，並引入了 PlanMode、Context Files 與 Agentic Workflow 等進階開發模式；最後兩堂課則聚焦於企業級的 Harness Engineering，確保 AI 產出的長期可靠度。

## 課程清單與大綱 (每堂 30 分鐘)

### 第一階段：知己知彼與自動化初探 (Agent Skills 與 LLM 基礎)

#### 第 1 堂：打造專屬助手：Agent Skills 的定義與運用
- **目標**：讓學員立刻上手體驗，學會如何使用與定義 Agent Skill 來解決專案的特定問題。
- **內容**：Agent Skill 基本概念、實戰展示。

#### 第 2 堂：揭開 LLM 的黑盒子：它能做什麼，不能做什麼？
- **目標**：理解 LLM 原理，並頓悟 Skill 的價值在於對抗幻覺。
- **內容**：預測下一個 Token 的原理、幻覺成因。**頓悟時刻**：Skill 就是為了將成功案例與提示詞持久化，以確保可靠度。

#### 第 3 堂：AI 寫錯了怎麼辦？程式碼生成的防禦與 Hooks 攔截
- **目標**：當 AI 產生的程式碼不如預期時，學會如何除錯，並引進 Hooks 自動防呆。
- **內容**：常見失敗模式、引導 AI 自我修正 (Self-Correction)。引入 **Hooks 概念**：示範如何利用 Post-generation Hook 自動掛載 Linter 或編譯器，**將「機率性的 AI 產出」與「確定性的工具檢查」結合**，實現自動防禦反饋迴圈。

#### 第 4 堂：進階 Prompt Engineering 實戰：優化你的 AI 助手
- **目標**：基於前一堂課遇到的失敗經驗，掌握高階 Prompt 技巧以大幅提升可靠度。
- **內容**：基礎 Prompt 結構、Few-Shot Prompting (提供範例以約束輸出)、Chain of Thought (引導思維鏈)。

### 第二階段：系統化工作流與上下文控管 (Context, Subagents & Agentic Workflow)

#### 第 5 堂：分工協作的藝術：Subagents 在複雜任務中的應用
- **目標**：學會拆解大型任務，體驗多個 Subagents 協同完成工作。
- **內容**：Router/Coder/Reviewer 模式、實際案例演練多 Agent 自動化協作。

#### 第 6 堂：Context Engineering：精準餵養與 Token 效率最佳化
- **目標**：學會提供精確上下文，並頓悟 Subagents 在 Context 控管中的關鍵角色。
- **內容**：Context Window 限制。**頓悟時刻**：Subagents 最大優勢是能對 Context 進行「實體隔離」，避免不同領域的資訊互相干擾。

#### 第 7 堂：從對話到行動：Agent 的本質與運作機制總結
- **目標**：總結前 6 堂課的技術堆疊，從底層理解驅動這一切的引擎。
- **內容**：深入解析 Agent 感知、思考、行動 (ReAct 框架)。探討單一 Agent 到多 Agent 協作背後的決策機制。

#### 第 8 堂：制定專案的大腦：Context Files (AGENTS.md) 的威力
- **目標**：學習如何透過全局配置檔規範 AI 的行為，統一團隊的生成標準。
- **內容**：介紹 AGENTS.md / GEMINI.md。區分 **靜態上下文 (Static Context - 如配置檔)** 與 **動態上下文 (Dynamic Context - 如 RAG)** 的邊界。實作演練：寫入 Unity/.NET 架構規範讓 AI 遵守。

#### 第 9 堂：無痛實作大架構：Spec 驅動與 Planning Mode (PlanMode)
- **目標**：面對重大架構變更時，避免寫出難以維護的義大利麵條程式碼。
- **內容**：撰寫精準的 Spec。引入 PlanMode 與 **Human-In-The-Loop (HITL)** 概念：強調開發者的角色從「純撰寫者」轉變為「架構審閱者」，在動手前先確認 Implementation Plan 避免後續龐大成本。

#### 第 10 堂：超越單次對話：Agentic Workflow 設計模式
- **目標**：融會貫通各種設計模式，構建高複雜度的工作流。
- **內容**：深入探討吳恩達 (Andrew Ng) 提出的 Agentic Workflow 核心模式：反思 (Reflection)、工具使用 (Tool Use)、規劃 (Planning) 與多代理協作。

### 第三階段：企業級品質保證 (Harness Engineering)

#### 第 11 堂：確保 AI 不退化：Harness Engineering 與評測基準
- **目標**：理解退化風險。學會為 Unity/.NET 專案建立 AI 的 Evaluation Dataset (Ground Truth)。
- **內容**：退化災難探討。設計客觀評分標準：探討 **「LLM 作為裁判 (LLM-as-a-Judge)」** 與 **「確定性評估 (Deterministic Evaluation - 如編譯是否通過)」** 的差異。

#### 第 12 堂：自動化測試你的 AI：實作 Evaluation Harness 與 CI/CD 整合
- **目標**：量化 Agent Skill 的準確率，並將其融入企業開發流程。
- **內容**：透過腳本自動批次測試 AI 產出並給分。探討如何將這套 Harness 流程整合進 CI/CD 與 Git Flow，建立最終的企業級 AI 開發守則。

## 課程生成與教材準備步驟 (Action Plan)
1. **確認 12 堂課大綱**：與 User 進行最終確認。
2. **教材逐堂生成 (全面採用 HTML 格式)**：
   - **捨棄傳統 PPT**，改以生成結構化的 HTML 網頁作為教材載體。
   - **優勢**：大幅提升 AI 生成與維護的效率、確保排版格式穩定，並能完美支援程式碼高亮 (Syntax Highlighting) 與未來的動態範例展示。
   - 產出物：每堂課將產出一份獨立的 HTML 講義與配套的講者講稿。
3. **實作範例準備 (技術挑戰)**：
   - 第 3 堂課需準備 Hooks 攔截編譯錯誤的展示。
   - 第 8、9 堂需準備真實的 `AGENTS.md` 範本與 PlanMode 實戰專案。
   - 第 11、12 堂需準備一套簡易的 Evaluation Harness 與測試數據集。
4. **教材存放與發布**：歸檔至 `D:\Wanin\PDD3 AI Training`。

## User Review Required
- 放棄 PPT 改用 HTML 生成教材的策略已寫入 Action Plan。您是否希望 HTML 講義套用特定的 CSS 框架（例如 Bootstrap 或簡約的 Markdown-like 樣式），以統一企業內部的視覺風格？
