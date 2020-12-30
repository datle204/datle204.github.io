// Bai 1

document.writeln(
  `Bài 1: Cho 1 mảng các chuỗi. Viết hàm lọc ra các phần tử có độ dài lớn nhất. Ví dụ với tham số [''aba'', ''aa'', ''ad'', ''c'', ''vcd''] thì kết quả trả về [''aba'', ''vcd'']. Sử dụng hàm filterWord(arr). <br/><br/>`
);

function filterWord(arr) {
  let maxString = "";
  for (let i = 0; i < arr.length; i++) {
    // So sánh độ dài của maxString với độ dài các phần tử trong mảng
    if (maxString.length < arr[i].length) {
      // Nếu độ dài của maxString nhỏ hơn, gán giá trị bằng giá trị đang so sánh.
      maxString = arr[i];
    }
  }
  // Set độ dài lớn nhất của string
  let maxLength = maxString.length;
  // Lọc các phần tử có độ dài bằng độ dài lớn nhất
  let maxLengthArr = arr.filter((str) => {
    return str.length == maxLength;
  });
  return maxLengthArr;
}

// Bai 2

document.writeln(
  `Bài 2: Viết hàm so sánh mảng, truyền vào 2 mảng bất kỳ (chỉ chứa số nguyên), kết quả trả về là 1 mảng chỉ chứa những phần tử không đồng thời nằm trong 2 mảng truyền vào. Ví dụ truyền vào [1, 2, 3] và [1, 3, 4, 5, 5] thì kết quả trả về là mảng [2, 4, 5, 5]. Sử dụng hàm filterArr(firstArr, secondArr). <br/><br/>`
);

function filterArr(firstArr, secondArr) {
  let resultArr = [];
  // Duyệt mảng firstArr
  for (let i = 0; i < firstArr.length; i++) {
    //   Set điều kiện trong mảng secondArr không thấy phần tử i của mảng firstArr
    if (secondArr.indexOf(firstArr[i]) == -1) {
      // Push phần tử vào mảng resultArr
      resultArr.push(firstArr[i]);
    }
  }
  // Duyệt mảng secondArr
  for (let j = 0; j < secondArr.length; j++) {
    //   Set điều kiện trong mảng firstArr không thấy phần tử j của mảng secondArr
    if (firstArr.indexOf(secondArr[j]) == -1) {
      // Push phần tử vào mảng resultArr
      resultArr.push(secondArr[j]);
    }
  }
  return resultArr;
}

// Bai 3

document.writeln(
  `Bài 3: Cho 2 số nguyên dương m và n. Tạo ra 1 mảng 2 chiều m x n là các số nguyên liên tiếp (tính từ 1) theo kiểu ziczac. Ví dụ với m = 3 và n = 4 thì kết quả là mảng 2 chiều như sau [ [1, 2, 3, 4], [8, 7, 6, 5], [9, 10, 11, 12] ]. Sử dụng hàm ziczacArr(m, n).<br/><br/>`
);

function ziczacArr(m, n) {
  // Setup mảng 2 chiều
  let arr = [];
  for (let k = 0; k <= m - 1; k++) {
    arr[k] = [];
  }

  // gán giá trị đếm x = 1;
  let x = 1;

  // Lặp từ dòng thứ 0 đến dòng thứ m-1 (m dòng)
  for (let i = 0; i <= m - 1; i++) {
    // Dòng chẵn
    if (i % 2 == 0) {
      // Lặp từ cột thứ 0 đến cột thứ n-1 (n cột)
      for (let j = 0; j <= n - 1; j++) {
        // Gán giá trị vị trí [i][j] = giá trị đếm
        arr[i][j] = x;
        // Tăng giá trị đếm lên 1 đơn vị
        x++;
      }
    }
    // Dòng lẻ
    else {
      // Lặp từ cột thứ n-1 đến cột 0
      for (let j = n - 1; j >= 0; j--) {
        // Gán giá trị vị trí [i][j] = giá trị đếm
        arr[i][j] = x;
        // Tăng giá trị đếm lên 1 đơn vị
        x++;
      }
    }
  }
  return arr;
}
// Bai 4

document.writeln(
  `Bài 4: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', gender: ''Male'', age: 20 }. Viết hàm tính ra số tuổi trung bình của toàn bộ sinh viên. Sử dụng hàm averageAge(arr). <br/><br/>`
);

function averageAge(arr) {
  let sumAge = 0;
  for (let i = 0; i < arr.length; i++) {
    sumAge += arr[i].age;
  }
  return sumAge / arr.length;
}
// Bai 5

document.writeln(
  `Bài 5: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', gender: ''Male'', age: 20 }. Viết hàm sắp xếp lại mảng trên theo tuổi học viên từ cao đến thấp. Sử dụng hàm sortAge(arr). <br/><br/>`
);

function sortAge(arr) {
  return arr.sort(function (x, y) {
    return y.age - x.age;
  });
}

// Bai 6

document.writeln(
  `Bài 6: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', gender: ''Male'', age: 20 }. Viết hàm sắp xếp lại mảng trên theo tên học viên (không phân biệt hoa thường). Sử dụng hàm sortName(arr). <br/><br/>`
);

function sortName(arr) {
  return arr.sort(function (x, y) {
    let a = x.name.toLowerCase();
    let b = y.name.toLowerCase();
    // a before b
    if (a < b) {
      return -1;
    }
    // a after b
    if (a > b) {
      return 1;
    }
    // a and b stay unchanged.
    return 0;
  });
}

// Bai 7

document.writeln(
  `Bài 7: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', gender: ''Male'', age: 20 }. Viết hàm lọc ra những sinh viên nào có tên bắt đầu bằng chữ ''H'' hoặc ''h''. Sử dụng hàm filterName(arr). <br/><br/>`
);

function filterName(arr) {
  return arr.filter(function (obj) {
    return obj.name.charAt(0) == "H" || obj.name.charAt(0) == "h";
  });
}
