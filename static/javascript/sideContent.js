$('p').click(function() {
  if ($(this).hasClass('side-content')) {
    $(".side-content-highlighted").removeClass("side-content-highlighted").addClass("side-content");
    $(this).removeClass("side-content").addClass("side-content-highlighted");
    $(".fixed-action-btn").floatingActionButton("close");
  }
});
