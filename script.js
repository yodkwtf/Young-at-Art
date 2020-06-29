$(document).ready(function () {



  $('.nav-btn').click(function () {

    // displaying links on click
    $('.nav-links').slideToggle(1500);

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

  // owl carousel
  $('.reviews-center').owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    slideBy: 3,
    // dots:false,
    smartSpeed:1000,
    // autoHeight: true,
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
    navText: ["prev", "next"]
  })


})



// ********** set date ************
// select span
const date = (document.getElementById(
  "date"
).innerHTML = new Date().getFullYear());