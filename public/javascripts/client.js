// connect to the socket server
$=jQuery;

var socket = io.connect();

// if we get an "info" emit from the socket server then console.log the data we recive
socket.on('info', function (data) {
    console.log(data);
});

socket.on('chat', function(msg){
    $('#messages').append($('<li>').text(msg));
});

$(function() {
    $('form').submit(function(){
        var msg = $('#m').val();
        socket.emit('chat', msg);
        $('#m').val('');
        return false;
    });


});
