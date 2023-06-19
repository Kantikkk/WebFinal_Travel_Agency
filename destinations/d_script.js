const musicToggle1 = document.getElementById('music-toggle1');
const musicToggle2 = document.getElementById('music-toggle2');
const audio = new Audio('../homepage/music/6a85193cd5495ab.mp3');
let isPlaying = false;

musicToggle1.addEventListener('click', function (event) {
    event.preventDefault();
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
    } else {
        audio.play();
        isPlaying = true;
    }
});

musicToggle2.addEventListener('click', function (event) {
    event.preventDefault();
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
    } else {
        audio.play();
        isPlaying = true;
    }
});

$(document).ready(function() {
    $('#carouselExample').carousel();
  
    $('.destination-image').click(function() {
      const modalId = $(this).attr('data-modal');
      $('#' + modalId).modal('show');
    });

    $(".carousel-item").mouseover(function () {
        $(this).find(".carousel-caption").css("opacity", "1");
      });
    
      $(".carousel-item").mouseout(function () {
        $(this).find(".carousel-caption").css("opacity", "0");
      });
  });

  $(document).ready(function() {
    $(".gallery-image").mouseover(function() {
      $(this).css("border-color", "darkcyan");
    });
  
    $(".gallery-image").mouseout(function() {
      $(this).css("border-color", "transparent");
    });
  });

  
  