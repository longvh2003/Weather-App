$(document).ready(function() {
    // Declare DOM Object
    var form = $('#form');
    var input = $('#form-input');
    var $currentDate = $('#current-date');

    // Handle user input
    form.on('submit', function(event) {
        event.preventDefault();
        console.log('test', input.val());
    });
});

function paddingLeft(n) {
    return n < 10 ? `0${n}` : n;
}

function getCurrentDate() {
    const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];
    const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ];
    const now = new Date();

    return `${
        days[now.getDay()]
        } ${months[now.getMonth()]} ${now.getDate()},
    ${paddingLeft(now.getHours())}:${paddingLeft(now.getMinutes())}`;
}

function ipLookUp() {
    $.ajax('http://ip-api.com/json').then(function success(response) {
        $('#loading-location').hide();
        $('#loading-weather').show();

        console.log(response);

        $currentDate.html(getCurrentDate());
    });
}