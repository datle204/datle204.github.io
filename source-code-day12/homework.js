// Bai 1

// 1. Cho một mảng số nguyên. Viết hàm kiểm tra nếu 
//trong mảng có phần tử âm thì thay thế nó bằng 0.

document.writeln(`Bai1: Su dung hàm soDuong([array]) <br/><br/>`)

function soDuong(arrs){
    for (let i = 0; i < arrs.length; i++){
        if(arrs[i] < 0){
            arrs[i] = 0
        }
    }
    return arrs;
}


// Bai 2
//  Viết hàm tìm số nhỏ nhất và lớn nhất trong mảng số nguyên

document.writeln(`Bai2: Su dung hàm findNumber([array]) <br/><br/>`)

function findNumber(arrs){
    arrs.sort(function(x,y){return x-y})
    console.log(`so nho nhat la ${arrs[0]}`)
    console.log(`so lon nhat la ${arrs[arrs.length-1]}`)
}


// Bai 3

// Viết hàm trả về vị trí đầu tiên của số lẻ, 
// vị trí cuối cùng của số chẵn trong mảng bất kì.

document.writeln(`Bai3: Su dung hàm findPosition([array]) <br/><br/>`)

function findPosition(arrs){
    for( let i = 0 ; i < arrs.length; i++){
        if(arrs[i] % 2 != 0){
            console.log(`so le dau tien o vi tri thu ${i} (vi tri danh so tu 0)`)
            break
        }
    }

    for (let i = arrs.length-1; i > 0; i--){
        if(arrs[i] % 2 == 0){
            console.log(`so chan cuoi cung o vi tri thu ${i} (vi tri danh so tu 0)`)
            break
        }
    }

}