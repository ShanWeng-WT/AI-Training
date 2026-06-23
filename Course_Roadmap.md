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
| 02 | 混合 | 從對話到行動：Agent 的本質與日常工作環境 | 回答「上一堂用的 Agent 到底是什麼」，並導入 Project Folder、Tools、Auto Accept Edits 與 HITL。 |
| 03 | 概念 | 揭開 LLM 的黑盒子：它能做什麼，不能做什麼？ | 解釋幻覺不是道德問題而是機率問題；並帶入手動驗證/審查手段（讀 diff、Build/Test、用 Git 審 AI commit），讓這一堂聚焦在幫學員與 LLM 培養熟悉度與信任。 |
| 04 | 實作 | 選對大腦：模型分級、Thinking Budget 與 Plan Mode | 聚焦「送出 User Prompt 之前的所有抉擇」：我該選哪個模型？Thinking Budget 用多少？該用哪個模式？課末作業讓學員用不同模型執行相同任務、觀察差異。 |
| 05 | 混合 | Context Engineering：Context Window、Lost in the Middle 與工作記憶管理 | 承接「為何要選模型」自然帶到「為何要管理上下文」，建立管理 LLM 工作記憶與 Token 效率的方法。 |
| 06 | 實作 | 分工協作的藝術：Subagents 在複雜任務中的應用 | 學會拆分大型任務、用多 Agent 切分上下文，落地 Class 05 的概念。 |
| 07 | 實作 | 進階 Prompt Engineering 實戰：優化你的 AI 助手 | 把模型機制與 Context 管理落地成結構化 Prompt、Few-Shot 與可驗證約束。 |
| 08 | 實作 | 制定專案的大腦：Context Files (AGENTS.md) 的威力 | 將團隊規範固化成專案級 Context，減少重複提示與風格漂移。 |
| 09 | 實作 | 無痛實作大架構：Spec 驅動開發 (SDD) | 針對大型變更建立 Spec 與 Human-In-The-Loop 審閱流程（純 SDD，不再重講 Plan Mode）。 |
| 10 | 混合 | 超越單次對話：Agentic Workflow 設計模式與 Hooks 自動化護欄 | 統整 Reflection、Tool Use、Planning、Multi-agent 等模式，並用 Hooks 把前面手動的驗證流程自動化成閉環。 |
| 11 | 概念 | 確保 AI 不退化：Harness Engineering 與評測基準 | 讓學員理解 AI 品質需要基準線，而不是只靠主觀感受。 |
| 12 | 實作 | 自動化測試你的 AI：Evaluation Harness 與 CI/CD | 把評測基準接進 CI/CD，形成長期可維護的品質防線。 |

## 備忘錄：可融入現有課程的延伸主題

下列主題暫不獨立成課，先記錄在此；實際製作對應課程時再決定要放進哪一堂、放多深。

- **Unity / 遊戲專案的特殊挑戰**：AI 看不到 Scene / Prefab / Inspector（二進位序列化）、如何用文字與 .meta 補足、重構 MonoBehaviour 為何容易出錯。→ 可融入 Class 02 或 Class 08（AGENTS.md 實例）。這是最值得補的遊戲開發專屬痛點。
- **AI 與既有大型 codebase 探索**：如何讓 Agent 安全探索陌生專案、避免亂改全域。→ 可融入 Class 05（Context）或 Class 06（Subagents）。
- **資安與機敏資料護欄**：哪些資料不能貼給 AI、企業內部規範。→ 可融入 Class 02 或 Class 08。

## 目前落地方式

目前 `Scripts/courses.js` 只維護課程編號，首頁會依照編號讀取根目錄中的 `ClassXX_Handout.html`，並直接使用講義內的 `<title>` 作為課程標題。等課綱確認後，再把 WIP 講義依照正式順序搬到根目錄，讓首頁自然反映最新課程架構。
