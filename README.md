# googleSheet_autoReply

## About
簡單的 google app script，用於回信給填答 google 表單者  
An simple google app script for replying email to who submit google form (for now only text)

## Steps

### step 1. 建立新的 google 表單 (Create a google form)
[Google表單](https://docs.google.com/forms/u/0/)


### step 2. 建立email欄位 (Create a email field)
可以使用以下兩種方式之一去新建email的欄位  
choose a way to get a email field

1. 在問題欄位中新增email的欄位  
create a field for email field  
	<img src="https://user-images.githubusercontent.com/45841389/137982786-3f3f0923-0521-4c92-b965-8ce7edb4bd6a.jpg" width="600" height="330" alt="1"/><br/>
2. 在設定中選取 回覆 > 收集電子郵件地址  
select setting > reply > collect email address  
	<img src="https://user-images.githubusercontent.com/45841389/137982914-0be4a81b-074f-4597-a5d6-4584ca544f6d.jpg" width="600" height="563" alt="1-1"/><br/>
 	<img src="https://user-images.githubusercontent.com/45841389/137983108-a2e84283-dfb7-48a7-9704-4b8f8a8a6e64.jpg" width="600" height="248" alt="1-1-1"/><br/>


### step 3. 建立試算表 (Create a google sheet)
從表單中回覆部分的右上角點選「試算表圖示」建立試算表  
in form,select sheet icon to create a google sheet  
	<img src="https://user-images.githubusercontent.com/45841389/137983271-29ce3b2d-6bcc-4335-9b14-ce0976c6857c.jpg" width="600" height="200" alt="2"/><br/>


### step 4. 指令碼編輯器 (Script editor)
從試算表中工具列選取 > 工具 > 指令碼編輯器  
open google sheet,select tools from toolbar then open script editor  
	<img src="https://user-images.githubusercontent.com/45841389/137983699-5700bbdc-c5c1-4398-878d-d17e2ee63a2b.jpg" width="600" height="398" alt="3"/><br/>  
#### **注意!!**  (**notice!!**)
>  程式碼中 getRange("B") 代表試算表中 B 欄位，所以請確認 B 欄是存放 mail 資訊的欄位，或調整程式碼為相應欄位   
>  the code part getRange("B") means column "B" ; so make sure your column B in sheet is mail column or replace to another column alphabet

<img src="https://user-images.githubusercontent.com/45841389/137989090-f0cdda1d-68d9-4595-9761-bcf7b26f0f0d.jpg" width="600" height="50" alt="5"/><br/>




### step 5. 修改程式碼 (Edit the code)
可貼上取代該段程式碼：[範例](https://github.com/YiLiangChen/googleSheet_autoReply/blob/master/auto_reply.js) 並儲存  
can paste code from here：[example](https://github.com/YiLiangChen/googleSheet_autoReply/blob/master/auto_reply.js) and saved  
	<img src="https://user-images.githubusercontent.com/45841389/137983978-db249ecf-b673-4031-9245-97ca069155f9.jpg" width="600" height="281" alt="4"/><br/>

### step 6. 調整信件標題與內容 (Edit the email subject and body)
調整欲回覆信件標題與內容 (subject為信件標題，message為信件內容)  
edit the email subject and body, ( at code part line 6 & 7 )   
	<img src="https://user-images.githubusercontent.com/45841389/137985530-19a2956f-9f6c-4bf1-8019-b33e42f4cebd.jpg" width="600" height="117" alt="12"/><br/>


### step 7. 觸發項目 (Triggering conditions)
點選左方工具列 > 觸發項目，新增觸發條件  
select toolbar from left side ,click triggering conditions and add new trigger condition   
	<img src="https://user-images.githubusercontent.com/45841389/137985632-ccf17c70-6e1a-44c1-b4cc-68b586979e1e.jpg" width="600" height="709" alt="6"/><br/>


### step 8. 選擇觸發條件 (Select activate type)
選取活動類型為 「提交表單」時
select activate type : when submitting the form   
	<img src="https://user-images.githubusercontent.com/45841389/137985654-936c9f5b-a69f-4775-861f-bc5b5f84a535.jpg" width="600" height="610" alt="7"/><br/>

### step 9. 給予授權 (Provide authorization)
給予此指令碼相關授權以執行程式
Provide authorization for program execution
	<img src="https://user-images.githubusercontent.com/45841389/137985695-d75eb0ca-32a7-4283-b2c0-b657a9cb9489.jpg" width="600" height="555" alt="8"/><br/>  
	<img src="https://user-images.githubusercontent.com/45841389/137985706-1afc4dfb-3b40-4a43-9fbf-7ae980550150.jpg" width="600" height="559" alt="9"/><br/>  
	<img src="https://user-images.githubusercontent.com/45841389/137985716-a6785d2e-ee28-4d43-8c72-3409aabd4cbf.jpg" width="600" height="558" alt="10"/><br/>  
	<img src="https://user-images.githubusercontent.com/45841389/137985727-36976a47-721b-4eb0-a2a9-0a6c89266439.jpg" width="600" height="559" alt="11"/><br/>


***
### 再次提醒 (Remind again)
注意：程式碼中 getRange("B") 代表試算表中 B 欄位，所以請確認 B 欄是存放 mail 資訊的欄位，或調整程式碼為相應欄位  
notice: the code part getRange("B") means column "B" ; so make sure your column B in sheet is mail column or replace to another column alphabet  
<img src="https://user-images.githubusercontent.com/45841389/137989090-f0cdda1d-68d9-4595-9761-bcf7b26f0f0d.jpg" width="600" height="50" alt="5"/><br/>

