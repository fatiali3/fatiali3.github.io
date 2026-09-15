function handleFormSubmit(event) {
    event.preventDefault();
    const form = document.getElementById('contactForm');
    const successMsg = document.getElementById('successMessage');
    
    if (form.checkValidity()) {
        form.reset();
        successMsg.style.display = 'block';
        successMsg.focus();
    }
}
