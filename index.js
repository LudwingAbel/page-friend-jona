document.addEventListener('DOMContentLoaded', () => {
    const tabsContainer = document.querySelector('.tabs');
    const tabButtons = document.querySelectorAll('.tab-button');
    const contentPanels = document.querySelectorAll('.content-panel');

    tabsContainer.addEventListener('click', (e) => {
        const clickedButton = e.target.closest('.tab-button');
        if (!clickedButton) return;

        // Quita la clase 'active' de todos los botones y paneles
        tabButtons.forEach(button => button.classList.remove('active'));
        contentPanels.forEach(panel => panel.classList.remove('active'));

        // Añade la clase 'active' al botón y al panel correspondientes
        const targetTab = clickedButton.dataset.tab;
        const targetPanel = document.getElementById(targetTab);

        clickedButton.classList.add('active');
        targetPanel.classList.add('active');
    });
});