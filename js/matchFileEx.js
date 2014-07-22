/*
@param File 文件名
@param Ex 后缀名 
@matchFileEx('api.jpg','gif|jpg|jpeg|png')
 */
function matchFileEx(File, Ex) {
  var _File = File;
  var _Ex = Ex;
  if (!_Ex) {
    return true;
  }
  if (!_File) {
    return false;
  }
  _File = _File.toLowerCase();
  var _flg = _File.match(eval('/\.+(' + _Ex + ')$/i'));
  if (_flg != null && _flg != undefined) {
    return true;
  } else {
    return false;
  }
}