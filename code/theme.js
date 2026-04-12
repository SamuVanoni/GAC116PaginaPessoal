document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('btn-theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const htmlElement = document.documentElement;

    // 1. Verifica se o usuário já tem um tema salvo (compartilhado com Tailwind)
    const savedTheme = localStorage.getItem('portfolio_theme') || 'light';
    applyTheme(savedTheme);

    // 2. Evento de clique no botão
    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-bs-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        applyTheme(newTheme);
    });

    // 3. Função que faz a mudança visual e salva a preferência
    function applyTheme(theme) {
        // Altera o atributo no HTML
        htmlElement.setAttribute('data-bs-theme', theme);
        
        // Salva a escolha do usuário
        localStorage.setItem('portfolio_theme', theme);

        // Troca o ícone e ajusta a borda do botão para contraste
        if (theme === 'dark') {
            themeIcon.classList.replace('bi-moon-stars-fill', 'bi-sun-fill');
            themeToggleBtn.classList.remove('btn-outline-secondary');
            themeToggleBtn.classList.add('btn-outline-light');
        } else {
            themeIcon.classList.replace('bi-sun-fill', 'bi-moon-stars-fill');
            themeToggleBtn.classList.remove('btn-outline-light');
            themeToggleBtn.classList.add('btn-outline-secondary');
        }
    }
});