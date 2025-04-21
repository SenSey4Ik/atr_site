document.addEventListener('DOMContentLoaded', function() {
    const openModalBtn = document.getElementById('openModalBtn');
    const modal = document.getElementById('window-modal');
    const closeBtn = document.querySelector('.close');

    openModalBtn.onclick = function() {
        modal.style.display = 'block';
    };

    closeBtn.onclick = function() {
        modal.style.display = 'none';
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };

    // Обработка отправки формы входа
    const form = document.querySelector('.modal-form');
    form.addEventListener('submit', function(event) {

        event.preventDefault();
        
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        // Проверка на пустые поля
        if (!username || !password) {
            alert('Вы ввели не все данные!');
            event.preventDefault();
        } else if (username === 'bereza' && password === 'bereza') {
            // Переход на index.html (event.preventDefault не нужен)
            window.location.href = 'index.html';
        } else {
            alert('Данные неверные!');
            event.preventDefault();
        }
    });
});