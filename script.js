/* ===================================
   鎌倉ねこの間 HP JavaScript
   =================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ---- Dropdown Menu (PC hover is CSS, this adds click support) ----
  const navItems = document.querySelectorAll('.main-nav > li');

  navItems.forEach(item => {
    const submenu = item.querySelector('.submenu');
    if (!submenu) return;

    // Touch device support
    item.addEventListener('touchstart', (e) => {
      const isOpen = submenu.style.display === 'block';
      // Close all other submenus
      document.querySelectorAll('.submenu').forEach(s => s.style.display = 'none');
      if (!isOpen) {
        submenu.style.display = 'block';
        e.preventDefault();
      }
    });
  });

  // Close submenus when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.main-nav')) {
      document.querySelectorAll('.submenu').forEach(s => s.style.display = '');
    }
  });

  // ---- Image Strip: Calculate width for seamless loop ----
  const strip = document.getElementById('imageStrip');
  if (strip) {
    const images = strip.querySelectorAll('img');
    let loaded = 0;

    const adjustAnimation = () => {
      // Get the total width of the first half of images
      const halfCount = Math.floor(images.length / 2);
      let totalWidth = 0;
      for (let i = 0; i < halfCount; i++) {
        totalWidth += images[i].offsetWidth;
      }

      // Update animation to scroll exactly half the width
      strip.style.setProperty('--strip-scroll', `-${totalWidth}px`);

      // Create dynamic keyframes
      const styleEl = document.createElement('style');
      styleEl.textContent = `
        @keyframes slideStrip {
          0% { transform: translateX(0); }
          100% { transform: translateX(-${totalWidth}px); }
        }
      `;
      document.head.appendChild(styleEl);
    };

    images.forEach(img => {
      if (img.complete) {
        loaded++;
        if (loaded === images.length) adjustAnimation();
      } else {
        img.addEventListener('load', () => {
          loaded++;
          if (loaded === images.length) adjustAnimation();
        });
      }
    });
  }

  // ---- Smooth scroll to top ----
  const scrollTopBtn = document.getElementById('scrollToTop');
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ---- Active navigation highlight ----
  const currentPath = window.location.pathname;
  document.querySelectorAll('.main-nav > li').forEach(li => {
    const link = li.querySelector('a');
    if (link && link.getAttribute('href') === currentPath) {
      li.classList.add('active');
    }
  });

});
