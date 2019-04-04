(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,t,a){e.exports=a(72)},71:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(31),o=a.n(c),l=a(2),s=a(3),i=a(5),m=a(4),u=a(6),p=a(14),h=a(15),d=a(7),b=a.n(d),f=a(12),E=a(35),v=a(18),y=a(13),g=a.n(y),j=r.a.createContext(),C=function(e,t){switch(t.type){case"DELETE_CONTACT":return Object(v.a)({},e,{contacts:e.contacts.filter(function(e){return e.id!==t.payload})});case"ADD_CONTACT":return Object(v.a)({},e,{contacts:[t.payload].concat(Object(E.a)(e.contacts))});case"UPDATE_CONTACT":return Object(v.a)({},e,{contacts:e.contacts.map(function(e){return e.id===t.payload.id?e=t.payload:e})});default:return e}},N=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={contacts:[],dispatch:function(e){a.setState(function(t){return C(t,e)})}},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(f.a)(b.a.mark(function e(){var t;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("https://jsonplaceholder.typicode.com/users");case 2:t=e.sent,this.setState({contacts:t.data});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(j.Provider,{value:this.state},this.props.children)}}]),t}(n.Component),O=j.Consumer,k=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={showContactInfo:!1},a.onDeleteClick=function(){var e=Object(f.a)(b.a.mark(function e(t,a){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.delete("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:a({type:"DELETE_CONTACT",payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),a({type:"DELETE_CONTACT",payload:t});case 9:case"end":return e.stop()}},e,null,[[0,6]])}));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.contact,a=t.id,n=t.name,c=t.email,o=t.phone,l=this.state.showContactInfo;return r.a.createElement(O,null,function(t){var s=t.dispatch;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("h4",null,n,r.a.createElement("i",{onClick:function(){return e.setState({showContactInfo:!e.state.showContactInfo})},className:" fas fa-sort-down"}),r.a.createElement("i",{className:"fas fa-times",style:{float:"right",color:"red",cursor:"pointer"},onClick:e.onDeleteClick.bind(e,a,s)}),r.a.createElement(p.b,{to:"contact/edit/".concat(a)},r.a.createElement("i",{className:"fas fa-pencil-alt",style:{cursor:"pointer",float:"right",color:"black",marginRight:"1rem"}}))),l?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Email:",c),r.a.createElement("li",{className:"list-group-item"}," Phone:",o)):null)})}}]),t}(n.Component),w=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(O,null,function(e){var t=e.contacts;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:" display-4 mb-2"},r.a.createElement("span",{className:"text-danger"}," Conatct "),"List  "),t.map(function(e){return r.a.createElement(k,{key:e.id,contact:e})}))})}}]),t}(n.Component),x=a(16),A=a(34),S=a.n(A),T=function(e){var t=e.label,a=e.name,n=e.value,c=e.placeholder,o=e.onChange,l=e.type,s=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},t),r.a.createElement("input",{type:l,name:a,className:S()("form-control form-control-lg",{"is-invalid":s}),placeholder:c,value:n,onChange:o}),s&&r.a.createElement("div",{className:"invalid-feedback"},s))};T.defaultProps={type:"text"};var D=T,P=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},a.onSubmit=function(){var e=Object(f.a)(b.a.mark(function e(t,n){var r,c,o,l,s,i;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=a.state,c=r.name,o=r.email,l=r.phone,""!==c){e.next=5;break}return a.setState({errors:{name:"Name is required"}}),e.abrupt("return");case 5:if(""!==o){e.next=8;break}return a.setState({errors:{email:" *** Email is required"}}),e.abrupt("return");case 8:if(""!==l){e.next=11;break}return a.setState({errors:{phone:"phone  is required"}}),e.abrupt("return");case 11:return s={name:c,email:o,phone:l},e.next=14,g.a.post("https://jsonplaceholder.typicode.com/users",s);case 14:i=e.sent,t({type:"ADD_CONTACT",payload:i.data}),a.setState({name:"",email:"",phone:"",errors:{}}),a.props.history.push("/");case 18:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),a.onChange=function(e){return a.setState(Object(x.a)({},e.target.name,e.target.value))},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,c=t.phone,o=t.errors;return r.a.createElement(O,null,function(t){var l=t.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{style:{fontWeight:"bold"},className:"card-header"},"Add Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(D,{label:"Name",name:"name",placeholder:"Enter name",value:a,onChange:e.onChange,error:o.name}),r.a.createElement(D,{label:"Email",type:"email",name:"email",placeholder:"Enter Email",value:n,onChange:e.onChange,error:o.email}),r.a.createElement(D,{label:"Phone",name:"phone",placeholder:"Enter Phone",value:c,onChange:e.onChange,error:o.phone}),"       ",r.a.createElement("input",{type:"submit",value:" Add Contact",className:"btn  btn-danger btn-block"}))))})}}]),t}(n.Component),q=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},a.onSubmit=function(){var e=Object(f.a)(b.a.mark(function e(t,n){var r,c,o,l,s,i,m;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=a.state,c=r.name,o=r.email,l=r.phone,""!==c){e.next=5;break}return a.setState({errors:{name:"Name is required"}}),e.abrupt("return");case 5:if(""!==o){e.next=8;break}return a.setState({errors:{email:" *** Email is required"}}),e.abrupt("return");case 8:if(""!==l){e.next=11;break}return a.setState({errors:{phone:"phone  is required"}}),e.abrupt("return");case 11:return s={name:c,email:o,phone:l},i=a.props.match.params.id,e.next=15,g.a.put("https://jsonplaceholder.typicode.com/users/".concat(i),s);case 15:m=e.sent,t({type:"UPDATE_CONTACT",payload:m.data}),a.setState({name:"",email:"",phone:"",errors:{}}),a.props.history.push("/");case 19:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),a.onChange=function(e){return a.setState(Object(x.a)({},e.target.name,e.target.value))},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(f.a)(b.a.mark(function e(){var t,a,n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,g.a.get("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:a=e.sent,n=a.data,this.setState({name:n.name,email:n.email,phone:n.phone});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,c=t.phone,o=t.errors;return r.a.createElement(O,null,function(t){var l=t.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{style:{fontWeight:"bold"},className:"card-header"},"Eits Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(D,{label:"Name",name:"name",placeholder:"Enter name",value:a,onChange:e.onChange,error:o.name}),r.a.createElement(D,{label:"Email",type:"email",name:"email",placeholder:"Enter Email",value:n,onChange:e.onChange,error:o.email}),r.a.createElement(D,{label:"Phone",name:"phone",placeholder:"Enter Phone",value:c,onChange:e.onChange,error:o.phone}),"       ",r.a.createElement("input",{type:"submit",value:" Update Contact",className:"btn  btn-danger btn-block"}))))})}}]),t}(n.Component),_=function(e){var t=e.brading;return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement(p.b,{to:"/",className:"navbar-brand"},t),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fas fa-home"})," Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{to:"/contact/add",className:"nav-link"}," ",r.a.createElement("i",{className:"fas fa-plus"}),"Add")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{to:"/about",className:"nav-link"}," ",r.a.createElement("i",{className:"fas fa-question"}),"About"))))))};_.defaultProps={brading:"Default brading"};var I=_,L=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"dispay-4"},"about contact-manager"),r.a.createElement("p",{className:"lead"}," simple app to manage contacts"),r.a.createElement("p",{className:"text-secondary"}," Version 1.0.0.0"))};function M(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4 "},r.a.createElement("i",{class:"fas fa-exclamation-triangle"})," ",r.a.createElement("span",{className:"text-danger"},"404")," page not NotFound"),r.a.createElement("p",{className:"lead"},"sorry, that page does not exist "))}var W=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",body:""},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/todos/1").then(function(e){return e.json()}).then(function(t){return e.setState({title:t.title,body:t.body})})}},{key:"render",value:function(){var e=this.state,t=e.title,a=e.body;return r.a.createElement("div",null,r.a.createElement("h1",null,t),r.a.createElement("p",null,a))}}]),t}(n.Component),F=(a(70),a(71),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(N,null,r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(I,{brading:"Contact Manager"}),r.a.createElement("div",{className:"container"},r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",component:w}),r.a.createElement(h.a,{exact:!0,path:"/about",component:L}),r.a.createElement(h.a,{exact:!0,path:"/contact/add",component:P}),r.a.createElement(h.a,{exact:!0,path:"/contact/edit/:id",component:q}),r.a.createElement(h.a,{exact:!0,path:"/test",component:W}),r.a.createElement(h.a,{exact:!0,component:M}))))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[36,1,2]]]);
//# sourceMappingURL=main.ed4ce6ff.chunk.js.map