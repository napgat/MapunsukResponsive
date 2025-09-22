
(() => {
  const overlay     = document.getElementById('memberOverlay');
  const bodySlot    = document.getElementById('overlay-body');

  // เปิด overlay และโหลดเนื้อหา <main> จากไฟล์ปลายทาง
  async function openOverlay(href) {
    try {
      const res  = await fetch(href, { credentials: 'same-origin' });
      const html = await res.text();
      const doc  = new DOMParser().parseFromString(html, 'text/html');

      // ดึงเฉพาะ <main> ของหน้า viewmember
      const main = doc.querySelector('main');
      bodySlot.innerHTML = main ? main.innerHTML : '<p style="padding:1rem">ไม่พบข้อมูล</p>';

      // ทำ table responsive (หุ้มด้วย div ที่เลื่อนแนวนอนได้)
      bodySlot.querySelectorAll('table').forEach(t => {
        const wrap = document.createElement('div');
        wrap.className = 'table-scroll';
        t.parentNode.insertBefore(wrap, t);
        wrap.appendChild(t);
      });

      // ปุ่มปิดในเนื้อหา (ปุ่ม .close-btn ของหน้า viewmember)
      bodySlot.querySelectorAll('.close-btn').forEach(btn => {
        btn.addEventListener('click', e => {
          e.preventDefault(); // กันการนำทางกลับหน้า managepost
          closeOverlay();
        });
      });

      // แสดง overlay
      overlay.hidden = false;
      document.body.style.overflow = 'hidden';
    } catch (e) {
      console.error(e);
      bodySlot.innerHTML = '<p style="padding:1rem">โหลดข้อมูลไม่สำเร็จ</p>';
      overlay.hidden = false;
    }
  }

  function closeOverlay() {
    overlay.hidden = true;
    bodySlot.innerHTML = '';
    document.body.style.overflow = '';
  }

  // เปิดจากปุ่ม “ดูสมาชิก”
  document.querySelectorAll('.view-members').forEach(btn => {
    btn.addEventListener('click', () => openOverlay(btn.dataset.href || 'viewmember.html'));
  });

  // ปิดเมื่อคลิกฉากหลัง/ปุ่มกากบาท
  overlay.addEventListener('click', e => {
    if (e.target.matches('[data-close]')) closeOverlay();
  });

  // ปิดด้วยปุ่ม ESC
  document.addEventListener('keydown', e => {
    if (!overlay.hidden && e.key === 'Escape') closeOverlay();
  });
})();
