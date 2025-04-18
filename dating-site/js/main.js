// Обработка формы входа
document.querySelector('#loginModal form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.querySelector('#loginEmail').value;
    const password = document.querySelector('#loginPassword').value;
    
    // Здесь будет код для отправки данных на сервер
    console.log('Попытка входа:', { email, password });
    
    // Временно: показываем уведомление
    alert('Функция входа будет доступна после подключения бэкенда');
});

// Обработка формы регистрации
document.querySelector('#registerModal form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.querySelector('#registerName').value;
    const email = document.querySelector('#registerEmail').value;
    const password = document.querySelector('#registerPassword').value;
    
    // Здесь будет код для отправки данных на сервер
    console.log('Попытка регистрации:', { name, email, password });
    
    // Временно: показываем уведомление
    alert('Функция регистрации будет доступна после подключения бэкенда');
});