
const menuBtn=document.getElementById("menuBtn"),nav=document.getElementById("mainNav");
if(menuBtn&&nav){menuBtn.addEventListener("click",()=>nav.classList.toggle("open"));}
document.querySelectorAll(".dropbtn").forEach(btn=>btn.addEventListener("click",e=>{if(window.innerWidth<=760){e.preventDefault();btn.parentElement.classList.toggle("open")}}));

const products={
 wing:{name:"WINGED LION OVERSIZE TEE",image:"product-wing.webp",desc:"Çetin Design'ın ana imza grafiğini taşıyan oversize tişört. Siyah zemin, kanatlı aslan motifi ve altın tonlu tasarım dili."},
 signature:{name:"SIGNATURE TEE",image:"product-signature.webp",desc:"Daha sade bir Çetin Design görünümü isteyenler için minimal logo odaklı tişört."},
 detail:{name:"LION DETAIL TEE",image:"product-detail.webp",desc:"Kanatlı aslan çizgisini baskı detayının ön plana çıktığı daha grafik bir yorumla taşır."},
 sweat:{name:"HEAVY CREWNECK",image:"product-sweat.webp",desc:"Soğuk sezon için tasarlanan koyu, ağır ve minimal crewneck çizgisi."}
};
const q=new URLSearchParams(location.search),key=q.get("p");
if(document.getElementById("productPage")){
 const p=products[key]||products.wing;
 document.getElementById("pdName").textContent=p.name;
 document.getElementById("pdImage").src=p.image;
 document.getElementById("pdDesc").textContent=p.desc;
 let selectedSize="M",selectedColor="SİYAH";
 document.querySelectorAll("#sizes button").forEach(b=>b.onclick=()=>{document.querySelectorAll("#sizes button").forEach(x=>x.classList.remove("selected"));b.classList.add("selected");selectedSize=b.textContent});
 document.querySelectorAll("#colors button").forEach(b=>b.onclick=()=>{document.querySelectorAll("#colors button").forEach(x=>x.classList.remove("selected"));b.classList.add("selected");selectedColor=b.textContent});
 document.querySelector("#sizes button:nth-child(2)")?.classList.add("selected");
 document.getElementById("orderBtn").onclick=()=>{
   const msg=`Merhaba Çetin Design,%0A%0AÜrün siparişi vermek istiyorum.%0AÜrün: ${encodeURIComponent(p.name)}%0ABeden: ${selectedSize}%0ARenk: ${selectedColor}%0A%0AFiyat ve stok bilgisini iletebilir misiniz?`;
   window.open("https://wa.me/905347262206?text="+msg,"_blank");
 };
}
