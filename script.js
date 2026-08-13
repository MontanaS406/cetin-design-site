
const m=document.getElementById('menuBtn'),n=document.getElementById('nav');if(m&&n)m.onclick=()=>n.classList.toggle('open');
document.querySelectorAll('.quick-form').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();const data=new FormData(f);let t='Merhaba Çetin Design,%0A%0A'+encodeURIComponent(f.dataset.prefix+' TEKLİFİ')+'%0A';for(const [k,v] of data.entries())t+=encodeURIComponent(k+': '+v)+'%0A';window.open('https://wa.me/905347262206?text='+t,'_blank')}));
