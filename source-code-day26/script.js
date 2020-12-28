let array = [
  "#CCCCCC",
  "#FF0000",
  "#FF6600",
  "#336699",
  "#666666",
  "#003366",
  "#000000",
  "#FFCC00",
];

let circleArray = document.getElementsByClassName("circle");

let i = 0;
for (let j = 0; j < circleArray.length; j++) {
  circleArray[j].style.backgroundColor = array[i];
  i++;
  circleArray[j].addEventListener("click", function () {
    circleArray[j].classList.toggle("border");
  });

  
  document.getElementById("button").addEventListener("click", function () {
    for (let i = 0; i < circleArray.length; i++) {
      if (circleArray[i].classList.contains("border")) {
        circleArray[i].style.display = "none";
      }
    }
  });
}

// circleArray[j].style.display = "none";

// let j = 0;

// let x = $('.row').children();
// console.log(x);
// for( let i = 0; i < x.length; i++){
//     $($('.circle')[i]).css("background-color", array[j])
//     j++;
// }
