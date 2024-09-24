function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  

  AOS.init({
    duration: 800, 
    easing: 'ease-in-out', 
    once: true, 
  });


  // Function to check when elements are in view
function animateOnScroll() {
  const elements = document.querySelectorAll('.scroll-animate');
  elements.forEach(element => {
    const position = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    // If the element is within the viewport, add the 'active' class
    if (position < windowHeight - 50) {
      element.classList.add('active');
    }
  });
}

// Run the function when the page is scrolled
document.addEventListener('scroll', animateOnScroll);

// Trigger the function on page load in case some elements are already in view
window.addEventListener('load', animateOnScroll);
