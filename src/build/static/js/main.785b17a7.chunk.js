(this.webpackJsonpttsite=this.webpackJsonpttsite||[]).push([[0],{31:function(e,t,a){e.exports=a(52)},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);a(32);var r=a(0),s=a.n(r),n=a(17),c=a.n(n),i=(a(37),a(14)),l=a(3),o=(a(38),a(9)),u=a(10),m=a(12),p=a(11),h=(a(39),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"splash-holder"},s.a.createElement("img",{src:"/logo512.png",alt:"logo",className:"logo"}),s.a.createElement("ul",{className:"links"},s.a.createElement("li",{className:"link"},s.a.createElement(i.b,{to:"/start",className:"link"},"New Game")),s.a.createElement("li",{className:"link"},s.a.createElement(i.b,{to:"/history",className:"link"},"History")),s.a.createElement("li",{className:"link"},s.a.createElement(i.b,{to:"/about",className:"link"},"About")))))}}]),a}(r.Component)),y=a(1),f=a.n(y),b=a(6),d=a(5),g=(a(45),a(46),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={score:0},e.incScore=e.incScore.bind(Object(d.a)(e)),e.decScore=e.decScore.bind(Object(d.a)(e)),e.resetScore=e.resetScore.bind(Object(d.a)(e)),e}return Object(u.a)(a,[{key:"resetScore",value:function(){var e=Object(b.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState({score:0});case 2:document.querySelectorAll(".button").forEach((function(e){e.classList.remove("done")}));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"incScore",value:function(){var e=Object(b.a)(f.a.mark((function e(){var t,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.deuceScore,e.next=3,this.setState({score:this.state.score+1});case 3:return e.next=5,this.props.updateScore(this.props.id,this.state.score,t);case 5:if(a=document.querySelectorAll(".button"),!this.props.deuce){e.next=13;break}return t++,e.next=10,this.props.updateScore(this.props.id,this.state.score,t);case 10:this.state.score===t+1&&a.forEach((function(e){e.classList.add("done")})),e.next=14;break;case 13:this.state.score===this.props.deuceScore&&a.forEach((function(e){e.classList.add("done")}));case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"decScore",value:function(){var e=Object(b.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.deuceScore,e.next=3,this.state.score;case 3:if(e.t0=e.sent,!(e.t0>0)){e.next=8;break}this.setState({score:this.state.score-1}),e.next=9;break;case 8:this.setState({score:0});case 9:return e.next=11,this.props.updateScore(this.props.id,this.state.score,t);case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"score"},s.a.createElement("h1",{className:"curr-score"},this.state.score),s.a.createElement("div",{className:"buttons"},s.a.createElement("button",{className:"button plus",onClick:this.incScore},"+"),s.a.createElement("button",{className:"button minus",onClick:this.decScore},"-")),s.a.createElement("h1",{className:"player"},this.props.player)))}}]),a}(r.Component)),S=a(22),v=(a(47),a(15)),E=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={gameDetails:{gameType:11,bestOf:"",player1:"",player2:"",deuce:!1},player1CurrScore:0,player2CurrScore:0,deuceScore:0,globalDeuce:!1,games:{id:0,date:"",bestOf:"",gameType:0,player1:"",player2:"",player1Score:[],player2Score:[]},status:"BAU",currentGame:1,gameData:{id:0,date:"",bestOf:"",gameType:0,player1:"",player2:"",player1Score:[],player2Score:[]},numericalBestOf:1,winner:""},e.firstScore=s.a.createRef(),e.secondScore=s.a.createRef(),e.updateScore=e.updateScore.bind(Object(d.a)(e)),e.startNextGame=e.startNextGame.bind(Object(d.a)(e)),e.startNewGame=e.startNewGame.bind(Object(d.a)(e)),e.handleConfirm=e.handleConfirm.bind(Object(d.a)(e)),e.isMatchOver=e.isMatchOver.bind(Object(d.a)(e)),e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(b.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.location.state.gameDetails,e.next=3,this.setState({gameDetails:t});case 3:return e.next=5,this.setState({deuceScore:this.state.gameDetails.gameType});case 5:"Best of 3"===this.state.gameDetails.bestOf?this.setState({numericalBestOf:3}):"Best of 5"===this.state.gameDetails.bestOf&&this.setState({numericalBestOf:5});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"UNSAFE_componentWillMount",value:function(){var e=Object(b.a)(f.a.mark((function e(){var t=this;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(function(){var e=Object(b.a)(f.a.mark((function e(){var a,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/games");case 2:return a=e.sent,e.next=5,a.json();case 5:return r=e.sent,e.next=8,t.setState({games:r});case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"handleConfirm",value:function(){var e=this;Object(S.confirmAlert)({customUI:function(t){var a=t.onClose;return s.a.createElement("div",{className:"confirm-new"},s.a.createElement("h1",{className:"confirm-new-title"},"Start New Game"),s.a.createElement("p",{className:"confirm-new-text"},"Are you sure you want to start a new game?"),s.a.createElement("button",{onClick:function(){e.startNewGame(),a()},className:"confirm-new-yes"},"Yes"),s.a.createElement("button",{onClick:a,className:"confirm-new-no"},"No"))}})}},{key:"handleWinner",value:function(){var e=this;Object(S.confirmAlert)({customUI:function(t){var a=t.onClose;return s.a.createElement("div",{className:"confirm-new"},s.a.createElement("h1",{className:"confirm-new-title"},"Game, Set Match ".concat(e.state.winner,"!")),s.a.createElement("p",{className:"confirm-new-text"},"And the winner is ".concat(e.state.winner)),s.a.createElement("button",{onClick:function(){e.startNewGame(),a()},className:"confirm-new-yes"},"Ok"))}})}},{key:"startNewGame",value:function(){var e=Object(b.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.firstScore.current.resetScore(),this.secondScore.current.resetScore(),e.next=4,this.setState({player1CurrScore:0,player2CurrScore:0,status:"BAU",globalDeuce:!1,deuceScore:this.state.gameDetails.gameType,currentGame:1,gameData:{id:0,date:"",bestOf:"",gameType:0,player1:"",player2:"",player1Score:[],player2Score:[],winner:""}});case 4:(t=document.querySelectorAll(".score"))[0].classList.remove("winner"),t[1].classList.remove("loser"),t[0].classList.remove("loser"),t[1].classList.remove("winner"),document.querySelector(".next-button").classList.remove("clickable");case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"startNextGame",value:function(){var e=Object(b.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.firstScore.current.resetScore(),this.secondScore.current.resetScore(),e.next=4,this.setState({player1CurrScore:0,player2CurrScore:0,status:"BAU",globalDeuce:!1,deuceScore:this.state.gameDetails.gameType});case 4:return(t=document.querySelectorAll(".score"))[0].classList.remove("winner"),t[1].classList.remove("loser"),t[0].classList.remove("loser"),t[1].classList.remove("winner"),e.next=11,this.setState({currentGame:this.state.currentGame+1});case 11:document.querySelector(".next-button").classList.remove("clickable");case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"isMatchOver",value:function(){for(var e=this.state.gameData.player1Score,t=this.state.gameData.player2Score,a=this.state.numericalBestOf,r=0,s=0,n=0;n<e.length;n++)e[n]>t[n]?r++:s++;return r>s?r>=Math.ceil(a/2):s>=Math.ceil(a/2)}},{key:"updateScore",value:function(){var e=Object(b.a)(f.a.mark((function e(t,a,r){var s,n,c,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t){e.next=5;break}return e.next=3,this.setState({player1CurrScore:a,deuceScore:r});case 3:e.next=7;break;case 5:return e.next=7,this.setState({player2CurrScore:a,deuceScore:r});case 7:if(this.state.player1CurrScore!==this.state.deuceScore&&this.state.player2CurrScore!==this.state.deuceScore){e.next=38;break}if(s=document.querySelectorAll(".score"),!(this.state.player1CurrScore>this.state.player2CurrScore)){e.next=16;break}return s[0].classList.add("winner"),s[1].classList.add("loser"),e.next=14,this.setState({status:"Game ".concat(this.state.gameDetails.player1,"!"),winner:this.state.gameDetails.player1});case 14:e.next=20;break;case 16:return s[0].classList.add("loser"),s[1].classList.add("winner"),e.next=20,this.setState({status:"Game ".concat(this.state.gameDetails.player2,"!"),winner:this.state.gameDetails.player2});case 20:return(n=this.state.gameData.player1Score).push(this.state.player1CurrScore),(c=this.state.gameData.player2Score).push(this.state.player2CurrScore),document.querySelector(".next-button").classList.remove("clickable"),i={id:Object.keys(this.state.games).length.toString(),date:(new Date).getFullYear()+"-"+((new Date).getMonth()+1)+"-"+(new Date).getDate()+" "+(new Date).getHours()+":"+(new Date).getMinutes()+":"+(new Date).getSeconds(),bestOf:this.state.gameDetails.bestOf,gameType:this.state.gameDetails.gameType,player1:this.state.gameDetails.player1,player2:this.state.gameDetails.player2,player1Score:n,player2Score:c,winner:this.state.winner},e.next=28,this.setState({gameData:i});case 28:if(!this.isMatchOver()){e.next=35;break}return this.handleWinner(),this.state.games[Object.keys(this.state.games).length]=this.state.gameData,e.next=33,fetch("api/game/insert",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});case 33:e.next=36;break;case 35:document.querySelector(".next-button").classList.add("clickable");case 36:e.next=69;break;case 38:if(this.state.player1CurrScore!==this.state.deuceScore-1||this.state.player2CurrScore!==this.state.deuceScore-1){e.next=46;break}return e.next=41,this.setState({status:"Deuce!"});case 41:return e.next=43,this.setState({gameDetails:{gameType:this.state.gameDetails.gameType,bestOf:this.state.gameDetails.bestOf,player1:this.state.gameDetails.player1,player2:this.state.gameDetails.player2,deuce:!0},globalDeuce:!0});case 43:document.querySelector(".next-button").classList.remove("clickable"),e.next=69;break;case 46:if(this.state.player1CurrScore!==this.state.deuceScore-1&&this.state.player2CurrScore!==this.state.deuceScore-1){e.next=54;break}return e.next=49,this.setState({status:"Game Point!"});case 49:return e.next=51,this.setState({gameDetails:{gameType:this.state.gameDetails.gameType,bestOf:this.state.gameDetails.bestOf,player1:this.state.gameDetails.player1,player2:this.state.gameDetails.player2,deuce:!1}});case 51:document.querySelector(".next-button").classList.remove("clickable"),e.next=69;break;case 54:if(!this.state.globalDeuce){e.next=64;break}if(this.state.player1CurrScore!==this.state.deuceScore-2||this.state.player2CurrScore!==this.state.deuceScore-2){e.next=60;break}return e.next=58,this.setState({status:"Deuce!"});case 58:e.next=62;break;case 60:return e.next=62,this.setState({status:"BAU"});case 62:e.next=66;break;case 64:return e.next=66,this.setState({status:"BAU"});case 66:return e.next=68,this.setState({gameDetails:{gameType:this.state.gameDetails.gameType,bestOf:this.state.gameDetails.bestOf,player1:this.state.gameDetails.player1,player2:this.state.gameDetails.player2,deuce:!1}});case 68:document.querySelector(".next-button").classList.remove("clickable");case 69:case"end":return e.stop()}}),e,this)})));return function(t,a,r){return e.apply(this,arguments)}}()},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"score-holder"},s.a.createElement("button",{className:"score-back-button",onClick:this.props.history.goBack},s.a.createElement(v.a,{className:"button-link"})),s.a.createElement("h1",{className:"game-type"},"Game ",this.state.gameDetails.gameType),s.a.createElement("button",{className:"new-button",onClick:this.handleConfirm},"New Game"),s.a.createElement("h2",{className:"best-of"},"Game ",this.state.currentGame,"/",this.state.numericalBestOf),s.a.createElement("button",{className:"next-button",onClick:this.startNextGame},"Next Game"),s.a.createElement(g,{gameType:this.state.gameDetails.gameType,player:this.state.gameDetails.player1,updateScore:this.updateScore,id:0,className:"score1",deuce:this.state.gameDetails.deuce,deuceScore:this.state.deuceScore,ref:this.firstScore}),s.a.createElement("h2",{className:"status"},this.state.status)," ",s.a.createElement("h1",{className:"separator"},"-"),s.a.createElement(g,{gameType:this.state.gameDetails.gameType,player:this.state.gameDetails.player2,updateScore:this.updateScore,id:1,className:"score2",deuce:this.state.gameDetails.deuce,deuceScore:this.state.deuceScore,ref:this.secondScore})))}}]),a}(r.Component),k=Object(l.f)(E),O=(a(48),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={player1:"",player2:"",gameType:11,bestOf:"Single Game"},e.setGameType=e.setGameType.bind(Object(d.a)(e)),e.setBestOf=e.setBestOf.bind(Object(d.a)(e)),e.setPlayer1=e.setPlayer1.bind(Object(d.a)(e)),e.setPlayer2=e.setPlayer2.bind(Object(d.a)(e)),e}return Object(u.a)(a,[{key:"setGameType",value:function(){var e=Object(b.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState({gameType:parseInt(t)});case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"setBestOf",value:function(){var e=Object(b.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState({bestOf:t});case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"setPlayer1",value:function(e){this.setState({player1:e})}},{key:"setPlayer2",value:function(e){this.setState({player2:e})}},{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"start-holder"},s.a.createElement("button",{className:"start-back-button",onClick:this.props.history.goBack},s.a.createElement(v.a,{className:"button-link"})),s.a.createElement("h1",{className:"heading"},"Table Time"),s.a.createElement("div",{className:"player-input player1"},s.a.createElement("input",{id:"player1",onChange:function(t){return e.setPlayer1(t.target.value)},placeholder:"Player 1"})),s.a.createElement("h1",{className:"vs"},"vs"),s.a.createElement("div",{className:"player-input player2"},s.a.createElement("input",{id:"player2",onChange:function(t){return e.setPlayer2(t.target.value)},placeholder:"Player 2"})),s.a.createElement("div",{className:"game"},s.a.createElement("select",{name:"game",id:"game",onChange:function(t){return e.setGameType(t.target.value)}},s.a.createElement("option",{value:"11"},"Game 11"),s.a.createElement("option",{value:"21"},"Game 21")),s.a.createElement(v.c,{className:"game-arrow"})),s.a.createElement("div",{className:"rounds"},s.a.createElement("select",{name:"rounds",id:"rounds",onChange:function(t){return e.setBestOf(t.target.value)}},s.a.createElement("option",{value:"Single Game"},"Single Game"),s.a.createElement("option",{value:"Best of 3"},"Best of 3"),s.a.createElement("option",{value:"Best of 5"},"Best of 5")),s.a.createElement(v.c,{className:"rounds-arrow"})),s.a.createElement("button",{className:"button-start"},s.a.createElement(i.b,{to:{pathname:"/game",state:{gameDetails:{gameType:this.state.gameType,bestOf:this.state.bestOf,player1:this.state.player1,player2:this.state.player2}}},className:"button-link"},s.a.createElement(v.b,null)))))}}]),a}(r.Component)),N=Object(l.f)(O),x=(a(49),a(28)),w=a.n(x),D=a(29),j=a.n(D),C=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={games:{id:0,date:"",bestOf:"",gameType:0,player1:"",player2:"",player1Score:[],player2Score:[]}},e}return Object(u.a)(a,[{key:"UNSAFE_componentWillMount",value:function(){var e=Object(b.a)(f.a.mark((function e(){var t=this;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(function(){var e=Object(b.a)(f.a.mark((function e(){var a,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/games");case 2:return a=e.sent,e.next=5,a.json();case 5:return r=e.sent,e.next=8,t.setState({games:r});case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=[];for(var t in this.state.games)e.push([t,this.state.games[t]]);return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"history-holder"},s.a.createElement("button",{className:"hist-back-button",onClick:this.props.history.goBack},s.a.createElement(v.a,{className:"button-link"})),s.a.createElement("h1",{className:"title"},"History"),s.a.createElement("div",{className:"scores-container"},e.map((function(e,t){return s.a.createElement("div",{className:"score-list",key:t},s.a.createElement("div",{className:"flex"},s.a.createElement("h2",{className:e[1].player1===e[1].winner?"history-winner":"history-loser"},e[1].player1),s.a.createElement("h2",{className:"separator"}," vs "),s.a.createElement("h2",{className:e[1].player2===e[1].winner?"history-winner":"history-loser"},e[1].player2)),s.a.createElement("div",{className:"game-scores"},j.a.zip("".concat(e[1].player1Score).split(","),"".concat(e[1].player2Score).split(",")).map((function(e,t){return s.a.createElement("h3",{key:t},"Game ".concat(t+1,": ").concat(e[0]," - ").concat(e[1]),s.a.createElement("br",null))}))),s.a.createElement("h3",null,s.a.createElement(w.a,{format:"DD MMMM YYYY HH:mm"},e[1].date)," "),s.a.createElement("h3",null,e[1].bestOf," - Game ",e[1].gameType))})))))}}]),a}(r.Component),T=Object(l.f)(C),G=(a(51),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"about-holder"},s.a.createElement("button",{className:"about-back-button",onClick:this.props.history.goBack},s.a.createElement(v.a,{className:"button-link"})),s.a.createElement("h1",{className:"about-title"},"About"),s.a.createElement("img",{src:"/logo512.png",alt:"logo",className:"about-logo"}),s.a.createElement("p",{className:"footer"},"Developed by"," ",s.a.createElement(s.a.Fragment,null,s.a.createElement("a",{href:"https://bit.ly/TinoLinkedIn",target:"__blank",className:"link-link"},"Tino Muzambi"),s.a.createElement("br",null),s.a.createElement("p",{className:"version"},"Table Time \xa9 v 1.0")))))}}]),a}(r.Component)),B=Object(l.f)(G),L=a(55),A=a(54);var M=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(i.a,null,s.a.createElement(l.a,{render:function(e){var t=e.location;return s.a.createElement(L.a,null,s.a.createElement(A.a,{key:t.key,timeout:450,classNames:"fade"},s.a.createElement(l.c,{location:t},s.a.createElement(l.a,{path:"/",component:h,exact:!0}),s.a.createElement(l.a,{path:"/start",component:N}),s.a.createElement(l.a,{path:"/game",component:k}),s.a.createElement(l.a,{path:"/history",component:T}),s.a.createElement(l.a,{path:"/about",component:B}))))}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.785b17a7.chunk.js.map