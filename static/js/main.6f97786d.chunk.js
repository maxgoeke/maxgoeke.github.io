(this.webpackJsonpgoeke=this.webpackJsonpgoeke||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,a){},,,,,,function(e,t,a){e.exports=a.p+"static/media/arrow-slim.0541cf1a.svg"},function(e,t,a){e.exports=a.p+"static/media/github.f57432d5.svg"},function(e,t,a){e.exports=a.p+"static/media/linkedin.3031f51d.svg"},function(e,t,a){e.exports=a.p+"static/media/instagram.4afbac1e.svg"},,,,function(e,t,a){},function(e,t,a){},,,,,,,,,function(e,t,a){e.exports=a(67)},,,,,function(e,t,a){},,,function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,function(e,t,a){"use strict";a.r(t);var l=a(1),n=a(2),o=a(4),r=a(3),c=a(5),s=a(0),i=a.n(s),m=a(31),u=a.n(m),h=(a(44),a(11)),f=a(15),d=a(37),p=a.n(d),g=(a(47),a(32)),E=a.n(g),b=a(38),k=a(17),y=(a(48),function(e){var t=e.href,a=e.to,l=e.type,n=void 0===l?"inline":l,o=e.className,r=e.children,c=Object(b.a)(e,["href","to","type","className","children"]);return a&&!a.startsWith("http")?i.a.createElement(k.a,Object.assign({to:a,className:"Link Link--type-".concat(n," ").concat(o)},c),r):i.a.createElement("a",Object.assign({className:"Link Link--type-".concat(n," ").concat(o),href:t||a,target:"_blank",rel:"noopener noreferrer"},c),r)});a(51);var v=function(){return i.a.createElement("div",{className:"Header"},i.a.createElement(y,{className:"Header__link Header__link--home",to:"/"},"Home"),i.a.createElement(y,{className:"Header__link Header__link--blog",to:"/blog"},"Blog"))},x=(a(52),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:this.props.className+" row"},this.props.content)}}]),t}(s.Component));x.defaultProps={content:{},className:""};var w=x,j=(a(53),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return i.a.createElement(w,{content:i.a.createElement("div",{className:"col-xs-12 col-sm-8 col-md-9 col-lg-6 col-xl-6 intro-block"},i.a.createElement("p",null,"I am a third year undergraduate student at Villanova University pursuing Bachelor's degrees in Mathematics and Computer Science. My interests primarily lie in the realms of Number Theory, Coding Theory, and Machine Learning."),i.a.createElement("p",null,"In the summer of 2022 I will be working at Credit Suisse as a Commodities Analyst in New York. In the meantime, I keep track of some of my thoughts"," ",i.a.createElement(y,{to:"/blog"},"  here.")))})}}]),t}(s.Component)),O=a(35),N=a.n(O),_=a(36),T=a.n(_),C=a(13),I=a.n(C),F=[{timeFrame:"2019",projects:[{title:"JawaBS",description:i.a.createElement("div",null,i.a.createElement("p",null,"Amidst creating trading strategies through"," ",i.a.createElement("a",{href:"https://www.interactivebrokers.com/en/home.php"},"interactive brokers")," ","I came across the complex issue of backtesting algorithms."),i.a.createElement("p",null,"So, I built a Command Line Interface to simplify the backtesting process with interactive brokers. The CLI uses MongoDB local to the users computer so there is no risk of a breach in algorithm security.")),tools:["Javascript","Commander.js","MongoDB"],link:"https://github.com/4ked/JawaBS"}]},{timeFrame:"2018",projects:[{title:"Shooting Range",description:i.a.createElement("div",null,i.a.createElement("p",null,"I extended a high school project idea on a duck hunting game to improve upon my javascript and OOP capabilities."),i.a.createElement("p",null,"On the technical side, the game includes reticle vector physics, randomized duck paths, random pop-up targets, game statistics and scoring, and an interactive bullet limit.")),tools:["Javascript","Processing.js"],link:"https://github.com/4ked/Shooting-Range"}]}],W=a(22),H=a.n(W);a(59);var S=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(c)))).renderTimeFrame=function(e,t){return i.a.createElement("div",{className:"Portfolio__timeFrame",key:t},i.a.createElement("h4",{className:"Portfolio__timeFrame__label"},e.timeFrame),e.projects.map(a.renderItem))},a.renderItem=function(e,t){return i.a.createElement("div",{className:"Portfolio__item",key:t},i.a.createElement("h2",null,e.title),i.a.createElement("div",{className:"Portfolio__item__description"},i.a.createElement("div",{className:"Portfolio__item__tools"},i.a.createElement("h6",{className:"toolsUsed"},"Tools Used"),e.tools.map(a.renderTool)),e.description,!!e.link&&(T.a.startsWith("/")?i.a.createElement("a",{href:e.link,className:"Portfolio__item__link btn"},"Check it out",i.a.createElement(I.a,{className:"next-arrow",src:H.a})):i.a.createElement(y,{to:e.link,type:"button",className:"Portfolio__item__link btn"},"Check it out",i.a.createElement(I.a,{className:"next-arrow",src:H.a})))))},a}return Object(c.a)(t,e),Object(n.a)(t,[{key:"getClassName",value:function(){return N()("Portfolio")}},{key:"renderComponent",value:function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];var t=e;return i.a.createElement(t,null)}},{key:"renderTool",value:function(e,t){return i.a.createElement("div",{className:"Portfolio__item__tool",key:t},i.a.createElement("div",{className:"pill"},e))}},{key:"render",value:function(){return i.a.createElement("div",{className:this.getClassName()},F.map(this.renderTimeFrame))}}]),t}(s.Component),L=(a(29),a(60),a(23)),M=a.n(L),P=a(24),B=a.n(P),z=a(25),A=a.n(z),R=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return i.a.createElement("p",{className:"col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 social"},i.a.createElement("a",{href:"http://github.com/4ked",rel:"noopener noreferrer",target:"_blank",id:"github"},i.a.createElement(I.a,{src:M.a},i.a.createElement("img",{src:M.a,alt:"github link",width:"20px"}))),i.a.createElement("a",{href:"https://linkedin.com/in/max-goeke-9a11a5145/",rel:"noopener noreferrer",target:"_blank",id:"linkedin"},i.a.createElement(I.a,{src:B.a},i.a.createElement("img",{src:B.a,alt:"linkedin link",width:"20px"}))),i.a.createElement("a",{href:"https://instagram.com/max_goeke",rel:"noopener noreferrer",target:"_blank",id:"instagram"},i.a.createElement(I.a,{src:A.a},i.a.createElement("img",{src:A.a,alt:"instagram link",width:"20px"}))))}}]),t}(s.Component),J=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return i.a.createElement("footer",{className:"row footer"},i.a.createElement("p",{className:"col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6"},"Max Goeke"),i.a.createElement(R,null))}}]),t}(s.Component),D={particles:{number:{value:150},color:{value:"#000000"},size:{value:2},line_linked:{color:"#000000",opacity:.35,width:1}}},U=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"container"},i.a.createElement(E.a,{params:D}),i.a.createElement("div",{className:"Home"},i.a.createElement(v,null),i.a.createElement("div",{className:"intro"},i.a.createElement(w,{content:i.a.createElement("h3",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4"},"Hi, I\u2019m")}),i.a.createElement(w,{content:i.a.createElement("h1",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 name"},"Max Goeke")}),i.a.createElement(j,null)),i.a.createElement(S,null),i.a.createElement(w,{content:i.a.createElement("h3",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 get-in-touch"},"Want to learn more?")}),i.a.createElement(w,{content:i.a.createElement("p",{className:"col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3 col-xl-4 col-xl-offset-4 contact"},"Have a question? Feel free to"," ",i.a.createElement("a",{href:"mailto:max.goeke0@gmail.com"},"email me"),".")}),i.a.createElement(J,null)))}}]),t}(s.Component),q=(a(61),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return i.a.createElement(U,null)}}]),t}(s.Component)),G=(a(16),a(62),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"col-xs-12 col-sm-8 col-sm-offset-2 col-md-9 col-md-offset-1.5 col-lg-6 col-lg-offset-3 col-xl-6 col-xl-offset-3 debrief-block"},i.a.createElement("p",null,"Welcome. Here I occasinally share some of my thoughts, findings, current interests or anything else of that nature. If you find anything interesting or want to speak more, feel free to email me; my info should be lingering somewhere around here."))}}]),t}(s.Component)),Y=(a(30),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"postListing col-xs-12 col-sm-8 col-sm-offset-2 col-md-9 col-md-offset-1.5 col-lg-6 col-lg-offset-3 col-xl-6 col-xl-offset-3"},i.a.createElement("h2",{className:"post"},i.a.createElement(y,{to:"/blog/01"},"Thoughts of January")),i.a.createElement("h6",{className:"postDate"},"January, 2022")))}}]),t}(s.Component)),K=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"postListing col-xs-12 col-sm-8 col-sm-offset-2 col-md-9 col-md-offset-1.5 col-lg-6 col-lg-offset-3 col-xl-6 col-xl-offset-3"},i.a.createElement("h2",{className:"post"},i.a.createElement(y,{to:"/blog/02"},"Thoughts of February")),i.a.createElement("h6",{className:"postDate"},"February, 2022")))}}]),t}(s.Component),Q=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"Blog Container"},i.a.createElement(v,null),i.a.createElement(w,{content:i.a.createElement("h1",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 name"},"Sporadic Ideas")}),i.a.createElement(w,{content:i.a.createElement(G,null)}),i.a.createElement(w,{content:i.a.createElement(K,{className:"listing col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"})}),i.a.createElement(w,{content:i.a.createElement(Y,{className:"listing col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"})}),i.a.createElement(J,null))}}]),t}(s.Component),V=(a(63),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"PageNotFound container"},i.a.createElement(w,{content:i.a.createElement("h3",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-offset-3 col-lg-6 col-xl-6"},"Uh oh, there's nothing here!")}),i.a.createElement(w,{content:i.a.createElement("p",{className:"col-xs-12 col-sm-12 col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6 col-xl-6 uhoh-bottom"},"Feel free to chill out, or"," ",i.a.createElement("a",{href:"/"},"head back to the home page."))}),i.a.createElement(J,{className:"aboutFooter"}))}}]),t}(s.Component)),Z=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"Blog container"},i.a.createElement(v,null),i.a.createElement(w,{content:i.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"},i.a.createElement("h1",null,"Thoughts of January"))}),i.a.createElement(w,{content:i.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2 col-xl-8 col-xl-offset-2"},i.a.createElement("p",null,"Welcome to the first addition of a series in which I'd like to track any profound thoughts, quotes, articles, papers, or anything else of that nature for the recorded month. These will vary drastically in size from month-to-month, but if it's here I definitely think it's worth a read."))}),i.a.createElement(w,{content:i.a.createElement("div",{className:"paraHead col-xs-12 col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2 col-xl-8 col-xl-offset-2"},i.a.createElement("h4",null,"Links"))}),i.a.createElement(w,{content:i.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2 col-xl-8 col-xl-offset-2"},i.a.createElement("p",null,i.a.createElement("a",{href:"https://moxie.org/2022/01/07/web3-first-impressions.html",rel:"noopener noreferrer",target:"_blank"},"First impressions of web3: Moxie Marlinspike"),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("a",{href:"https://niccolo.substack.com/p/the-dubrovnik-interviews-marc-andreessen?s=r",rel:"noopener noreferrer",target:"_blank"},"The Dubrovnik Interviews: Marc Andreessen"),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("a",{href:"https://rapercapital.com/2022/01/08/new-idea-special-situation-2/",rel:"noopener noreferrer",target:"_blank"},"New idea \u2013 Casper Sleep: Jeremy Raper"),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("a",{href:"https://www.blackrock.com/corporate/investor-relations/larry-fink-ceo-letter",rel:"noopener noreferrer",target:"_blank"},"The Power of Capitalism: Larry Fink"),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("a",{href:"https://www.smartermarketspod.com/what-are-smartermarkets-episode-1-jeff-currie-goldman-sachs-global-head-of-commodities-research/",rel:"noopener noreferrer",target:"_blank"},"What are SmarterMarkets?: Jeff Currie"),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("a",{href:"https://podcasts.apple.com/fr/podcast/replay-interview-burt-malkiel-masters-in-business-audio/id730188152?i=1000383404088",rel:"noopener noreferrer",target:"_blank"},"Masters in Business: Burt Malkiel")))}),i.a.createElement(w,{content:i.a.createElement("div",{className:"paraHead col-xs-12 col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2 col-xl-8 col-xl-offset-2"},i.a.createElement("h4",null,"Literature"))}),i.a.createElement(w,{content:i.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2 col-xl-8 col-xl-offset-2"},i.a.createElement("p",null,"The 50th Law - Robert Greene"),i.a.createElement("p",null,"On proof and progress - W. Thurston"),i.a.createElement("p",null,"The Pricing of Options and Corporate Liabilities - F. Black and M. Scholes"))}),i.a.createElement(w,{content:i.a.createElement("div",{className:"paraHead col-xs-12 col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2 col-xl-8 col-xl-offset-2"},i.a.createElement("h4",null,"Quotes"))}),i.a.createElement(w,{content:i.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2 col-xl-8 col-xl-offset-2"},i.a.createElement("p",null,"Your fears are a kind of prison that confines you within a limited range of action. The less you fear, the more power you will have and the more fully you will live. - Robert Greene"),i.a.createElement("p",null,"Human thinking and understanding do not work on a single track, like a computer with a single central processing unit. Our brains and minds seem to be organized into a variety of separate, powerful facilities. - William Thurston"),i.a.createElement("p",null,"The transfer of understanding from one person to another is not automatic. It is hard and tricky. Therefore, to analyze human understanding of mathematics, it is important to consider who understands what, and when. - William Thurston"),i.a.createElement("p",null,"For it is a general rule of human nature that people despise those who treat them well and look up to those who make no concessions. - Thucydides"),i.a.createElement("p",null,"When people don\u2019t respond to what you do, they\u2019re telling you something loud and clear. You\u2019re just not listening. - 50 Cent"),i.a.createElement("p",null,"When you study an individual or a group, your goal is to get inside their minds, their experiences, their way of looking at things. To do this, you must interact with them on a more equal plane. With this open and fearless spirit, you will discover things no one had suspected before. You will have a much deeper appreciation for the targets of your actions or the public you are trying to reach. And with such understanding will come the power to move them. - Robert Greene"))}),i.a.createElement(w,{content:i.a.createElement("div",{className:"paraHead col-xs-12 col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2 col-xl-8 col-xl-offset-2"},i.a.createElement("h4",null,"The Rest"))}),i.a.createElement(w,{content:i.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2 col-xl-8 col-xl-offset-2"},i.a.createElement("p",null,"For a long time the predictability of human behavior allowed investors to study the past expecting investors to make similar decisions in the future. Now, though, we must also consider that investors of the past are just computers acting on models."),i.a.createElement("p",null,"Your biggest fear should be your imagination."),i.a.createElement("p",null,"Judge people by results, not friendliness or political values."),i.a.createElement("p",null,"Never be satisfied with what presents itself to your eyes. See what underlies it, absorb it, and then dig deeper."),i.a.createElement("p",null,"Things merely happen to you. It is your mind that chooses to interpret them as negative or positive."),i.a.createElement("p",null,"People follow those who know where they are going, so cultivate an air of certainty and boldness."),i.a.createElement("p",null,"The key in life is to always be willing to walk away."))}),i.a.createElement(J,null))}}]),t}(s.Component),X=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"Blog container"},i.a.createElement(v,null),i.a.createElement(w,{content:i.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"},i.a.createElement("h1",null,"Thoughts of February"))}),i.a.createElement(w,{content:i.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2 col-xl-8 col-xl-offset-2"},i.a.createElement("p",null,"Welcome to the second addition of a series in which I'd like to track any profound thoughts, quotes, articles, papers, or anything else of that nature for the recorded month. These will vary drastically in size from month-to-month, but if it's here I definitely think it's worth a read."))}),i.a.createElement(w,{content:i.a.createElement("div",{className:"paraHead col-xs-12 col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2 col-xl-8 col-xl-offset-2"},i.a.createElement("h4",null,"Links"))}),i.a.createElement(w,{content:i.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2 col-xl-8 col-xl-offset-2"},i.a.createElement("p",null,i.a.createElement("a",{href:"https://adamtooze.substack.com/p/chartbook-68-putins-challenge-to?s=r",rel:"noopener noreferrer",target:"_blank"},"Putin's Challenge to Western hegemony: Adam Tooze"),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("a",{href:"https://adamtooze.substack.com/p/chartbook-82-the-rise-of-asset-manager?s=r",rel:"noopener noreferrer",target:"_blank"},"The rise of asset manager capitalism: Adam Tooze"),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("a",{href:"https://adamtooze.substack.com/p/chartbook-82-the-rise-of-asset-manager?s=r",rel:"noopener noreferrer",target:"_blank"},"Assessing Risk in Decentralized Finance: Moody's Analytics")))}),i.a.createElement(w,{content:i.a.createElement("div",{className:"paraHead col-xs-12 col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2 col-xl-8 col-xl-offset-2"},i.a.createElement("h4",null,"Literature"))}),i.a.createElement(w,{content:i.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2 col-xl-8 col-xl-offset-2"},i.a.createElement("p",null,"The Man Who Solved the Market - Gregory Zuckerman"),i.a.createElement("p",null,"Self-Supervised Representation Learning: Introduction, Advances and Challenges - L. Ericsson et. al"),i.a.createElement("p",null,"A Stroll Through the Gaussian Primes - E. Gethner, S. Wagon, B. Wick"))}),i.a.createElement(w,{content:i.a.createElement("div",{className:"paraHead col-xs-12 col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2 col-xl-8 col-xl-offset-2"},i.a.createElement("h4",null,"Quotes"))}),i.a.createElement(w,{content:i.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2 col-xl-8 col-xl-offset-2"},i.a.createElement("p",null,"Sometimes you can have a whole lifetime in a day and never notice that this is a beautiful as it gets - Robin Williams"),i.a.createElement("p",null,"Hard work beats talent when talent fails to work hard. - Kevin Durant"),i.a.createElement("p",null,"Violence is the last refuge of the incompetent. - Isaac Asiimov"),i.a.createElement("p",null,"Reality is my drug. The more I have of it, the more power I get and the higher I feel. - 50 Cent"),i.a.createElement("p",null,"Life is too short to wake up in the morning with regrets. - Dr. Suess"))}),i.a.createElement(w,{content:i.a.createElement("div",{className:"paraHead col-xs-12 col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2 col-xl-8 col-xl-offset-2"},i.a.createElement("h4",null,"The Rest"))}),i.a.createElement(w,{content:i.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2 col-xl-8 col-xl-offset-2"},i.a.createElement("p",null,"Ukraine is home to a quarter of the fertile \u201cblack earth\u201d soil (Chernozem) on the planet. It is already the world\u2019s biggest producer of sunflower oil and the fourth-biggest producer of corn. Along with soybeans, sunflowers and corn are among the main crops grown in the Sunflower Belt, which stretches from Kharkiv in the east to the Ternopil region in the west."),i.a.createElement("p",null,"On July 1 2021, between the war scares of last year, a new era began. On that day it became possible for Ukrainians - not foreigners - to buy and sell up to 100 hectares. The real gold rush will start in 2024 Ukrainian legal entities will qualify for transactions involving up to 10,000 hectares. The law applies to an agricultural area of 42.7 million hectares (103 million acres). That is equivalent to the entire surface area of the state of California, or all of Italy."),i.a.createElement("p",null,"The first interest rate swap occurred between IBM and the World Bank in 1981."),i.a.createElement("p",null,"Find a way to be indispensable, and then find 5 more ways."),i.a.createElement("p",null,"When you smell smoke, get the hell out."),i.a.createElement("p",null,"Do not worry about why phenomena occur, as all that matters is that they happen frequently enough to be taken advantage of."))}),i.a.createElement(J,null))}}]),t}(s.Component),$=p()(),ee="";function te(){return f.a.set({page:window.location.pathname}),f.a.pageview(window.location.pathname),$.location.pathname!==ee&&window.scrollTo(0,0),"scrollRestoration"in $&&($.scrollRestoration="manual"),ee=$.location.pathname,null}f.a.initialize("UA-36903668-3");var ae=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(n.a)(t,[{key:"componentWillMount",value:function(){te()}},{key:"componentWillUpdate",value:function(){te()}},{key:"render",value:function(){return i.a.createElement(h.a,{children:this.props.children})}}]),t}(i.a.Component);u.a.render(i.a.createElement(h.b,{history:$},i.a.createElement(ae,null,i.a.createElement(h.c,null,i.a.createElement(h.a,{exact:!0,path:"/",component:q}),i.a.createElement(h.a,{path:"/blog",render:function(e){var t=e.match.url;return i.a.createElement(i.a.Fragment,null,i.a.createElement(h.a,{path:"".concat(t,"/"),component:Q,exact:!0}),i.a.createElement(h.a,{path:"".concat(t,"/01"),component:Z}),i.a.createElement(h.a,{path:"".concat(t,"/02"),component:X}))}}),i.a.createElement(h.a,{path:"*",exact:!0,component:V})))),document.getElementById("root"))}],[[39,1,2]]]);
//# sourceMappingURL=main.6f97786d.chunk.js.map