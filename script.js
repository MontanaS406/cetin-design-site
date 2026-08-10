// V4: animation fallback
if (!('IntersectionObserver' in window)) {
  document.querySelectorAll('.reveal').forEach(el => {
    el.classList.add('visible');
    el.style.opacity = '1';
    el.style.transform = 'none';
  });
}

document.getElementById("year").textContent = new Date().getFullYear();

const glow = document.getElementById("cursorGlow");
window.addEventListener("pointermove", e => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const delay = entry.target.dataset.delay || 0;
      setTimeout(() => entry.target.classList.add("visible"), Number(delay));
      io.unobserve(entry.target);
    }
  });
}, {threshold:.12});

document.querySelectorAll(".reveal").forEach(el => io.observe(el));

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
  document.body.classList.toggle("menu-open");
});
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  nav.classList.remove("open");
  document.body.classList.remove("menu-open");
}));

document.getElementById("quoteForm").addEventListener("submit", e => {
  e.preventDefault();
  const g = id => document.getElementById(id).value.trim() || "-";
  const text =
`Merhaba Çetin Design,

Ad / Firma: ${g("name")}
Telefon: ${g("phone")}
Ürün / Kutu: ${g("product")}
Tahmini adet: ${g("quantity")}
Şehir: ${g("city")}
Not: ${g("note")}

Teklif almak istiyorum.`;
  window.open("https://wa.me/905347262206?text=" + encodeURIComponent(text), "_blank");
});


const bladeForm = document.getElementById("bladeForm");
if (bladeForm) {
  bladeForm.addEventListener("submit", e => {
    e.preventDefault();
    const g = id => document.getElementById(id).value.trim() || "-";
    const text =
`Merhaba Çetin Design,

BIÇAK TEKLİF TALEBİ
Bıçak tipi: ${g("bladeType")}
Yükseklik: ${g("bladeHeight")}
Kalınlık: ${g("bladeThickness")}
Perfore bilgisi: ${g("bladePerf")}
Toplam metre: ${g("bladeMeters")}
Ek not: ${g("bladeNote")}

Fiyat ve uygunluk bilgisi rica ediyorum.`;
    window.open("https://wa.me/905347262206?text=" + encodeURIComponent(text), "_blank");
  });
}

const promoForm=document.getElementById("promoForm");
if(promoForm){promoForm.addEventListener("submit",e=>{e.preventDefault();const g=id=>document.getElementById(id).value.trim()||"-";const text=`Merhaba Çetin Design,

KURUMSAL BASKI & PROMOSYON TEKLİFİ
Ürün: ${g("promoProduct")}
Adet: ${g("promoQty")}
Baskı: ${g("promoPrint")}
Firma / Marka: ${g("promoBrand")}
Ek not: ${g("promoNote")}

Fiyat ve üretim süresi hakkında teklif rica ediyorum.`;window.open("https://wa.me/905347262206?text="+encodeURIComponent(text),"_blank")})}
