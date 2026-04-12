document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('btn-theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const htmlElement = document.documentElement;

    // 1. Verifica se o usuário já tem um tema salvo de visitas anteriores
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
        // Altera o atributo no HTML que o Bootstrap usa para pintar a tela
        htmlElement.setAttribute('data-bs-theme', theme);
        
        // Salva a escolha do usuário
        localStorage.setItem('portfolio_theme', theme);

        // Troca o ícone do botão
        if (theme === 'dark') {
            themeIcon.classList.remove('bi-moon-stars-fill');
            themeIcon.classList.add('bi-sun-fill');
            themeToggleBtn.classList.replace('btn-outline-dark', 'btn-outline-light');
        } else {
            themeIcon.classList.remove('bi-sun-fill');
            themeIcon.classList.add('bi-moon-stars-fill');
            themeToggleBtn.classList.replace('btn-outline-light', 'btn-outline-dark');
        }
    }
});