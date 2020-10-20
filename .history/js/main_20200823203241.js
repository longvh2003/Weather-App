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

function fetchWeather({
    city = 'Hanoi',
    country = 'Vietnam',
    units = 'metric'
}) {
    return $.ajax(`${WEATHER_API_URL}&q=${city},${country}&units=${units}`);
}

function renderWeather(weather) {
    const { icon, description } = weather.weather[0];
    const { temp, humidity, pressure } = weather.main;
    const { name } = weather;
    $('#weather-detail').html(`
    <div>City: ${name}</div>
    <p class="text-capitalize">Weather: ${description}</p>
    <hr/>
    <div class="weather-detail-container">
    <div class="item toggle-units">
    <span class="text-lg">${temp}</span>
    <i class="wi wi-celsius icon-lg"/>
    </div>
    <div class="item">
    <p>Pressure: ${pressure} hPa</p>
}