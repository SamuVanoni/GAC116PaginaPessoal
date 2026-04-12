document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('btn-theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const htmlElement = document.documentElement;

    // Verifica o tema salvo (compartilhado com a versão do Bootstrap!)
    const savedTheme = localStorage.getItem('portfolio_theme') || 'light';
    applyTheme(savedTheme);

    themeToggleBtn.addEventListener('click', () => {
        // Se a tag HTML tem a classe 'dark', o tema atual é escuro
        const isDark = htmlElement.classList.contains('dark');
        const newTheme = isDark ? 'light' : 'dark';
        applyTheme(newTheme);
    });

    function applyTheme(theme) {
        if (theme === 'dark') {
            htmlElement.classList.add('dark');
            themeIcon.classList.replace('bi-moon-stars-fill', 'bi-sun-fill');
            // Altera as cores do botão no modo escuro
            themeToggleBtn.classList.add('text-yellow-400');
        } else {
            htmlElement.classList.remove('dark');
            themeIcon.classList.replace('bi-sun-fill', 'bi-moon-stars-fill');
            // Remove a cor amarela no modo claro
            themeToggleBtn.classList.remove('text-yellow-400');
        }
        
        // Salva a escolha (assim as duas páginas mantêm o mesmo tema ao navegar)
        localStorage.setItem('portfolio_theme', theme);
    }
});