// Js slide text

let listButton = document.getElementsByClassName("click-btn");

for (var i = 0; i < listButton.length; i++) {
  listButton[i].addEventListener("click", function () {
    index = this.id;
    slideShow(index);
  });
}

let listContent = document.getElementsByClassName("content");

function slideShow(index) {
  for (var i = 0; i < listContent.length; i++) {
    listContent[i].style.display = "none";
  }

  listContent[index].style.display = "block";

  for (var i = 0; i < listButton.length; i++) {
    listButton[i].classList.remove("active");
  }
  document.getElementById(index).classList.add("active");
}

// JS slide img
document.addEventListener("DOMContentLoaded", function () {
  new Splide(".splide", {
    type: "loop",
    padding: {
      right: "20rem",
      left: "20rem",
    },
    focus: "center",
    autoWidth: true,
    perPage: 2,
    focus: 2,
    pagination: false,
    breakpoints: {
      600: {
        perPage: 1,
        focus: 1,
        padding: {
          right: "5rem",
          left: "5rem",
        },
      },
    },
    classes: {
      arrow: "splide__arrow btn-active",
    },
  }).mount();
});
