$(document).ready(function(){
    $('a.page-scroll').click(function(event) {
        var $anchor = $(this);
        $("body").animate({ scrollTop: $($anchor.attr('href')).offset().top }, 1000);
    });
})


