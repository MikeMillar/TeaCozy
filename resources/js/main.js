$(document).ready(function(){
  //Vanilla JS used to show/hide mobile navigation
  //document.getElementbyId("nav-toggle").addEventListener("click", function(){
  //  if(document.getElementsByClassName("mobile-list")[0].id === ""){
  //    document.getElementsByClassName("mobile-list")[0].id = "show";
  //  } else {
  //    document.getElementsByClassName("mobile-list")[0].id = "";
  //  }
  //});


//jQuery JS used to show/hide mobile navigation
  $("#nav-toggle").on("click", function(event) {
    event.preventDefault();
    $("mobile-list").css("display", "none");
    $(".mobile-list").slideToggle();
    $("i", this).toggleClass("fa-bars fa-times")
  });

  $('.mobile-list a').on("click", function(event) {
    event.preventDefault();
    var headerHeight = $("header").height();
    var id = $(this).attr("href");
    var originalScrollCordinate = $(id).offset().top;
    var newScrollCordinate = originalScrollCordinate - headerHeight;
    $("html").animate({
      scrollTop: newScrollCordinate
    });
  })
})
