# 第 2 堂：從對話到行動：Agent 的本質與運作機制總結 - 講者筆記

## ⏳ 課程時間表 (總長：30 分鐘)

### [00:00 - 05:00] 回顧與破題 (5 min)
*   **Slide: 課程目標**
*   **講者動作：** 開場點明：我們上一堂課學了 Agent Skills 的定義與運用，但大家知道 Agent 底層到底是什麼嗎？
*   **口白：** 「我們把 ChatGPT 當作聊天機器人，但我們給開發者的工具是 Agent。兩者最大的差別在於『行動力』。」

### [05:00 - 15:00] Chatbot vs Agent & 頓悟時刻 (10 min)
*   **Slide: 什麼是 Agent？ & 頓悟時刻**
*   **講者動作：** 秀出 Agent 底層的 pseudocode (`while (!task_completed) { think(); act(); observe(); }`)。
*   **口白：** 「頓悟時刻：Agent 其實就是一個掛了 LLM 腦袋的 while 迴圈！這解釋了為什麼它有時候會『想很久』，因為它正在背後瘋狂呼叫工具、讀檔、報錯、自我修正。」

### [15:00 - 25:00] ReAct 框架解析 (10 min)
*   **Slide: 核心機制：ReAct 框架**
*   **講者動作：** 展示一段 Agent 隱藏的 log (Thought -> Action -> Observation)。
*   **口白：** 「這就是著名的 ReAct 框架 (Reasoning and Acting)。理解這個迴圈後，你就知道：要讓 Agent 變強，除了 Prompt 寫好，『提供好用的工具 (Tools)』也是關鍵。」

### [25:00 - 30:00] 總結與前瞻 (5 min)
*   **Slide: 為什麼 Agent 會卡死？**
*   **講者動作：** 提醒寫明確 Prompt 的重要性以打破無效迴圈。
*   **口白：** 「今天我們掌握了 Agent 的個體與運作機制。從下一堂課（第 3 堂）開始，我們將進入『主動防禦』的領域，學習如何建立自動化的防禦與 Hooks 攔截機制。」
