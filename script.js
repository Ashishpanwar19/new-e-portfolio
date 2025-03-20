// Filter Projects
const filterButtons = document.querySelectorAll('.filter-btn');
const projectItems = document.querySelectorAll('.project-item');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    filterButtons.forEach((btn) => btn.classList.remove('active'));
    // Add active class to the clicked button
    button.classList.add('active');

    // Get the filter category
    const filter = button.getAttribute('data-filter');

    // Filter projects
    projectItems.forEach((item) => {
      if (filter === 'all' || item.getAttribute('data-category') === filter) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }

      document.addEventListener("DOMContentLoaded", function() {
        // Animate Technical Skills Progress Bars
        document.querySelectorAll(".progress").forEach(bar => {
            let percent = bar.getAttribute("data-percent");
            bar.style.width = percent + "%";
        });
    
        // Animate Circular Progress for Professional Skills
        document.querySelectorAll(".progress-circle").forEach(circle => {
            let percent = circle.getAttribute("data-progress");
            let degrees = (percent / 100) * 360;
            circle.style.background = `conic-gradient(#00d4ff ${degrees}deg, rgba(0, 212, 255, 0.2) ${degrees}deg)`;
        });
    });
    
    });
  });
});
