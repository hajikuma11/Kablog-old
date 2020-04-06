// Channel_access_tokenを登録
var CHANNEL_ACCESS_TOKEN = 'ZXl3ygFenENGMEGBe8VBZYOvivh8DIhRib5Ocl6nINNjvDNlzSZ3vNmA9bT3sk1JMLuC1ognMTjOVX2XxVBVU373OpkTcXFOuZZIaomkLQbcpgkerRQVojLr2FwzOpAhkdz2LMoEGwPp6HSwEtcGEwdB04t89/1O/w1cDnyilFU=';

function doPost(e) {
  var event = JSON.parse(e.postData.contents).events[0];
  var replyToken= event.replyToken;

  // エラー処理
  if (typeof replyToken === 'undefined') {
    return;
  }
  
  var userId = event.source.userId;
  var nickname = getUserProfile(userId);

  // ユーザーにbotがフォローされた場合に起きる処理
  if(event.type == 'follow') {}

  if(event.type == 'message') {
    var userMessage = event.message.text;
    // 今回は鸚鵡返しなので届いたメッセージをそのまま返します。
    var replyMessage = userMessage

    // もし届いたユーザーからのメッセージによって他にやりたい処理
    // (ex: spread sheetへの記入など)がある場合は、ここに入れて下さい。

    var url = 'https://api.line.me/v2/bot/message/reply';

    UrlFetchApp.fetch(url, {
      'headers': {
        'Content-Type': 'application/json; charset=UTF-8',
        'Authorization': 'Bearer ' + CHANNEL_ACCESS_TOKEN,
      },
      'method': 'post',
      'payload': JSON.stringify({
        'replyToken': replyToken,
        'messages': [{
          'type': 'text',
          'text': replyMessage,
        }],
      }),
    });
    return ContentService.createTextOutput(
      JSON.stringify({'content': 'post ok'})
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

// profileを取得してくる関数
function getUserProfile(userId){
  var url = 'https://api.line.me/v2/bot/profile/' + userId;
  var userProfile = UrlFetchApp.fetch(url,{
    'headers': {
      'Authorization' :  'Bearer ' + CHANNEL_ACCESS_TOKEN,
    },
  })
  return JSON.parse(userProfile).displayName;
}
