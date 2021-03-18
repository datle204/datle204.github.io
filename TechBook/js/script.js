
// CUSTOMER COMMENT CAROUSEL
document.addEventListener("DOMContentLoaded", function () {
  new Splide("#card-slider", {
    type: "loop",
    cover: true,
    autoplay: true,
    interval: 4000,
    perPage: 3,
    rewind: true,
    pagination: false,
    breakpoints: {
      1200: {
        perPage: 2,
      },

      900: {
        perPage: 1,
      },
    },
  }).mount();
});

// EVENT CLICK SHOW NAVBAR ON MOBILE AND TABLET

document.getElementById("click-btn").onclick = function () {
  let check = document.getElementById("disable");
  check.classList.toggle("visibility");
};

// SLIDE SAME PRODUCTS

document.addEventListener("DOMContentLoaded", function () {
  new Splide("#card-slider-product", {
    type: "loop",
    cover: true,
    autoplay: true,
    interval: 4000,
    perPage: 4,
    rewind: true,
    pagination: false,
    breakpoints: {
      1200: {
        perPage: 3,
      },

      991: {
        perPage: 2,
      },

      600: {
        perPage: 1,
      },
    },
  }).mount();
});


document.getElementById("page-two").onclick = function(){
  document.getElementById("page-1").style.display = "none";
  document.getElementById("page-2").style.display = "block";
}

document.getElementById("page-one").onclick = function(){
  document.getElementById("page-2").style.display = "none";
  document.getElementById("page-1").style.display = "block";
}


