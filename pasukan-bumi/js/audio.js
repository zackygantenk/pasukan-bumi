/* Audio tanpa aset eksternal: ambience sintetis ringan dan SFX melalui Web Audio. */
const AudioManager={ctx:null,enabled:true,osc:null,gain:null,master:null,
 init(){if(!this.ctx){this.ctx=new (window.AudioContext||window.webkitAudioContext)();this.master=this.ctx.createGain();this.master.gain.value=.12;this.master.connect(this.ctx.destination);}},
 toggle(){this.enabled=!this.enabled;if(this.master)this.master.gain.setTargetAtTime(this.enabled?.12:0,this.ctx.currentTime,.12);return this.enabled;},
 click(){if(!this.enabled)return;this.init();if(this.ctx.state==='suspended')this.ctx.resume();const o=this.ctx.createOscillator(),g=this.ctx.createGain();o.type='sine';o.frequency.setValueAtTime(660,this.ctx.currentTime);o.frequency.exponentialRampToValueAtTime(420,this.ctx.currentTime+.09);g.gain.setValueAtTime(.09,this.ctx.currentTime);g.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.13);o.connect(g);g.connect(this.master);o.start();o.stop(this.ctx.currentTime+.14);},
 ambientStart(){if(!this.enabled)return;this.init();if(this.ctx.state==='suspended')this.ctx.resume();if(this.osc)return;this.osc=this.ctx.createOscillator();this.gain=this.ctx.createGain();this.osc.type='triangle';this.osc.frequency.value=110;this.gain.gain.value=.018;this.osc.connect(this.gain);this.gain.connect(this.master);this.osc.start();},
 ambientStop(){if(this.osc){try{this.osc.stop()}catch{}this.osc=null;this.gain=null;}},
 speak(text){if(!('speechSynthesis' in window))return;window.speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.lang='id-ID';u.rate=.94;u.pitch=1;u.onstart=()=>{const p=document.querySelector('#narrationProgress');if(p)p.classList.add('speaking')};u.onend=()=>{const p=document.querySelector('#narrationProgress');if(p)p.classList.remove('speaking')};window.speechSynthesis.speak(u);},
 stopSpeak(){if('speechSynthesis' in window)window.speechSynthesis.cancel();}
};
