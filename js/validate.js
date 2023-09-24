function kiemTraRong(value, idErr) {
  if (value != "") {
    document.getElementById(idErr).innerHTML = "";
    return true;
  } else {
    document.getElementById(idErr).innerHTML = "Mã sv không được để trống";
    return false;
  }
}
function kiemTraTrung(value, idErr, dssv, message, key) {
  var index = dssv.findIndex(function (item) {
    return item[key] == value;
  });
  if (index == -1) {
    document.getElementById(idErr).innerText = "";
    return true;
  } else {
    document.getElementById(idErr).innerText = message;
    return false;
  }
}
