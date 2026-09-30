// Sticky nav shadow
const nav = document.getElementById('nav');
addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 30), {passive:true});

// Mobile menu
const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');
toggle.addEventListener('click', () => links.classList.toggle('open'));
links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));

// Reveal on scroll
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
}, {threshold: .12});
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Project filters
const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('#projectCards .card');
filters.forEach(btn => btn.addEventListener('click', () => {
  filters.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const f = btn.dataset.filter;
  cards.forEach(c => c.classList.toggle('hidden', f !== 'all' && c.dataset.emirate !== f));
}));

// Lead form -> WhatsApp with prefilled message
document.getElementById('leadForm').addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('fName').value.trim();
  const budget = document.getElementById('fBudget').value;
  const msg = document.getElementById('fMsg').value.trim();
  let text = `Hi Usman, I'm ${name}. I'm interested in UAE off-plan property. Budget: ${budget}.`;
  if (msg) text += ` ${msg}`;
  open(`https://wa.me/971568445126?text=${encodeURIComponent(text)}`, '_blank');
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

const LEAD_ENDPOINT = 'https://formsubmit.co/ajax/daksales2019@gmail.com';
async function sendLead(payload){
  const res = await fetch(LEAD_ENDPOINT, {
    method:'POST', headers:{'Content-Type':'application/json','Accept':'application/json'},
    body: JSON.stringify(Object.assign({_template:'table'}, payload))
  });
  if(!res.ok) throw new Error('lead failed');
  return res.json();
}

// Gated PDF downloads
const dlModal = document.getElementById('dlModal');
const dlForm = document.getElementById('dlForm');
const dlTitle = document.getElementById('dlTitle');
const dlMsg = document.getElementById('dlMsg');
const dlSubmit = document.getElementById('dlSubmit');
let currentPdf = null, currentTitle = '';

document.querySelectorAll('.brief-btn').forEach(btn => btn.addEventListener('click', () => {
  currentPdf = btn.dataset.pdf; currentTitle = btn.dataset.title;
  dlTitle.textContent = currentTitle;
  dlMsg.textContent = 'No spam, no sharing your details.';
  dlModal.classList.add('open'); dlModal.setAttribute('aria-hidden','false');
}));
const closeDl = () => { dlModal.classList.remove('open'); dlModal.setAttribute('aria-hidden','true'); };
document.getElementById('dlClose').addEventListener('click', closeDl);
dlModal.addEventListener('click', e => { if (e.target === dlModal) closeDl(); });
addEventListener('keydown', e => { if (e.key === 'Escape') closeDl(); });

dlForm.addEventListener('submit', async e => {
  e.preventDefault();
  const name = document.getElementById('dlName').value.trim();
  const email = document.getElementById('dlEmail').value.trim();
  const phone = document.getElementById('dlPhone').value.trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { dlMsg.textContent = 'Please enter a valid email address.'; return; }
  if (!/^\+?[0-9\s\-()]{7,18}$/.test(phone)) { dlMsg.textContent = 'Please enter a valid mobile number.'; return; }
  dlSubmit.disabled = true; dlSubmit.textContent = 'Preparing your download…';
  const download = async () => {
    try {
      const res = await fetch(currentPdf, {mode:'cors'});
      if (!res.ok) throw new Error('fetch failed');
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a'); a.href = url;
      a.download = currentTitle.replace(/[^a-z0-9]+/gi,'-').toLowerCase()+'.pdf';
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(()=>URL.revokeObjectURL(url), 5000);
    } catch(e) {
      const a = document.createElement('a'); a.href = currentPdf; a.target='_blank'; a.rel='noopener';
      document.body.appendChild(a); a.click(); a.remove();
    }
  };
  try {
    await sendLead({name, email, phone, _subject:'PDF download: '+currentTitle,
      message: name+' ('+email+', '+phone+') downloaded '+currentTitle});
    await download();
    dlMsg.textContent = 'Done — your download has started. I have your details and will be in touch.';
  } catch(err) {
    await download();
    dlMsg.textContent = 'Download started. My email capture hiccupped — message me on WhatsApp so I have your details.';
  }
  dlSubmit.disabled = false; dlSubmit.textContent = 'Download Now';
});

// Newsletter subscribe
document.getElementById('newsForm').addEventListener('submit', async e => {
  e.preventDefault();
  const email = document.getElementById('newsEmail').value.trim();
  const msg = document.getElementById('newsMsg');
  const btn = e.target.querySelector('button');
  btn.disabled = true; btn.textContent = 'Subscribing…';
  try {
    await sendLead({email, _subject:'Newsletter subscription — The Alpha Investor',
      message: email+' subscribed to The Alpha Brief daily newsletter.'});
    msg.textContent = "You're in — the next Alpha Brief lands in your inbox tomorrow morning.";
    e.target.reset();
  } catch(err) {
    msg.textContent = 'Something hiccupped — please message me on WhatsApp and I\'ll add you manually.';
  }
  btn.disabled = false; btn.textContent = 'Subscribe';
});
