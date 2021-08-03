(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],[,,function(t,e,n){t.exports={form:"Form_form__1EOh8",field:"Form_field__2J_OA",invalid:"Form_invalid__3FxgQ",label:"Form_label__3bu-3",submit:"Form_submit__3KunD"}},function(t,e,n){t.exports={contactListItem:"ContactListItem_contactListItem__2-Rg1",number:"ContactListItem_number__2YbP5",button:"ContactListItem_button__2fPeS"}},,,,,,function(t,e,n){t.exports={filterContainer:"Filter_filterContainer__2nLW5",filter:"Filter_filter__351F3",label:"Filter_label__2uN6o"}},,function(t,e,n){t.exports={contactList:"ContactList_contactList__1Id42",notification:"ContactList_notification__3T7tw"}},,function(t,e,n){t.exports={section:"Section_section__1sWxW"}},function(t,e,n){t.exports={container:"Container_container__33n65"}},,,,,,,function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(12),o=n.n(r),i=(n(20),n(21),n(6)),s=n(4),l=n(5),u=n(8),m=n(7),b=n(25),d=n(13),h=n.n(d),j=n(14),f=n.n(j),p=n(0),O=function(t){var e=t.children;return Object(p.jsx)("div",{className:f.a.container,children:e})},_=function(t){var e=t.children;return Object(p.jsx)("section",{className:h.a.section,children:Object(p.jsx)(O,{children:e})})},x=n(15),v=n(2),C=n.n(v),g=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.pattern={name:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",number:"^\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}$"},t.isStringValid=function(t,e){var n=new RegExp(e);return""===t||n.test(t)},t.handleInputChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(x.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number;t.props.onFormSubmit(a,c),t.resetForm()},t.resetForm=function(){t.setState({name:"",number:""})},t.makeFieldClass=function(e,n){return[C.a.field].concat(Object(i.a)(t.isStringValid(e,t.pattern[n])?[]:[C.a.invalid])).join(" ")},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number,a=this.pattern,c=this.makeFieldClass,r=this.handleInputChange,o=this.handleSubmit;return Object(p.jsxs)("form",{autoComplete:"off",className:C.a.form,onSubmit:o,children:[Object(p.jsx)("label",{htmlFor:"name",className:C.a.label,children:"Name"}),Object(p.jsx)("input",{type:"text",name:"name",value:e,className:c(e,"name"),onChange:r,pattern:a.name,title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(p.jsx)("label",{htmlFor:"number",className:C.a.label,children:"Number"}),Object(p.jsx)("input",{type:"tel",name:"number",value:n,className:c(n,"number"),onChange:r,pattern:a.number,title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}),Object(p.jsx)("button",{type:"submit",className:C.a.submit,children:"Add Contact"})]})}}]),n}(a.Component),F=n(9),N=n.n(F);var S=function(t){var e=t.value,n=t.onSearch;return Object(p.jsxs)("div",{className:N.a.filterContainer,children:[Object(p.jsx)("label",{htmlFor:"name",className:N.a.label,children:"Find contacts by name"}),Object(p.jsx)("input",{type:"text",name:"filter",className:N.a.filter,value:e,onChange:n})]})},y=n(3),w=n.n(y);var L=function(t){var e=t.id,n=t.name,a=t.number,c=t.onDelete;return Object(p.jsxs)("li",{className:w.a.contactListItem,children:[Object(p.jsxs)("p",{className:w.a.contactMeta,children:[n,": ",Object(p.jsx)("span",{className:w.a.number,children:a})]}),Object(p.jsx)("button",{type:"button",className:w.a.button,onClick:function(){return c(e)}})]})},k=n(11),I=n.n(k);var A=function(t){var e=t.contacts,n=t.onDelete;return e.length?Object(p.jsx)("ul",{className:I.a.contactList,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(p.jsx)(L,{id:e,name:a,number:c,onDelete:n},e)}))}):Object(p.jsx)("p",{className:I.a.notification,children:"No contact found"})},D=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.addContact=function(e,n){if(t.state.contacts.some((function(t){return t.name.toLowerCase()===e.toLowerCase()})))alert("".concat(e," is already in contacts!"));else{var a={id:Object(b.a)(),name:e,number:n};t.setState((function(t){var e=t.contacts;return{contacts:[].concat(Object(i.a)(e),[a])}}))}},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.handleFilterChange=function(e){var n=e.target.value.trim();t.setState({filter:n})},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=JSON.parse(window.localStorage.getItem("contacts"))||[];this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&window.localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,a=this.handleFilterChange,c=this.addContact,r=this.deleteContact,o=e.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())}));return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)(_,{children:[Object(p.jsx)("h1",{children:"Phonebook"}),Object(p.jsx)(g,{onFormSubmit:c})]}),Object(p.jsxs)(_,{children:[Object(p.jsx)("h2",{children:"Contacts"}),e.length?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(S,{onSearch:a}),Object(p.jsx)(A,{contacts:o,onDelete:r})]}):Object(p.jsx)("p",{children:"Phonebook is empty"})]})]})}}]),n}(a.Component);o.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(D,{})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.31981b4c.chunk.js.map