// Bai 1
document.writeln(
  `Bài 1: Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng. Ví dụ với tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7). Sử dụng hàm sumInterval(a,b) <br/><br/>`
);

function sumInterval(a, b) {
  let sum = 0;
  if(a > b){
    for (let i = b + 1; i < a; i++) {
      sum += i;
    }
  }
  else if(a < b){
    for (let i = a + 1; i < b; i++) {
      sum += i;
    }
  }
  return sum;
}
// Bai 2

document.writeln(
  `Bài 2: Cho 1 số nguyên dương, viết hàm tính tổng tất cả các ước số của số đó. Sử dụng hàm getSum(x) <br/><br/>`
);

function getSum(x) {
  let sum = 0;
  for (let i = 2; i <= (x/2); i++) {
    if (x % i == 0) {
      sum += i;
    }
  }
  return 1+sum+x;
}

// Bai 3

document.writeln(
  `Bài 3: Cho 1 số nguyên dương, kiểm tra xem số đó có phải là số nguyên tố hay không, kết quả trả về true hoặc false. Sử dụng hàm checkPrime(x) <br/><br/>`
);

function checkPrime(x) {
  if (x <= 1) {
    return false;
  } else if (x == 2 || x == 3) {
    return true;
  } else if (4 <= x) {
    for (i = 2; i < x; i++) {
      if (x % i == 0) {
        return false;
      }
    }
    return true;
  }
}

// Bai 4

document.writeln(
  `Bài 4: Cho 1 số nguyên dương. Tính tổng tất cả các số nguyên tố nhỏ hơn hoặc bằng tham số truyền vào. Sử dụng hàm getSumPrime(x) <br/><br/>`
);

function getSumPrime(x) {
  let sum = 0;
  for (let i = 2; i <= x; i++) {
    if (checkPrime(i) == true) {
      sum += i;
    }
  }
  return sum;
}

// Bai 5

document.writeln(
  `Bài 5: Chuyển 1 chuỗi gồm nhiều từ thành chuỗi mới viết hoa các chữ cái đầu tiên của mỗi từ. Ví dụ: ''HELLO world'' => ''Hello World''. Sử dụng hàm changeText(x) <br/><br/>`
);

function changeText(text) {
  let lowerText = text.toLowerCase().split(" ");
  let capText = lowerText.map(function (letter) {
    return letter.replace(letter.charAt(0), letter.charAt(0).toUpperCase());
  });

  return capText.join(" ");
}

// Bai 6

document.writeln(
  ` Bài 6: Chuyển 1 chuỗi gồm nhiều từ thành dạng Spinal case. Ví dụ: ''HELLO world'' => ''hello-world''. Sử dụng hàm conCatString(text) <br/><br/>`
);

function conCatString(text) {
  let lowerText = text.toLowerCase().split(" ");
  let conCatText = lowerText.join("-");
  return conCatText;
}

// Bai 7

document.writeln(
  `Bài 7: Cho 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không (đọc xuôi hay ngược đều như nhau, không tính khoảng trắng và không phân biệt hoa thường), kết quả trả về true hoặc false. Ví dụ ''Race car'' trả về true, ''hello world'' trả về false. Sử dụng hàm checkString(text) <br/><br/>`
);

function checkString(text) {
  // convert check string to array
  let checkText = text.toLowerCase().split("");
  // check index of whitespace
  let checkIndex = checkText.indexOf(" ");
  // remove whitespace
  if (checkIndex > -1) {
    checkText.splice(checkIndex, 1);
  }
  // join array
  let x = checkText.join("");

  // convert new string to reverse array
  let newText = text.toLowerCase().split("").reverse();
  // check index of whitespace
  let index = newText.indexOf(" ");
  // remove whitespace
  if (index > -1) {
    newText.splice(index, 1);
  }
  // join new array
  let y = newText.join("");
  // compare x and y value;
  if (x == y) {
    return true;
  } else {
    return false;
  }
}
