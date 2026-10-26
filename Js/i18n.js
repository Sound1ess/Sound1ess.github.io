G.DICT={
ru:{
 'tab.up':'Улучшения','tab.story':'Хроники','tab.shop':'Магазин','tab.set':'⚙',
 'hudPs':'{p} света/сек · ×{m}','boost':'⚡ Ускорение ×2: {s} с','boostOn':'Ускорение включено!',
 'touch':'Сила касания','lvlPerClick':'Уровень {l} · +{p} за клик','perSec':'+{p}/сек каждая',
 'rebirth':'✦ Перерождение',
 'rebirthInfo':'Эхо: {e} (+{g} сейчас). Каждое даёт +10% навсегда. Нужно ≥{min} света за забег.',
 'rebirthAsk':'Весь свет и постройки сбросятся, но ты получишь Эхо: {g}. История и покупки сохранятся.',
 'rebirthDo':'Переродиться','locked':'🔒 Откроется при {n} света','chapter':'Глава: {t}',
 'welcome':'С возвращением!','away':'Пока тебя не было, Маяк собрал {n} света.',
 'continue':'Продолжить','cancel':'Отмена',
 'ad.t':'▶ Ускорение ×2','ad.d':'Посмотри рекламу — 2 минуты удвоенного света',
 'buy':'Купить','owned':'Куплено','buyFail':'Покупка не удалась',
 'p.x2_forever.t':'Благословение Маяка','p.x2_forever.d':'Весь свет ×2 навсегда',
 'p.echo_pack.t':'Пакет Эха','p.echo_pack.d':'+5 Эха (+10% за каждое навсегда)',
 'set.sound':'Звук','on':'Вкл','off':'Выкл','set.lang':'Язык',
 'set.reset':'Сбросить прогресс','set.resetAsk':'Удалить весь прогресс? Это нельзя отменить.','set.resetDo':'Удалить',
 'gen.candle':'Свеча надежды','gen.lamp':'Лампада предков','gen.crystal':'Кристалл эха',
 'gen.forge':'Звёздный горн','gen.portal':'Врата рассвета','gen.heart':'Сердце галактики',
 'ch.dark.t':'Тьма','ch.dark.x':'Звёзды погасли одна за другой. Остался только ты — Хранитель и древний Маяк. Коснись его, и он вспомнит, что такое свет.',
 'ch.spark.t':'Первая искра','ch.spark.x':'Маяк дрогнул. Где-то в пустоте открылся чей-то глаз. Тьма заметила тебя.',
 'ch.voices.t':'Голоса','ch.voices.x':'В свете Маяка слышны шёпоты прежних Хранителей: «Не останавливайся. Свет — это память».',
 'ch.city.t':'Город из пепла','ch.city.x':'Свет выхватил из мрака руины города, где когда-то жили те, кто зажёг первый Маяк.',
 'ch.betrayal.t':'Предательство','ch.betrayal.x':'Ты узнаёшь правду: Маяк погасил не враг. Его погасили, чтобы тебя защитить. Но от чего?',
 'ch.devourer.t':'Пожиратель','ch.devourer.x':'Из тьмы поднимается Пожиратель Света. Он не зол — он просто голоден, как был голоден всегда.',
 'ch.dawn.t':'Рассвет','ch.dawn.x':'Свет коснулся последней звезды. Но круг замкнулся: каждый Хранитель когда-то был Пожирателем. Перерождение — единственный путь.'
},
en:{
 'tab.up':'Upgrades','tab.story':'Chronicles','tab.shop':'Shop','tab.set':'⚙',
 'hudPs':'{p} light/sec · ×{m}','boost':'⚡ Boost ×2: {s}s','boostOn':'Boost activated!',
 'touch':'Touch power','lvlPerClick':'Level {l} · +{p} per tap','perSec':'+{p}/sec each',
 'rebirth':'✦ Rebirth',
 'rebirthInfo':'Echoes: {e} (+{g} now). Each gives +10% forever. Needs ≥{min} light per run.',
 'rebirthAsk':'All light and buildings will reset, but you will gain Echoes: {g}. Story and purchases are kept.',
 'rebirthDo':'Be reborn','locked':'🔒 Unlocks at {n} light','chapter':'Chapter: {t}',
 'welcome':'Welcome back!','away':'While you were away, the Beacon gathered {n} light.',
 'continue':'Continue','cancel':'Cancel',
 'ad.t':'▶ Boost ×2','ad.d':'Watch an ad — 2 minutes of double light',
 'buy':'Buy','owned':'Owned','buyFail':'Purchase failed',
 'p.x2_forever.t':'Blessing of the Beacon','p.x2_forever.d':'All light ×2 forever',
 'p.echo_pack.t':'Echo Pack','p.echo_pack.d':'+5 Echoes (+10% forever for each)',
 'set.sound':'Sound','on':'On','off':'Off','set.lang':'Language',
 'set.reset':'Reset progress','set.resetAsk':'Delete all progress? This cannot be undone.','set.resetDo':'Delete',
 'gen.candle':'Candle of Hope','gen.lamp':"Ancestors' Lamp",'gen.crystal':'Echo Crystal',
 'gen.forge':'Star Forge','gen.portal':'Dawn Gate','gen.heart':'Heart of the Galaxy',
 'ch.dark.t':'Darkness','ch.dark.x':'The stars went out one by one. Only you remain — the Keeper and the ancient Beacon. Touch it, and it will remember what light is.',
 'ch.spark.t':'First Spark','ch.spark.x':'The Beacon trembled. Somewhere in the void, an eye opened. The darkness has noticed you.',
 'ch.voices.t':'Voices','ch.voices.x':'In the Beacon\'s glow you hear the whispers of past Keepers: "Do not stop. Light is memory."',
 'ch.city.t':'City of Ash','ch.city.x':'The light picked out the ruins of a city where those who lit the first Beacon once lived.',
 'ch.betrayal.t':'Betrayal','ch.betrayal.x':'You learn the truth: no enemy put out the Beacon. It was extinguished to protect you. But from what?',
 'ch.devourer.t':'The Devourer','ch.devourer.x':'The Devourer of Light rises from the dark. It is not cruel — it is simply hungry, as it has always been.',
 'ch.dawn.t':'Dawn','ch.dawn.x':'Light touched the last star. But the circle is closed: every Keeper was once a Devourer. Rebirth is the only way.'
}};
G.lang='ru';
G.t=(k,v)=>{let s=(G.DICT[G.lang]&&G.DICT[G.lang][k])||G.DICT.ru[k]||k;
 if(v)for(const x in v)s=s.split('{'+x+'}').join(v[x]);return s};
G.pickLang=(saved,sdk)=>{if(saved&&G.DICT[saved])return saved;
 const l=String(sdk||navigator.language||'ru').slice(0,2).toLowerCase();
 return['ru','be','kk','uk','uz'].includes(l)?'ru':'en'};
G.fmt=n=>{if(!isFinite(n))return'∞';if(n<1000)return n<10?String(+n.toFixed(1)):String(Math.floor(n));
 const u=['','K','M','B','T','Qa','Qi','Sx','Sp','Oc','No','Dc'];let i=0;
 while(n>=1000&&i<u.length-1){n/=1000;i++}return n.toFixed(2)+u[i]};
