function onSubmit() {

// mail parameter 
// adjust subject & message as you need
// 信件參數 可依需求自行調整 
  var subject = "AutoReply_test"; //信件標題
  var message = "content here"; //信件內文
  
  var sheet = SpreadsheetApp.getActiveSheet();

// get mail address from sheet (in order to get latest submitter mail address) 
  var lastRow = sheet.getActiveCell().getLastRow();
  email = sheet.getRange("C"+lastRow).getValue();

// send mail 
  MailApp.sendEmail({
    to:email,
    subject:subject,
    body:message
  });
}