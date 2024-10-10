/// <reference types='../@types/jquery/' />  

//navbar functions
$(".nav-btn").on('click', function () {
    $('.side-bar').animate({ width: '250px' });
    $('.home-content').animate({ marginLeft: '250px' });
    $('.nav-btn').animate({ marginLeft: '250px' });

});

$(".closeBtn").on('click', function () {
    $('.side-bar').animate({ width: '0' });
    $('.home-content').animate({ marginLeft: '0' });
    $('.nav-btn').animate({ marginLeft: '0' });
});


$(".side-bar a").on("click", function () {
    let navLink = $(this).attr("href");

    $("html, body").animate({ scrollTop: $(navLink).offset().top }, 1000);
});


// slider functions
$("#slider h3").on('click', function () {
    let nextSlide = $(this).next().slideToggle() //open and close the slider
    $('.slide').not(nextSlide).slideUp(500)
});



//countdown function
function countDown() {
    const countDownDate = new Date("June 9 , 2025 00:00:00").getTime();

    updateCountdown(countDownDate)

    let countDownInterval = setInterval(function () {
        updateCountdown(countDownDate, countDownInterval)
    }, 1000);
}

function updateCountdown(countDownDate, countDownInterval) {
    let currentTime = new Date().getTime();
    let dateDiff = countDownDate - currentTime;

    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let mins = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    let secs = Math.floor((dateDiff % (1000 * 60)) / 1000);

    $('.days').text(days + "D")
    $('.hours').text(hours + "H")
    $('.minutes').text(mins + "M")
    $('.seconds').text(secs + "S")

    if (dateDiff < 0) {
        clearInterval(countDownInterval);
        $('.days').text("Party Is Over")
        $('.hours').text("Party Is Over")
        $('.minutes').text("Party Is Over")
        $('.seconds').text("Party Is Over")

    }
}
countDown()


//char. remaining function
const maxChars = 100;
$('.char-remaining').text(maxChars);

$('textarea').on("input", function () {
    const remainingChars = maxChars - $(this).val().length; //store the 100-val in remaining and display it
    $('.char-remaining').text(remainingChars)

    if (remainingChars <= 0) {
        $('.char-remaining').text("You Are Out Of Characters! ");
        $('.chars').hide();
    } else {
        $('.chars').show();
    }
});


