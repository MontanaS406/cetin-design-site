const menuBtn=document.getElementById("menuBtn"),nav=document.getElementById("mainNav");
if(menuBtn&&nav){menuBtn.addEventListener("click",()=>nav.classList.toggle("open"));}
document.querySelectorAll(".dropbtn").forEach(btn=>btn.addEventListener("click",e=>{if(window.innerWidth<=760){e.preventDefault();btn.parentElement.classList.toggle("open")}}));
async function setupProductPage(){
 if(!document.getElementById("productPage")) return;
 const slug=new URLSearchParams(location.search).get("p")||"winged-lion-oversize-tee";
 let p;
 try{const r=await fetch("/api/products/"+encodeURIComponent(slug));if(!r.ok) throw new Error();p=await r.json();}
 catch{p={name:"WINGED LION OVERSIZE TEE",image:"product-wing.webp",description:"Çetin Design imza grafiğini taşıyan oversize tişört.",sizes:["S","M","L","XL"],colors:["Siyah"],price:0};}
 document.getElementById("pdName").textContent=p.name;document.getElementById("pdImage").src=p.image||"";document.getElementById("pdDesc").textContent=p.description||"";
 const sizes=document.getElementById("sizes"),colors=document.getElementById("colors");
 sizes.innerHTML=(p.sizes||[]).map(x=>`<button>${x}</button>`).join("");colors.innerHTML=(p.colors||[]).map(x=>`<button>${x}</button>`).join("");
 let selectedSize=(p.sizes||[])[0]||"",selectedColor=(p.colors||[])[0]||"";sizes.querySelector("button")?.classList.add("selected");colors.querySelector("button")?.classList.add("selected");
 sizes.querySelectorAll("button").forEach(b=>b.onclick=()=>{sizes.querySelectorAll("button").forEach(x=>x.classList.remove("selected"));b.classList.add("selected");selectedSize=b.textContent});
 colors.querySelectorAll("button").forEach(b=>b.onclick=()=>{colors.querySelectorAll("button").forEach(x=>x.classList.remove("selected"));b.classList.add("selected");selectedColor=b.textContent});
 const note=document.querySelector(".pd-note");if(note)note.textContent=Number(p.price||0)>0?`Fiyat: ${Number(p.price).toLocaleString("tr-TR")} TL`:"Fiyat ve stok bilgisi sipariş sırasında teyit edilir.";
 document.getElementById("orderBtn").onclick=()=>{const msg=`Merhaba Çetin Design,\n\nÜrün siparişi vermek istiyorum.\nÜrün: ${p.name}\nBeden: ${selectedSize}\nRenk: ${selectedColor}\n${p.price?`Fiyat: ${p.price} TL\n`:""}\nStok bilgisini teyit eder misiniz?`;window.open("https://wa.me/905347262206?text="+encodeURIComponent(msg),"_blank")};
}
setupProductPage();
const header=document.querySelector('.topbar');window.addEventListener('scroll',()=>header?.classList.toggle('scrolled',window.scrollY>20),{passive:true});