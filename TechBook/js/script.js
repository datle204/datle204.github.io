

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


// Change Image Slide

let mainImg = document.getElementsByClassName("main-img")[0];

let subImgs = document.getElementsByClassName("sub-img");

for (let i = 0; i < subImgs.length; i++) {
  function changeMainImg() {
    mainImg.src = `/TechBook/img/sub-img/sub-img-${i}.jpeg`
  }
  subImgs[i].addEventListener("click", changeMainImg);
}


// Delete Product

let deleteProduct = document.getElementById("delete-btn");
let deleteItem = document.getElementById("cart-item"); 

deleteProduct.onclick = function(){
  deleteItem.classList.add("display-none");
  document.getElementById("emptyCart").classList.add("display-block");
}

