var dssv = [];
const DSSV_LOCAL = "DSSV_LOCAL";
var dataJson = localStorage.getItem(DSSV_LOCAL);
if (dataJson != null) {
  var svArr = JSON.parse(dataJson);
  renderDSSV(svArr);
}
function themSV() {
  var sv = layThongTinTuForm();
  var isValid =
    kiemTraRong(sv.ma, "spanMaSV") &&
    kiemTraTrung(sv.ma, "spanMaSV", dssv, "Mã sinh viên đã tồn tại", "ma");
  isValid =
    isValid &
    kiemTraTrung(
      sv.email,
      "spanEmailSV",
      dssv,
      "Email sinh viên đã tồn tại",
      "email"
    );
  if (!isValid) {
    return;
  }
  dssv.push(sv);
  renderDSSV();
  var dataJson = JSON.stringify(dssv);
  localStorage.setItem(DSSV_LOCAL, dataJson);
}
function xoaSV(id) {
  var index = -1;
  for (let i = 0; i < dssv.length; i++) {
    if (dssv[i].ma === id) {
      index = i;
      break;
    }
  }
  if (index !== -1) {
    dssv.splice(index, 1);
    renderDSSV(dssv);
    var dssvInJsonData = JSON.stringify(dssv);
    localStorage.setItem(DSSV_LOCAL, dssvInJsonData);
  }
}

function suaSV(id) {
  var index = dssv.findIndex(function (item) {
    return item.ma == id;
  });
  if (index !== -1) {
    var sv = dssv[index];
    document.getElementById("txtMaSV").value = sv.ma;
  }
}
