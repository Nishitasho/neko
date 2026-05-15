/* ===================================
   鎌倉ねこの間 HP JavaScript
   =================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ---- Two Column Height Calculation ----
  function adjustTwoColHeight() {
    const twoCol = document.getElementById('twoColArea');
    if (!twoCol) return;
    const left = twoCol.querySelector('.col-left');
    const right = twoCol.querySelector('.col-right');
    if (!left || !right) return;
    const maxH = Math.max(left.scrollHeight, right.scrollHeight);
    twoCol.style.minHeight = maxH + 'px';
  }

  adjustTwoColHeight();
  window.addEventListener('resize', adjustTwoColHeight);

  // ---- Image Strip Seamless Loop ----
  const strip = document.getElementById('imageStrip');
  if (strip) {
    const images = strip.querySelectorAll('img');
    let loaded = 0;
    const onAllLoaded = () => {
      const halfCount = Math.floor(images.length / 2);
      let totalWidth = 0;
      for (let i = 0; i < halfCount; i++) {
        totalWidth += images[i].offsetWidth;
      }
      if (totalWidth > 0) {
        const style = document.createElement('style');
        style.textContent = `
          @keyframes stripSlide {
            0% { transform: translateX(0); }
            100% { transform: translateX(-${totalWidth}px); }
          }
        `;
        document.head.appendChild(style);
      }
    };
    images.forEach(img => {
      if (img.complete) {
        loaded++;
        if (loaded === images.length) onAllLoaded();
      } else {
        img.addEventListener('load', () => {
          loaded++;
          if (loaded === images.length) onAllLoaded();
        });
      }
    });
  }

  // ---- Dropdown touch support ----
  const navItems = document.querySelectorAll('.nav-menu > li');
  navItems.forEach(item => {
    const sub = item.querySelector('.submenu');
    if (!sub) return;
    item.addEventListener('touchstart', (e) => {
      const open = sub.style.display === 'block';
      document.querySelectorAll('.submenu').forEach(s => s.style.display = 'none');
      if (!open) {
        sub.style.display = 'block';
        e.preventDefault();
      }
    });
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-menu')) {
      document.querySelectorAll('.submenu').forEach(s => s.style.display = '');
    }
  });

});
