/* fades in the header text upon entering website */
document.addEventListener('DOMContentLoaded', function () {
    const header1 = document.querySelector('#header1');
    header1.classList.add('active');
    const header2 = document.querySelector('#header2');
    setTimeout(function() { /*makes header2 active after 450ms delay */
        header2.classList.add('active');
    }, 450);
    const headerbtn = document.querySelector('#headerbtn');
    setTimeout(function() { /*makes headerbtn active after 800ms delay after DOMContentLoaded*/
        headerbtn.classList.add('active');
    }, 800);
})

/* fades in other text when it enters viewport */
$(window).scroll(function () {
    console.log($(window).scrollTop());

    document.querySelectorAll('.fade-in-bottom').forEach(function(element) {
        var windowHeight = $(window).height();
        var triggerHeight = windowHeight * 0.7; /* define triggerHeight. It is the height where the element becomes active */

        if (element.getBoundingClientRect().top <= triggerHeight) { /*if scroll until the distance btwn top of viewport and element is {triggerheight}*/
            element.classList.add('active');
            }
    })
});

/* collapses navbar when the outside of the navbar is pressed */
$(document).click(function(event) {
    var clickover = $(event.target);
    var _opened = $(".navbar-collapse").hasClass("show");
    if (_opened === true && !clickover.hasClass("navbar-toggler")) { /* if "&& !clickover.hasClass("navbar-toggler")" is removed, $(".navbar-toggler").click(); will trigger this function again in an infinite recursive loop */
        $(".navbar-toggler").click();
    }
});


