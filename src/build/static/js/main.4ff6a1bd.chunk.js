(this.webpackJsonpreminder=this.webpackJsonpreminder||[]).push([[0],{20:function(e,t,a){e.exports=a(34)},26:function(e,t,a){},27:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);a(21);var n=a(0),r=a.n(n),o=a(17),l=a.n(o),i=(a(26),a(6)),s=a(7),c=(a(27),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null," Hello, welcome to reMINDer!"),r.a.createElement("p",null," Hola familia, bienvenidos a Lily's historias! "),r.a.createElement("p",null," reMINDer is a project to help people who may have trouble with their memory."),r.a.createElement("br",null)," The journal articles section contains stories from my mom and hopefully you can enjoy those!",r.a.createElement("p",null,"I plan to add a note keeping section, where a user can keep track of daily events/reminders and hopefully some helpful memory games"))}),u=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null," About me"),r.a.createElement("p",null,"My name is Jeffry Lam Tang, I am a BCIT Computer Systems Technology student. The article section serves as an outlet for my mom to recollect and share her memories/experiences with family and anybody else! I will try to keep adding useful components."))},m=[{name:"moving-to-canada",title:"Moving to Canada",content:["We moved to Canada from Peru because at the time it was a better option for the family, for education, safer, and better living. I also had my brother Jose living in Canada\n            with his family. On Mar 24th, 2004 we made the move to Canada from Lima, Peru and flew through Jorge Chavez Internacional Aeropuerto.","When I first came to Canada, the fresh air was great. There were also a lot of Chinese people, so it was helpful in assimilating and learning.The food was super fresh, healthy,\n            but the food is nowhere close to as good as Peru. I missed the pollo a la brasa, anticucho, ceviche, chicharron, comida chifa,\n            mariscos, and inka kola! I also missed Peru's colorful clothing, with alpaca. The weather in Vancouver was raining a lot, and in Peru it was always hot and never raining. ","Last thoughts: Super happy we came to Canada!"]},{name:"childhood-in-china",title:"Growing Up in China",content:["I was born in August 3rd, 1968 in Zhanjiang, Guangdong Province, China in a small village. The house was very small but had everything because my dad\n            came back from Peru so, took Peru's building construction to China. He made our house three levels but added everything, \n            even washroom with showers, kitchen, showers, dining room and other rooms.","My dad originally had the last name Mak but he was adopted and got the last name Tang, both my parents came from Guangdong province. \n            We spoke cantonese at home, and I had 3 brothers from oldest to youngest, Sam, Jose, Carlos. Of course, there are their Spanish names, which they got after moving to Peru(have to talk about this another story) We all went to a small school, and I was studying in primary school until grade 4.","At the time, my grandpa was in Peru for a while, and was running a grocery store. Then in 1983, we all moved to Peru"]},{name:"youth-in-peru",title:"Teenage Years in Peru",content:["We moved to Peru when I was a teenager. Peru had a lot of opportunities, for our family to make a living and eat better. \n            I didn't know anything about Peru before we moved there.","I went to a special school to learn Spanish for 2-3 years. After, I went to a high school called\n            Collegio Juan XXIII with my little brother Carlos. I really liked the school, it was beautiful and had everything. I got to make a lot of new friends\n            like Susie, and Alejandro. My favorite course was pottery and art","At the moment, our family was running a grocery store and Chifa restaurant, and after school, I would always go work in the store or Chifa, wherever they needed me , never had time for homework"]},{name:"marriage-story",title:"Meeting My Husband",content:["I got introduced to my husband Julio because my uncle (Luis' grandpa) brought him to our house. My first impression was that \n            he was very very handsome (of course, or else we wouldn't be married), shy, didn't talk too much, would get embarassed about his smoking. He would always come to the chifa, invite me\n            take me to go out to places like Miraflores, to see the view and stores, and always treated me to eat good food. ","After 4 months of a lot of dating, eating good food we got married. Before we got married, we went to China and celebrated with the rest of our family.,\n            We got married in 1995, in Lima, in a municipalidad, we had a huge banquet and invited all our friends"]},{name:"first-child",title:"Having Our First Child",content:["After we got married, we were ready for kids. And before we knew it, I had a huge belly. At the time, the baby in the womb was very low in the womb\n            so everyone thought it would be a boy. I was a very busy, always working in the store while i was pregnant. On November 2, 1996, \n            I was having a lot of pain and went to the hospital. Then gave birth at night, to Jeffry, my brother Carlos helped give his Spanish name, and my husband gave his chinese name His head was so big when I was giving birth to him that he wouldn't come out,\n            so doctor had to use a special machine like a suction cup and pulled him out. He had a lot of hair, medium size baby, normal and healthy."]}],h=function(e){var t=e.articles;return r.a.createElement(r.a.Fragment,null,t.map((function(e,t){return r.a.createElement(i.b,{className:"article-list-item",key:t,to:"/article/".concat(e.name)},r.a.createElement("h3",null,e.title),r.a.createElement("p",null,e.content[0].substring(0,150),"..."))})))},d=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Articles"),r.a.createElement(h,{articles:m}))},f=a(5),p=a.n(f),g=a(9),w=a(11),y=function(){return r.a.createElement("h1",null,"404: Page Not Found, Turn Around! ")},v=function(e){var t=e.comments;return(r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Comments: "),t.map((function(e,t){return r.a.createElement("div",{className:"comment",key:t},r.a.createElement("h4",null,e.username),r.a.createElement("p",null,e.text))}))))},b=function(e){var t=e.articleName,a=e.upvotes,n=e.setArticleInfo,o=function(){var e=Object(g.a)(p.a.mark((function e(){var a,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(t,"/upvote"),{method:"post"});case 2:return a=e.sent,e.next=5,a.json();case 5:r=e.sent,n(r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{id:"upvotes-section"},r.a.createElement("h4",null,"This post has been upvoted ",a," times"),r.a.createElement("button",{onClick:function(){return o()}}," Upvote this !"))},E=function(e){var t=e.articleName,a=e.setArticleInfo,o=Object(n.useState)(""),l=Object(w.a)(o,2),i=l[0],s=l[1],c=Object(n.useState)(""),u=Object(w.a)(c,2),m=u[0],h=u[1],d=function(){var e=Object(g.a)(p.a.mark((function e(){var n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(t,"/add-comment"),{method:"post",body:JSON.stringify({username:i,text:m}),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,a(r),s(""),h("");case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{id:"add-comment-form"},r.a.createElement("h3",null,"Add a comment!"),r.a.createElement("label",null,"Name:",r.a.createElement("input",{type:"text",value:i,onChange:function(e){return s(e.target.value)}})),r.a.createElement("label",null,"Comment:",r.a.createElement("textarea",{rows:"4",cols:"50",value:m,onChange:function(e){return h(e.target.value)}})),r.a.createElement("button",{onClick:function(){return d()}},"Add Comment"))},k=function(e){var t=e.date;return r.a.createElement("div",{id:"dates-section"},r.a.createElement("h5",null,"Posted: ",t," "))},I=function(e){var t=e.match.params.name,a=m.find((function(e){return e.name===t})),o=Object(n.useState)({upvotes:0,comments:[],date:""}),l=Object(w.a)(o,2),i=l[0],s=l[1];if(Object(n.useEffect)((function(){(function(){var e=Object(g.a)(p.a.mark((function e(){var a,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(t));case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,console.log(n),s(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),!a)return r.a.createElement(y,null);var c=m.filter((function(e){return e.name!==t}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,a.title),r.a.createElement(k,{date:i.date}),a.content.map((function(e,t){return r.a.createElement("p",{key:t},e)})),r.a.createElement(b,{articleName:t,upvotes:i.upvotes,setArticleInfo:s}),r.a.createElement(v,{comments:i.comments}),r.a.createElement(E,{articleName:t,setArticleInfo:s}),r.a.createElement("h3",null,"Other Articles:"),r.a.createElement(h,{articles:c}))},C=function(){return r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(i.b,{to:"/"},"reMINDer")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/about"},"About")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/articles-list"},"Articles"))))};var A=function(){return r.a.createElement(i.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(C,null),r.a.createElement("div",{id:"page-body"},r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/",component:c,exact:!0}),r.a.createElement(s.a,{path:"/about",component:u}),r.a.createElement(s.a,{path:"/articles-list",component:d}),r.a.createElement(s.a,{path:"/article/:name",component:I}),r.a.createElement(s.a,{component:y})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.4ff6a1bd.chunk.js.map