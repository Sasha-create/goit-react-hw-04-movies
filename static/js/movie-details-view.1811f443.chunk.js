(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[4],{53:function(e,t,n){"use strict";n.d(t,"d",(function(){return l})),n.d(t,"c",(function(){return p})),n.d(t,"b",(function(){return v})),n.d(t,"a",(function(){return b})),n.d(t,"e",(function(){return h}));var r=n(56),a=n.n(r),c=n(57),o=n(61),i=n.n(o),s="265596974db4ac62a62cb8008d21dd7b",u="https://api.themoviedb.org/3",l=function(){var e=Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get("".concat(u,"/trending/movie/day?api_key=").concat(s));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:return e.prev=7,e.t0=e.catch(0),console.log("error",e.t0),e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(c.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get("".concat(u,"/search/movie?api_key=").concat(s,"&language=en-US,ru&page=1&include_adult=false&query=").concat(t));case 3:return n=e.sent,e.abrupt("return",n.data.results);case 7:return e.prev=7,e.t0=e.catch(0),console.log("error",e.t0),e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(c.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get("".concat(u,"/movie/").concat(t,"?api_key=").concat(s,"&language=en-US"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log("error",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(c.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get("".concat(u,"/movie/").concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 3:return n=e.sent,e.abrupt("return",n.data.cast);case 7:e.prev=7,e.t0=e.catch(0),console.log("error",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(c.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get("".concat(u,"/movie/").concat(t,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 3:return n=e.sent,e.abrupt("return",n.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log("error",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},92:function(e,t,n){e.exports={button:"MovieDetailsPage_button__2do2H",overview:"MovieDetailsPage_overview__2KIRd",img:"MovieDetailsPage_img__3q7Ik",nav:"MovieDetailsPage_nav__8hlxM",cast:"MovieDetailsPage_cast__2hcaU",review:"MovieDetailsPage_review__3MNW_",item_active:"MovieDetailsPage_item_active__30C61"}},97:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return x}));var r=n(56),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s=n(57),u=n(54),l=n(55),p=n(59),v=n(58),b=n(0),h=n(53),d=n(92),f=n.n(d),j=n(10),m=n(3),g=n(8),O=n(1),w=Object(b.lazy)((function(){return n.e(1).then(n.bind(null,94))})),_=Object(b.lazy)((function(){return n.e(6).then(n.bind(null,95))})),x=function(e){Object(p.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={id:null,poster_path:null,backdrop_path:null,release_date:null,runtime:null,title:null,overview:null},e.handleGoBack=function(){var t,n=e.props,r=n.location;n.history.push((null===r||void 0===r||null===(t=r.state)||void 0===t?void 0:t.from)||g.a.home)},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(s.a)(a.a.mark((function e(){var t=this;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h.b(this.props.match.params.movieId).then((function(e){t.setState(i({},e))}));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.backdrop_path,n=e.title,r=e.runtime,a=e.release_date,c=e.overview,o=this.props.match;return Object(O.jsxs)("div",{children:[Object(O.jsx)("button",{className:f.a.button,type:"button",onClick:this.handleGoBack,children:"Go Back"}),Object(O.jsxs)("div",{className:f.a.overview,children:[null!==t?Object(O.jsx)("div",{className:f.a.img,children:Object(O.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w500/").concat(t),alt:n})}):Object(O.jsx)("img",{src:"https://dummyimage.com/150x100/000/fff.jpg&text=no+image+:((",alt:n}),Object(O.jsx)("span",{children:Object(O.jsxs)("p",{children:[Object(O.jsx)("b",{children:"Overview:"})," ",c]})})]}),Object(O.jsx)("h3",{children:n}),a&&Object(O.jsxs)("span",{children:[Object(O.jsxs)("p",{children:["Run time: ",r," min"]}),Object(O.jsxs)("p",{children:["Release date: ",a]})]}),Object(O.jsxs)("div",{className:f.a.nav,children:[Object(O.jsx)(j.b,{className:f.a.cast,activeClassName:f.a.item_active,to:"".concat(o.url).concat(g.a.cast),children:"Cast"}),Object(O.jsx)(j.b,{className:f.a.review,activeClassName:f.a.item_active,to:"".concat(o.url).concat(g.a.reviews),children:"Reviews"})]}),Object(O.jsxs)(b.Suspense,{children:[Object(O.jsx)(m.a,{exact:!0,path:"".concat(g.a.movieDetails).concat(g.a.cast),component:w}),Object(O.jsx)(m.a,{exact:!0,path:"".concat(g.a.movieDetails).concat(g.a.reviews),component:_})]})]})}}]),n}(b.Component)}}]);
//# sourceMappingURL=movie-details-view.1811f443.chunk.js.map