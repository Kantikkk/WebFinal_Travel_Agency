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

    $(".service-card").click(function() {
        var serviceId = $(this).data("service");
        var serviceCheckbox = $("#" + serviceId);
        
        var scrollToPosition = serviceCheckbox.offset().top - 100;
        window.scrollTo({
          top: scrollToPosition,
          behavior: "smooth"
        });
    
        serviceCheckbox.closest(".form-check").addClass("highlight-border");
    
        setTimeout(function() {
          serviceCheckbox.closest(".form-check").removeClass("highlight-border");
        }, 1200);
    
        serviceCheckbox.prop("checked", true);
      });



    $("#phone").on("input", function() {
      var phoneNumber = $(this).val().replace(/[^0-9]/g, "");
      if (phoneNumber.charAt(0) !== "+") {
        phoneNumber = "+" + phoneNumber;
      }
      $(this).val(phoneNumber.slice(0, 11));
    });

    $("#email, #name").on("input", function() {
      var input = $(this);
      var isValid = input[0].checkValidity();
      if (isValid) {
        input.removeClass("is-invalid");
      } else {
        input.addClass("is-invalid");
      }
    });

    $("#name").on("input", function() {
        var input = $(this);
        var name = input.val();
        var isValid = /^[a-zA-Z\s]+$/.test(name); 
    
        if (isValid) {
          input.removeClass("is-invalid");
          input.tooltip("disable");
        } else {
          input.addClass("is-invalid");
          input.tooltip({
            title: "Invalid characters found. Only letters and spaces are allowed.",
            placement: "top"
          }).tooltip("enable").tooltip("show");
        }
      });

      

      $(document).ready(function() {
        var today = new Date().toISOString().split("T")[0];
      
        $("#startDate").attr("min", today);
        $("#endDate").attr("min", today);
      });
      

    

    $("#endDate").on("change", function() {
      var startDate = new Date($("#startDate").val());
      var endDate = new Date($(this).val());

      
      if (endDate < startDate) {
        $(this).val(""); 
        $(this).addClass("is-invalid");
        $(this).siblings(".invalid-feedback").text("End date cannot be before start date.");
      } else {
        $(this).removeClass("is-invalid");
      }
    });

    $("#startDate, #endDate").on("input", function() {
        var startDate = new Date($("#startDate").val());
        var endDate = new Date($("#endDate").val());
    
        if (startDate.getTime() > endDate.getTime()) {
          $("#endDate")[0].setCustomValidity("End date should be later than start date.");
        } else {
          $("#endDate")[0].setCustomValidity("");
        }
    
        var maxDuration = 28; 
        var duration = (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24);
        if (duration > maxDuration) {
          $("#endDate")[0].setCustomValidity("Maximum tour duration is 28 days.");
        } else {
          $("#endDate")[0].setCustomValidity("");
        }
      });

    
    $('[data-toggle="tooltip"]').tooltip();

    
    $("#bookingForm").keypress(function(event) {
      var charCode = (event.which) ? event.which : event.keyCode;
      if (charCode === 13) {
        event.preventDefault();
        $("#bookingForm").submit();
      }
    });

    
    $("#bookingForm").submit(function(event) {
      event.preventDefault();

      var name = $("#name").val();
      var email = $("#email").val();
      var phone = $("#phone").val();
      var startDate = $("#startDate").val();
      var endDate = $("#endDate").val();
      var destination = $("#destination").val();
      var services = [];
      $("input[type='checkbox']:checked").each(function() {
        services.push($(this).attr("id"));
      });

      alert("Thanks for submitting!");

      $(this)[0].reset();
    });
  });
  