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

    setHoverandExpand('.project', 'p'); // For .project, expand <p> elements
    
    setHoverandExpand('.event', 'p'); // For .event, expand p

    // Check if touchscreen device
    if ('ontouchstart' in window || navigator.maxTouchPoints) {
        // For touchscreen devices, 'hover' is a tap. 
        // So the following modifications apply: for Achievement section, instead of tap to show full text (since this will also collapse the rest of the cards), short tap to show full text and long-tap to collapse
        $('.accomplishment').addClass('no-touch') // disable hover functionality
        
        $('.accomplishment-year .col-md-10').click(function() {
            $(this).find('.col-12:not(:first-child)').addClass('expanded');
        });

        $('.accomplishment-year > .col-md-10 > .col-12').click(function() {
            $(this).find('desc > p').toggleClass('expanded');
        });

        $('.accomplishment-year .col-md-10').on('contextmenu', function(event) {
            event.preventDefault(); // Prevent the default right-click menu
            $(this).find('.col-12:not(:first-child)').removeClass('expanded');
        });
    } else {
        setHoverandExpand('.accomplishment-year .col-md-10', '.col-12:not(:first-child)'); // For .accomplishment-year .col-md-10, expand .col-12:not(:first-child)
    }
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



function setHoverandExpand(hover, expand){
    
    // On hover, show tooltip and set cursor to pointer
    $(hover).off('click').hover(function() {
        $(this).attr('title', 'Click to expand'); // Tooltip on hover
        $(this).css('cursor', 'pointer'); // Change cursor to pointer 
    });
    
    // When 'hover' is clicked, expand all 'expand' inside it
    $(hover).click(function() {
        $(this).find(expand).toggleClass('expanded');
    });
}

