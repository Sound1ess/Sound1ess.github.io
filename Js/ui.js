G.UI=(()=>{
 const $=id=>document.getElementById(id),t=(k,v)=>G.t(k,v),fmt=G.fmt;
 let tab='up',rows={},popCount=0,queue=[],modalOpen=false;

 // ---- вспомогательное ----
 function el(cls,html,fn){const d=document.createElement('div');d.className=cls;d.innerHTML=html;
  if(fn)d.addEventListener('click',fn);return d}
 function setText(e,s,v){const n=e.querySelector(s);if(n&&n.textContent!==v)n.textContent=v}
 function toast(s){const e=$('toast');e.textContent=s;e.classList.add('on');
  clearTimeout(toast.t);toast.t=setTimeout(()=>e.classList.remove('on'),2200)}
 function pop(x,y,text,cls){if(popCount>25)return;popCount++;
  const d=document.createElement('div');d.className='pop '+(cls||'');d.textContent=text;
  d.style.left=x+'px';d.style.top=y+'px';document.body.appendChild(d);
  setTimeout(()=>{d.remove();popCount--},900)}

 // ---- окна ----
 function modal(o){queue.push(o);if(!modalOpen)nextModal()}
 function nextModal(){const o=queue.shift();
  if(!o){modalOpen=false;$('modal').style.display='none';return}
  modalOpen=true;$('mt').textContent=o.title;$('mx').textContent=o.text;
  $('mb').textContent=o.ok||t('continue');
  const c=$('mc');c.style.display=o.cancel?'':'none';c.textContent=t('cancel');
  $('modal').style.display='flex';
  $('mb').onclick=()=>{if(o.onOk)o.onOk();nextModal()};
  c.onclick=()=>nextModal()}

 // ---- вкладки ----
 function buildUp(L){
  rows.click=el('item',`<div><b>${t('touch')}</b><small data-d></small></div><div class="cost" data-c></div>`,
   ()=>{if(G.E.buyClick()){G.A.buy();update()}else G.A.fail()});
  L.appendChild(rows.click);
  G.GENS.forEach(g=>{
   rows[g.id]=el('item',`<div><b>${t('gen.'+g.id)}</b><small data-d></small></div><div class="r"><div class="cnt" data-k></div><div class="cost" data-c></div></div>`,
    ()=>{if(G.E.buyGen(g.id)){G.A.buy();update()}else G.A.fail()});
   L.appendChild(rows[g.id])});
  rows.rebirth=el('item',`<div><b>${t('rebirth')}</b><small data-d></small></div>`,()=>{
   if(G.E.echoGain()<1){G.A.fail();return}
   modal({title:t('rebirth'),text:t('rebirthAsk',{g:G.E.echoGain()}),ok:t('rebirthDo'),cancel:true,
    onOk:()=>{G.E.rebirth();G.save(true);G.Y.interstitial();update();hud()}})});
  L.appendChild(rows.rebirth)}

 function buildStory(L){
  G.CHAPTERS.forEach((c,i)=>{
   L.appendChild(i<=G.S.chap
    ?el('story',`<b>${t('ch.'+c.id+'.t')}</b><br>${t('ch.'+c.id+'.x')}`)
    :el('story lock',t('locked',{n:fmt(c.at)})))})}

 function buildShop(L){
  rows.ad=el('item',`<div><b>${t('ad.t')}</b><small>${t('ad.d')}</small></div>`,
   ()=>G.Y.rewarded(()=>{G.E.boost();G.save();toast(t('boostOn'))}));
  L.appendChild(rows.ad);
  G.SHOP.forEach(d=>{
   rows[d.id]=el('item',`<div><b>${t('p.'+d.id+'.t')}</b><small>${t('p.'+d.id+'.d')}</small></div><div class="cost" data-c></div>`,()=>{
    if(d.id==='x2_forever'&&G.S.x2)return;
    G.Y.buy(d.id,p=>{
     if(!p){toast(t('buyFail'));return}
     G.E.applyProduct(d.id);G.save(true);
     if(d.type==='cons')G.Y.consume(p);
     G.A.buy();update();hud()})});
   L.appendChild(rows[d.id])})}

 function buildSet(L){
  L.appendChild(el('item',`<div><b>${t('set.sound')}</b></div><div class="cost">${G.S.sound?t('on'):t('off')}</div>`,
   ()=>{G.S.sound=!G.S.sound;G.A.refresh();G.save();build()}));
  L.appendChild(el('item',`<div><b>${t('set.lang')}</b></div><div class="cost">${G.lang==='ru'?'Русский':'English'}</div>`,
   ()=>setLang(G.lang==='ru'?'en':'ru')));
  L.appendChild(el('item',`<div><b>${t('set.reset')}</b></div>`,
   ()=>modal({title:t('set.reset'),text:t('set.resetAsk'),ok:t('set.resetDo'),cancel:true,
    onOk:()=>{const l=G.S.lang;G.S=G.newState();G.S.lang=l;G.save(true);build();hud()}})))}

 function build(){const L=$('list');L.innerHTML='';rows={};
  ({up:buildUp,story:buildStory,shop:buildShop,set:buildSet})[tab](L);update()}

 function update(){const S=G.S,E=G.E;
  if(tab==='up'){
   const m=E.mult(),cc=E.clickCost();
   setText(rows.click,'[data-d]',t('lvlPerClick',{l:S.clickLvl,p:fmt(E.clickPow())}));
   setText(rows.click,'[data-c]',fmt(cc));rows.click.classList.toggle('off',S.light<cc);
   G.GENS.forEach(g=>{const r=rows[g.id],c=E.genCost(g);
    setText(r,'[data-d]',t('perSec',{p:fmt(g.ps*m)}));
    setText(r,'[data-k]',String(S.gens[g.id]));
    setText(r,'[data-c]',fmt(c));r.classList.toggle('off',S.light<c)});
   const eg=E.echoGain();
   setText(rows.rebirth,'[data-d]',t('rebirthInfo',{e:S.echoes,g:eg,min:fmt(G.C.rebirthMin)}));
   rows.rebirth.classList.toggle('off',eg<1);
  }else if(tab==='shop'){
   G.SHOP.forEach(d=>{const own=d.id==='x2_forever'&&S.x2,cat=G.Y.catalog[d.id];
    setText(rows[d.id],'[data-c]',own?t('owned'):(cat&&cat.price)||t('buy'));
    rows[d.id].classList.toggle('off',own)})}}

 function hud(){const S=G.S,E=G.E;
  $('light').textContent=fmt(S.light);
  $('ps').textContent=t('hudPs',{p:fmt(E.ps()),m:+E.mult().toFixed(2)});
  const r=S.boostUntil-Date.now();
  $('boost').textContent=r>0?t('boost',{s:Math.ceil(r/1000)}):'';
  $('chap').textContent='«'+t('ch.'+G.CHAPTERS[S.chap].id+'.t')+'»'}

 function chapter(i){const id=G.CHAPTERS[i].id;G.A.chapter();
  modal({title:t('chapter',{t:t('ch.'+id+'.t')}),text:t('ch.'+id+'.x')});
  if(tab==='story')build()}

 function applyStatic(){
  document.documentElement.lang=G.lang;document.title=G.lang==='ru'?'Последний Маяк':'Last Beacon';
  document.querySelectorAll('[data-i18n]').forEach(e=>e.textContent=t(e.dataset.i18n))}
 function setLang(l){G.lang=l;G.S.lang=l;G.save();applyStatic();build();hud()}

 function init(){
  applyStatic();
  $('tabs').onclick=e=>{const b=e.target.closest('button');if(!b)return;tab=b.dataset.t;
   document.querySelectorAll('#tabs button').forEach(x=>x.classList.toggle('on',x===b));build()};
  $('beacon').addEventListener('pointerdown',e=>{
   const p=G.E.click();G.A.click();
   pop(e.clientX-10+Math.random()*20,e.clientY-30,'+'+fmt(p));G.FX.burst(e.clientX,e.clientY)});
  document.addEventListener('pointerdown',()=>G.A.init(),{once:true});
  build();hud()}

 return{init,modal,pop,toast,hud,update,chapter};
})();
