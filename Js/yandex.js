// Вся работа с SDK Яндекс Игр здесь. Вне Яндекса (sdk=null) включается тестовый режим:
// реклама и покупки выдают награду сразу, облака нет.
G.Y={
 sdk:null,player:null,payments:null,catalog:{},_t:0,
 async init(){
  if(!window.YaGames)return;
  try{this.sdk=await YaGames.init()}catch(e){this.sdk=null;return}
  try{this.player=await this.sdk.getPlayer()}catch(e){}
  try{this.payments=await this.sdk.getPayments({signed:false});
   const list=await this.payments.getCatalog();list.forEach(p=>this.catalog[p.id]=p)}catch(e){}
  try{this.sdk.on('game_api_pause',()=>G.setPause(true));
   this.sdk.on('game_api_resume',()=>G.setPause(false))}catch(e){}
 },
 lang(){try{return this.sdk.environment.i18n.lang}catch(e){return null}},
 ready(){try{this.sdk.features.LoadingAPI.ready()}catch(e){}},
 saveCloud(force){if(!this.player)return;const n=Date.now();
  if(!force&&n-this._t<G.C.cloudEvery)return;this._t=n;
  this.player.setData({s:G.S}).catch(()=>{})},
 async loadCloud(){if(!this.player)return null;
  try{const r=await this.player.getData();return r&&r.s?r.
