document.addEventListener('DOMContentLoaded', function () {
    // Получаем элементы
    const modal = document.getElementById('window-modal');
    const openBtn = document.getElementById('openModalBtn');
  
    // Создаём и добавляем крестик для закрытия, если его нет
    let closeBtn = modal.querySelector('.close');
    if (!closeBtn) {
      closeBtn = document.createElement('span');
      closeBtn.className = 'close';
      closeBtn.innerHTML = '&times;';
      modal.querySelector('form').prepend(closeBtn);
    }
  
    // Открытие модального окна
    openBtn.onclick = function() {
      modal.style.display = "flex";
    };
  
    // Закрытие по крестику
    closeBtn.onclick = function() {
      modal.style.display = "none";
    };
  
    // Закрытие по клику вне окна
    window.onclick = function(event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
  });