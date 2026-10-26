G.paused=false;
G.setPause=p=>{G.paused=p;G.A.setPaused(p)};
document.addEventListener('visibilitychange',()=>{
 if(document.hidden){G.save(true);G.setPause(true)}else G.setPause(false)});

(async()=>{
 await G.Y.init();
 const had=await G.load();
 G.lang=G.pickLang(G.S.lang,G.Y.lang());
 let away=0;
 if(had){const sec=(Date.now()-G.S.seen)/1000;if(sec>30)away=G.E.away(sec)}
 await G.Y.restore();
 G.UI.init();
 if(away>0)G.UI.modal({title:G.t('welcome'),text:G.t('away',{n:G.fmt(away)})});
 G.Ev.schedule();

 let last=Date.now(),acc=0;
 setInterval(()=>{
  const n=Date.now(),dt=(n-last)/1000;last=n;
  if(dt>10)G.E.away(dt);else G.E.tick(dt);   // долгий «провал» (сон устройства) считаем как оффлайн
  const c=G.E.advanceChapter();if(c>=0)G.UI.chapter(c);
  G.Ev.tick();G.UI.hud();
  acc+=dt;if(acc>=.25){acc=0;G.UI.update()}
 },100);
 setInterval(()=>G.save(),15000);

 G.save();
 G.Y.ready();
})();
