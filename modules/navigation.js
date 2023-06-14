export function setupNavigation() {
    document.querySelectorAll('nav a').forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const target = link.getAttribute('href').substring(1);
        const sections = document.querySelectorAll('.content-section');
  
        sections.forEach((section) => {
          if (section.id === target) {
            section.classList.add('show');
          } else {
            section.classList.remove('show');
          }
        });
      });
    });
  }
  