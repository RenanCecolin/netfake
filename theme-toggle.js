const themeToggle = document.querySelector('.theme-toggle');
const preferredTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

function applyTheme(theme) {
    document.body.classList.toggle('light-theme', theme === 'light');
    document.body.classList.toggle('dark-theme', theme === 'dark');
    themeToggle.textContent = theme === 'light' ? '☀️' : '🌙';
    themeToggle.setAttribute('aria-label', theme === 'light' ? 'Modo claro ativo' : 'Modo escuro ativo');
    localStorage.setItem('theme', theme);
}

applyTheme(preferredTheme);

themeToggle.addEventListener('click', () => {
    const nextTheme = document.body.classList.contains('light-theme') ? 'dark' : 'light';
    applyTheme(nextTheme);
});