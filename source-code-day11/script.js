// console.log('top1');
// console.log("hom nay 'troi dep qua'")
// console.log('toi nay, "moi ng lm"')

// // comment  1 dong

// //* day la du lieu chuoi, noi dung dat trong chuooi  *.

// var x = 5;
// var y = 5.5 

// var check = true
// var uncheck = false

// const pi = 3.14;


//block scope


// let newAge= 20
// var newname = 'Anna'
// function getName(){
//     newname = "long"
//     newAge =25
// }

// console.log(newname)
// console.log(newAge)


// Viet ham tinh tong 2 so

// function sum(a,b){
//     console.log(a+b)
// }

// sum(5,10)


// function sendEmail(from, message = "Không có nội dung") {
//      alert(from + ": " + message);
// } 
// sendEmail("Robin", "Xin chao");

// let a = 1;
// let b = 22;
// let name = "John";

// alert(a + name);
// alert(a + b + name);
// alert(name + a);
// alert(name + (a + b));
// alert(`${name} + 1`);
// alert(`${name + 1}`);
// alert(`${name + a}`);
// alert(`a + b = ${a + b}`);

// alert(a + b + name);
// alert(`Hello ${name}`);

// alert(`${name + a}`);

// document.writeln('xin chao bạn <br/>')
// document.write('xin chao')


// function squareOfNumber(x){
//     return Math.pow(x,2)
// }

// squareOfNumber(5);


// tinh tong binh phuong cua 1 tong (3a + 2b -c)


function squareOfSum(a,b,c){
   
    sum = 3*a +2*b-c
    return Math.pow(sum,2)
}

squareOfSum(1,2,3)



document.writeln('Tinh binh phuong cua 1 tong (3a+2b-c) <br/>');

function binhPhuongCuaTong(a,b,c){
    tong = 3*a + 2*b -c;
    console.log(`Ket qua binh phuong cua tong 3*${a} + 2*${b} - c la : ${Math.pow(tong,2)}`)
}