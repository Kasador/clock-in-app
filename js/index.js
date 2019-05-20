$(document).ready(function(){
    // toggle button
    $('#clock-in').on('click', function(){
        $(this).css('display', 'none');
        $("#clock-out").fadeIn('slow');
    });
    $('#clock-out').on('click', function(){
        $(this).css('display', 'none');
        $("#clock-in").fadeIn('slow');
    });
});