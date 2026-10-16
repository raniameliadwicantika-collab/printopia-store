const raw = `2|Roti
7|Roti jagung
8|Popcorn
9|Panekuk
10|Kue kering
11|Bacon dan telur
14|Pai wortel
15|Pai labu
16|Popcorn mentega
18|Hamburger;Pai bacon
19|Muffin raspberry
21|Kue wortel
23|Kue krim;Kue beri merah
24|Kue keju
25|Popcorn pedas;Sate domba
26|Muffin blackberry;Jus wortel
27|Burger ikan
28|Pai apel;Pai ikan;Jus apel
29|Es krim vanila
30|Tomat panggang;Jus ceri
31|Jus tomat;Jus beri;Kue keju blueberry
32|Lamb Doner Wrap;Spicy Bean Doner
33|Pizza;Muffin blueberry
34|Pai feta
35|Kue stroberi;Kentang panggang
36|Kue cokelat;Casserole
37|Pizza pedas
38|Kue kentang feta;Selai ceri
39|Roti kentang;Pai Shepherd;Es krim cokelat
40|Popcorn madu
41|Fish and Chips
42|Kue apel madu;Espresso
43|Caffè Latte
44|Popcorn cokelat
45|Pizza seafood;Caffè Mocha
46|Raspberry Mocha;Sup lobster;Sup domba
47|Cokelat panas;Sup tomat
48|Sate lobster
49|Sup labu;Quiche asparagus
50|Es krim wijen
51|Apel karamel;Sup asparagus
52|Toffee;Jus nanas
53|Sup ikan
54|Cokelat;Kue mewah;Saus kacang
56|Sushi gulung
57|Permen lolipop
58|Salad feta;Salad kacang
59|Sushi lobster
60|Roti bawang putih
61|Bagel sayuran
62|Salad BLT;Latte karamel
63|Sushi telur;Kacang madu
64|Smoothie beri;Camilan campur
65|Roti panggang bacon;Kue nanas;Pai cokelat;Sup kubis
66|Sandwich telur;Smoothie hijau;Saus zaitun
67|Salad pasta;Pai lemon;Asparagus panggang
68|Kue lemon;Milkshake selai kacang;Saus tomat
69|Roti panggang madu;Nasi goreng;Smoothie yoghurt;Tumis domba
70|Smoothie mentimun;Chutney blueberry
71|Jus jeruk;Sandwich selai kacang dan jeli
72|Sup bawang
73|Sup mi;Mi beras
74|Lasagna sayuran;Piring sayuran
75|Hot dog;Coleslaw;Permen kapas
76|Tart persik;Sushi besar;Donat polos;Salad bit
77|Salsa;Taco;Omelet warna-warni;Omelet musim semi;Taco kacang pedas
78|Sorbet jeruk;Corn dog;Sup kentang;Lumpia;Rempeyek wijen;Affogato
79|Taco ikan;Selai persik;Pasta lobster;Sandwich mentimun;Ikan pedas;Donat tabur;Omelet keju
80|Sosis bawang;Paprika isi
81|Sup paprika;Fondue cokelat
82|Quesadilla;Salad buah;Donat renyah
83|Es krim persik;Teh madu;Pasta carbonara;Pasta brokoli;Omelet nasi
84|Salad musim panas
85|Selai anggur
86|Es krim mint;Teh lemon;Kue jahe;Donat krim
87|Nachos;Pasta pedas;Sup brokoli;Kentang goreng bacon;Omelet kentang
88|Smoothie campur;Latte pisang dingin;Teh jahe apel;Donat bacon;Jus markisa
89|Teh jeruk;Kue buah;Salad jamur;Tumis tahu
90|Terong panggang
91|Roti pisang;Fondue keju;Pai genggam
92|Teh dingin;Roti panggang keju kambing;Jus semangka;Pai markisa
93|Smoothie wijen hitam
94|Panekuk pisang;Selai plum
95|Ikan kaleng
96|Es krim pisang split;Sate ikan;Selai markisa
97|Sup pai jamur;Jus mangga
98|Camilan cabai;Kimchi;Falafel
99|Parmesan terong;Fudge cokelat
100|Smoothie kakao;Permen cokelat goreng;Saus tart;Fondue tropis;Teh kamomil
101|Pasta jamur;Makarun
102|Smoothie plum
103|Samosa;Yoghurt polos
104|Sup jamur;Semur cabai;Smoothie tropis;Jus jambu biji;Kolak jambu biji
105|Yoghurt stroberi
106|Semur kacang arab;Sorbet buah
107|Teh delima
108|Fudge lemon;Kue delima
109|Hummus Wrap;Yoghurt tropis;Semur cabai;Cupcake polos;Cupcake jambu biji
110|Bola nasi
111|Fudge kacang
112|Semur musim dingin;Cupcake tropis
114|Cupcake kue kering;Wafel polos;Wafel beri
117|Salad jeruk;Wafel cokelat
118|Wafel blueberry
119|Wafel sarapan;Mangkuk sarapan;Bubur apel
120|Batang nanas dan kelapa;Bubur manis
122|Bubur segar
124|Milkshake vanila
125|Milkshake moka`;
const foods = [];
raw.trim().split("\n").forEach(line => {
  const [lev, names] = line.split("|");
  names.split(";").forEach(name => foods.push({level:Number(lev), name:name.trim()}));
});
const iconFor = name => {
 const n=name.toLowerCase();
 if(/jus|smoothie|latte|teh |espresso|mocha|milkshake|affogato/.test(n)) return "🥤";
 if(/sup |semur|bubur/.test(n)) return "🍜";
 if(n.includes("salad")) return "🥗";
 if(/sushi|ikan|lobster/.test(n)) return "🍣";
 if(n.includes("pizza")) return "🍕";
 if(n.includes("popcorn")) return "🍿";
 if(/roti|sandwich|bagel|wrap|burger|hamburger|hot dog/.test(n)) return "🥪";
 if(/es krim|sorbet/.test(n)) return "🍦";
 if(/kue|muffin|cupcake|donat|wafel|fudge|makarun/.test(n)) return "🧁";
 if(/pai |tart|quiche/.test(n)) return "🥧";
 if(/taco|quesadilla|nachos|salsa|falafel|samosa/.test(n)) return "🌮";
 if(/cokelat|fondue|permen/.test(n)) return "🍫";
 if(/omelet|telur/.test(n)) return "🍳";
 if(/nasi|mi |pasta|lasagna/.test(n)) return "🍝";
 return ["🍞","🍓","🍯","🍪","🍎","🥧","🍰"][name.length%7];
};
const $ = id => document.getElementById(id);
const search=$("search"), level=$("level"), products=$("products"), cart=new Map();
[...new Set(foods.map(f=>f.level))].sort((a,b)=>a-b).forEach(l=>{const o=document.createElement("option");o.value=l;o.textContent=`Level ${l}`;level.appendChild(o)});
function render(){
 const q=search.value.trim().toLocaleLowerCase("id"), lv=level.value;
 const list=foods.map((f,id)=>({...f,id})).filter(f=>(!q||f.name.toLocaleLowerCase("id").includes(q))&&(lv==="all"||f.level===+lv));
 products.innerHTML=list.map(f=>`<article class="card"><div class="foodicon">${iconFor(f.name)}</div><h3>${f.name}</h3><div class="meta"><span class="pill">🔓 Lv. ${f.level}</span><span class="type">FOOD</span></div><button class="add" data-add="${f.id}">＋ Tambah</button></article>`).join("");
 $("count").textContent=`Menampilkan ${list.length} dari ${foods.length} produk`;
 $("empty").hidden=!!list.length;
}
function renderCart(){
 let total=0;cart.forEach(v=>total+=v.qty);
 $("cartCount").textContent=total;$("total").textContent=`${total} item`;
 $("cartEmpty").style.display=cart.size?"none":"block";
 $("cartItems").innerHTML=[...cart].map(([id,v])=>`<div class="cartrow"><span class="rowicon">${iconFor(v.name)}</span><span class="rowname">${v.name}<small>Level ${v.level}</small></span><div class="qty"><button data-minus="${id}">−</button><b>${v.qty}</b><button data-plus="${id}">+</button></div></div>`).join("");
}
let toastTimer;function toast(s){$("toast").textContent=s;$("toast").classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>$("toast").classList.remove("show"),1800)}
products.addEventListener("click",e=>{const b=e.target.closest("[data-add]");if(!b)return;const id=+b.dataset.add,f=foods[id],v=cart.get(id)||{...f,qty:0};v.qty++;cart.set(id,v);renderCart();toast(`${f.name} masuk keranjang 💗`)});
$("cartItems").addEventListener("click",e=>{const p=e.target.closest("[data-plus]"),m=e.target.closest("[data-minus]");if(p){const v=cart.get(+p.dataset.plus);v.qty++;cart.set(+p.dataset.plus,v)}if(m){const id=+m.dataset.minus,v=cart.get(id);v.qty--;if(v.qty<1)cart.delete(id);else cart.set(id,v)}renderCart()});
search.addEventListener("input",render);level.addEventListener("change",render);
$("reset").addEventListener("click",()=>{search.value="";level.value="all";render()});
$("openCart").addEventListener("click",()=>{$("backdrop").hidden=false;renderCart()});
$("closeCart").addEventListener("click",()=>$("backdrop").hidden=true);
$("backdrop").addEventListener("click",e=>{if(e.target===$("backdrop"))$("backdrop").hidden=true});
$("copy").addEventListener("click",async()=>{if(!cart.size){toast("Keranjang masih kosong 🍓");return}const lines=["Pesanan Food Hay Day — Printopia Store",...([...cart.values()].map(v=>`${v.name} (Lv. ${v.level}) x${v.qty}`))];try{await navigator.clipboard.writeText(lines.join("\n"));toast("Daftar pesanan berhasil disalin 💗")}catch{const ta=document.createElement("textarea");ta.value=lines.join("\n");document.body.appendChild(ta);ta.select();document.execCommand("copy");ta.remove();toast("Daftar pesanan berhasil disalin 💗")}});
render();renderCart();
