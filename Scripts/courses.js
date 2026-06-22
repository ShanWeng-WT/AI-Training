// 課程目錄設定檔
// 每次新增課程時，請在這裡加入一行設定即可！
// 首頁會依照編號讀取根目錄中的 ClassXX_Handout.html，並自動取用講義的 <title>。
//
// 若講義還在製作中，可以用物件型態加上 wip: true 來強制顯示「製作中...」並停用連結，
// 即使對應的 ClassXX_Handout.html 檔案已經存在也一樣。
// 例如： { id: "09", wip: true }

const COURSE_LIST = [
    { id: "00" },
    { id: "01" },
    { id: "02" },
    { id: "03", wip: true },
    { id: "04", wip: true },
    { id: "05", wip: true },
    { id: "06", wip: true },
    { id: "07", wip: true },
    { id: "08", wip: true },
    { id: "09", wip: true },
    { id: "10", wip: true },
    { id: "11", wip: true },
    { id: "12", wip: true }
];
