G.KEY='lastbeacon_v2';
G.newState=()=>{const s={v:2,light:0,total:0,allTime:0,clicks:0,clickLvl:0,echoes:0,rebirths:0,
 chap:0,boostUntil:0,x2:false,seen:Date.now(),lang:null,sound:true,gens:{}};
 G.GENS.forEach(g=>s.gens[g.id]=0);return s};
G.S=G.newState();

// Принимаем из сохранения только поля нужного типа
G.sanitize=d=>{const s=G.newState();
 for(const k of Object.keys(s)){if(k==='gens'||k==='lang')continue;const v=d[k];
  if(typeof v===typeof s[k]&&(typeof v!=='number'||Number.isFinite(v)))s[k]=v}
 if(typeof d.lang==='string')s.lang=d.lang;
 if(d.gens&&typeof d.gens==='object')G.GENS.forEach(g=>{const n=d.gens[g.id];
  if(Number.isFinite(n)&&n>=0)s.gens[g.id]=Math.floor(n)});
 s.allTime=Math.max(s.allTime,s.total);
 s.chap=Math.min(Math.max(0,Math.floor(s.chap)),G.CHAPTERS.length-1);
 return s};

G.readLocal=()=>{for(const k of [G.KEY,'beacon']){
 try{const d=JSON.parse(localStorage.getItem(k));if(d&&typeof d==='object')return d}catch(e){}}return null};

// force=true — сохранить в облако немедленно (покупка, перерождение, сворачивание)
G.save=force=>{G.S.seen=Date.now();
 try{localStorage.setItem(G.KEY,JSON.stringify(G.S))}catch(e){}
 G.Y.saveCloud(force)};

G.load=async()=>{const l=G.readLocal();let best=l?G.sanitize(l):null;
 const c=await G.Y.loadCloud();
 if(c&&typeof c==='object'){const cs=G.sanitize(c);if(!best||cs.seen>best.seen)best=cs}
 if(best)G.S=best;return !!best};
