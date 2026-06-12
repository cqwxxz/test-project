// Test Project — JavaScript

document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 Test Project loaded!');

  // Плавное появление элементов
  const cards = document.querySelectorAll('.link-card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, index * 100);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  cards.forEach((card) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease';
    observer.observe(card);
  });

  // Анимация счётчиков
  const statValues = document.querySelectorAll('.stat-value');
  statValues.forEach((stat) => {
    const text = stat.textContent;
    if (text.endsWith('+')) {
      const target = parseInt(text);
      let current = 0;
      const increment = Math.ceil(target / 60);
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        stat.textContent = current + '+';
      }, 25);
    }
  });
});
