let pic = document.getElementById('pic');

document.addEventListener('DOMContentLoaded', function() {
getQuote();

})

function getQuote() {
    fetch("https://icanhazdadjoke.com/slack").then(response => response.json()).then(data => {
    
   
        document.querySelector('#quote').innerHTML = '"' + data.attachments[0].fallback  + '"' ;  
       
        
            
    })  
}

pic.addEventListener('click', getQuote)

$(document).ready(function () {

    $('#author').hover(
    function () {
        $(this).stop().fadeOut(function () {
            var $temp = $(this).attr('src');
            $(this).attr('src', $(this).attr('data-alt-src'));
            $(this).attr('data-alt-src', $temp);
        });

        $(this).fadeIn();
    },

    function () {
        $(this).stop().fadeOut(function () {
            var $temp = $(this).attr('data-alt-src');
            $(this).attr('data-alt-src', $(this).attr('src'));
            $(this).attr('src', $temp);
        });

        $(this).fadeIn();

    });
});