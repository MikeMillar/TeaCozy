$(document).ready(function(){
  //Vanilla JS used to show/hide mobile navigation
  //document.getElementbyId("nav-toggle").addEventListener("click", function(){
  //  if(document.getElementsByClassName("mobile-list")[0].id === ""){
  //    document.getElementsByClassName("mobile-list")[0].id = "show";
  //  } else {
  //    document.getElementsByClassName("mobile-list")[0].id = "";
  //  }
  //});

  $("#nav-toggle").on("click", function() {
    $(".mobile-list").toggle();
  });
})
