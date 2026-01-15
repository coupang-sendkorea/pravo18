// script.js

// Мобильное меню
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mainNav = document.getElementById('mainNav');

if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        mobileMenuBtn.innerHTML = mainNav.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
}

// Плавная прокрутка для ссылок меню
document.querySelectorAll('nav a, .cta-button').forEach(link => {
    link.addEventListener('click', function(e) {
        if (this.getAttribute('href') && this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Закрываем мобильное меню, если оно открыто
                if (mainNav && mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                    if (mobileMenuBtn) {
                        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                    }
                }
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Обработка формы
const consultationForm = document.getElementById('consultationForm');

if (consultationForm) {
    consultationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Здесь должна быть отправка данных на сервер
        // Для примера просто показываем сообщение
        
        const name = document.getElementById('name').value;
        const service = document.getElementById('service').value;
        
        if (name && service) {
            alert(`Спасибо, ${name}! Ваша заявка на консультацию по "${service}" принята. Мы свяжемся с вами в ближайшее время.`);
            
            // Сброс формы
            consultationForm.reset();
        }
    });
}