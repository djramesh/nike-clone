$(document).ready(function(){
    var images = $('.slide');
    var current = 0;
    var next = 1;
    images.eq(current).css('opacity', '1');

    setInterval(function() {
        images.eq(current).css('opacity', '1');
        images.eq(next).css('opacity', '1');
        current = next;
        next = (next + 1) % images.length;
    }, 5000);
});

