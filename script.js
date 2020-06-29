$(document).ready(function () {



  $('.nav-btn').click(function () {

    // displaying links on click
    $('.nav-links').slideToggle(1000);

    // changing nav button
    $('.nav-btn').toggleClass('turn');

  })


  $(window).scroll(function () {

    // transparent background
    let position = $(window).scrollTop();
    if(position>=100) {
      $('nav, nav-header').addClass('navBackground')
    }
    else{
      $('nav, nav-header').removeClass('navBackground')
    }

  })

  // smooth scroll
  $('.nav-link,.hero-btn').click(function (link) {
    link.preventDefault();

    let target = $(this).attr('href');
    $('html, body').stop().animate({
      scrollTop: $(target).offset().top
    }, 1500);

  })

  // owl carousel for reviews
  $('.reviews-center').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    slideBy: 1,
    // dots:false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplaySpeed: 3000,
    smartSpeed:3000,
    autoHeight: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      900: {
        items: 3
      }
    },
  })


	// owl carousel for services
  $('.services-center').owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    slideBy: 2,
    // dots:false,
    smartSpeed:800,
    autoHeight: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
			}
			
    },
    navText: ["prev", "next"]
  })


})



// ********** set date ************
// select span
const date = (document.getElementById(
  "date"
).innerHTML = new Date().getFullYear());