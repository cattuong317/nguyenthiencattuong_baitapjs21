function layThongTinTuForm() {
  let ma = document.getElementById("txtMaSV").value;
  let ten = document.getElementById("txtTenSV").value;
  let matKhau = document.getElementById("txtPass").value;
  let email = document.getElementById("txtEmail").value;
  let toan = document.getElementById("txtDiemToan").value;
  let ly = document.getElementById("txtDiemLy").value;
  let hoa = document.getElementById("txtDiemHoa").value;
  var sv = {
    ma: ma,
    ten: ten,
    matKhau: matKhau,
    email: email,
    toan: toan,
    ly: ly,
    hoa: hoa,
    tinhDTB: function () {
      var dtb = (this.toan + this.ly + this.hoa) / 3;
      return dtb;
    },
  };
  return sv;
}
function renderDSSV() {
  var contentHTML = "";
  for (var index = 0; index < dssv.length; index++) {
    var sv = dssv[index];
    var trString = `<tr>
          <td>${sv.ma}</td>
          <td>${sv.ten}</td>
          <td>${sv.email}</td>
          <td>0</td>
          <td>
            <button class="btn btn-warning" onclick=xoaSV(${sv.ma})>Xóa</button>
            <button class="btn btn-primary" onclick=suaSV(${sv.ma})>Sửa</button>
          </td>
                      </tr>`;
    contentHTML = contentHTML + trString;
  }
  document.querySelector("#tbodySinhVien").innerHTML = contentHTML;
}
