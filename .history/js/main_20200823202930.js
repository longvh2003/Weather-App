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