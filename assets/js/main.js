$(function(){
    
    $("a").click(function(event){
        if(this.hash !== "") {
            event.preventDefault();

            var vera = this.hash;

            $("html, body").animate({
                scrollTop: $(vera).offset().top
            }, 800, function(){
                window.location.hash = vera;
            });
        }
    });
});