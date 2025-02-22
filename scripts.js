document.addEventListener('DOMContentLoaded', () => {
    // Accordion functionality
    const accordions = document.querySelectorAll('.accordion-container');
    accordions.forEach(accordion => {
        accordion.addEventListener('click', () => {
            const accordionData = accordion.nextElementSibling;
            accordionData.classList.toggle('show');
            const icon = accordion.querySelector('i');
            icon.classList.toggle('animate');
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
            emailInputSection.style.display = 'flex';
            phoneInputSection.style.display = 'none';
        }
    });

    phoneRadio.addEventListener('change', () => {
        if (phoneRadio.checked) {
            emailInputSection.style.display = 'none';
            emailInputSection.parentNode.insertBefore(phoneInputSection, emailInputSection.nextSibling);
            phoneInputSection.style.display = 'flex';
        }
    });

    // Initial state
    if (emailRadio.checked) {
        emailInputSection.style.display = 'flex';
        phoneInputSection.style.display = 'none';
    } else if (phoneRadio.checked) {
        emailInputSection.style.display = 'none';
        emailInputSection.parentNode.insertBefore(phoneInputSection, emailInputSection.nextSibling);
        phoneInputSection.style.display = 'flex';
    }

    // Scroll-to-top button functionality
    const scrollToTopButton = document.getElementById('scroll-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });

    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Mobile navigation toggle
    const userIcon = document.querySelector('.user-icon');
    const rightNav = document.querySelector('.right');

    userIcon.addEventListener('click', () => {
        rightNav.classList.toggle('show');
    });

    // Responsive navigation for mobile
    const navItems = document.querySelectorAll('.nav-item a');
    navItems.forEach(item => {
        item.addEventListener('click', (event) => {
            if (window.innerWidth <= 800) {
                rightNav.classList.remove('show');
            }
            // Open link in a new tab
            event.preventDefault();
            window.open(item.href, '_blank');
        });
    });
});
