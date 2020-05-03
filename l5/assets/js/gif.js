$(function() {
    $('#giflist li a img').hover(function() {
        // on mouse enter
        var customdata = $(this).parent().attr('href');
        $(this).attr('src', customdata);
    }, function() {
        // on mouse leave
        $(this).attr('src', $(this).attr('data-orig'));
    });

});