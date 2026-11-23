const QuizEngine={key:null,questions:[],index:0,answers:[],locked:false,
 start(key){this.key=key;this.questions=QUIZZES[key];this.index=0;this.answers=[];this.locked=false;App.render('quiz');},
 choose(i){if(this.locked)return;this.locked=true;const q=this.questions[this.index],correct=i===q.answer;this.answers[this.index]={selected:i,correct};App.render('quizFeedback',{selected:i,correct,explain:q.explain});},
 next(){if(!this.locked)return;if(this.index<this.questions.length-1){this.index++;this.locked=false;App.render('quiz');}else{const score=Math.round(this.answers.filter(a=>a&&a.correct).length/this.questions.length*100);App.render('result',{score,correct:this.answers.filter(a=>a&&a.correct).length,total:this.questions.length,key:this.key});}},
 retry(){this.start(this.key);},
};
