$(document).ready(function(){
    // toggle button
    $('#clock-in').on('click', function(){
        $(this).css('display', 'none');
        $("#clock-out").fadeIn('slow');
        clearTime();
        timeIn();
    });
    $('#clock-out').on('click', function(){
        $(this).css('display', 'none');
        $("#clock-in").fadeIn('slow');
        timeOut();
    });
    // time in --- time stamp
    function timeIn() {
        let time = new Date(),
            hours = time.getHours(),
            minutes = time.getMinutes(),
            seconds = time.getSeconds();

        hours = ("0" + hours).slice(-2);
        minutes = ("0" + minutes).slice(-2);
        seconds = ("0" + seconds).slice(-2);

        let timeIn = hours + ":" + minutes + ":" + seconds;

        console.log("Clock-In: " + timeIn);
        $('.time-in').text(timeIn);
    }
    // time out --- time stamp
    function timeOut() {
        let time = new Date(),
            hours = time.getHours(),
            minutes = time.getMinutes(),
            seconds = time.getSeconds();

        hours = ("0" + hours).slice(-2);
        minutes = ("0" + minutes).slice(-2);
        seconds = ("0" + seconds).slice(-2);

        let timeOut = hours + ":" + minutes + ":" + seconds;

        console.log("Clock-Out: " + timeOut);
        $('.time-out').text(timeOut);
    }
    // clear time of "time out" if clock-in button has already been pressed
    function clearTime() {
        if (!$('.time-out').text('00:00:00')) {
            $('.time-in').text('00:00:00');
            $('.time-out').text('00:00:00');
        }
    }
    // today's date at top of pages
    function today() {
        let currentTime = new Date();

        $('.today').text(currentTime);
    }
    today();
    setInterval(function(){
        today();
    }, 1000);
});