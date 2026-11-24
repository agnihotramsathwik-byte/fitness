const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.textContent = isOpen ? '✕' : '☰';
});

mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.textContent = '☰';
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

const registrationForm = document.getElementById('registrationForm');
const formMessage = document.getElementById('formMessage');

registrationForm.addEventListener('submit', event => {
  event.preventDefault();

  if (!registrationForm.reportValidity()) return;

  const formData = new FormData(registrationForm);
  const firstName = String(formData.get('fullName')).trim().split(/\s+/)[0];

  formMessage.textContent = `Thanks, ${firstName}! Your details are ready. Connect this form to a backend to receive registrations.`;
  registrationForm.reset();
});
