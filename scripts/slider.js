// Slider functionality adapted from W3Schools' slideshow example:
// https://www.w3schools.com/howto/howto_js_slideshow.asp
// and modified for modal popups using hash navigation.

document.addEventListener('DOMContentLoaded', () => {
  // Define the modal IDs in the order they should be navigated.
  const modalIds = ["popout-one", "popout-two", "popout-three", "popout-four"];
  let slideIndex = 0; // Start with no modal open.

  // Expose plusSlides for navigation.
  window.plusSlides = (n) => {
    // If no modal is currently open, default to first modal.
    slideIndex = slideIndex === 0 ? 1 : slideIndex + n;
    showSlides(slideIndex);
  };

  // The core function: shows the modal corresponding to the slide index.
  function showSlides(n) {
    if (n > modalIds.length) slideIndex = 1;
    if (n < 1) slideIndex = modalIds.length;
    // Update the URL hash to trigger CSS :target
    window.location.hash = modalIds[slideIndex - 1];
    updateModalNav();
  }

  // Dynamically add navigation arrows into the currently open modal.
  function updateModalNav() {
    const currentModal = document.querySelector(`#${modalIds[slideIndex - 1]}`);
    if (!currentModal) return;
    const popContent = currentModal.querySelector('.pop-content');
    if (!popContent) return;

    // Remove any existing navigation container.
    const oldNav = popContent.querySelector('.slider-nav');
    if (oldNav) oldNav.remove();

    // Create a container for navigation arrows.
    const navDiv = document.createElement('div');
    navDiv.className = 'slider-nav';

    // Previous arrow.
    const prevLink = document.createElement('a');
    prevLink.href = "javascript:void(0)";
    prevLink.className = 'slider-prev';
    prevLink.innerHTML = `<i class="fas fa-arrow-left"></i>`;
    prevLink.addEventListener('click', () => plusSlides(-1));

    // Next arrow.
    const nextLink = document.createElement('a');
    nextLink.href = "javascript:void(0)";
    nextLink.className = 'slider-next';
    nextLink.innerHTML = `<i class="fas fa-arrow-right"></i>`;
    nextLink.addEventListener('click', () => plusSlides(1));

    navDiv.append(prevLink, nextLink);
    popContent.appendChild(navDiv);
  }

  // Only initialize the slider if a valid hash exists in the URL.
  const currentHash = window.location.hash.substring(1);
  const index = modalIds.indexOf(currentHash);
  if (index !== -1) {
    slideIndex = index + 1;
    updateModalNav();
  }

  // Update slideIndex and navigation when the hash changes.
  window.addEventListener('hashchange', () => {
    const newHash = window.location.hash.substring(1);
    const newIndex = modalIds.indexOf(newHash);
    if (newIndex !== -1) {
      slideIndex = newIndex + 1;
      updateModalNav();
    }
  });

  // Add keydown event listener for left/right arrow keys when a modal is open.
  document.addEventListener('keydown', (e) => {
    if (modalIds.includes(window.location.hash.substring(1))) {
      if (e.key === 'ArrowLeft') plusSlides(-1);
      if (e.key === 'ArrowRight') plusSlides(1);
    }
  });
});

