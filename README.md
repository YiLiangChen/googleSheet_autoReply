# googleSheet_autoReply
------------- English -------------

An simple google app script for replying email to who submit google form (for now only text)

step 1. create a google form

step 2. in form,select sheet icon to create a google sheet

step 3. open google sheet,select tools from toolbar then open script editor

step 4. edit the code (can paste code from here：https://github.com/YiLiangChen/googleSheet_autoReply/blob/master/auto_reply.js) 

step 5. edit the email subject and body, ( at code part line 6 & 7 ) 

step 6. select toolbar from left side ,click triggering conditions and add new trigger condition

step 7. select activate type : when submitting the form

notice: the code part getRange("C") means column "C" ; so make sure your column C in sheet is mail column or replace to another column alphabet

------------- 中文 ----------------

簡單的 google app script，用於回信給填答 google 表單者 

step 1. 建立新的 google 表單
 
step 2. 從表單中回覆部分的右上角點選「試算表圖示」建立試算表

![image](https://user-images.githubusercontent.com/17447427/137953943-e74718fa-eebe-4447-94b4-dd6587732e7c.png)


step 3. 從試算表中工具列選取 > 工具 > 指令碼編輯器

![image](https://user-images.githubusercontent.com/17447427/137954150-61533a2b-6972-4b31-8e59-2bcab57200ca.png)

step 4. 修改程式碼 ( 可貼上取代該段程式碼：https://github.com/YiLiangChen/googleSheet_autoReply/blob/master/auto_reply.js ) 
![image](https://user-images.githubusercontent.com/17447427/137954312-873469bb-0ee3-4cce-9d1e-b667642355ba.png)

step 5. 調整欲回覆信件標題與內容 (subject為標題 message為內容)

![image](https://user-images.githubusercontent.com/17447427/137954460-14a914d8-9893-49e5-bb43-6dc81c375332.png)

step 6. 點選左方工具列 > 觸發項目，新增觸發條件

![image](https://user-images.githubusercontent.com/17447427/137954600-febf6b7e-2c01-4693-8401-92ed1513349b.png)

step 7. 選取活動類型為 「提交表單」時

![image](https://user-images.githubusercontent.com/17447427/137954710-47646f11-2297-4808-838f-a1d4589dfc07.png)

注意：程式碼中 getRange("C") 代表試算表中 C 欄位，所以請確認 C 欄是存放 mail 資訊的欄位，或調整程式碼為相應欄位

