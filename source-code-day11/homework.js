
// Bai tap 1

document.writeln(` Bài tập 1 <br/> <br/> Đổi độ C -> độ F dùng hàm doC(nhiệt độ), vd: doC(20) <br/>
Đổi độ F -> độ C dùng hàm doF(nhiệt độ), vd: doF(68) <br/><br/>`)

function doC(x) {
    if(Number.isInteger(x) == true){
        y = x * 1.8 + 32
        console.log(`${x} \xB0C bằng ${y} \xB0F`)
    }
    else{
        console.log("wrong, nhap vao 1 so")
    }
    
};

function doF(y) {
    if(Number.isInteger(y) == true){
        x = (y - 32) / 1.8
        console.log(`${y} \xB0F bằng ${x} \xB0C`)
    }
    else{
        console.log("wrong, nhap vao 1 so")
    }
};


// Bai tap 2

document.writeln(`Bài tập 2 <br/> <br/> 
Kiểm tra thế kỉ của 1 năm: sử dụng hàm century(năm)), vd: century(2020) <br/> <br/> `)

function century(x) {
    y = (x + 99) / 100
    console.log(Math.floor(y))
}


// Bai tap 3

document.writeln(`Bài tập 3 <br/> <br/> 
Cắt chuỗi kí tự dài 15 ký tự bằng hàm  cutList("chuỗi 15 kí tự") <br/> <br/> `)


function cutList(x){

    if(x.length>=10 && typeof x === 'string'){
        y = x.slice(0, 10)
        console.log( y + "...")
    }
    else{
        console.log("Wrong, nhap vao 1 chuoi gom 10 ky tu tro len")
    }
    
}






// Bai tap 4

document.writeln(`Bài tập 4 <br/> <br/> 
Chữ cái đầu của chuỗi nhập vào được viết hoa: sử dụng hàm capFirstCharacter("chuỗi ký tự")`)


function capFirstCharacter(x){
    y = x.toLowerCase();
    z = y.charAt(0).toUpperCase()+ y.slice(1);
    return z;
}

