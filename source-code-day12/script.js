// function demo(){

//     {
//         var x = 10   Ko co block scope, có hoisting
//         let y = 5    Su dung trong block scope, ko có hoisting
//     }

// console.log(x)
// console.log(y)

// }


// // Hoisting: 

// // var làm đc (ok)

// console.log(a)
// var a = 5 

// // let ko làm đc: (not ok)

// console.log(b)
// var b = 10 


// undefined : ko xác định
// null : rỗng hoặc ko có giá trị 
// NaN: kiểm tra bằng isNaN(x) -> True, False


// let abc = new Object (tạo 1 Object mới chưa khai báo)

// document.writeln(`Khởi tạo Object person có các thuộc tính name, age, hobby`)

// -------------------------------------------------
// let person = {
//     name : "Dat",
//     age : 23,
//     hobby: "Football, game",
//     run: Run()
// }

// function Run(){
//     return 'run';   
// }


// person["address"] = "Viet Nam"

// // Lặp qua các thuộc tính của Object bằng for...in
// for(const key in person){
//     console.log(key + ":", person[key])
// }
// -----------------------------------------------------

// Array

// [1,2,3,4,5]
// ["A","B","C"]
// [{},{},{}]
let strings = ["Aac","acm", "aba"]
let numbers = [1,2,3,9,4,5,6,7]
numbers.push(8)
numbers.push(9)
numbers.pop()

strings.unshift('msf') // Thêm phần tử vào đầu mảng
strings.shift()   // Xóa phần tử ở đầu mảng

console.log("Index of values 'acm'", strings.indexOf('acm'))

for(let i = 0; i < strings.length; i++ ){
    console.log(strings[i]);
}

for (let item of strings){
    console.log(item)
}

// Viet 1 ham truyen vao 1 mang cac so va tinh tong cac so do

function tinhTong(array1){
    let sum = 0 
    for(let item of array1){
        // console.log(item)
        sum = sum + item
    }
    return sum 
}

// Viet 1 ham truyen vao 1 mang cac so va tinh tong binh phuong cac so do

function tinhTongBinhPhuong(array2){
    let sum = 0;
    for(let item of array2){
        item = Math.pow(item,2)
        sum = sum + item
    }
    return sum
}

// const listNumber = [1,2,3]
// const listPhandu = listNumber.map(item => item % 2)

// const listPhanDu = listNumber.map(function(item){
//     return item % 2;
// })

function timSoDu(arrs){
        let newArrs = []
        newArrs = arrs.map((number) => (number % 2))
        return newArrs
    }



const newList = [1,2,3,4,5,6,7]
const soChan = newList.filter(item => item % 2 == 0)


function timSoChan(arrs){
    let newSoChan = []
    newSoChan = arrs.filter((number) => (number % 2 == 0))
    return newSoChan
}

function timTen(arrs, kyTu){
    let newTen = []
    newTen = arrs.filter((item) => (item.charAt(0)== kyTu))
    return newTen
}


