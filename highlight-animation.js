document.addEventListener('DOMContentLoaded', () => {
  const highlights = document.querySelectorAll('.yellow-highlight, .cyan-highlight');
  
  // Create intersection observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // When element enters viewport
      if (entry.isIntersecting) {
        // Add animation class
        entry.target.classList.add('animate');
        // Stop observing the element
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5, // Trigger when at least 50% of the element is visible
    rootMargin: '0px' // No margin around the viewport
  });
  
  // Observe all highlight elements
  highlights.forEach(highlight => {
    observer.observe(highlight);
  });
}); 