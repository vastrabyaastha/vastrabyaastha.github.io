(function($) {
  "use strict"; // Start of use strict

  // Vide - Video Background Settings
  $('body').vide({
    mp4: "mp4/bg.mp4",
    poster: "img/bg-mobile-fallback.jpg"
  }, {
    posterType: 'jpg'
  });

  $(document).ready(function () {
    $("#contact-us-form button").click(function(event) {
        $(".sending").show();
        $("#contact-us-form button").hide();
    });
});
})(jQuery); // End of use strict
