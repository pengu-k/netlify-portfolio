document.querySelector('.logo a').addEventListener('click', function (e) {
    e.preventDefault(); // prevent jump
    const typewriter = document.querySelector('.typewriter');
    
    // Reset animation
    typewriter.style.animation = 'none';
    typewriter.offsetHeight; // trigger reflow
    typewriter.style.animation = 'typing 1.4s steps(20, end) forwards, blinking 1.2s infinite';
  
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  