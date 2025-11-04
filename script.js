const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');

// Start with sidebar open (no need to add .open)
sidebar.classList.remove('closed');

menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('closed');
});

// Optional: Close sidebar when clicking outside
document.addEventListener('click', (e) => {
  const clickInsideSidebar = sidebar.contains(e.target);
  const clickOnMenu = menuToggle.contains(e.target);

  if (!clickInsideSidebar && !clickOnMenu) {
    sidebar.classList.add('closed');
  }
});
