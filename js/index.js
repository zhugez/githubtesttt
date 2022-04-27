$(document).ready(function() {
    var i = 1; // Khởi tạo số thứ tự
   // Viết code vào
    $("#btn2").click(function(){
        $("#myModal").modal();
    });

    function kiemTraSTT(){
        var i=1;
        let mauKT = /^\d*$/;
        if($("#STT").val()== ""){
            $("#tbSTT").html("Không để trống");
            return false;
        }
        if (!mauKT.test($("#STT").val())){
            $("#tbSTT").html("Chỉ dùng số");
            return true;
        }
        $("#STT").blur(kiemTraSTT);
    }
    function kiemTraMaTour(){
        var mauKT = /^\d*$/;
       
        if($("#Ma").val()== ""){
            $("#tbMa").html("Không để trống");
            return false;
        }
        if (!mauKT.test($("#Ma").val())){
            $("#tbMa").html("Dùng số ");
            return true;
        }else{
            var Ma = $("#Ma").val();
            if(Ma<1 || Ma >100){
                $("#tbMa").html("từ 1 đến 100");
            } else {
                $("#tbtMa").html("*");
                return true;
            }
        }
    }
    $("#Ma").blur(kiemTraMaTour);

    function kiemTraHanhTrinh(){
        var mauKT = /^[A-Z0-9][a-z0-9]*(\s[A-Z0-9][a-z0-9]*)*$/;
        if($("#HT").val() == ""){
            $("#tbHT").html("Không để trống");
            return false;
        }
        if(!mauKT.test($("#HT").val())) {
            $("tbHT").html("Mỗi ký tự đầu viết hoa không sử dụng số");
            return true;
        }
        $("#tbHT").html("*");
        return true;
    }
    $("#HT").blur(kiemTraHanhTrinh);
    
    function kiemTraNKH(){
        if($("#NKH").val() == ""){
            $("#tbNKH").html("Không để trống");
            return false;
        }

        var today = new Date();
        var ntt = new Date($("#NKH").val());
        today = today.setDate(today.getDate() + 7);
        if(today > ntt) {
            $("tbNKH").html("Phải sau ngày hiện tại 7 ngày");
            return true;
        }
        $("#tbNKH").html("*");
        return true;
    }
    $("#NKH").blur(kiemTraNKH);

    function kiemTraThoiGian(){
        var mauKT= /^0\d{3}-\d{3}-\d{3}$/;
        if($("#TIME").val() == ""){
            $("#tbTIME").html("Không để trống");
            return false;
        }

        
        if(!mauKT.test($("#TIME").val())){} {
            $("tbTIME").html("Theo dạng xx-xx-xxxx");
            return true;
        }
        
        $("#tbTIME").html("*");
        return true;
    }
    $("#TIME").blur(kiemTraThoiGian);
    function kiemTraGiaTour(){
        var mauKT = /^\d*$/;
       
        if($("#GT").val()== ""){
            $("#tbGT").html("Không để trống");
            return false;
        }
        if (!mauKT.test($("#GT").val())){
            $("#tbGT").html("Dùng số ");
            return true;
        }else{
            var GT = $("#GT").val();
            if(GT<1 || GT >100){
                $("#tbGT").html("từ 1 đến 100000000");
            } else {
                $("#tbtGT").html("*");
                return true;
            }
        }
    }
    $("#GT").blur(kiemTraGiaTour);

    $("#Save").click(function(){
        if (kiemTraSDT() == true && kiemTraMaTour() == true && kiemTraHanhtrinh() == true && kiemTraThoigian() == true && kiemtraGiaTour== true){
            row = "<tr>";
            row += "<th>" + (i++) + "</th>";
            row += "<th>" + $("#STT").val() + "</th>";
            row += "<th>" + $("#Ma").val() + "</th>";
            row += "<th>" + $("#HT").val() + "</th>";
            row += "<th>" + $("#NKH").val() + "</th>";
            row += "<th>" + $("#TIME").val() + "</th>";
            row += "<th>" + $("#GT").val() + "</th>";
            $("#danhSach").append(row);
            $("#myModal").modal("hide");
        }
    })
})