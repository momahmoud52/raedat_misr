function toggleMenu(btn) {
    btn.classList.toggle("active");
    document.getElementById("navList").classList.toggle("active");
  }
  
  window.addEventListener('load', () => {
    setTimeout(() => {
      document.querySelector('.scroll-target').scrollIntoView({ behavior: 'smooth' });
    }, 1500);
  });
  
  