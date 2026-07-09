// إعدادات بسيطة للتفاعل والتحقق
document.getElementById('year').textContent = new Date().getFullYear();

// بيانات المشاريع/التدريب من السيرة (عدل أو أضف مشاريع حقيقية)
const projects = [
  { 
    title: 'تدريب عملي - برمجة وشبكات', 
    desc: 'تدريب في شركة لمدة 7 أشهر شمل مهام برمجة ودعم شبكات.', 
    img: 'project1.jpg', 
    live: '#', 
    code: '#' 
  }
];

const grid = document.getElementById('projectsGrid');
if (grid) {
  grid.innerHTML = '';
  projects.forEach(p => {
    const card = document.createElement('article');
    card.className = 'project-card';
    card.innerHTML = `
      <img src="${p.img}" alt="${p.title}" />
      <div class="project-body">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="project-links">
          <a href="${p.live}" target="_blank" rel="noopener">عرض</a>
          <a href="${p.code}" target="_blank" rel="noopener">كود</a>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// نموذج التواصل: تحقق محلي ثم فتح mailto
const form = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');
if (form) {
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if(!name || !email || !message){
      formMsg.textContent = 'يرجى ملء جميع الحقول.';
      formMsg.style.color = 'crimson';
      return;
    }

    const subject = encodeURIComponent(`رسالة من ${name}`);
    const body = encodeURIComponent(`الاسم: ${name}\nالبريد: ${email}\n\n${message}`);
    window.location.href = `mailto:moayad.al.shwaeky1515@gmail.com?subject=${subject}&body=${body}`;

    formMsg.textContent = 'جارٍ فتح تطبيق البريد لإرسال الرسالة...';
    formMsg.style.color = 'green';
  });

  document.getElementById('resetBtn').addEventListener('click', () => {
    form.reset();
    formMsg.textContent = '';
  });
}

// زر القائمة (☰)
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}
