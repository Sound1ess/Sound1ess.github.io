const G=window.G={};
// Константы баланса: всё, что крутится, лежит здесь
G.C={growth:1.15,clickGrowth:1.5,clickBase:25,echoBonus:.1,rebirthMin:1e6,
 offlineCap:28800,offlineRate:.5,boostMs:120000,sparkMin:45,sparkMax:90,cloudEvery:30000};
G.GENS=[
 {id:'candle',base:15,ps:.2},
 {id:'lamp',base:100,ps:1},
 {id:'crystal',base:1100,ps:8},
 {id:'forge',base:12000,ps:47},
 {id:'portal',base:130000,ps:260},
 {id:'heart',base:1.4e6,ps:1400}
];
// at = сколько света за всё время нужно для открытия главы
G.CHAPTERS=[
 {id:'dark',at:0},{id:'spark',at:100},{id:'voices',at:2e3},{id:'city',at:5e4},
 {id:'betrayal',at:1e6},{id:'devourer',at:2e7},{id:'dawn',at:5e8}
];
// Товары: ID должны совпадать с консолью Яндекса
G.SHOP=[
 {id:'x2_forever',type:'perm'},
 {id:'echo_pack',type:'cons',echo:5}
];
