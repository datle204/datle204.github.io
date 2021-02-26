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
      900: {
        perPage: 1,
      },
      1200: {
        perPage: 2,
      },
    },
  }).mount();
});

// EVENT CLICK SHOW NAVBAR ON MOBILE AND TABLET

document.getElementById("click-btn").onclick = function () {
  let check = document.getElementById("disable");
  check.classList.toggle("visibility");
};


// EVENT CLICK SHOW FILTER ON MOBILE AND TABLET

