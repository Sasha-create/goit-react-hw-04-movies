(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[5],{53:function(t,e,r){"use strict";r.d(e,"d",(function(){return l})),r.d(e,"c",(function(){return p})),r.d(e,"b",(function(){return m})),r.d(e,"a",(function(){return h})),r.d(e,"e",(function(){return f}));var a=r(56),n=r.n(a),c=r(57),s=r(61),o=r.n(s),i="265596974db4ac62a62cb8008d21dd7b",u="https://api.themoviedb.org/3",l=function(){var t=Object(c.a)(n.a.mark((function t(){var e;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.a.get("".concat(u,"/trending/movie/day?api_key=").concat(i));case 3:return e=t.sent,t.abrupt("return",e.data.results);case 7:return t.prev=7,t.t0=t.catch(0),console.log("error",t.t0),t.abrupt("return",[]);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=Object(c.a)(n.a.mark((function t(e){var r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.a.get("".concat(u,"/search/movie?api_key=").concat(i,"&language=en-US,ru&page=1&include_adult=false&query=").concat(e));case 3:return r=t.sent,t.abrupt("return",r.data.results);case 7:return t.prev=7,t.t0=t.catch(0),console.log("error",t.t0),t.abrupt("return",[]);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(c.a)(n.a.mark((function t(e){var r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.a.get("".concat(u,"/movie/").concat(e,"?api_key=").concat(i,"&language=en-US"));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:t.prev=7,t.t0=t.catch(0),console.log("error",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=Object(c.a)(n.a.mark((function t(e){var r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.a.get("".concat(u,"/movie/").concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 3:return r=t.sent,t.abrupt("return",r.data.cast);case 7:t.prev=7,t.t0=t.catch(0),console.log("error",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=Object(c.a)(n.a.mark((function t(e){var r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.a.get("".concat(u,"/movie/").concat(e,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 3:return r=t.sent,t.abrupt("return",r.data.results);case 7:t.prev=7,t.t0=t.catch(0),console.log("error",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},60:function(t,e,r){t.exports={list:"CardsList_list__1o8-G",Cards:"CardsList_Cards__2bOh8",item:"CardsList_item__2GDC_",images:"CardsList_images__3EpaL",title:"CardsList_title__14K8f",caption:"CardsList_caption__3zgkQ"}},62:function(t,e,r){"use strict";r.d(e,"a",(function(){return u}));r(0);var a=r(10),n=r(3),c=r(60),s=r.n(c),o=r(1),i=function(t){var e=t.poster_path,r=t.title,a=t.vote_average,n=t.vote_count;return Object(o.jsxs)("div",{className:s.a.cards,children:[null!==e?Object(o.jsx)("div",{className:s.a.images,children:Object(o.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w400","/").concat(e),alt:r})}):Object(o.jsx)("img",{src:"https://dummyimage.com/150x100/000/fff.jpg&text=no+image+:((",alt:r}),Object(o.jsxs)("div",{className:s.a.review,children:[Object(o.jsx)("h2",{className:s.a.title,children:r}),Object(o.jsxs)("span",{children:[Object(o.jsxs)("p",{className:s.a.caption,children:["Vote: ",a,"/10"]}),Object(o.jsxs)("p",{className:s.a.caption,children:["Vote count: ",n," votes"]})]})]})]})},u=Object(n.f)((function(t){var e=t.films,r=t.location;return Object(o.jsx)("ul",{className:s.a.list,children:e.map((function(t){var e=t.id,n=t.poster_path,c=t.title,u=t.vote_average,l=t.vote_count;return Object(o.jsx)("li",{className:s.a.item,children:Object(o.jsx)(a.b,{to:{pathname:"/movies/".concat(e),state:{from:r}},children:Object(o.jsx)(i,{poster_path:n,title:c,vote_average:u,vote_count:l})})},e)}))})}))},90:function(t,e,r){},91:function(t,e,r){t.exports={searchBar:"SearchBar_searchBar__4rcfC",searchForm:"SearchBar_searchForm__1kAmy",searchFormButton:"SearchBar_searchFormButton__2Trzn",searchFormButtonLabel:"SearchBar_searchFormButtonLabel__2HpZ7",searchFormInput:"SearchBar_searchFormInput__NbgoL"}},96:function(t,e,r){"use strict";function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,a=new Array(e);r<e;r++)a[r]=t[r];return a}function n(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"===typeof t)return a(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.r(e),r.d(e,"default",(function(){return v}));var c=r(54),s=r(55),o=r(59),i=r(58),u=r(0),l=r(17),p=r(53),m=r(62),h=(r(90),r(91)),f=r.n(h),d=r(1),b=function(t){Object(o.a)(r,t);var e=Object(i.a)(r);function r(){var t;Object(c.a)(this,r);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))).state={inputValue:""},t.handleInput=function(e){t.setState({inputValue:e.currentTarget.value.toLowerCase()})},t.handleSubmit=function(e){e.preventDefault(),""!==t.state.inputValue.trim()?(t.props.onSubmit(t.state.inputValue),t.setState({inputValue:""})):l.b.error("enter something else")},t}return Object(s.a)(r,[{key:"render",value:function(){return Object(d.jsx)("header",{className:f.a.searchBar,children:Object(d.jsxs)("form",{className:f.a.searchForm,onSubmit:this.handleSubmit,children:[Object(d.jsx)("button",{type:"submit",className:f.a.searchFormButton,children:Object(d.jsx)("span",{className:f.a.searchFormButtonLabel,children:"Search"})}),Object(d.jsx)("input",{className:f.a.searchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search films",onChange:this.handleInput,value:this.state.inputValue})]})})}}]),r}(u.Component),v=function(t){Object(o.a)(r,t);var e=Object(i.a)(r);function r(){var t;Object(c.a)(this,r);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))).state={films:[],filmName:""},t.handleFormSubmit=function(e){t.setState({filmName:e})},t}return Object(s.a)(r,[{key:"componentDidUpdate",value:function(t,e){var r=this;e.filmName!==this.state.filmName&&p.c(this.state.filmName).then((function(t){0!==t.length?r.setState({films:n(t)}):l.b.error("enter something else")})).catch((function(t){r.setState({error:t})}))}},{key:"render",value:function(){var t=this.state.films;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(b,{onSubmit:this.handleFormSubmit}),Object(d.jsx)("div",{children:Object(d.jsx)(m.a,{films:t})})]})}}]),r}(u.Component)}}]);
//# sourceMappingURL=movies-view.a2622091.chunk.js.map