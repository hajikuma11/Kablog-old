const spreadsheet = SpreadsheetApp.openById('1HKcsDHTRnDkLbTA0Mw6dO0LiIqShql-Am6tznbLLuGI');
const kabSht = spreadsheet.getSheetByName('kabdata');
const userSht = spreadsheet.getSheetByName('userdata');

/**
 * 指定した行の最終列を返す関数
 * @param {number} rowNum 行を指定する値
 * @returns 最終列の数値
 */
function lastColumn (rowNum) {
  return sheet.getRange(rowNum, rowNum).getNextDataCell(SpreadsheetApp.Direction.NEXT).getColumn();
}

/**
 * 指定した列の最終行を返す関数
 * @param {number} colNum 列を指定する値
 * @returns 最終行の数値
 */
function lastColumn (colNum) {
  return sheet.getRange(colNum, colNum).getNextDataCell(SpreadsheetApp.Direction.DOWN).getRow();
}

/**
 * シートにIDと初期データを登録
 * @param userid ユーザーID
 */
function signUp(userid) {

}