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


})



// ********** set date ************
// select span
const date = (document.getElementById(
  "date"
).innerHTML = new Date().getFullYear());