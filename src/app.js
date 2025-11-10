// ===== THEME TOGGLE =====
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'light';

// Apply saved theme
document.documentElement.setAttribute('data-theme', currentTheme);
themeToggle.textContent = currentTheme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';

// Toggle theme
themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  const newTheme = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  themeToggle.textContent = newTheme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
});

// ===== SIMPLE LOGIN MOCKUP =====
const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');
const loginForm = document.getElementById('login-form');
const portal = document.getElementById('portal');
const loginMsg = document.getElementById('login-msg');

loginBtn.addEventListener('click', () => {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  if (email && password) {
    localStorage.setItem('user', email);
    loginForm.style.display = 'none';
    portal.style.display = 'block';
    loginMsg.textContent = '';
  } else {
    loginMsg.textContent = 'Enter valid credentials.';
  }
});

logoutBtn.addEventListener('click', () => {
  localStorage.removeItem('user');
  portal.style.display = 'none';
  loginForm.style.display = 'block';
});
