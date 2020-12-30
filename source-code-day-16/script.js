// Bài 2: Cho 1 mảng có độ dài lớn hơn 2, chứa các số khác nhau.
//  Hãy viết hàm tìm ra số lớn thứ nhì trong mảng.

document.writeln(`Bài 2: Cho 1 mảng có độ dài lớn hơn 2, chứa các số khác nhau.
//  Hãy viết hàm tìm ra số lớn thứ nhì trong mảng. Su dung ham findNumber([arr]) <br/><br/>`);

function findNumber(arr) {
  // Sắp xếp các số theo thứ tự từ bé đến lớn
  arr.sort(function (a, b) {
    return a - b;
  });
  // Vị trí số lớn thứ nhì là arr.length-2
  return `Số lớn thứ nhì là: ` + arr[arr.length - 2];
}

// Bài 3: Cho 1 mảng các chuỗi bất kỳ có độ dài khác nhau.
// Hãy viết hàm tìm ra chuỗi có độ dài lớn nhất.

document.writeln(`Bài 3: Cho 1 mảng các chuỗi bất kỳ có độ dài khác nhau. 
// Hãy viết hàm tìm ra chuỗi có độ dài lớn nhất. Su dung ham findMaxString([arr]) <br/><br/>`);

function findMaxString(arr) {
  let maxString = "";
  for (var i = 0; i < arr.length; i++) {
    // So sánh độ dài của maxString với độ dài các phần tử trong mảng
    if (maxString.length < arr[i].length) {
      // Nếu độ dài của maxString nhỏ hơn, gán giá trị bằng giá trị đang so sánh.
      maxString = arr[i];
    }
  }
  return maxString;
}

// Bai4: Viết hàm có 2 tham số là 2 chuỗi string và target khác rỗng, dùng để kiểm tra chuỗi string có kết
// thúc bởi chuỗi target hay không. Kết quả trả về là true hoặc false.

// Hàm endsWith();

document.write(`Bai4: Viết hàm có 2 tham số là 2 chuỗi string và target khác rỗng, dùng để kiểm tra chuỗi string có kết
// thúc bởi chuỗi target hay không. Sử dụng hàm check("string","target") <br/><br/>`);

function check(string, target) {
  // Lấy độ dài của chuỗi target
  let x = target.length;
  // Cắt, lấy giá trị từ vị trí -x trong chuỗi string
  let y = string.substr(-x);
  // So sánh nếu chuỗi bị cắt bằng với chuỗi target
  if (y == target) {
    return true;
  } else {
    return false;
  }
}

// Bai5:Cho 1 mảng chỉ chứa các phần tử có kiểu dữ liệu number,
//  string và boolean. Hãy kiểm tra xem
// trong mảng đó có phần tử nào bị lặp lại hay không
// (xuất hiện 2 lần trở lên). Kết quả trả về true (nếu lặp)
// hoặc false (nếu không lặp).

// Dùng 2 vòng lặp lồng nhau.

document.writeln(`Bai5: Cho 1 mảng chỉ chứa các phần tử có kiểu dữ liệu number,
//  string và boolean. Hãy kiểm tra xem
// trong mảng đó có phần tử nào bị lặp lại hay không 
// (xuất hiện 2 lần trở lên). Kết quả trả về true (nếu lặp) 
// hoặc false (nếu không lặp).Su dung ham checkElement([arr]) <br/><br/>`);

// indexOf() => Trả về vị trí đầu tiên tìm được của phần tử trong mảng.
// lastIndexOf() => Trả về vị trí cuối cùng tìm được của phần tử trong mảng

function checkElement(arr) {
  for (let i = 0; i < arr.length; i++) {
    // Nếu vị trí đầu tiên tìm được khác vị trí cuối cùng tìm được
    // => Có ít nhất 2 vị trí mà phần tử xuất hiện
    if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
      return true;
    }
  }
  // Default luôn trả về chuỗi không lặp.
  return false;
}

// function bai5(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if(arr[i] === arr[j]){
//             return true;
//          }
//     }
//   }
//   return false
// }
