const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");
const loginBtn = document.getElementById("loginBtn");
const loginDropdown = document.getElementById("loginDropdown");

// Toggle sidebar (works for desktop + mobile)
menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("closed");
  sidebar.classList.toggle("open");
  document.body.classList.toggle("sidebar-active");
});

// Toggle login dropdown
loginBtn.addEventListener("click", (e) => {
  e.stopPropagation(); // prevent closing immediately
  loginDropdown.classList.toggle("show");
});

// Close dropdown if clicked outside
document.addEventListener("click", (e) => {
  if (!loginBtn.contains(e.target) && !loginDropdown.contains(e.target)) {
    loginDropdown.classList.remove("show");
  }
});

// Close sidebar when clicking outside (for small screens)
document.addEventListener("click", (e) => {
  if (
    sidebar.classList.contains("open") &&
    !sidebar.contains(e.target) &&
    !menuToggle.contains(e.target)
  ) {
    sidebar.classList.remove("open");
    sidebar.classList.add("closed");
    document.body.classList.remove("sidebar-active");
  }
});
const avatar = document.querySelector('.user-avatar');
const dropdown = document.querySelector('.login-dropdown');

avatar.addEventListener('click', () => {
  dropdown.classList.toggle('show');
});
