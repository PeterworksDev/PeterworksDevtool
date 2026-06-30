(function () {
    window.themeManager = {
        setTheme: function (isDark) {
            if (isDark) {
                document.documentElement.classList.add('dark-theme');
                localStorage.setItem('theme', 'dark');
            } else {
                document.documentElement.classList.remove('dark-theme');
                localStorage.setItem('theme', 'light');
            }
        },
        getPreferredTheme: function () {
            const saved = localStorage.getItem('theme');
            if (saved) {
                return saved === 'dark';
            }
            return window.matchMedia('(prefers-color-scheme: dark)').matches;
        },
        initTheme: function () {
            const isDark = this.getPreferredTheme();
            this.setTheme(isDark);
            return isDark;
        }
    };

    // Initialize theme immediately to prevent white flash
    window.themeManager.initTheme();
})();
