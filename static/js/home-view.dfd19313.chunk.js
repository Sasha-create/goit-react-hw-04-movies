(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[2],{53:function(t,e,r){"use strict";r.d(e,"d",(function(){return l})),r.d(e,"c",(function(){return p})),r.d(e,"b",(function(){return v})),r.d(e,"a",(function(){return d})),r.d(e,"e",(function(){return f}));var n=r(56),a=r.n(n),c=r(57),s=r(61),o=r.n(s),i="265596974db4ac62a62cb8008d21dd7b",u="https://api.themoviedb.org/3",l=function(){var t=Object(c.a)(a.a.mark((function t(){var e;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.a.get("".concat(u,"/trending/movie/day?api_key=").concat(i));case 3:return e=t.sent,t.abrupt("return",e.data.results);case 7:return t.prev=7,t.t0=t.catch(0),console.log("error",t.t0),t.abrupt("return",[]);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=Object(c.a)(a.a.mark((function t(e){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.a.get("".concat(u,"/search/movie?api_key=").concat(i,"&language=en-US,ru&page=1&include_adult=false&query=").concat(e));case 3:return r=t.sent,t.abrupt("return",r.data.results);case 7:return t.prev=7,t.t0=t.catch(0),console.log("error",t.t0),t.abrupt("return",[]);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=Object(c.a)(a.a.mark((function t(e){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.a.get("".concat(u,"/movie/").concat(e,"?api_key=").concat(i,"&language=en-US"));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:t.prev=7,t.t0=t.catch(0),console.log("error",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=Object(c.a)(a.a.mark((function t(e){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.a.get("".concat(u,"/movie/").concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 3:return r=t.sent,t.abrupt("return",r.data.cast);case 7:t.prev=7,t.t0=t.catch(0),console.log("error",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=Object(c.a)(a.a.mark((function t(e){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.a.get("".concat(u,"/movie/").concat(e,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 3:return r=t.sent,t.abrupt("return",r.data.results);case 7:t.prev=7,t.t0=t.catch(0),console.log("error",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},60:function(t,e,r){t.exports={list:"CardsList_list__1o8-G",Cards:"CardsList_Cards__2bOh8",item:"CardsList_item__2GDC_",images:"CardsList_images__3EpaL",title:"CardsList_title__14K8f",caption:"CardsList_caption__3zgkQ"}},62:function(t,e,r){"use strict";r.d(e,"a",(function(){return u}));r(0);var n=r(10),a=r(3),c=r(60),s=r.n(c),o=r(1),i=function(t){var e=t.poster_path,r=t.title,n=t.vote_average,a=t.vote_count;return Object(o.jsxs)("div",{className:s.a.cards,children:[null!==e?Object(o.jsx)("div",{className:s.a.images,children:Object(o.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w400","/").concat(e),alt:r})}):Object(o.jsx)("img",{src:"https://dummyimage.com/150x100/000/fff.jpg&text=no+image+:((",alt:r}),Object(o.jsxs)("div",{className:s.a.review,children:[Object(o.jsx)("h2",{className:s.a.title,children:r}),Object(o.jsxs)("span",{children:[Object(o.jsxs)("p",{className:s.a.caption,children:["Vote: ",n,"/10"]}),Object(o.jsxs)("p",{className:s.a.caption,children:["Vote count: ",a," votes"]})]})]})]})},u=Object(a.f)((function(t){var e=t.films,r=t.location;return Object(o.jsx)("ul",{className:s.a.list,children:e.map((function(t){var e=t.id,a=t.poster_path,c=t.title,u=t.vote_average,l=t.vote_count;return Object(o.jsx)("li",{className:s.a.item,children:Object(o.jsx)(n.b,{to:{pathname:"/movies/".concat(e),state:{from:r}},children:Object(o.jsx)(i,{poster_path:a,title:c,vote_average:u,vote_count:l})})},e)}))})}))},93:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return p}));var n=r(54),a=r(55),c=r(59),s=r(58),o=r(0),i=r(62),u=r(53),l=r(1),p=function(t){Object(c.a)(r,t);var e=Object(s.a)(r);function r(){var t;Object(n.a)(this,r);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={films:[]},t}return Object(a.a)(r,[{key:"componentDidMount",value:function(){var t=this;u.d().then((function(e){t.setState({films:e})}))}},{key:"render",value:function(){var t=this.state.films;return Object(l.jsx)("section",{children:Object(l.jsx)("div",{children:Object(l.jsx)(i.a,{films:t})})})}}]),r}(o.Component)}}]);
//# sourceMappingURL=home-view.dfd19313.chunk.js.map