const Navigation={stack:[],
 go(scene,opts={}){if(opts.push!==false&&App.currentScene)this.stack.push(App.currentScene);App.render(scene,opts);},
 back(){const prev=this.stack.pop();if(prev)App.render(prev,{restore:true});else App.render('menu');},
 home(){this.stack=[];App.render('home');}
};
