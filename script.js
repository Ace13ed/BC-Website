const ticker = document.querySelector('.ticker-track');

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

const updateSignal = () => {
  if (!ticker) return;
  const hour = new Date().getHours();
  ticker.setAttribute('data-cycle', hour < 6 ? 'NIGHT CYCLE' : 'DAY CYCLE');
};

updateSignal();
