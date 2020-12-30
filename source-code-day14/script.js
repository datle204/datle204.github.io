// Bai1:  Đếm số nguyên tố trong đoạn [a, b]

document.writeln(`Bai1:  Đếm số nguyên tố trong đoạn [a, b]. 
Sử dụng hàm demSoNguyenTo()<br/><br/>`);

function soNguyenTo(t) {
    if (t < 0) {
        return false;
    }
    else if (t < 2) {
        return false;
    }

    else if (2 < t) {
        for (let i = 2; i < t; i++) {
            if (t % i == 0) {
                return false;
            }
        }
        return true;
    }
    else {
        return true;
    }
};

function demSoNguyenTo(x, y) {

    // Đếm số lượng số nguyên tố
    let count = 0;
    for (let i = x; i <= y; i++) {
        if (soNguyenTo(i)) {
            count++;
        }

    }
    return count;

}

// bai2:  Hiển thị số ngày của tháng. 
// Với tháng 2 có 29 ngày nếu là năm nhuận, 28 ngày nếu là năm không nhuận.

document.writeln(`bai2:  Hiển thị số ngày của tháng. 
Với tháng 2 có 29 ngày nếu là năm nhuận, 28 ngày nếu là năm không nhuận. Sử dụng hàm displayDate(month, year) <br/><br/>`);

function displayDate(month, year) {
    switch (month) {
        case 1:
            return 31;
        case 2:
            if ((year % 4 == 0 && year % 100 != 0) || (year % 100 == 0 && year % 400 == 0)) {
                return 29;
            }
            else {
                return 28;
            }
        case 3:
            return 31;
        case 4:
            return 30;
        case 5:
            return 31;
        case 6:
            return 30;
        case 7:
            return 31;
        case 8:
            return 31;
        case 9:
            return 30;
        case 10:
            return 31;
        case 11:
            return 30;
        case 12:
            return 31;
        default:
            return `Error`;
    }
};

// Bai3: Chèn phần tử có giá trị X vào phía sau 
// phần tử có giá trị lớn nhất trong mảng.

document.writeln(`Bai3: Chèn phần tử có giá trị X vào phía sau 
phần tử có giá trị lớn nhất trong mảng. Sử dụng hàm addElement(arr,x)<br/><br/>`);

function addElement(arr, x) {
    let maxValue = 0;
    for (let i = 0; i <= arr.length; i++) {
        if (maxValue < arr[i]) {
            maxValue = arr[i];
        }
    }
    let indexMaxValue = arr.indexOf(maxValue);
    arr.splice((indexMaxValue + 1), 0, x);
    return arr;
}

// Bai4: Chèn phần tử có giá trị X vào mảng sao cho 
// mảng vẫn có thứ tự tăng dần.

document.writeln(`Bai4: Chèn phần tử có giá trị X vào mảng sao cho 
mảng vẫn có thứ tự tăng dần. Sử dụng hàm addNewElement(arr,x)<br/><br/>`);

function addNewElement(arr, x) {
    arr.push(x);
    arr.sort(function (a, b) { return a - b });
    return arr;
}

// Bai5:Tính tổng các chữ số trong 1 số nguyên dương.

document.writeln(`Bai5: Tính tổng các chữ số trong 1 số nguyên dương.
 Sử dụng hàm sumDigitOfNumber(x)<br/><br/>`);

function sumDigitOfNumber(x) {
    let sum = 0;
    let digit = 0;
    if (x < 10) {
        sum = x;
        return sum;
    }
    else {
        while (x != 0) {
            digit = Math.floor(x % 10);
            sum = sum + digit;
            x = x / 10;
        }
        return sum;
    }
}

// Bai6: Kiểm tra tính đối xứng của một số nguyên.
document.writeln(`Bai6: Kiểm tra tính đối xứng của một số nguyên.
 Sử dụng hàm kiemTraDoiXung(x)<br/><br/>`);

function kiemTraDoiXung(x) {
        let num = x;
        let reverseNum = 0;
        let check;
        

        if(num < 10){
            return(`Số đối xứng`)
        }
        while(num != 0){
            check = Math.floor(num % 10);
            reverseNum = Math.floor((reverseNum * 10) + check);
            num = Math.floor(num/10);
        }
        if(reverseNum == x){
            return `Số đối xứng`;
        }
        else{
            return `Không phải số đối xứng`;
        }
    
}


// Bai7. Giải phương trình bậc 2: ax^2 + bx + c = 0.

document.writeln(`Bai7: Giải phương trình bậc 2: ax^2 + bx + c = 0.
 Sử dụng hàm giaiPhuongTrinh(a,b,c)<br/><br/>`);
function giaiPhuongTrinh(a, b, c) {
    let delta;
    delta = Math.pow(b, 2) - (4 * a * c);
    if (delta < 0) {
        return `Vô nghiệm`;
    }
    else if (delta == 0) {
        return `Phương trình có 1 nghiệm:  x = ${-b / (2 * a)}`;
    }
    else {
        return `Phương trình có 2 nghiệm : x1 = ${-b + Math.sqrt(delta) / (2 * a)} va x2 = ${-b - Math.sqrt(delta) / (2 * a)}`;
    }
}

// Bai8. Vẽ hình chữ nhật rỗng kích thước m, n:
document.writeln(`Bai8:  Vẽ hình chữ nhật rỗng kích thước m, n:
 Sử dụng hàm drawHCN(m,n)<br/><br/>`);
function drawHCN(m, n) {
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (i == 1 || j == 1 || i == m || j == n) {
                document.write("*");
            }
            else {
                document.write("&nbsp&nbsp");
            }
        }
        document.write("<br/>");
    }
}

// Bai9.  Vẽ tam giác vuông chiều cao h:
document.writeln(`Bai9:  Vẽ tam giác vuông chiều cao h.
 Sử dụng hàm drawTGV(h)<br/><br/>`);
function drawTGV(h) {
    for (let i = 1; i <= h; i++) {
        for (let j = 1; j <= i; j++) {
            document.write("*")
        }
        document.write("<br>")
    }
}

// Bai10. Vẽ tam giác cân ngược:
document.writeln(`Bai10:  Vẽ tam giác cân ngược.
 Sử dụng hàm drawTGCN(h)<br/><br/>`);
function drawTGCN(h) {
    
    var  y = 2*h-1;// y là cạnh đáy
    for (let i = 1; i <= h; i++) {
        for (let j = 1; j <= y; j++) {
            if( j>=i && j <= 2*h-i){
                document.write("*");
            }
            else{
                document.write("&nbsp&nbsp");
            }
            
        }
        document.write("<br/>");
        
    }
    
}

// Vẽ dấu X
// *       *
//  *     *
//   *   *
//     *
//   *   *
//  *     *
// *       *
document.writeln(`Bai11: Vẽ dấu X. Su dung ham: veX(h) <br/><br/>`);

function veX(h){
    for(let i = 0; i < h; i++){
        for(let j = 0; j < h; j++){
            if(j == i || j == h-i-1){
                document.write("*");
            }
            else{
                document.write("&nbsp");
            }
        }
        document.write("<br/>");
    }
}

