(this["webpackJsonpmiracle-react"]=this["webpackJsonpmiracle-react"]||[]).push([[0],{16:function(e,t,i){},23:function(e,t,i){},26:function(e,t,i){},34:function(e,t,i){},40:function(e,t,i){},57:function(e,t,i){},58:function(e,t,i){},59:function(e,t,i){},60:function(e,t,i){},61:function(e,t,i){},62:function(e,t,i){},63:function(e,t,i){},64:function(e,t,i){},65:function(e,t,i){"use strict";i.r(t);var a=i(0),s=i(1),n=i(19),c=i.n(n),r=i(9),o=i(10),l=i(12),d=i(11),h=i(15),m=i(2),j=i(13),b=(i(34),function(e){var t=e.id,i=e.url,s=e.text,n=e.onMenuChange,c=e.activePage,r=window.location.pathname===i||c===t?" active":"";return Object(a.jsx)("li",{children:Object(a.jsx)(h.b,{className:"menu-item section-btn".concat(r),id:"homeBtn",to:i,onClick:function(){return n(t)},children:s})})}),p=(i(23),function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(){var e;Object(r.a)(this,i);for(var a=arguments.length,s=new Array(a),n=0;n<a;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={idx:""},e.tabs=[{id:"main",url:"/",text:"Main"},{id:"films",url:"/films",text:"Films"},{id:"photos",url:"/photos",text:"Photos"},{id:"contacts",url:"/contacts",text:"Contacts"}],e.onMenuChange=function(t){e.setState({idx:t})},e}return Object(o.a)(i,[{key:"render",value:function(){var e=this,t=this.tabs.map((function(t){return Object(a.jsx)(b,Object(j.a)(Object(j.a)({},t),{},{activePage:e.state.idx,onMenuChange:e.onMenuChange}),t.id)}));return Object(a.jsx)("ul",{className:"desctop navigation-panel-list",children:t})}}]),i}(s.Component)),A=(i(40),function(){return Object(a.jsx)("div",{className:"search desctop",children:Object(a.jsxs)("form",{className:"form-wrapper cf",children:[Object(a.jsx)("input",{type:"text",placeholder:"Boris 2",required:!0}),Object(a.jsx)("button",{type:"sumbit",children:"Search"})]})})}),u=i(28),f=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(){var e;Object(r.a)(this,i);for(var a=arguments.length,s=new Array(a),n=0;n<a;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={idx:0},e.tabs=[{id:"0",url:"/",text:"Main"},{id:"1",url:"/films",text:"Films"},{id:"2",url:"/photos",text:"Photos"},{id:"3",url:"/contacts",text:"Contacts"}],e.onMenuChange=function(t){e.setState({idx:t})},e}return Object(o.a)(i,[{key:"render",value:function(){var e=this,t=this.tabs.map((function(t){return Object(a.jsx)(b,Object(j.a)(Object(j.a)({},t),{},{onMenuChange:e.onMenuChange}),t.id)}));return Object(a.jsx)(u.slide,Object(j.a)(Object(j.a)({className:"mobile"},this.props),{},{children:Object(a.jsx)("ul",{className:"navigation-panel-list",children:t})}))}}]),i}(s.Component),x=(i(57),function(){return Object(a.jsxs)("div",{className:"header",children:[Object(a.jsx)("div",{className:"logo-head",children:Object(a.jsx)("img",{className:"logo-img",alt:"logo",src:"data:image/png;base64,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"})}),Object(a.jsx)("div",{className:"mobile",children:Object(a.jsx)(f,{className:"mobile",pageWrapId:"page-wrap",outerContainerId:"App"})}),Object(a.jsx)(p,{}),Object(a.jsx)(A,{})]})}),g=i.p+"static/media/telegram.18002451.svg",v=i.p+"static/media/instagram.482d4132.svg",O=i.p+"static/media/facebook.1e4e4ffa.svg",w=i.p+"static/media/linkedin.3ab0008f.svg",y=i.p+"static/media/twitter.536733a8.svg",N=(i(58),function(){return Object(a.jsx)("div",{className:"footer",children:Object(a.jsxs)("div",{className:"footer-content",children:[Object(a.jsx)("div",{className:"left-text",children:Object(a.jsx)("div",{className:"miracle-\u0441",children:"Copyright \xa92020 All rights reserved"})}),Object(a.jsxs)("div",{className:"social-networks",children:[Object(a.jsx)("a",{href:"/",children:Object(a.jsx)("img",{className:"clarity",alt:"social-network",src:g})}),Object(a.jsx)("a",{href:"/",children:Object(a.jsx)("img",{className:"clarity",alt:"social-network",src:y})}),Object(a.jsx)("a",{href:"/",children:Object(a.jsx)("img",{className:"clarity",alt:"social-network",src:w})}),Object(a.jsx)("a",{href:"/",children:Object(a.jsx)("img",{className:"clarity",alt:"social-network",src:v})}),Object(a.jsx)("a",{href:"/",children:Object(a.jsx)("img",{className:"clarity",alt:"social-network",src:O})})]})]})})}),I=(i(26),function(e){var t=e.newsImg,i=e.newsName,s=e.newsText;return Object(a.jsxs)("div",{className:"news-item",children:[Object(a.jsx)("img",{src:t,alt:""}),Object(a.jsxs)("div",{className:"news-content",children:[Object(a.jsx)("div",{className:"news-headline",children:i}),Object(a.jsx)("div",{className:"news-text",children:s})]})]})}),B=[{id:"1",url:"data:image/jpeg;base64,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",newsName:"Trailer release data is set for August 17",newsText:'The creators of the film "Boris" announced that trailer for the film should be released on 17 August. 17 August is the birthday of Boris himself.'},{id:"2",url:i.p+"static/media/boris.580edfd1.jpg",newsName:'Chepicov Boris announced "Boris 2"',newsText:'The president of the Miracle studio, Boris, announced new film with name "Boris 2". There is no details about the movie.'},{id:"3",url:i.p+"static/media/news3.c687ed5b.jpg",newsName:"Mads Mikkelsen officially replaces Johnny Depp",newsText:"Film Studio Warner Bros. has officially confirmed that Mads Mikkelsen will replace Johnny Depp in Fantastic Beasts and Where to Find Them 3. This is reported by The Wrap."}];var S=function(){var e=B.map((function(e){return Object(a.jsx)(I,{newsImg:e.url,newsName:e.newsName,newsText:e.newsText},e.id)}));return Object(a.jsx)("div",{className:"news-wrapper",children:e})},C=(i(16),i(59),i.p+"static/media/left.227b5967.svg"),k=i.p+"static/media/right.bbe7d9e5.svg",E=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(){var e;Object(r.a)(this,i);for(var a=arguments.length,s=new Array(a),n=0;n<a;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={videoNumber:0},e.videos=["https://www.youtube.com/embed/sj9J2ecsSpo","https://www.youtube.com/embed/g59rUQbVlIw","https://www.youtube.com/embed/XW2E2Fnh52w"],e.nextVideo=function(t){e.setState((function(){var i=e.state.videoNumber;return-1===t?0===i?i=e.videos.length-1:i--:1===t&&(i===e.videos.length-1?i=0:i++),{videoNumber:i}}))},e}return Object(o.a)(i,[{key:"render",value:function(){var e=this,t=this.state.videoNumber,i=Object(a.jsx)("iframe",{width:"700",height:"400",title:"1",src:this.videos[t],frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0});return Object(a.jsxs)("div",{className:"tab-item",children:[Object(a.jsxs)("div",{id:"news",className:"section",children:[Object(a.jsx)("div",{className:"section-name",children:Object(a.jsx)("h2",{className:"headline",children:Object(a.jsx)("b",{children:"News"})})}),Object(a.jsx)("div",{className:"section-info",children:Object(a.jsx)(S,{})})]}),Object(a.jsxs)("div",{id:"trailers",className:"section",children:[Object(a.jsx)("div",{className:"section-name",children:Object(a.jsx)("h2",{className:"headline",children:Object(a.jsx)("b",{children:"Trailers"})})}),Object(a.jsxs)("div",{className:"arrows",children:[Object(a.jsx)("img",{className:"left clarity",alt:"",onClick:function(){return e.nextVideo(-1)},src:C}),Object(a.jsx)("img",{className:"right clarity",alt:"",onClick:function(){return e.nextVideo(1)},src:k})]}),Object(a.jsx)("div",{className:"section-info center trailers",children:i})]})]})}}]),i}(s.Component),U=function(e){var t=e.description;return Object(a.jsx)("div",{className:"film",children:Object(a.jsxs)(h.b,{to:"/films/".concat(t.id),children:[Object(a.jsx)("img",{alt:"",src:t.photo}),Object(a.jsx)("div",{className:"film-name",children:t.name})]})})},R=(i(60),i.p+"static/media/thor-ragnarok.414c95c5.jpg"),K=i.p+"static/media/shazam.d4ca71be.jpg",J=i.p+"static/media/cap-marvel.7cc86044.jpg",W=i.p+"static/media/avangers.72de1e14.jpg",Q=i.p+"static/media/friends.1d118078.jpg",q=i.p+"static/media/big-bang-theory.5716e03d.jpg",D=[{id:"f1",name:"Thor 3: Ragnarok",photo:R,genre:"Action, Adventure, Comedy",director:"Taika Waititi",year:2017,description:"Returning to Asgard, Thor discovers that the actions of his brother. Loki, who seized the throne of Asgard, led to the approach of the most terrible event - Ragnarok. According to legend, this will mark the last battle of Asgard, the consequence of which will be its complete destruction. The heroes will have to face the worst enemy of all nine worlds - the fire demon Surtur, whose goal is to fulfill the prophecy of Ragnarok and destroy the nine worlds."},{id:"f2",name:"Shazam",photo:K,genre:"Action, Adventure, Comedy",director:"David F. Sandberg",year:2019,description:"Thanks to the ancient wizard, the 14-year-old guy turns into a\n    completely adult superhero Shazam. In his heart, he remains a child, so he behaves accordingly and is\n    drawn to the fullest. Shazam tests his limits with the recklessness of a mischievous child,\n    but soon he will have to regain control of his abilities to fight\n    the deadly forces of evil Dr. Thaddeus Sivana."},{id:"f3",name:"Avengers: Infinity War",photo:W,genre:"Action, Adventure, Sci-Fi",director:"Anthony Russo, Joe Russo",year:2018,description:"As the Avengers and their allies continue to defend the world from a\n    variety of dangers that a single superhero would not have been able to handle, a new threat emerges from space: Thanos. The intergalactic tyrant pursues the goal of collecting all six. Infinity Stones - artifacts of incredible power, with which you can change reality at will. Everything the Avengers have faced before has led to this moment - the fate of Earth has never been so uncertain."},{id:"f4",name:"Captain Marvel",photo:J,genre:"Action, Adventure, Sci-Fi",director:"Anna Boden, Ryan Fleck",year:2019,description:"Captain Marvel is an extraterrestrial Kree warrior who finds herself\n    caught in the middle of an intergalactic battle between her people\n    and the Skrulls. Living on Earth in 1995, she keeps having recurring memories of\n    another life as U.S. Air Force pilot Carol Danvers. With help from Nick Fury, Captain Marvel tries to uncover the secrets of her past while harnessing her special superpowers to end the war\n    with the evil Skrulls."},{id:"s1",name:"Game of Thrones",photo:i.p+"static/media/game-of-throne.a1b2f747.jpg",genre:"Action, Adventure, Drama",director:"David Benioff, D.B. Weiss",year:"2011-2019",description:"The time of prosperity is coming to an end, and the summer, which\n    lasted almost a decade, is fading away. Around the center of power\n    of the Seven Kingdoms, the Iron Throne, a conspiracy is brewing, and\n    at this difficult time, the king decides to seek support from his\n    youth friend Eddard Stark. In a world where everyone strives for power, weaves intrigues and is\n    ready to stab a knife in the back, there is a place for nobility,\n    compassion and love. Meanwhile, no one notices the awakening of darkness from the legends\n    far in the North - and only the Wall protects the living south of\n    it."},{id:"s2",name:"Vikings",photo:i.p+"static/media/viking.c428cd07.jpg",genre:"Action, Adventure, Drama",director:"Michael Hirst",year:"2013-...",description:"A saga about the Scandinavian heroes of the Middle Ages. The story of the rise of the powerful Viking leader Ragnar Lothbrok\n    and his family, who are leading a campaign to foreign unknown lands. Norse legend says that he was a direct descendant of Odin, god of war\n    and warriors."},{id:"s3",name:"Big Bang Theory",photo:q,genre:"Comedy, Romance",director:"Chuck Lorre, Bill Prady",year:"2007-2019",description:"Two brilliant physicists, Leonard and Sheldon, are great minds who\n    understand how the universe works. But their genius doesn't help them in the least to communicate with\n    people, especially with women. Everything begins to change when the beautiful Penny settles in front\n    of them."},{id:"s4",name:"Friends",photo:Q,genre:"Comedy, Romance",director:"David Crane, Marta Kauffman",year:"1994-2004",description:"The main characters are six friends - Rachel, Monica, Phoebe, Joey,\n    Chandler and Ross. Three girls and three guys who are friends, live next door, kill time\n    together and confront the harsh reality, share their secrets and\n    sometimes fall very deeply in love. Cult comedy television series, recognized by viewers around the\n    world."}];var F=function(){var e=D.filter((function(e){return"f"===e.id.charAt(0)})).map((function(e){return Object(a.jsx)(U,{description:e},e.id)})),t=D.filter((function(e){return"s"===e.id.charAt(0)})).map((function(e){return Object(a.jsx)(U,{description:e},e.id)}));return Object(a.jsxs)("div",{className:"tab-item",children:[Object(a.jsxs)("div",{id:"films",className:"section",children:[Object(a.jsx)("div",{className:"section-name",children:Object(a.jsx)("h2",{className:"headline",children:Object(a.jsx)("b",{children:"Films"})})}),Object(a.jsx)("div",{className:"section-info center posters",children:Object(a.jsx)("div",{className:"film-list",children:e})})]}),Object(a.jsxs)("div",{id:"serials",className:"section",children:[Object(a.jsx)("div",{className:"section-name",children:Object(a.jsx)("h2",{className:"headline",children:Object(a.jsx)("b",{children:"Serials"})})}),Object(a.jsx)("div",{className:"section-info center posters not-column",children:Object(a.jsx)("div",{className:"film-list",children:t})})]})]})},T=(i(61),[{id:"photo1",url:i.p+"static/media/iron-man-art.2d68e6c8.jpg",description:"Iron Man drawn by our subscriber."},{id:"photo2",url:i.p+"static/media/batman-art.7761c0f4.jpg",description:"Batman from our subscriber."},{id:"photo3",url:i.p+"static/media/superman-art.7648b0c5.jpg",description:"Another drawing from our subscriber. Now it is superman."},{id:"photo4",url:i.p+"static/media/superman2-art.d325570c.jpg",description:"Awesome drawing that one of you send."}]);var M=function(){var e=T.map((function(e){var t=e.id,i=e.url,s=e.description;return Object(a.jsxs)("div",{className:"post",children:[Object(a.jsx)("img",{alt:"",className:"post-photo",src:i}),Object(a.jsx)("div",{className:"info",children:Object(a.jsxs)("div",{className:"descr",children:[s," ",Object(a.jsx)("p",{children:"You also can send us your drawing by mail"})]})})]},t)}));return Object(a.jsx)("div",{className:"tab-item",children:Object(a.jsxs)("div",{id:"photos",className:"section",children:[Object(a.jsx)("div",{className:"section-name",children:Object(a.jsx)("h2",{className:"headline",children:Object(a.jsx)("b",{children:"Photos"})})}),Object(a.jsx)("div",{className:"section-info center",children:e})]})})},L=(i(62),i.p+"static/media/phone.3864d9a3.svg"),V=i.p+"static/media/email.83792d31.svg",H=i.p+"static/media/pin.72e55ebe.svg",Z=[{address:"Minsk, Dzerzhinsky prospect, 95",telephone:"+375333700026",email:"chepicovboris@mail.ru"},{address:"Minsk, Privaksalnaya square, 7",telephone:"+375336262808",email:"chepicov.boris@mail.ru"}];var P=function(){var e=Z.map((function(e,t){return Object(a.jsxs)("div",{className:"contact-info",children:[Object(a.jsxs)("div",{id:"office",children:["Office ",t+1,":"]}),Object(a.jsxs)("div",{className:"office-info",children:[Object(a.jsxs)("div",{className:"office-info__item",children:[Object(a.jsx)("img",{height:"24px",alt:"",src:H}),e.address]}),Object(a.jsxs)("div",{className:"office-info__item",children:[Object(a.jsx)("img",{height:"24px",alt:"",src:L}),e.telephone]}),Object(a.jsxs)("div",{className:"office-info__item",children:[Object(a.jsx)("img",{height:"24px",alt:"",src:V}),e.email]})]})]},t)}));return Object(a.jsx)("div",{className:"tab-item",children:Object(a.jsxs)("div",{id:"contacts",className:"section",children:[Object(a.jsx)("div",{className:"section-name",children:Object(a.jsx)("h2",{className:"headline",children:Object(a.jsx)("b",{children:"Contacts"})})}),Object(a.jsxs)("div",{className:"section-info",children:[Object(a.jsx)("div",{className:"map",children:Object(a.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2353.129514382792!2d27.48271721525684!3d53.85834488008952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbd07c88e6fa65%3A0x3caae88c96d29a8e!2z0L_RgNC-0YHQv9C10LrRgiDQlNC30LXRgNC20LjQvdGB0LrQvtCz0L4gOTUsINCc0LjQvdGB0LogMjIwMDg5!5e0!3m2!1sru!2sby!4v1606427384383!5m2!1sru!2sby",width:"600",height:"450",title:"map",frameBorder:"0",style:{border:0},allowFullScreen:"","aria-hidden":"false",tabIndex:"0"})}),Object(a.jsx)("div",{className:"offices",children:e})]})]})})},G=(i(63),function(e){var t=function(e){return D.filter((function(t){return e===t.id}))}(e.itemId)[0],i=t.name,s=t.photo,n=t.year,c=t.genre,r=t.director,o=t.description;return Object(a.jsxs)("div",{className:"film-description",children:[Object(a.jsx)("div",{className:"film-description-name",children:i}),Object(a.jsxs)("div",{className:"description-main",children:[Object(a.jsx)("img",{src:s,alt:""}),Object(a.jsxs)("div",{className:"description-main__stats",children:[Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"film-year category",children:"Year: "}),Object(a.jsx)("span",{className:"film-year-value",children:n})]}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"film-genre category",children:"Genre: "}),Object(a.jsx)("span",{className:"film-genre-value",children:c})]}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"film-year category",children:"Creators: "}),Object(a.jsx)("div",{className:"film-year-value",children:r})]}),Object(a.jsx)("div",{className:"description-text",children:o})]})]})]})}),Y=(i(64),function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(){return Object(r.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return Object(a.jsx)(h.a,{children:Object(a.jsxs)("div",{id:"App",children:[Object(a.jsx)(x,{}),Object(a.jsx)("div",{className:"wrapper",id:"page-wrap",children:Object(a.jsxs)("div",{className:"content",children:[Object(a.jsx)(m.a,{path:"/",exact:!0,component:E}),Object(a.jsx)(m.a,{path:"/films",exact:!0,component:F}),Object(a.jsx)(m.a,{path:"/films/:id",render:function(e){var t=e.match;return Object(a.jsx)(G,{itemId:t.params.id})}}),Object(a.jsx)(m.a,{path:"/photos",component:M}),Object(a.jsx)(m.a,{path:"/contacts",component:P})]})}),Object(a.jsx)(N,{})]})})}}]),i}(s.Component));c.a.render(Object(a.jsx)(Y,{}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.3d6b114d.chunk.js.map