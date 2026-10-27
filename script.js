document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const mailInput = document.getElementById('email');
    const formMessage = document.getElementById('form-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        const mailValue = mailInput.value.trim();
        const nameValue = nameInput.value.trim();
        const phoneValue = phoneInput.value.trim();

        if (nameValue === '' || phoneValue === '' || mailValue === '') {
            formMessage.textContent = 'Пожалуйста, заполните обязательные поля';
            formMessage.className = 'form-message error';
        } else {
            formMessage.textContent = 'Заявка принята! Мы свяжемся с вами в ближайшее время.';
            formMessage.className = 'form-message success';
            form.reset();
        }
    });
});