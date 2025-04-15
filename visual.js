function showPage(pageId) {
    const pages = document.querySelectorAll('.container');
    pages.forEach(page => {
        page.style.display = 'none';
        page.classList.remove('fade-transition');
    });

    const activePage = document.getElementById(pageId);
    if (activePage) {
        activePage.style.display = 'block';
        setTimeout(() => {
            activePage.classList.add('fade-transition');
        }, 50);
    }
}
document.addEventListener('scroll', () => {
    const blog = document.getElementById('blog');
    if (blog && blog.style.display !== 'none') {
        blog.style.backgroundPositionY = `${window.scrollY * 0.5}px`;
    }
});
let currentSlide = 0;
const slides = document.querySelectorAll('.gallery img');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function startSlideshow() {
    showSlide(currentSlide);
    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }, 3000); // 3 detik
}

document.addEventListener('DOMContentLoaded', () => {
    startSlideshow();
});
// Reveal on Scroll - Blog
function revealOnScroll() {
    const reveals = document.querySelectorAll('#blog .reveal');
    const triggerPoint = window.innerHeight * 0.9;
  
    reveals.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < triggerPoint) {
        el.classList.add('active');
      }
    });
  }
  
  document.addEventListener('scroll', revealOnScroll);
  document.addEventListener('DOMContentLoaded', revealOnScroll);
// Lightbox functionality
document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', () => {
      document.getElementById('lightbox-img').src = img.src;
      document.getElementById('lightbox').style.display = 'flex';
    });
  });
  
  function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
  };
  