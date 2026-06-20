# PDD3 AI Training 課程架構調整建議

## 核心節奏

本系列不需要把「概念課」與「實作課」切成僵硬的二分法。更適合的節奏是：

1. 先讓學員拿到可用能力，產生真實使用經驗。
2. 下一堂回頭解釋前一堂遇到的困惑與底層原因。
3. 再用下一個功能把概念落地成可重複的工程工作流。

這樣的安排符合課程原則「先實作體驗 -> 後原理解析」，也能避免一開始講太多 LLM 理論，導致學員缺乏情境感。

## 建議順序

| Class | 類型 | 課程 | 設計理由 |
| --- | --- | --- | --- |
| 00 | 概念 | 比語言模型更重要的 心智模型 | 先建立使用 AI 的角色定位與協作心法。 |
| 01 | 實作 | Agent Skills 的定義與運用 | 讓學員立即取得可用功能，理解經驗資產化的價值。 |
| 02 | 混合 | 從對話到行動：Agent 的本質與日常工作環境 | 回答「上一堂用的 Agent 到底是什麼」，並導入 Project Folder、Tools、PlanMode、Auto Accept Edits 與 HITL。 |
| 03 | 概念 | 揭開 LLM 的黑盒子：它能做什麼，不能做什麼？ | 解釋 Skill、Constraints、Context 為何能改善品質，讓學員理解幻覺不是道德問題，而是機率問題。 |
| 04 | 實作 | AI 寫錯了怎麼辦？程式碼生成的防禦與 Hooks 攔截 | 將「LLM 不穩定」轉成工程護欄，用 Hooks、Build、Test 建立閉環。 |
| 05 | 實作 | 分工協作的藝術：Subagents 在複雜任務中的應用 | 學會拆分大型任務，避免單一 Agent 負擔過多角色與上下文。 |
| 06 | 概念 | Context Engineering：精準餵養與 Token 效率最佳化 | 承接 Subagents 的上下文切分問題，建立管理 LLM 工作記憶的方法。 |
| 07 | 實作 | 進階 Prompt Engineering 實戰：優化你的 AI 助手 | 把模型機制與 Context 管理落地成結構化 Prompt、Few-Shot 與可驗證約束。 |
| 08 | 實作 | 制定專案的大腦：Context Files (AGENTS.md) 的威力 | 將團隊規範固化成專案級 Context，減少重複提示與風格漂移。 |
| 09 | 實作 | 無痛實作大架構：Spec 驅動與 Planning Mode | 針對大型變更建立 Spec、PlanMode 與 Human-In-The-Loop 審閱流程。 |
| 10 | 概念 | 超越單次對話：Agentic Workflow 設計模式 | 統整 Reflection、Tool Use、Planning、Multi-agent 等 Agentic Workflow 模式。 |
| 11 | 概念 | 確保 AI 不退化：Harness Engineering 與評測基準 | 讓學員理解 AI 品質需要基準線，而不是只靠主觀感受。 |
| 12 | 實作 | 自動化測試你的 AI：Evaluation Harness 與 CI/CD | 把評測基準接進 CI/CD，形成長期可維護的品質防線。 |

## 關於 Class 02 與 Class 03 的取捨

建議保留 Class 02 作為「Agent 的本質與工作環境」課，而不是直接替換成 LLM 黑盒子。原因是 Class 01 已經讓學員使用 Agent Skills，下一堂最自然的問題會是：

- 這個 Agent 和一般 Chatbot 差在哪裡？
- Tools 為什麼會改變 AI 的能力邊界？
- 為什麼 Agent 會自己讀檔、改檔、跑測試？
- PlanMode、Auto Accept Edits 與人工批准到底在控管什麼風險？

這些問題先處理完，Class 03 再講 LLM 黑盒子會更有力量。因為學員已經知道 Agent 會行動，接著才會真正關心：這個行動背後的推理大腦有什麼限制、為什麼會幻覺、為什麼需要 Constraints 與驗證。

## 目前落地方式

目前 `Scripts/courses.js` 只維護課程編號，首頁會依照編號讀取根目錄中的 `ClassXX_Handout.html`，並直接使用講義內的 `<title>` 作為課程標題。等課綱確認後，再把 WIP 講義依照正式順序搬到根目錄，讓首頁自然反映最新課程架構。
