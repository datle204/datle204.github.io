// User open mobile first

if (window.innerWidth < 768) {
  document.getElementById("menu-button").addEventListener("click", function () {
    if (document.getElementById("menu-list-dis").style.display == "none") {
      document.getElementById("menu-list-dis").style.display = "block";
    } else {
      document.getElementById("menu-list-dis").style.display = "none";
    }
  });
}

// Resize browser on desktop to active function myF (User open desktop first)
function myF() {
  document.getElementById("menu-list-dis").style.display = "none";
  if (window.innerWidth < 768) {
    document
      .getElementById("menu-button")
      .addEventListener("click", function () {
        if (document.getElementById("menu-list-dis").style.display == "none") {
          document.getElementById("menu-list-dis").style.display = "block";
        } else {
          document.getElementById("menu-list-dis").style.display = "none";
        }
      });
  }

  if (window.innerWidth >= 768) {
    document.getElementById("menu-list-dis").style.display = "flex";
  }
}
