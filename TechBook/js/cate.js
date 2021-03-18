document.getElementById("filter-button").onclick = function () {
  let check = document.getElementById("filter-disable");
  check.classList.toggle("display-block");
};


document.getElementById("dropdownMenuButton").onclick = function(){
  let dropBtn = document.getElementById("show");
  dropBtn.classList.toggle("show");
}

var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  getSortData: {
    name: '.name', // text from querySelector
  }
});


$('#sort-name-btn').on( 'click', function() {
  let sortByValue = $(this).attr('data-sort-by');
  $grid.isotope({ sortBy: sortByValue });
});



