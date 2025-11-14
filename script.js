document.getElementById('year').textContent = new Date().getFullYear();


// Theme toggle
const btn = document.getElementById('themeBtn');
btn.addEventListener('click', () => {
document.body.classList.toggle('light');
if (document.body.classList.contains('light')) {
document.body.style.background = '#f8f9fb';
document.body.style.color = '#111';
} else {
document.body.style.background = '#0b0c10';
document.body.style.color = '#e8eaed';
}
});


// Contact form placeholder
const form = document.getElementById('contactForm');
form.addEventListener('submit', (e) => {
e.preventDefault();
alert('Contact form submission disabled in template.');
});