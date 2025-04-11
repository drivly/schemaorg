
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

function getThemePreference() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    return savedTheme;
  }
  
  return prefersDarkScheme.matches ? 'dark' : 'light';
}

function setTheme(theme) {
  if (theme === 'dark') {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
  
  localStorage.setItem('theme', theme);
}

document.addEventListener('DOMContentLoaded', () => {
  setTheme(getThemePreference());
  
  const toggleButton = document.getElementById('dark-mode-toggle');
  if (toggleButton) {
    toggleButton.addEventListener('click', () => {
      const currentTheme = getThemePreference();
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
    });
  }
  
  prefersDarkScheme.addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });
});
