const handleNavigationClick = (event, link) => {
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
};

export default handleNavigationClick;
