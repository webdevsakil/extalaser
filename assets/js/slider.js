const brandSliderEl = targetEl('.brands-slider');
if (brandSliderEl !== '') {
    var brandSlider = tns({
        container: '.brands-slider',
        items: 2,
        slideBy: 'page',
        autoplay: true,
        controls: false,
        nav: false,
        mouseDrag: true,
        autoplayButtonOutput: false,
        swipeAngle: true,
        center: true,
        responsive: {
            320: {
                items:2
            },
            576: {
                items: 3
            },
            768: {
                items: 4
            },
            992: {
                items: 5
            }

        }
    })
}
const testimonialSliderEl = targetEl('.testimonial-slider');
if (testimonialSliderEl !== '') {
    var testimonialSlider = tns({
        container: '.testimonial-slider',
        items: 1,
        slideBy: 'page',
        autoplay: true,
        mouseDrag: true,
        autoplayButtonOutput: false,
        swipeAngle: true,
        controlsContainer: '.testimonail-control',
        navContainer: '.testimonial-nav',
    })
}
const teamSliderEl = targetEl('.team-slider');
if (teamSliderEl !== '') {
    var teamSlider = tns({
        container: '.team-slider',
        items: 1,
        slideBy: 'page',
        autoplay: true,
        mouseDrag: true,
        autoplayButtonOutput: false,
        swipeAngle: true,
        controlsContainer: '.team-slider-control',
        nav: false,
        center: true,
        responsive: {
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    })
}
const blogSliderEl = targetEl('.blog-slider');
if (blogSliderEl !== '') {
    var blogSlider = tns({
        container: '.blog-slider',
        items: 1,
        slideBy: 'page',
        autoplay: true,
        mouseDrag: true,
        autoplayButtonOutput: false,
        swipeAngle: true,
        controlsContainer: '.blog-slider-control',
        navContainer: ".blog-slider-nav",
        responsive: {
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    })
}
const projectSliderEl = targetEl('.project-slider');
if (projectSliderEl !== '') {
    var projectSlider = tns({
        container: '.project-slider',
        items: 1,
        slideBy: 'page',
        autoplay: true,
        mouseDrag: true,
        autoplayButtonOutput: false,
        swipeAngle: true,
        controlsContainer: '.project-slider-control',
        navContainer: ".project-slider-nav",
        responsive: {
            768: {
                items: 2
            },
            992: {
                items: 3
            }
            
        }
    })
}
function targetEl(el) {
    let target = '';
    if (document.querySelector(el)) {
        target = document.querySelector(el);
    } else {
        target = '';
    }
    return target;
}