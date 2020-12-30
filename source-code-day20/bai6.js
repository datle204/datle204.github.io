// User open mobile first
// if (window.innerWidth < 768) {
//   document.getElementById("menu-button").addEventListener("click", function () {
//     if (document.getElementById("menu-dropdown").style.display == "none") {
//       document.getElementById("menu-dropdown").style.display = "block";
//     } else {
//       document.getElementById("menu-dropdown").style.display = "none";
//     }
//   });
// }
// Resize browser on desktop to active function myF (User open desktop first)

function showMenu() {
  document.getElementById("menu-dropdown").style.display = "none";
  if (window.innerWidth < 768) {
    document.getElementById("menu-button").addEventListener("click", function () {
      if (document.getElementById("menu-dropdown").style.display == "none") {
        document.getElementById("menu-dropdown").style.display = "block";
      } else {
        document.getElementById("menu-dropdown").style.display = "none";
      }
    });
  }
  if (window.innerWidth >= 768) {
    document.getElementById("menu-dropdown").style.display = "flex";
  }
}
