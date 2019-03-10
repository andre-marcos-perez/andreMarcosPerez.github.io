$('i').click(function() {
  if ($(this).parent().hasClass('btn-smooth-sliding')) {
    document.querySelectorAll('a[href^="#main"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
        });
    });
    $(".side-content-highlighted").removeClass("side-content-highlighted").addClass("side-content");
    $(document.getElementById('side-content-contact')).removeClass("side-content").addClass("side-content-highlighted");
    document.getElementById($(this).parent().attr("href").substring(1)).scrollIntoView({behavior: "smooth"});
  }
});
