(this["webpackJsonpbulletin-board"]=this["webpackJsonpbulletin-board"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o),r=n(2),a=n.n(r),s=n(5),c=n(7),u=(n(3),n(6)),l=n.n(u),h=n(4)({displayName:"Note",getInitialState:function(){return this.style={right:this.randomBetween(0,window.innerWidth-150,"px"),top:this.randomBetween(0,window.innerHeight-150,"px")},{editing:!1}},componentDidUpdate:function(){this.state.editing&&(this.refs.newText.focus(),this.refs.newText.select())},shouldComponentUpdate:function(e,t){return this.props.children!==e.children||this.state!==t},randomBetween:function(e,t,n){return e+Math.ceil(Math.random()*(t-e))+n},edit:function(){this.setState({editing:!0})},save:function(){this.props.onChange(this.refs.newText.value,this.props.id),this.setState({editing:!1})},remove:function(){this.props.onRemove(this.props.id)},renderForm:function(){return i.a.createElement("div",{className:"note",style:this.style},i.a.createElement("textarea",{ref:"newText",defaultValue:this.props.children}),i.a.createElement("button",{onClick:this.save},"SAVE"))},renderDisplay:function(){return i.a.createElement("div",{className:"note",style:this.style},i.a.createElement("p",null,this.props.children),i.a.createElement("span",null,i.a.createElement("button",{onClick:this.edit},"EDIT"),i.a.createElement("button",{onClick:this.remove},"X")))},render:function(){return i.a.createElement(l.a,null,this.state.editing?this.renderForm():this.renderDisplay())}});function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}var f=n(4)({displayName:"Board",getInitialState:function(){var e=this;if(this.props.count){var t="https://baconipsum.com/api/?type=all-meat&sentences=".concat(this.props.count);fetch(t).then((function(e){return e.json()})).then((function(e){return e[0]})).then((function(e){return e.split(". ")})).then((function(t){return t.forEach((function(t){return e.add(t)}))})).catch((function(e){console.log("Couldn't connect to the Bacon API",e)}))}return{notes:[]}},nextId:function(){return this.uniqueId=this.uniqueId||0,this.uniqueId++},add:function(e){var t=[].concat(Object(c.a)(this.state.notes),[{id:this.nextId(),note:e}]);this.setState({notes:t})},update:function(e,t){var n=this.state.notes.map((function(n){return n.id!==t?n:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n,{note:e})}));this.setState({notes:n})},remove:function(e){var t=this.state.notes.filter((function(t){return t.id!==e}));this.setState({notes:t})},eachNote:function(e){return i.a.createElement(h,{key:e.id,id:e.id,onChange:this.update,onRemove:this.remove},e.note)},render:function(){var e=this;return i.a.createElement("div",{className:"board"},this.state.notes.map(this.eachNote),i.a.createElement("button",{onClick:function(){return e.add("New Note")}},"+"))}}),p=(n(16),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function m(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a.a.render(i.a.createElement(f,{count:25}),document.getElementById("react-container")),function(e){if("serviceWorker"in navigator){if(new URL("/Corkboard",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/Corkboard","/service-worker.js");p?(!function(e,t){fetch(e).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):m(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):m(t,e)}))}}()},3:function(e,t,n){},8:function(e,t,n){e.exports=n(17)}},[[8,1,2]]]);
//# sourceMappingURL=main.963e140a.chunk.js.map