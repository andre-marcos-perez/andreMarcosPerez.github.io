$('p').click(function() {
  if ($(this).hasClass('side-content')) {
    document.querySelectorAll('a[href^="#main"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
        });
    });
    $(".side-content-highlighted").removeClass("side-content-highlighted").addClass("side-content");
    $(this).removeClass("side-content").addClass("side-content-highlighted");
    document.getElementById($(this).parent().attr("href").substring(1)).scrollIntoView({behavior: "smooth"});
  }
});
