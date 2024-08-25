function downloadShayari(id) {
    const shayariElement = document.getElementById(id);
    const downloadButtons = shayariElement.querySelectorAll('.download-btn');

    // Hide the download buttons
    downloadButtons.forEach(button => button.style.display = 'none');

    // Capture the element
    html2canvas(shayariElement, { useCORS: true, allowTaint: false }).then(canvas => {
        const context = canvas.getContext('2d');

        // Add a watermark
        context.font = 'bold 20px Arial'; // Font size and style for watermark
        context.fillStyle = 'rgba(255, 255, 255, 1.0)'; // Watermark color with transparency
        context.textAlign = 'right'; // Watermark alignment
        context.fillText('priyavats.netlify.app', canvas.width - 10, canvas.height - 10); // Watermark position

        canvas.toBlob(function(blob) {
            saveAs(blob, `${id}.png`);

            // Show the download buttons again
            downloadButtons.forEach(button => button.style.display = 'block');
        });
    }).catch(err => {
        console.error('Error capturing the element:', err);

        // Show the download buttons again if there is an error
        downloadButtons.forEach(button => button.style.display = 'block');
    });
}

function downloadShayariOnBackground(id) {
    const shayariElement = document.getElementById(id);
    const downloadButtons = shayariElement.querySelectorAll('.download-btn');
    const shayariText = shayariElement.querySelector('.shayari-content p').innerHTML.replace(/<br>/g, '\n');
    const backgroundImageUrl = 'images/bg/bg1.jpg'; // Path to your solid background image

    // Hide the download buttons
    downloadButtons.forEach(button => button.style.display = 'none');

    // Create a new canvas
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const backgroundImage = new Image();

    backgroundImage.onload = function () {
        // Set canvas dimensions to match the background image
        canvas.width = backgroundImage.width;
        canvas.height = backgroundImage.height;

        // Draw the background image on the canvas
        context.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

        // Set text properties (position and color)
        context.font = '20px Arial'; // Font size and style
        context.fillStyle = 'white'; // Text color
        context.textAlign = 'center'; // Horizontal alignment
        context.textBaseline = 'middle'; // Vertical alignment

        // Calculate the y position to center the text vertically
        const lines = shayariText.split('\n').map(line => line.trim());
        const lineHeight = 30; // Line height
        const textHeight = lines.length * lineHeight;
        let y = (canvas.height - textHeight) / 2 + lineHeight / 2; // Center the text vertically

        // Draw the Shayari text on the canvas
        lines.forEach(line => {
            context.fillText(line, canvas.width / 2, y);
            y += lineHeight;
        });

        // Add a watermark
        context.font = 'bold 20px Arial'; // Font size and style for watermark
        context.fillStyle = 'rgba(255, 255, 255, 1.0)'; // Watermark color with transparency
        context.textAlign = 'right'; // Watermark alignment
        context.fillText('priyavats.netlify.app', canvas.width -10, canvas.height -30); // Watermark position

        // Create a blob and save the image
        canvas.toBlob(function (blob) {
            saveAs(blob, `${id}-solid-background.png`);

            // Show the download buttons again
            downloadButtons.forEach(button => button.style.display = 'block');
        });
    };

    backgroundImage.src = backgroundImageUrl;

    backgroundImage.onerror = function () {
        console.error('Error loading the background image');

        // Show the download buttons again if there is an error
        downloadButtons.forEach(button => button.style.display = 'block');
    };
}
document.addEventListener('DOMContentLoaded', function() {
    const toggleSwitch = document.getElementById('theme');
    const body = document.body;
  
    // Check for saved user preference, if any, on load
    const currentMode = localStorage.getItem('darkMode'); 
    if (currentMode === 'enabled') {
      body.classList.add('dark-mode');
      toggleSwitch.checked = true; // Ensure the toggle reflects the correct state
    }
  
    toggleSwitch.addEventListener('change', function() {
      if (toggleSwitch.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
      } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
      }
    });
  });
  (function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Floating label headings for the contact form
    $(function() {
        $("body").on("input propertychange", ".floating-label-form-group", function(e) {
            $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
        }).on("focus", ".floating-label-form-group", function() {
            $(this).addClass("floating-label-form-group-with-focus");
        }).on("blur", ".floating-label-form-group", function() {
            $(this).removeClass("floating-label-form-group-with-focus");
        });
    });

})(jQuery); // End of use strict