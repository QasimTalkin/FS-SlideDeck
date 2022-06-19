var themes = document.querySelectorAll(".button-container .button");
var root = document.querySelector(":root");
var slideDeck  = document.querySelector(".slide-deck");
var slidesArray = ['GIT-Essentials','HTML5-Essentials', 'CSS-Essentials', 'WireFrames' ,'JS-Essentials' ,'JS-Essentials2', 'jQuery-Essentials', 'BootStrap-Essentials', 'Js-Essentials3','PHP-Essentials1']

// cahange theme
themes.forEach((theme) => {
  theme.addEventListener('click', (e) => {
    root.style.setProperty('--theme-color-primary', e.target.style.background);  
    root.style.setProperty('--theme-color-sub', e.target.style.color);
  })
})

// add slide deck
slidesArray.forEach((slide) => {
  slideDeck.innerHTML += `
  <div class="col-xs-12">
    <div class="thumbnail">
      <div class="caption slide">
        <img src="img/${slide}.png" class="img-responsive" />
        <a type="button" class="btn"
          href="https://qasimtalkin.github.io/FS-SlideDeck/embeded/${slide}.html">
          view
        </a>
        <a type="button" class="btn"
          href="https://qasimtalkin.github.io/FS-SlideDeck/pdf/${slide}.pdf" download>
          Download
        </a>
      </div>
    </div>
  </div>
  
  `
});



































// nav-bar 
$(document).ready(function() {
  var scroll_start = 0;
  var startchange = $('#startchange');
  var offset = startchange.offset();
  if (startchange.length) {
    $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if (scroll_start > offset.top) {
        $(".navbar-default").css('background-color', '#c1292e');
      } else {
        $('.navbar-default').css('background-color', 'transparent');
      }
    });
  }  
}
);
