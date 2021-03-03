const inactive = document.querySelectorAll('.inactive');

inactive.forEach(inact => {
  inact.addEventListener('click', () => {
    removeActive();
    inact.classList.add('active');
  });
});

function removeActive() {
  inactive.forEach(inact => {
    inact.classList.remove('active');
  });
}
