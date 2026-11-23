const DragGame={kind:'food',items:[],targets:[],placed:{},submitted:false,selected:null,
 start(kind){this.kind=kind;this.items=kind==='food'?GAME_FOOD.map(x=>({...x})):GAME_BIO.map(x=>({...x}));this.targets=kind==='food'?GAME_FOOD.map(x=>x.id):GAME_BIO.map(x=>x.region);this.placed={};this.submitted=false;this.selected=null;App.render('game');},
 place(item,target){if(this.submitted)return;const old=Object.entries(this.placed).find(([k,v])=>v===target);if(old)delete this.placed[old[0]];this.placed[item]=target;this.selected=null;App.render('game');},
 submit(){this.submitted=true;let score=0;if(this.kind==='food'){const order=['sun','grass','grasshopper','frog','snake'];order.forEach((id,i)=>{if(this.placed[id]===String(i))score++;});}else{GAME_BIO.forEach((item,i)=>{if(this.placed[item.label]===item.region)score++;});}App.render('gameResult',{score,total:this.items.length,kind:this.kind});},
 reset(){this.start(this.kind);}
};
