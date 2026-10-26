G.FX=(()=>{
 const cv=document.getElementById('bg'),cx=cv.getContext('2d');
 let stars=[],parts=[],w=0,h=0;
 function resize(){const d=Math.min(window.devicePixelRatio||1,2);w=innerWidth;h=innerHeight;
  cv.width=w*d;cv.height=h*d;cx.setTransform(d,0,0,d,0,0);
  stars=Array.from({length:Math.round(w*h/9000)},()=>({x:Math.random()*w,y:Math.random()*h,r:Math.random()*1.4+.3,p:Math.random()*6}))}
 function burst(x,y,n,col){if(parts.length>200)return;
  for(let i=0;i<(n||8);i++)parts.push({x,y,vx:(Math.random()-.5)*6,vy:(Math.random()-.5)*6-1,l:1,c:col||'#ffd36b'})}
 function frame(t){requestAnimationFrame(frame);if(G.paused)return;
  cx.clearRect(0,0,w,h);
  const b=Math.min(1,.25+Math.log10(G.S.allTime+1)/10);
  cx.fillStyle='#fff';
  for(const s of stars){cx.globalAlpha=b*(.4+.6*Math.abs(Math.sin(t/1000+s.p)));
   cx.beginPath();cx.arc(s.x,s.y,s.r,0,7);cx.fill()}
  parts=parts.filter(p=>p.l>0);
  for(const p of parts){p.x+=p.vx;p.y+=p.vy;p.l-=.03;cx.globalAlpha=Math.max(p.l,0);
   cx.fillStyle=p.c;cx.beginPath();cx.arc(p.x,p.y,3,0,7);cx.fill()}
 }
 resize();addEventListener('resize',resize);requestAnimationFrame(frame);
 return{burst};
})();
