(this["webpackJsonppcrowe-photography"]=this["webpackJsonppcrowe-photography"]||[]).push([[0],{137:function(e,t,n){},139:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(6),c=n.n(r),s=(n(63),n(44)),i=n(45),l=n(51),u=n(50),h=n(28),p=n(27),m=n(46),d=n(17);var w=function(e){var t=e.photos,n=Object(a.useState)(0),r=Object(p.a)(n,2),c=r[0],s=r[1],i=Object(a.useState)(!1),l=Object(p.a)(i,2),u=l[0],w=l[1],v=Object(a.useCallback)((function(e,t){t.photo;var n=t.index;s(n),w(!0)}),[]);return o.a.createElement("div",null,o.a.createElement(m.a,{photos:t,onClick:v,margin:5}),o.a.createElement(d.b,null,u?o.a.createElement(d.a,{onClose:function(){s(0),w(!1)}},o.a.createElement(d.c,{currentIndex:c,views:t.map((function(e){return Object(h.a)(Object(h.a)({},e),{},{srcset:e.srcSet,caption:e.title})}))})):null))},v=(n(137),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={photos:[]},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://pcrowe-photography.s3.amazonaws.com/index.json").then((function(e){return e.json()})).then((function(t){var n=t.map((function(e){return{src:e.url,width:e.w,height:e.h,title:e.caption,date:e.date}})).sort((function(e,t){return new Date(t.date)-new Date(e.date)}));e.setState({photos:n})}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"Container"},o.a.createElement("div",{className:"Content"},o.a.createElement("div",{className:"GalleryTitle"},"photography"),o.a.createElement("div",{className:"GallerySubTitle"},o.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://www.prestoncrowe.com"},"preston crowe")," ","takes photos"),o.a.createElement(w,{photos:this.state.photos}))))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},58:function(e,t,n){e.exports=n(139)},63:function(e,t,n){}},[[58,1,2]]]);
//# sourceMappingURL=main.1554307e.chunk.js.map