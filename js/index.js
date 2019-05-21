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

        console.log("Clocked-In: " + timeIn);
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

        console.log("Clocked-Out: " + timeOut);
        $('.time-out').text(timeOut);
    }
    // clear time of "time out" if clock-in button has already been pressed
    function clearTime() {
        if (!$('.time-out').text('00:00:00')) {
            $('.time-in').text('00:00:00');
            $('.time-out').text('00:00:00');
        }
        if (!$('.total').text('0 hours, 0 minutes, 0 seconds')) {
            $('.total').text('0 hours, 0 minutes, 0 seconds');
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
    // calcuate difference
    let secondsIn,
        secondsOut,
        mintutesIn,
        mintutesOut,
        hoursIn,
        hoursOut;

    let test1,
        test2;

    $('#clock-in').click(function(){
        // console.log('clocked-in');

        let clockInDate = new Date();
        secondsIn = clockInDate.getSeconds();
        mintutesIn = clockInDate.getMinutes();
        hoursIn = clockInDate.getHours();

        let total = 'Hr:' + hoursIn + '  Min:' + mintutesIn + '  Sec:' + secondsIn;
        console.log('Cal-in: ' + total);
    });
    $('#clock-out').click(function(){
        // console.log('clocked-out');

        let clockOutDate = new Date(); 
        secondsOut = clockOutDate.getSeconds();
        mintutesOut = clockOutDate.getMinutes();
        hoursOut = clockOutDate.getHours();

        let total = 'Hr:' + hoursOut + '  Min:' + mintutesOut + '  Sec:' + secondsOut;
        console.log('Cal-out: ' + total);
        
        let calSec = secondsOut - secondsIn,
            calMin = mintutesOut - mintutesIn,
            calHr = hoursOut - hoursIn;
        
        let calDiff = calHr + " hours, " + calMin + " minutes, " + calSec + " seconds";
        
        console.log('Total: ' + calDiff);
        $('.total').text(calDiff);
    });



    // test 

    let test = new Date().toLocaleTimeString();
    console.log(test);
});