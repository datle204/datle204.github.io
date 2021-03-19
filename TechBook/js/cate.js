

document.getElementById("filter-button").onclick = function () {
  let check = document.getElementById("filter-disable");
  check.classList.toggle("display-block");
};


document.getElementById("dropdownMenuButton").onclick = function(){
  let dropBtn = document.getElementById("show");
  dropBtn.classList.toggle("show");
}


// itemSelector: '.element-item',

var $grid = $('.grid-item').isotope({
  
  getSortData: {
    name: '.name',
  }
});


$('#sort-name-btn').on( 'click', function() {
  let sortByValue = $(this).attr('data-sort-by');
  $grid.isotope({ sortBy: sortByValue });
});


document.getElementById("page-two").onclick = function(){
  document.getElementById("page-one").classList.remove("active-pagi");
  document.getElementById("page-two").classList.add("active-pagi");
  document.getElementById("page-1").style.display = "none";
  document.getElementById("page-2").style.display = "block";
}

document.getElementById("page-one").onclick = function(){
  document.getElementById("page-one").classList.add("active-pagi");
  document.getElementById("page-two").classList.remove("active-pagi");
  document.getElementById("page-2").style.display = "none";
  document.getElementById("page-1").style.display = "block";
}
