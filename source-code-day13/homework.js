
// Bai1: Viết hàm kiểm tra 2 số, trả về số lớn hơn.
document.writeln(`Bai1: Viết hàm kiểm tra 2 số, trả về số lớn hơn. 
Sử dụng hàm soSanh(x,y) <br/><br/>`)

function soSanh(x, y) {
    if (x - y > 0) {
        return x;
    }
    else {
        return y;
    }
}

// Bai2: Viết hàm tính n! (giai thừa) với n là số nguyên dương.

document.writeln(`Bai2: Viết hàm tính n! (giai thừa) với n là số nguyên dương. 
Sử dụng hàm giaiThua(x) <br/><br/>`)

function giaiThua(x) {
    let giaiThua = 1;
    if(x == 0){
        return 1;
    }
    else if (x > 0) {
        for (let i = 1; i <= x; i++) {
            giaiThua = giaiThua * i;
        }
        return giaiThua;
    }
    else {
        console.log("Nhap vao 1 so duong");
    }
}

// Bai3: Viết hàm lấy ra một mảng các số chẵn từ mảng ban đầu và 
//trả về mảng đã được sắp xếp giảm dần.

document.writeln(`Bai3: Viết hàm lấy ra một mảng các số chẵn từ mảng ban đầu và 
trả về mảng đã được sắp xếp giảm dần.
Sử dụng hàm sapXep(arr) <br/><br/>`)


function sapXep(arr) {
    newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            newArr.push(arr[i])
        }
    }
    newArr.sort(function (x, y) {
        return y - x;
    });
    return newArr;
}

//Bai4: Viết hàm lấy ra ngày tháng năm hiện tại, xác định đang là mùa nào trong năm. Biết rằng:

// - Mùa xuân từ tháng 1 đến tháng 3

// - Mùa hè từ tháng 4 đến tháng 6

// - Mùa thu từ tháng 7 đến tháng 9

// - Mùa đông từ tháng 10 đến tháng 12

document.writeln(`Bai4: Viết hàm lấy ra ngày tháng năm hiện tại, xác định đang là mùa nào trong năm.
Sử dụng hàm kiemTraNgay() <br/><br/>`)

function kiemTraNgay() {
    var date = new Date();
    var day = date.getUTCDate();
    var month = date.getUTCMonth() + 1;
    var year = date.getUTCFullYear();

    if (1 <= month && month <= 3) {
        return (`hom nay la ${day}/${month}/${year}, mua xuan`)
    }
    else if (4 <= month && month <= 6) {
        return (`hom nay la ${day}/${month}/${year}, mua he`)
    }
    else if (7 <= month && month <= 9) {
        return (`hom nay la ${day}/${month}/${year}, mua thu`)
    }
    else {
        return (`hom nay la ${day}/${month}/${year}, mua dong`)
    }

}


//Bai5: Cho một mảng các chuỗi, viết hàm sắp xếp mảng theo thứ thự bảng chữ cái.

document.writeln(`Bai5: Cho một mảng các chuỗi, viết hàm sắp xếp
 mảng theo thứ thự bảng chữ cái.
Sử dụng hàm sapXepChuCai(arr) <br/><br/>`)

function sapXepChuCai(arr) {
    arr.sort();
    return arr;
}

// Bai6: Viết hàm đảo ngược một chuỗi từ một chuỗi cho trước.

document.writeln(` Bai6: Viết hàm đảo ngược một chuỗi từ một chuỗi cho trước.
Sử dụng hàm daoNguoc(x) <br/><br/>`)

function daoNguoc(x) {
    y = x.split("");
    z = y.reverse();
    t = z.join("");
    return t;
}

// Bai7: Cho một số nguyên dương N, viết hàm kiểm tra N có phải là số nguyên tố.

document.writeln(`Bai7: Cho một số nguyên dương N, 
viết hàm kiểm tra N có phải là số nguyên tố.
Sử dụng hàm soNguyenTo(x) <br/><br/>`)

function soNguyenTo(x) {
    if (x < 0) {
        return ("Nhap vao 1 so duong");
    }
    else if (x <= 1) {
        return (`${x} khong phai la so nguyen to `);
    }
    else if (x == 2 || x == 3) {
        return (`${x} la so nguyen to`);
    }

    else if (4 <= x) {
        for (i = 2; i < x; i++) {
            if (x % i == 0) {
                return (`${x} khong phai la so nguyen to`);
            }
        }
        return `${x} la so nguyen to`;
    }
    else {
        return ("Nhap vao 1 so duong");
    }
}

//Bai8: Cho một số nguyên dương N, viết hàm in ra màn hình những số hoàn hảo 
//nhỏ hơn N (số hoàn hảo là số bằng tổng các ước số của nó mà không kể chính nó).
document.writeln(`Bai8: Cho một số nguyên dương N, viết hàm in ra màn hình những số hoàn hảo 
//nhỏ hơn N (số hoàn hảo là số bằng tổng các ước số của nó mà không kể chính nó).
Sử dụng hàm soHoanHao(x) <br/><br/>`)

function soHoanHao(x) {
    let list = [];
    for (let y = 2; y < x; y++) {
        let sum = 0;
        for (let i = 1; i < y; i++) {
            if (y % i == 0) {
                sum = sum + i;
            }
        }

        if (y == sum) {
            list.push(y);
        }
    }
    return list;
}


//Bai9: Viết chương trình vẽ một hình chữ nhật bằng các dấu * với
// chiều rộng và chiều cao cho trước (chiều rộng, chiều cao lớn hơn 1).
// * * *

// * * *

// * * *

document.writeln(`Bai9: Viết chương trình vẽ một hình chữ nhật bằng các dấu * với
chiều rộng và chiều cao cho trước (chiều rộng, chiều cao lớn hơn 1).
Sử dụng hàm veHCN(x,y) <br/><br/>`)


// function veHCN(x, y) {
//     var a = '';
//     for (var i = 0; i < x; i++) {
//         for (var j = 0; j < y; j++) {
//             a = a + '*';
//         }
//         a = a +'\n';
//     }
//     console.log(a);
// }


function veHCN(x,y){
    for(let i = 0; i < y; i++){
        for(let j = 0; j < x; j++){
            document.write("*");
        }
        document.write("<br/>");
    }
}

// 10. Viết chương trình vẽ một tam giác cân bằng các dấu * với chiều cao cho trước (chiều cao lớn hơn 1).

//     *

//   * * *

// * * * * *

document.writeln(`Bai10: Viết chương trình vẽ một tam giác cân bằng
 các dấu * với chiều cao cho trước (chiều cao lớn hơn 1).
Sử dụng hàm veHTG(x) <br/><br/>`)

function veHTG(x){
    let y = x*2 -1 // y la canh day'
    for(var i = 0; i< x; i++){
        for(var j =0; j< y; j++){
            if(j >= (x-i-1) && j <= x+i-1){
                 document.write("*");
            }
            else{
                document.writeln("&nbsp");
            }
        }
    document.write("<br/>");
       
    }
}

