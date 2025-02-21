document.addEventListener('DOMContentLoaded', () => {
    // Accordion functionality
    const accordions = document.querySelectorAll('.accordion-container');
    accordions.forEach(accordion => {
        accordion.addEventListener('click', () => {
            const accordionData = accordion.nextElementSibling;
            accordionData.classList.toggle('active');
            const icon = accordion.querySelector('i');
            icon.classList.toggle('fa-chevron-down');
            icon.classList.toggle('fa-chevron-up');
        });
    });

    // Email and phone radio buttons functionality
    const emailRadio = document.getElementById('email');
    const phoneRadio = document.getElementById('phone');
    const emailInputSection = document.querySelector('.email-input');
    const phoneInputSection = document.createElement('section');
    phoneInputSection.classList.add('phone-input');
    phoneInputSection.innerHTML = `
        <input type="tel" placeholder="Phone" class="phone">
        <button class="btn">Share App Link</button>
    `;

    emailRadio.addEventListener('change', () => {
        if (emailRadio.checked) {
            emailInputSection.style.display = 'block';
            phoneInputSection.style.display = 'none';
        }
    });

    phoneRadio.addEventListener('change', () => {
        if (phoneRadio.checked) {
            emailInputSection.style.display = 'none';
            emailInputSection.parentNode.insertBefore(phoneInputSection, emailInputSection.nextSibling);
            phoneInputSection.style.display = 'block';
        }
    });

    // Initial state
    if (emailRadio.checked) {
        emailInputSection.style.display = 'block';
        phoneInputSection.style.display = 'none';
    } else if (phoneRadio.checked) {
        emailInputSection.style.display = 'none';
        emailInputSection.parentNode.insertBefore(phoneInputSection, emailInputSection.nextSibling);
        phoneInputSection.style.display = 'block';
    }
});
