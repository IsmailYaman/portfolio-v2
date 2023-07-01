$(window).scroll(function() {
    if ($(this).scrollTop() > 250) {
        $('#toTop').fadeIn();
    } else {
        $('#toTop').fadeOut();
    }
});


$('#send-button').on('click', function() {
    $('#form-wrapper').fadeOut(100)

    $('#show-sent').delay(100).fadeIn(100)

    $('#show-sent').delay(1900).fadeOut(300)

    $('#form-wrapper').delay(2300).fadeIn(100)
});


//new version: make success div fixed and make it fade in and out.