const spreadsheet = SpreadsheetApp.openById('1HKcsDHTRnDkLbTA0Mw6dO0LiIqShql-Am6tznbLLuGI');
const kabdata = spreadsheet.getSheetByName('kabdata');
const userdata = spreadsheet.getSheetByName('userdata');

/**
 * 指定した行の最終列を返す関数
 * @param {number} rowNum 行を指定する値
 * @param sheet 操作するシート
 * @returns 最終列の数値
 */
function lastColumn (sheet,rowNum) {
  return sheet.getRange(rowNum, rowNum).getNextDataCell(SpreadsheetApp.Direction.NEXT).getColumn();
}

/**
 * 指定した列の最終行を返す関数
 * @param {number} colNum 列を指定する値
 * @param sheet 操作するシート
 * @returns 最終行の数値
 */
function lastRow (sheet,colNum) {
  return sheet.getRange(colNum, colNum).getNextDataCell(SpreadsheetApp.Direction.DOWN).getRow();
}

function toAlphabet (num) {
  num = num - 1;
  let alp = "";
  let a = 0;
  let b = 0;

  a = parseInt((num / 26), 10);
  b = num - (a * 26);
  if(a > 0) {
    alp = String.fromCharCode(a + 64);
  }
  if(b >= 0) {
    alp = alp + String.fromCharCode(b + 65);
  }
  return alp;
}

function toNumber(alp) {
  let num = 0;
  let tmp = 0;
   
  alp = alp.toUpperCase();
  for (i = alp.length - 1;i >= 0;i--) {
    tmp = alp.charCodeAt(i) - 65;
    if(i != alp.length - 1) {
      tmp = (tmp + 1) * Math.pow(26,(i + 1));
    }
    num = num + tmp;
  }
  return num + 1;
}

/**
 * シートにIDと初期データを登録
 * @param userid ユーザーID
 * @returns true:登録成功, false:登録失敗
 */
function signUp(userid) {
  kabLastColumn = lastColumn(kabdata, 1);

  if (kabLastColumn === lastColumn(userdata, 1)) {
    kabLastColumn++;
    kabdata.getRange(toAlphabet(kabLastColumn) + "1").setValue(userid);
    userdata.getRange(toAlphabet(kabLastColumn) + "1").setValue(userid);
    return true;
  } else {
    return false;
  }
}