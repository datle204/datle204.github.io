
let firstText = document.getElementById("first-text");
let secondText = document.getElementById("second-text");
let thirdText = document.getElementById("third-text");

// changeColor()
function changeColor() {
    firstText.style.color = "blue";
    secondText.style.color = "yellow";
    thirdText.style.color = "red";
}

// changeBgColor("grey");

function changeBgColor(color) {
    document.body.style.backgroundColor = color;
}

// copyContent("first-text","second-text");
// Sử dụng tham số truyền vào là id. 

function copyContent(paragraph1, paragraph2) {

    document.getElementById(paragraph1).innerHTML = document.getElementById(paragraph2).innerHTML;
}

// changeFontSize("25px");

function changeFontSize(x){
    // Lấy ra list các đoạn văn có class là paragraph
    let elements = document.getElementsByClassName("paragraph");
    for(let i = 0; i < elements.length; i++){
        elements[i].style.fontSize = `${x}px`; // x + "px"
    }
}


// increaseFontSize("first-text");
function increaseFontSize(paragraph){
    let para = document.getElementById(paragraph);
     // Lấy giá trị của tất cả các thuộc tính của element. 
    let paraStyle = window.getComputedStyle(para);
    // Lấy giá trị của font-size
    let x = parseFloat(paraStyle.getPropertyValue('font-size'));
    // Set new font
    let newFontSize = x+1;
    // Set điều kiện cho new font
    if(newFontSize <= 30){
        para.style.fontSize = newFontSize + "px";
    }
    else{
        return "font size không được lớn quá 30px";
    }
    
}

// decreaseFontSize("first-text");
function decreaseFontSize(paragraph){
    let para = document.getElementById(paragraph);
    // Lấy giá trị của tất cả các thuộc tính của element. 
    let paraStyle = window.getComputedStyle(para);
    // Lấy giá trị của font-size
    let x = parseFloat(paraStyle.getPropertyValue('font-size'));
    // Set new font
    let newFontSize = x-1;
    // Set điều kiện cho new font
    if(newFontSize >= 10){
        para.style.fontSize = newFontSize + "px";
    }
    else{
        return "font size không được nhỏ hơn 10px";
    }
    
}




