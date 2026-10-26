// Звук генерируется кодом, внешних файлов нет
G.A=(()=>{
 let ctx=null,master=null,paused=false;
 const on=()=>G.S.sound&&!paused;
 function apply(){if(!ctx)return;
  master.gain.setTargetAtTime(on()?.6:0,ctx.currentTime,.05);
  if(paused&&ctx.state==='running')ctx.suspend();
  else if(!paused&&ctx.state==='suspended')ctx.resume()}
 function drone(){const f=ctx.createBiquadFilter();f.type='lowpass';f.frequency.value=400;
  const g=ctx.createGain();g.gain.value=.08;
  [55,82.4,110.3].forEach((hz,i)=>{const o=ctx.createOscillator();o.type=i?'sine':'triangle';
   o.frequency.value=hz;o.detune.value=i*4;o.connect(f);o.start()});
  const lfo=ctx.createOscillator(),lg=ctx.createGain();lfo.frequency.value=.12;lg.gain.value=.03;
  lfo.connect(lg);lg.connect(g.gain);lfo.start();f.connect(g);g.connect(master)}
 function init(){if(ctx)return;const C=window.AudioContext||window.webkitAudioContext;if(!C)return;
  try{ctx=new C()}catch(e){return}
  master=ctx.createGain();master.gain.value=0;master.connect(ctx.destination);drone();apply()}
 function tone(f,dur,type,vol,delay){if(!ctx||!on())return;const t=ctx.currentTime+(delay||0);
  const o=ctx.createOscillator(),g=ctx.createGain();o.type=type||'sine';o.frequency.value=f;
  g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(vol||.2,t+.01);
  g.gain.exponentialRampToValueAtTime(.0001,t+dur);o.connect(g);g.connect(master);o.start(t);o.stop(t+dur+.05)}
 return{init,refresh:apply,setPaused(p){paused=p;apply()},
  click(){tone(520+Math.random()*180,.18,'sine',.12)},
  buy(){tone(660,.12,'triangle',.15);tone(990,.18,'triangle',.12,.08)},
  spark(){[880,1175,1568].forEach((f,i)=>tone(f,.35,'sine',.14,i*.07))},
  chapter(){[262,330,392,523].forEach((f,i)=>tone(f,1.2,'sine',.12,i*.12))},
  fail(){tone(160,.15,'square',.08)}};
})();
