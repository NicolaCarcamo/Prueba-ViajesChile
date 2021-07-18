//smooth scroll
$(function(){
    
    $("a").click(function(e){
        if(this.hash !== "") {
            e.preventDefault();

            var vera = this.hash;

            $("html, body").animate({
                scrollTop: $(vera).offset().top
            }, 1000, function(){
                window.location.hash = vera;
            });
        }
    });
});
//navbar cambia de color pasado el carrusel
$(window).on("scroll", function() {
    if($(window).scrollTop() > 425) {
        $(".navbar").addClass("on-scroll");
    } else {
       $(".navbar").removeClass("on-scroll");
    }
});