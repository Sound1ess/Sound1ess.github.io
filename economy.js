G.E={
 permMult(){const S=G.S;return(1+S.echoes*G.C.echoBonus)*(S.x2?2:1)},
 mult(){return this.permMult()*(Date.now()<G.S.boostUntil?2:1)},
 genCost(g){return Math.ceil(g.base*Math.pow(G.C.growth,G.S.gens[g.id]))},
 clickCost(){return Math.ceil(G.C.clickBase*Math.pow(G.C.clickGrowth,G.S.clickLvl))},
 clickPow(){return(1+G.S.clickLvl*2)*this.mult()},
 basePs(){return G.GENS.reduce((a,g)=>a+G.S.gens[g.id]*g.ps,0)},
 ps(){return this.basePs()*this.mult()},
 echoGain(){return Math.floor(Math.sqrt(G.S.total/G.C.rebirthMin))},
 add(x){const S=G.S;S.light+=x;S.total+=x;S.allTime+=x},
 click(){const p=this.clickPow();this.add(p);G.S.clicks++;return p},
 tick(dt){this.add(this.ps()*dt)},
 buyGen(id){const g=G.GENS.find(x=>x.id===id),c=this.genCost(g);
  if(G.S.light<c)return false;G.S.light-=c;G.S.gens[id]++;return true},
 buyClick(){const c=this.clickCost();if(G.S.light<c)return false;G.S.light-=c;G.S.clickLvl++;return true},
 rebirth(){const g=this.echoGain();if(g<1)return 0;const S=G.S;
  S.echoes+=g;S.rebirths++;S.light=0;S.total=0;S.clickLvl=0;
  G.GENS.forEach(x=>S.gens[x.id]=0);return g},
 boost(){G.S.boostUntil=Math.max(Date.now(),G.S.boostUntil)+G.C.boostMs},
 // Доход за время отсутствия (без временного буста)
 away(sec){sec=Math.min(sec,G.C.offlineCap);
  const g=this.basePs()*this.permMult()*sec*G.C.offlineRate;if(g>1)this.add(g);return g>1?g:0},
 // Открывает следующую главу, если пора. Возвращает её номер или -1
 advanceChapter(){const S=G.S,n=S.chap+1;
  if(n<G.CHAPTERS.length&&S.allTime>=G.CHAPTERS[n].at){S.chap=n;return n}return -1},
 applyProduct(id){const d=G.SHOP.find(s=>s.id===id);if(!d)return;
  if(id==='x2_forever')G.S.x2=true;if(d.echo)G.S.echoes+=d.echo}
};
