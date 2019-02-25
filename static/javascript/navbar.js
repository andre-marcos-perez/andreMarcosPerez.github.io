$('p').click(function() {
  if ($(this).hasClass('nav-content')) {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
        });
    });
    document.getElementById($(this).parent().attr("href").substring(1)).scrollIntoView({behavior: "smooth"});
  }
});
