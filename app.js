const detective = document.querySelector('.detective');
if (detective) {
  detective.addEventListener('click', () => {
    detective.classList.remove('bounce');
    void detective.offsetWidth;
    detective.classList.add('bounce');
  });
}
