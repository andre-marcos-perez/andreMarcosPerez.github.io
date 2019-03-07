$(document).on('tap touchstart', function () {
  if ($(this).hasClass('nav-content')) {
    document.querySelectorAll('a[href^="#main"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
        });
    });
    document.getElementById($(this).parent().attr("href").substring(1)).scrollIntoView({behavior: "smooth"});
  }
});
