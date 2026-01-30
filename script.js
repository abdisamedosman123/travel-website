document.addEventListener("DOMContentLoaded", function () {

    // Mobile menu toggle
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.querySelector(".nav-links");
  
    if (menuToggle && navLinks) {
      menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
      });
    }
  
    // Scroll animation
    const animatedSections = document.querySelectorAll(".animate");
  
    function showOnScroll() {
      animatedSections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
  
        if (top < screenHeight - 100) {
          section.classList.add("show");
        }
      });
    }
  
    window.addEventListener("scroll", showOnScroll);
    showOnScroll(); // marka page la furo
  
    // Optional: Close mobile menu after click
    const navItems = document.querySelectorAll(".nav-links a");
    navItems.forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });
  
  });
  
