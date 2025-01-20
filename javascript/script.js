$(document).ready(function () {
  
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').toggleClass('active');
        $('body').toggleClass('active');
    });
  
    $(document).on('click', function (event) {
        if (!$(event.target).closest('#mobile_menu, #mobile_btn').length) {
            $('#mobile_menu').removeClass('active');
            $('#mobile_btn i').removeClass('fa-x').addClass('fa-bars'); 
        }
    });


    $('#mobile_menu a').on('click', function () {
        $('#mobile_menu').removeClass('active');
        $('#mobile_btn i').removeClass('fa-x').addClass('fa-bars'); 
    });
});