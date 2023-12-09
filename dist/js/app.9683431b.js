(()=>{"use strict";var e={1859:(e,t,n)=>{n(752),n(3964),n(429),n(6409);var i=n(9242),r=n(3396);function o(e,t,n,i,o,a){var s=(0,r.up)("sweet-background"),c=(0,r.up)("app-base");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(s),(0,r.Wm)(c)],64)}n(5137),n(9693),n(228),n(7522),n(886),n(6386),n(4043),n(7267),n(6532),n(560);var a=(0,r._)("div",{id:"orb-sketch"},null,-1),s=(0,r._)("div",{class:"blur"},null,-1),c=(0,r._)("div",{class:"noise"},null,-1);function u(e,t,n,i,o,u){return(0,r.wg)(),(0,r.iD)(r.HY,null,[a,s,c],64)}var l,d=n(6347),h=n(8851),m=n.n(h),f=n(3087),p=n(2833),v=n(2482),g=(n(7895),n(7823)),w=(n(6203),n(3843),3);(function(e){e["STAR"]="star",e["SQUARE"]="square",e["TRIANGLE"]="triangle",e["CIRCLE"]="circle"})(l||(l={}));var b=60;function _(e,t){return Math.random()*(t-e)+e}function y(e){switch(e){case l.STAR:return"bi-star-fill";case l.SQUARE:return"bi-square-fill";case l.TRIANGLE:return"bi-triangle-fill";case l.CIRCLE:return"bi-circle-fill";default:return"bi-emoji-dizzy"}}function S(e){for(var t="abcdefghijklmnopqrstuvwxyz",n=t.length,i="",r=0;r<e;r++){for(var o=Math.floor(8*Math.random())+2,a="",s=0;s<o;s++){var c=t.charAt(Math.floor(Math.random()*n));a+=c}i+=a+" "}return i}function k(e){var t="abcdefghijklmnopqrstuvwxyz",n=25,i=Math.floor(Math.random()*n+1),r=e.split("").map((function(e){if(t.includes(e.toLocaleLowerCase())){var n=e===e.toUpperCase(),r=t.indexOf(e.toLowerCase()),o=(r+i)%26,a=n?t[o].toUpperCase():t[o];return a}return e})).join("");return r}var x=function(){function e(t,n,i,r){var o=this;(0,f.Z)(this,e),(0,v.Z)(this,"xPosInWidthPct",void 0),(0,v.Z)(this,"yPosInHeightPct",void 0),(0,v.Z)(this,"maxDistPct",void 0),(0,v.Z)(this,"bounds",void 0),(0,v.Z)(this,"x",void 0),(0,v.Z)(this,"y",void 0),(0,v.Z)(this,"radius",void 0),(0,v.Z)(this,"xOff",void 0),(0,v.Z)(this,"yOff",void 0),(0,v.Z)(this,"inc",void 0),(0,v.Z)(this,"fillColor",void 0),this.xPosInWidthPct=t,this.yPosInHeightPct=n,this.maxDistPct=i,this.bounds=this.setBounds(),this.x=_(this.bounds.x.min,this.bounds.x.max),this.y=_(this.bounds.y.min,this.bounds.y.max),this.radius=_(window.innerHeight/6,window.innerHeight/2),this.xOff=_(0,1e3),this.yOff=_(0,1e3),this.inc=.002,this.fillColor=r,window.addEventListener("resize",(0,g.debounce)((function(){o.bounds=o.setBounds()}),250))}return(0,p.Z)(e,[{key:"setBounds",value:function(){var e=window.innerWidth*this.maxDistPct,t=window.innerHeight*this.maxDistPct;return{x:{min:this.xPosInWidthPct*window.innerWidth-e,max:this.xPosInWidthPct*window.innerWidth+e},y:{min:this.yPosInHeightPct*window.innerHeight-t,max:this.yPosInHeightPct*window.innerHeight+t}}}},{key:"move",value:function(e){var t=e.noise(this.xOff,this.xOff),n=e.noise(this.yOff,this.yOff);this.x=e.map(t,0,1,this.bounds.x.min,this.bounds.x.max),this.y=e.map(n,0,1,this.bounds.y.min,this.bounds.y.max),this.xOff+=this.inc,this.yOff+=this.inc}},{key:"render",value:function(e){e.fill(this.fillColor),e.ellipse(this.x,this.y,this.radius,this.radius)}}]),e}();const P=(0,r.aZ)({name:"SweetBackground",setup:function(){(0,r.bv)((function(){var e=function(e){var t=window.innerWidth,n=window.innerHeight,i=[];function r(){for(var e=[],t=.7,n=.7,i=.3,r=0;r<10;r++){var o=new x(t,n,i,"#ff000040");e.push(o)}t=.3,n=.3;for(var a=0;a<10;a++){var s=new x(t,n,i,"#0000ff40");e.push(s)}return e}e.setup=function(){e.createCanvas(t,n),e.noStroke(),i=r()},e.draw=function(){e.background(0);var t,n=(0,d.Z)(i);try{for(n.s();!(t=n.n()).done;){var r=t.value;r.move(e),r.render(e)}}catch(o){n.e(o)}finally{n.f()}},window.onresize=function(){t=window.innerWidth,n=window.innerHeight,e.resizeCanvas(t,n),r()}},t=document.getElementById("orb-sketch");new(m())(e,t)}))}});var j=n(89);const C=(0,j.Z)(P,[["render",u]]),T=C;var Z=n(9584),O=(n(7195),n(278),function(){function e(t,n){(0,f.Z)(this,e),(0,v.Z)(this,"element",void 0),(0,v.Z)(this,"alphabet",void 0),(0,v.Z)(this,"currentPositions",void 0),(0,v.Z)(this,"targetPositions",void 0),(0,v.Z)(this,"randomPositions",void 0),this.element=t,this.alphabet=n,this.currentPositions=[],this.targetPositions=[],this.randomPositions=[]}return(0,p.Z)(e,[{key:"setInitialPositions",value:function(e){var t=this,n=e.split(""),i=n.length;n.forEach((function(e,n){var i=t.alphabet.indexOf(e);-1===i?(t.alphabet.push(e),t.targetPositions[n]=t.alphabet.length-1):t.targetPositions[n]=i})),this.currentPositions=(0,Z.Z)(this.targetPositions),this.randomPositions=Array(i).fill(0)}},{key:"shufflePositions",value:function(){for(var e=Math.floor(10*Math.random())+5,t=0;t<this.currentPositions.length;t++)this.currentPositions[t]=(this.currentPositions[t]+this.alphabet.length-e)%this.alphabet.length,this.randomPositions[t]=Math.floor(10*Math.random())}},{key:"flap",value:function(){var e=this;"false"===this.element.dataset.paused&&this.currentPositions.forEach((function(t,n){e.randomPositions[n]>0?e.randomPositions[n]--:e.currentPositions[n]!==e.targetPositions[n]&&(e.currentPositions[n]=(e.currentPositions[n]+1)%e.alphabet.length)}))}},{key:"render",value:function(){var e=this,t=this.currentPositions.reduce((function(t,n){var i=e.alphabet[n];return">"===i?i="&gt;":"<"===i&&(i="&lt;"),t+i}),"");this.element.innerHTML!==t&&(this.element.innerHTML=t)}}]),e}()),A={class:"main"};function R(e,t,n,o,a,s){var c=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("main",A,[(0,r.Wm)(c,null,{default:(0,r.w5)((function(e){var t=e.Component;return[(0,r.Wm)(i.uT,{name:"fade",mode:"out-in"},{default:(0,r.w5)((function(){return[((0,r.wg)(),(0,r.j4)((0,r.LL)(t)))]})),_:2},1024)]})),_:1})])}const E={name:"AppBase",components:{},data:function(){return{navIsOpen:!1}}},D=(0,j.Z)(E,[["render",R]]),I=D,H=(0,r.aZ)({name:"App",components:{AppBase:I,SweetBackground:T},mounted:function(){this.initializeFlapText()},methods:{initializeFlapText:function(){document.addEventListener("readystatechange",this.handleReadyStateChange)},handleReadyStateChange:function(){if("complete"===document.readyState){var e="\"'“”‘’¹²³!#$&%()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~½¼¡«»×▓▒░".split(""),t=e.sort((function(e,t){return.5-Math.random()}));(function(){var e=[];document.querySelectorAll(".flap").forEach((function(n){var i=n.innerText.trimEnd().split("\n").map((function(e){return e.trimEnd().replaceAll("\t","")}));n.innerHTML="",i.forEach((function(i){var r=document.createElement("span");r.dataset.paused="true",n.appendChild(r),new IntersectionObserver((function(e){!0===e[0].isIntersecting&&(r.dataset.paused="false")}),{threshold:[0]}).observe(r);var o=new O(r,t);o.setInitialPositions(i),o.shufflePositions(),o.render(),r.addEventListener("mouseenter",(function(){o.shufflePositions()})),e.push(o)}))}));var n=0;requestAnimationFrame((function t(){if(requestAnimationFrame(t),n++%2===0)for(var i=0,r=e;i<r.length;i++){var o=r[i];o.flap(),o.render()}}))})()}}}}),q=(0,j.Z)(H,[["render",o]]),G=q;var M=n(5431);(0,M.z)("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var F=n(2483);function L(e,t,n,i,o,a){var s=(0,r.up)("sweet-home");return(0,r.wg)(),(0,r.j4)(s)}var W=n(3806),B=n(5937),N=n(3336),z=(n(1919),n(6034),n(739),n(6520)),U={class:"content"};function Y(e,t,n,i,o,a){var s=(0,r.up)("sweet-header"),c=(0,r.up)("sweet-projects");return(0,r.wg)(),(0,r.iD)("div",U,[(0,r.Wm)(s),(0,r.Wm)(c)])}const K=n.p+"img/me.7d08330b.png";var Q={class:"header"},X={class:"about"},V=(0,r._)("div",{class:"about__avatar"},[(0,r._)("img",{src:K,alt:"",class:"about__avatar-me"})],-1),$={class:"about__text"},J=(0,r._)("h1",{class:"flap"},"Hey I'm Max",-1),ee=(0,r._)("h2",{class:"flap"},"And I try my best",-1),te={class:"about__buttons"},ne=(0,r.uE)('<a href="https://github.com/maximeconceicao"><i class="bi-github"></i></a><a href="https://www.instagram.com/maximeconceicao/"><i class="bi-instagram"></i></a><a href="https://fr.linkedin.com/in/maxime-conceicao-6b8505197"><i class="bi-linkedin"></i></a>',3),ie=(0,r._)("span",{class:"material-icons",style:{"font-size":"29px"}}," sports_esports ",-1),re=(0,r._)("div",null,null,-1),oe=(0,r._)("a",{href:"https://open.spotify.com/user/maxime.conceicao"},[(0,r._)("i",{class:"bi-spotify"})],-1),ae=(0,r._)("a",{href:"mailto: maxime.conceicao@gmail.com"},[(0,r._)("i",{class:"bi-envelope-fill"})],-1),se=(0,r._)("div",null,null,-1);function ce(e,t,n,i,o,a){var s=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("header",Q,[(0,r._)("div",X,[V,(0,r._)("div",$,[J,ee,(0,r._)("div",te,[ne,(0,r.Wm)(s,{to:{name:"game"}},{default:(0,r.w5)((function(){return[ie]})),_:1}),re,oe,ae,se])])])])}const ue={name:"SweetHeader",setup:function(){var e=(0,F.yj)();return{route:e}}},le=(0,j.Z)(ue,[["render",ce]]),de=le;var he={class:"projects"},me={class:"grid"},fe={class:"grid__list"};function pe(e,t,n,i,o,a){var s=(0,r.up)("sweet-project-card");return(0,r.wg)(),(0,r.iD)("div",he,[(0,r._)("div",me,[(0,r._)("ul",fe,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.projects,(function(e,t){return(0,r.wg)(),(0,r.j4)(s,{class:"grid__list__item",key:t,index:t+1,project:e},null,8,["index","project"])})),128))])])])}var ve=n(847),ge=(n(9749),n(6544),n(4284),n(7139)),we={key:0},be={class:"project"},_e={class:"project__card"},ye={key:0,loop:"",autoplay:"",muted:""},Se=["src"],ke=["src"],xe={class:"project__content"},Pe={class:"flap"},je=["innerHTML"],Ce={style:{"text-align":"start"}},Te={class:"project__links"},Ze=(0,r._)("i",{class:"bi-signpost-fill"},null,-1),Oe=["href"];function Ae(e,t,n,i,o,a){return e.project?((0,r.wg)(),(0,r.iD)("li",we,[(0,r._)("article",be,[(0,r._)("div",_e,["video"===e.project.mediaType?((0,r.wg)(),(0,r.iD)("video",ye,[(0,r._)("source",{src:e.project.mediaUrl,type:"video/mp4"},null,8,Se)])):((0,r.wg)(),(0,r.iD)("img",{key:1,src:e.project.mediaUrl,alt:""},null,8,ke))]),(0,r._)("div",xe,[(0,r._)("h2",Pe,(0,ge.zw)(e.projectNumber)+" | "+(0,ge.zw)(e.project.title),1),(0,r._)("h3",{class:"flap",style:{"font-style":"italic","word-wrap":"break-word",display:"flex","flex-direction":"column"},innerHTML:e.project.subtitle},null,8,je),(0,r._)("p",Ce,(0,ge.zw)(e.project.description),1),(0,r._)("div",Te,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.project.links,(function(e,t){return(0,r.wg)(),(0,r.iD)("div",{key:t},[Ze,(0,r._)("a",{href:e.url},(0,ge.zw)(e.name),9,Oe)])})),128))])])])])):(0,r.kq)("",!0)}n(9288);const Re=(0,r.aZ)({name:"SweetProject",props:{index:{type:Number,required:!0},project:{type:Object,required:!0}},setup:function(e){var t=(0,r.Fl)((function(){return e.index<10?"0"+e.index:String(e.index)}));return{projectNumber:t}}}),Ee=(0,j.Z)(Re,[["render",Ae]]),De=Ee,Ie={name:"SweetProjects",components:{SweetProjectCard:De},setup:function(){var e=(0,ve.oR)(),t=(0,r.Fl)((function(){return e.state.project.projects}));return{projects:t}}},He=(0,j.Z)(Ie,[["render",pe]]),qe=He,Ge={name:"SweetHome",components:{SweetHeader:de,SweetProjects:qe}},Me=(0,j.Z)(Ge,[["render",Y]]),Fe=Me;var Le=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===("undefined"===typeof Reflect?"undefined":(0,N.Z)(Reflect))&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a},We=function(e){(0,W.Z)(n,e);var t=(0,B.Z)(n);function n(){return(0,f.Z)(this,n),t.apply(this,arguments)}return(0,p.Z)(n)}(z.w3);We=Le([(0,z.Ei)({components:{SweetHome:Fe}})],We);const Be=We,Ne=(0,j.Z)(Be,[["render",L]]),ze=Ne;var Ue={class:"game"},Ye={class:"sticky-header game__back"},Ke=(0,r._)("span",{class:"material-icons"},"arrow_back",-1),Qe={id:"main-game"},Xe={class:"game__header"},Ve={class:"game__header__item"},$e=(0,r._)("p",null,"Score",-1),Je={class:"game-score"},et={class:"game__header__item"},tt=(0,r._)("p",null,"Time",-1),nt={key:0,class:"game__board"},it={key:1};function rt(e,t,n,i,o,a){var s,c=(0,r.up)("router-link"),u=(0,r.up)("sweet-game-timer"),l=(0,r.up)("sweet-game-sequence"),d=(0,r.up)("sweet-game-cells"),h=(0,r.up)("sweet-game-buttons"),m=(0,r.up)("sweet-game-score-board");return(0,r.wg)(),(0,r.iD)("div",Ue,[(0,r._)("div",Ye,[(0,r._)("header",null,[(0,r.Wm)(c,{to:{name:"home"}},{default:(0,r.w5)((function(){return[Ke]})),_:1})])]),(0,r._)("div",Qe,[(0,r._)("div",Xe,[(0,r._)("div",Ve,[$e,(0,r._)("p",Je,(0,ge.zw)(e.score),1)]),(0,r._)("div",et,[tt,(0,r.Wm)(u,{ref:"timer",initialCountdown:e.initialCountdown,onTimerFinished:e.handleTimerFinished},null,8,["initialCountdown","onTimerFinished"])])]),e.isGameOver?((0,r.wg)(),(0,r.iD)("div",it,[(0,r.Wm)(m,{onRestart:e.restart,onRedirect:e.redirectToHome},null,8,["onRestart","onRedirect"])])):((0,r.wg)(),(0,r.iD)("div",nt,[(0,r.Wm)(l,{sequenceToFind:e.sequenceToFind},null,8,["sequenceToFind"]),null!==(s=e.playerSequence)&&void 0!==s&&s.length?((0,r.wg)(),(0,r.j4)(d,{key:0,playerSequence:e.playerSequence},null,8,["playerSequence"])):(0,r.kq)("",!0),(0,r.Wm)(h,{onDrawShape:e.onDrawShape,onReverse:e.onReverse,onClear:e.onClear},null,8,["onDrawShape","onReverse","onClear"])]))])])}n(9358),n(6466),n(9772),n(8324);var ot=n(4870),at={class:"game-cells"};function st(e,t,n,i,o,a){return(0,r.wg)(),(0,r.iD)("div",at,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.sequenceToFind,(function(t,n){return(0,r.wg)(),(0,r.iD)("i",{key:t+n,class:(0,ge.C_)(e.formatShapeIcon(t)+" game-cell")},null,2)})),128))])}const ct=(0,r.aZ)({name:"SweetGameSolution",props:{sequenceToFind:{type:Array,required:!0}},setup:function(){return{formatShapeIcon:y}}}),ut=(0,j.Z)(ct,[["render",st]]),lt=ut;var dt={class:"game-cells"};function ht(e,t,n,i,o,a){var s=(0,r.up)("sweet-game-cell");return(0,r.wg)(),(0,r.iD)("div",dt,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.playerSequence,(function(e,t){return(0,r.wg)(),(0,r.j4)(s,{key:t,shape:e,lineBreak:!((t+1)%4)},null,8,["shape","lineBreak"])})),128))])}var mt={class:"game-cell game-cell-play"};function ft(e,t,n,i,o,a){return(0,r.wg)(),(0,r.iD)("div",mt,[e.shape?((0,r.wg)(),(0,r.iD)("i",{key:0,class:(0,ge.C_)(e.formatShapeIcon(e.shape))},null,2)):(0,r.kq)("",!0)])}const pt=(0,r.aZ)({name:"SweetGameCell",props:{shape:String,lineBreak:Boolean},setup:function(){return{formatShapeIcon:y}}}),vt=(0,j.Z)(pt,[["render",ft]]),gt=vt,wt=(0,r.aZ)({name:"SweetGameCells",components:{SweetGameCell:gt},props:{playerSequence:{type:Array,required:!0}}}),bt=(0,j.Z)(wt,[["render",ht]]),_t=bt;n(3374);var yt={class:"game-buttons"},St=(0,r._)("i",{class:"bi-square-fill"},null,-1),kt=[St],xt=(0,r._)("i",{class:"bi-star-fill"},null,-1),Pt=[xt],jt=(0,r._)("i",{class:"bi-arrow-left-right"},null,-1),Ct=[jt];function Tt(e,t,n,i,o,a){return(0,r.wg)(),(0,r.iD)("div",yt,[(0,r._)("button",{class:"game-button",role:"button",onClick:t[0]||(t[0]=function(t){return e.drawShape(e.Shape.SQUARE)})},kt),(0,r._)("button",{class:"game-button",role:"button",onClick:t[1]||(t[1]=function(t){return e.drawShape(e.Shape.STAR)})},Pt),(0,r._)("button",{class:"game-button",role:"button",onClick:t[2]||(t[2]=function(t){return e.reverse()})},Ct)])}const Zt=(0,r.aZ)({name:"SweetGameButtons",emits:["drawShape","reverse","clear"],setup:function(e,t){var n=t.emit;function i(e){n("drawShape",e)}function r(){n("reverse")}function o(){n("clear")}return{Shape:l,drawShape:i,reverse:r,clear:o}}}),Ot=(0,j.Z)(Zt,[["render",Tt]]),At=Ot;var Rt={class:"game-timer"};function Et(e,t,n,i,o,a){return(0,r.wg)(),(0,r.iD)("div",Rt,[(0,r._)("p",null,(0,ge.zw)(e.timerCount),1)])}n(6869);const Dt=(0,r.aZ)({name:"SweetGameTimer",props:{initialCountdown:{type:Number,required:!0}},data:function(){return{timerEnabled:!0,timerCount:this.initialCountdown}},watch:{timerEnabled:function(e){var t=this;e&&setTimeout((function(){t.timerCount--}),1e3)},timerCount:{handler:function(e){var t=this;e>0&&this.timerEnabled?setTimeout((function(){t.timerCount--}),1e3):e<=0&&this.handleTimerFinished()},immediate:!0}},methods:{play:function(){this.timerEnabled=!0},pause:function(){this.timerEnabled=!1},handleTimerFinished:function(){this.$emit("timerFinished")},resetTimer:function(){this.timerCount=this.initialCountdown}}}),It=(0,j.Z)(Dt,[["render",Et]]),Ht=It;var qt={class:"game__scoreboard"},Gt=(0,r.uE)('<h2><i class="bi-star"></i> GAME OVER <i class="bi-star"></i></h2><h3>ALMOST A <br>HIGH SCORE <br>!!!</h3><div class="game__scoreboard__scores"><div class="game__scoreboard__scores__score"> 1ST MAX . . . . . . 1012<br> 2ND MAX . . . . . . 0999<br> 3RD MAX . . . . . . 0994<br> 4TH MAX . . . . . . 0982<br> 5TH MAX . . . . . . 0976<br></div></div>',3),Mt={class:"game__scoreboard__restart"},Ft=(0,r._)("p",null,"PLAY AGAIN ?",-1),Lt={class:"game__scoreboard__restart__items"},Wt={class:"game__scoreboard__restart__item"},Bt=(0,r._)("span",{class:"display-on-hover"},"^",-1),Nt={class:"game__scoreboard__restart__item"},zt=(0,r._)("span",{class:"display-on-hover"},"^",-1);function Ut(e,t,n,i,o,a){return(0,r.wg)(),(0,r.iD)("div",qt,[Gt,(0,r._)("div",Mt,[Ft,(0,r._)("div",Lt,[(0,r._)("div",Wt,[(0,r._)("button",{onClick:t[0]||(t[0]=function(t){return e.restart()})},"YES"),Bt]),(0,r._)("div",Nt,[(0,r._)("button",{onClick:t[1]||(t[1]=function(t){return e.redirect()})},"NO"),zt])])])])}const Yt=(0,r.aZ)({name:"SweetGameScoreBoard",emits:["restart","redirect"],setup:function(e,t){var n=t.emit;function i(){n("restart")}function r(){n("redirect")}return{formatShapeIcon:y,restart:i,redirect:r}}}),Kt=(0,j.Z)(Yt,[["render",Ut]]),Qt=Kt,Xt=(0,r.aZ)({name:"GameView",components:{SweetGameSequence:lt,SweetGameCells:_t,SweetGameButtons:At,SweetGameTimer:Ht,SweetGameScoreBoard:Qt},data:function(){return{initialCountdown:b,isGameOver:!1}},setup:function(){var e=w,t=(0,ot.iH)([]),n=(0,ot.iH)([]),i=(0,ot.iH)(0);function o(){e=w,a()}function a(){t.value=s(e),n.value=c(t.value.length)}function s(e){for(var t=[],n=0;n<e;n++){var i=Math.floor(_(0,Object.keys(l).length));t.push(Object.values(l)[i])}return t}function c(e){return Array.apply(null,Array(e)).map((function(){return null}))}function u(e){var i=n.value.findIndex((function(e){return null===e}));i>-1?n.value[i]=e:n.value=c(t.value.length),n.value[n.value.length-1]&&h()}function d(){n.value=c(e)}function h(){JSON.stringify(n.value)===JSON.stringify(t.value)&&(i.value+=1,e+=1,a())}function m(){var e=(0,Z.Z)(n.value);e.forEach((function(e,t){switch(e){case l.STAR:n.value[t]=l.TRIANGLE;break;case l.SQUARE:n.value[t]=l.CIRCLE;break;case l.TRIANGLE:n.value[t]=l.STAR;break;case l.CIRCLE:n.value[t]=l.SQUARE;break}})),n.value[n.value.length-1]&&h()}return(0,r.bv)((function(){o()})),{sequenceToFind:t,playerSequence:n,score:i,onDrawShape:u,onReverse:m,onClear:d,resetGame:o}},methods:{redirectToHome:function(){this.$router.push("/")},handleTimerFinished:function(){this.isGameOver=!0},restart:function(){this.onClear(),this.score=0,this.resetGame(),this.$refs.timer.resetTimer(),this.isGameOver=!1}}}),Vt=(0,j.Z)(Xt,[["render",rt]]),$t=Vt,Jt=n.p+"img/backrooms.8cc9505a.jpg";var en={class:"container"},tn={class:"not-found"},nn=(0,r._)("h1",null,"404",-1),rn=(0,r._)("div",{class:"not-found__image"},[(0,r._)("img",{src:Jt,alt:""})],-1),on=(0,r._)("div",{class:"not-found__text"},[(0,r._)("p",null,"You just noclip into the Backrooms."),(0,r._)("p",null," There's nothing here, except the smell of wet carpet and the incessant buzzing of neon lights. "),(0,r._)("p",null,"Suddenly you hear a noise, something is lurking nearby.")],-1);function an(e,t,n,i,o,a){return(0,r.wg)(),(0,r.iD)("div",en,[(0,r._)("div",tn,[nn,rn,on,(0,r._)("button",{onClick:t[0]||(t[0]=function(t){return e.redirectToHome()}),class:"not-found__button"}," Get me out of here ")])])}const sn=(0,r.aZ)({name:"NotFoundView",methods:{redirectToHome:function(){this.$router.push("/")}}}),cn=(0,j.Z)(sn,[["render",an]]),un=cn;var ln=[{path:"/",name:"home",component:ze},{path:"/game",name:"game",component:$t},{path:"/404",component:un},{path:"/:catchAll(.*)",redirect:"/404"}],dn=(0,F.p7)({history:(0,F.r5)(),routes:ln});const hn=dn;n(5728);var mn="Yes, it was indeed a hidden message. I don't really know if this is what you were looking for but here it is. Feels a bit awkward now. Do you like ping pong? me, not too much",fn={projects:[{name:"reading-room",title:"READING ROOM",subtitle:"A tiny voice-controlled <br> note-taking app",description:"Reading Room was an experiment to create a WebSocket client intended to be used with the open-source Vosk Server from Alpha Cephei.",mediaUrl:n(2425),mediaType:"video",tags:[],links:[{name:"Reading Room on Github",url:"https://github.com/maximeconceicao/reading-room"}]},{name:"portfolio",title:"PORTFOLIO",subtitle:"Like a sense of deja vu",description:"I hope you enjoy browsing this portfolio. By the way, have you found all the easter eggs?",mediaUrl:n(8410),mediaType:"video",links:[{name:"Sweet Portfolio on Github",url:"https://www.spotify.com"},{name:"Sweet Portfolio Website",url:"https://www.youtube.com/watch?v=yRKh34Ofg50"}],tags:[]},{name:"processing",title:"PROCESSING",subtitle:"First steps in the world <br> of creative coding",description:"I started my creative coding journey by learning basic concepts and exploring things through Processing. You can find some of my old sketches on OpenProcessing.org.",mediaUrl:n(5920),mediaType:"image",links:[{name:"Sketches on OpenProcessing",url:"https://openprocessing.org/user/416730?o=1&view=sketches"}],tags:[]},{name:"wip",title:"??? (WIP)",subtitle:S(3),description:k(mn),mediaUrl:n(5305),mediaType:"video",tags:[]}]},pn={getProjectByName:function(e){return function(t){return e.projects.find((function(e){return e.name===t}))}}};const vn={namespaced:!0,state:fn,getters:pn},gn={modules:{project:vn}};var wn=(0,ve.MT)(gn);const bn=wn;(0,i.ri)(G).use(bn).use(hn).mount("#app"),console.log(" "),console.log("%c Made by Maxime Conceicao 🤖","background: #171719; color: #fff; font-weight: 500; padding: 5px;")},5920:(e,t,n)=>{e.exports=n.p+"img/waves.77b14c5b.png"},5305:(e,t,n)=>{e.exports=n.p+"media/glitch.9b9732dd.mp4"},8410:(e,t,n)=>{e.exports=n.p+"media/portfolio.c337a102.mp4"},2425:(e,t,n)=>{e.exports=n.p+"media/reading-room.cdf136a1.mp4"}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var o=t[i]={exports:{}};return e[i].call(o.exports,o,o.exports,n),o.exports}n.m=e,(()=>{var e=[];n.O=(t,i,r,o)=>{if(!i){var a=1/0;for(l=0;l<e.length;l++){for(var[i,r,o]=e[l],s=!0,c=0;c<i.length;c++)(!1&o||a>=o)&&Object.keys(n.O).every((e=>n.O[e](i[c])))?i.splice(c--,1):(s=!1,o<a&&(a=o));if(s){e.splice(l--,1);var u=r();void 0!==u&&(t=u)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[i,r,o]}})(),(()=>{n.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return n.d(t,{a:t}),t}})(),(()=>{n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}})(),(()=>{n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{n.p="/"})(),(()=>{var e={143:0};n.O.j=t=>0===e[t];var t=(t,i)=>{var r,o,[a,s,c]=i,u=0;if(a.some((t=>0!==e[t]))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(c)var l=c(n)}for(t&&t(i);u<a.length;u++)o=a[u],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(l)},i=self["webpackChunksweet_portfolio"]=self["webpackChunksweet_portfolio"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})();var i=n.O(void 0,[998],(()=>n(1859)));i=n.O(i)})();
//# sourceMappingURL=app.9683431b.js.map