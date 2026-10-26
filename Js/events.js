// Случайное событие: золотая искра, которую нужно успеть коснуться
G.Ev={
 next:0,el:null,
 schedule(){const C=G.C;this.next=Date.now()+(C.sparkMin+Math.random()*(C.sparkMax-C.sparkMin))*1000},
 tick(){if(G.paused||this.el||Date.now()<this.next)return;this.spawn()},
 spawn(){
  const d=document.createElement('div');d.className='spark';
  d.style.left=(10+Math.random()*75)+'%';d.style.top=(15+Math.random()*65)+'%';
  const kill=()=>{d.remove();this.el=null;this.schedule()};
  let tm=0;
  d.addEventListener('pointerdown',e=>{e.stopPropagation();
   const g=Math.max(G.E.ps()*40,G.E.clickPow()*20);G.E.add(g);
   G.A.spark();G.FX.burst(e.clientX,e.clientY,24,'#fff3b0');
   G.UI.pop(e.clientX,e.clientY-30,'+'+G.fmt(g),'big');clearTimeout(tm);kill()});
  document.body.appendChild(d);this.el=d;tm=setTimeout(kill,12000);
 }
};
