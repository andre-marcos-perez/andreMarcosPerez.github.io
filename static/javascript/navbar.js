$('p').click(function() {
  if ($(this).hasClass('nav-content')) {
    document.querySelectorAll('a[href^="#main"]').forEach(anchor => {
        anchor.addEventListener('pointerdown', function (e) {
            e.preventDefault();
        });
    });
    document.getElementById($(this).parent().attr("href").substring(1)).scrollIntoView({behavior: "smooth"});
  }
});
