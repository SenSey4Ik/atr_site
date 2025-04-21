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
});