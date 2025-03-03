// Slider functionality adapted from W3Schools' slideshow example:
// https://www.w3schools.com/howto/howto_js_slideshow.asp
// and modified for modal popups using hash navigation.

document.addEventListener('DOMContentLoaded', function() {
    // Define the modal IDs (without the '#' symbol) in the order you want them to be navigated.
    const modalIds = ["popout-one", "popout-two", "popout-three", "popout-four"];
  
    // Initialize slideIndex based on the current hash, defaulting to the first modal.
    let slideIndex = 1;
    const currentHash = window.location.hash.substring(1); // Remove '#' from hash.
    const currentIndex = modalIds.indexOf(currentHash);
    if (currentIndex !== -1) {
      slideIndex = currentIndex + 1;
    }
    showSlides(slideIndex);
  
    // Expose plusSlides for navigation (loosely based on W3Schools code).
    window.plusSlides = function(n) {
      showSlides(slideIndex += n);
    };
  
    // The core function: shows the modal corresponding to the slide index.
    function showSlides(n) {
      if (n > modalIds.length) { slideIndex = 1; }
      if (n < 1) { slideIndex = modalIds.length; }
      // Update the URL hash so that the corresponding modal is opened by CSS :target.
      window.location.hash = modalIds[slideIndex - 1];
      updateModalNav();
    }
  
    // This function dynamically adds navigation arrows into the currently open modal.
    function updateModalNav() {
      const currentModalId = "#" + modalIds[slideIndex - 1];
      const modalElement = document.querySelector(currentModalId);
      if (modalElement) {
        const popContent = modalElement.querySelector('.pop-content');
        if (popContent) {
          // Remove any existing navigation container.
          let navDiv = popContent.querySelector('.slider-nav');
          if (navDiv) { navDiv.remove(); }
          // Create a container for the navigation arrows.
          navDiv = document.createElement('div');
          navDiv.className = 'slider-nav';
          // Create the Previous arrow.
          const prevLink = document.createElement('a');
          prevLink.href = "javascript:void(0)";
          prevLink.className = 'slider-prev';
          prevLink.innerHTML = "&#10094;"; // left arrow symbol.
          prevLink.addEventListener('click', function() {
            plusSlides(-1);
          });
          // Create the Next arrow.
          const nextLink = document.createElement('a');
          nextLink.href = "javascript:void(0)";
          nextLink.className = 'slider-next';
          nextLink.innerHTML = "&#10095;"; // right arrow symbol.
          nextLink.addEventListener('click', function() {
            plusSlides(1);
          });
          // Append the arrows to the navigation container.
          navDiv.appendChild(prevLink);
          navDiv.appendChild(nextLink);
          // Append the navigation container to the modal content.
          popContent.appendChild(navDiv);
        }
      }
    }
  
    // Update the slideIndex and navigation if the hash changes (e.g. when a modal is closed or manually navigated).
    window.addEventListener('hashchange', function() {
      const newHash = window.location.hash.substring(1);
      const newIndex = modalIds.indexOf(newHash);
      if (newIndex !== -1) {
        slideIndex = newIndex + 1;
        updateModalNav();
      }
    });
  });
  