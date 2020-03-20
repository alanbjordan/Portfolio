
$(function() {
    $('a[href*=\\#]:not([href=\\#])').on('click', function() {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.substr(1) +']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    });
});


// $(function(){
//     $('a[href^=#]').click(function(e){
//       var name = $(this).attr('href').substr(1);
//       var pos = $('a[name='+name+']').offset();
//       $('body').animate({ scrollTop: pos.top });
//       e.preventDefault();
//     });
//   });