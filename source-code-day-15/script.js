// Bai1: Đoán 1 số bất kỳ trong khoảng 1 đến 100

let number = Math.floor(Math.random()*100)+1;
function check(){
    
    var x = document.getElementById("guess-number").value;
    if(x == ""){
        alert("Bạn chưa nhập giá trị");
    }
    else if( isNaN(x) == true){
        alert("Hãy nhập vào 1 số");
    }

    else if(x < 1 || x > 100){
        alert("Hãy nhập vào 1 số trong khoảng từ 1 đến 100");
    }

    else if(x > number){
        alert(`Số phải tìm nhỏ hơn ${x}`);
    }
    else if(x < number){
        alert(`Số phải tìm lớn hơn ${x}`);
    }
    else if( x == number){
        alert("ok");
    }

}



