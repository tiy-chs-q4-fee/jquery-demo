// create on a single webpage
// 3 photo albums that each contain 3 photos at least.
// when you click a album, you will then only see the photos for that album, but you should be able to navigate back to view all of the albums
// when clicking on individual photo in album, photo much enlarge and others in album will no longer be visible

// use jquery to do this.
$(document).ready(function() {

  $("nav a").click(function(event) {

    event.preventDefault();
    var pageToNavigate = "." + $(this).attr("rel");
    console.log(pageToNavigate);

    $(".container").children().removeClass("currentPage");

    $(pageToNavigate).addClass("currentPage");


  });

});


function jsTest() {

  var index = 0;
  var counter = 0;
  var obj = {};
  var func = function() {
    for (index = 0; index < 10; index++) {
      counter +=2;
    }
    obj.index++;
  };

  obj.func = func;
  this.index++;

  return index;
}
