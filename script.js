
const menu=document.getElementById("menuToggle"), nav=document.getElementById("nav");
if(menu&&nav){menu.onclick=()=>nav.classList.toggle("open");nav.querySelectorAll("a").forEach(a=>a.onclick=()=>nav.classList.remove("open"))}
if("IntersectionObserver" in window){
 const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");io.unobserve(e.target)}}),{threshold:.08});
 document.querySelectorAll(".reveal").forEach(x=>io.observe(x));
}else document.querySelectorAll(".reveal").forEach(x=>x.classList.add("visible"));
const val=id=>{const e=document.getElementById(id);return e?(e.value.trim()||"-"):"-"};
const send=text=>window.open("https://wa.me/905347262206?text="+encodeURIComponent(text),"_blank");
document.querySelectorAll("form[data-form]").forEach(f=>f.addEventListener("submit",e=>{
 e.preventDefault(); const t=f.dataset.form; let msg="";
 if(t==="general") msg=`Merhaba Çetin Design,\n\nGENEL TEKLİF\nAd/Firma: ${val("g_name")}\nTelefon: ${val("g_phone")}\nHizmet: ${val("g_service")}\nTalep: ${val("g_note")}`;
 if(t==="ambalaj") msg=`Merhaba Çetin Design,\n\nAMBALAJ TEKLİFİ\nAd/Firma: ${val("a_name")}\nTelefon: ${val("a_phone")}\nÜrün/Kutu: ${val("a_product")}\nAdet: ${val("a_qty")}\nŞehir: ${val("a_city")}\nNot: ${val("a_note")}`;
 if(t==="textile") msg=`Merhaba Çetin Design,\n\nTEKSTİL BASKI TEKLİFİ\nAd/Firma: ${val("t_name")}\nTelefon: ${val("t_phone")}\nÜrün: ${val("t_product")}\nAdet: ${val("t_qty")}\nRenk: ${val("t_color")}\nBaskı: ${val("t_print")}\nNot: ${val("t_note")}`;
 if(t==="promosyon") msg=`Merhaba Çetin Design,\n\nPROMOSYON TEKLİFİ\nAd/Firma: ${val("p_name")}\nTelefon: ${val("p_phone")}\nÜrün: ${val("p_product")}\nAdet: ${val("p_qty")}\nBaskı: ${val("p_print")}\nNot: ${val("p_note")}`;
 if(t==="matbaa") msg=`Merhaba Çetin Design,\n\nMATBAA/BASKI TEKLİFİ\nAd/Firma: ${val("m_name")}\nTelefon: ${val("m_phone")}\nÜrün: ${val("m_product")}\nAdet: ${val("m_qty")}\nÖzellik: ${val("m_print")}\nNot: ${val("m_note")}`;
 if(t==="bicak") msg=`Merhaba Çetin Design,\n\nBIÇAK & SARF TEKLİFİ\nAd/Firma: ${val("b_name")}\nTelefon: ${val("b_phone")}\nTip: ${val("b_type")}\nYükseklik: ${val("b_height")}\nKalınlık: ${val("b_thick")}\nMetre: ${val("b_meter")}\nPerfore: ${val("b_perf")}\nNot: ${val("b_note")}`;
 send(msg);
}));
