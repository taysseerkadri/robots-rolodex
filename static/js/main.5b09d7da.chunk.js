(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),c=n(3),s=n.n(c),a=(n(12),n(4)),i=n(5),u=n(7),h=n(6),l=(n(13),n(0)),d=function(e){return Object(l.jsxs)("div",{className:"card-container",children:[Object(l.jsx)("img",{src:"https://robohash.org/".concat(e.robot.id,"?set=set1&size=180x180"),alt:"moster"}),Object(l.jsxs)("h2",{children:[" ",e.robot.name," "]}),Object(l.jsxs)("p",{children:[" ",e.robot.email," "]})]})},b=(n(15),function(e){return Object(l.jsx)("div",{className:"card-list",children:e.robots.map((function(e){return Object(l.jsx)(d,{robot:e},e.id)}))})}),j=(n(16),function(e){var t=e.placeholder,n=e.handleChange;return Object(l.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:n})}),f=(n(17),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).state={robots:[],searchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("http://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.robots,o=t.searchField,r=n.filter((function(e){return e.name.toLowerCase().includes(o.toLowerCase())}));return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Robots Rolodex"}),Object(l.jsx)(j,{placeholder:"search robots",handleChange:function(t){return e.setState({searchField:t.target.value})}}),Object(l.jsx)(b,{robots:r})]})}}]),n}(o.Component)),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,o=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),o(e),r(e),c(e),s(e)}))};s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root")),p()}],[[18,1,2]]]);
//# sourceMappingURL=main.5b09d7da.chunk.js.map