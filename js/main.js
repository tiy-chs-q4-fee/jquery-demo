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
