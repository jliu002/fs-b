(this["webpackJsonpfamily-structure"]=this["webpackJsonpfamily-structure"]||[]).push([[0],{56:function(e,t,a){},63:function(e,t,a){e.exports=a(90)},68:function(e,t,a){},88:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(30),o=a.n(i),c=(a(68),a(6)),l=a(21),u=a(22),m=a(27),s=a(26),d=a(3),h=a(1),f=function(e){var t=e.link,a=e.content,n=e.color;return(r.a.createElement("div",{style:{color:"".concat(n),textAlign:"center"}},r.a.createElement("img",{src:t}),r.a.createElement("br",null),r.a.createElement(h.Text,null,a)))},g=a(7),p=a(4),b=function(e){var t=e.status,a=void 0===t?"1":t,n=e.text,i=void 0===n?"":n,o=(Object(p.a)(e,["status","text"]),"block"),c="none",l="none",u="grey";return"2"===a&&(o="none",c="block",l="none",u="black"),"3"===a&&(o="none",c="none",l="block"),r.a.createElement("div",{style:{position:"relative",color:"".concat(u)}},r.a.createElement("i",{className:"fa fa-check-circle",style:{color:"#188cff",display:"".concat(l)},"aria-hidden":"true"}),r.a.createElement("i",{className:"fa fa-circle",style:{color:"#188cff",display:"".concat(c)},"aria-hidden":"true"}),r.a.createElement("i",{className:"fa fa-circle-thin",style:{color:"#ababab",display:"".concat(o)},"aria-hidden":"true"}),r.a.createElement("div",{style:{position:"absolute",fontSize:"12px",width:"150px",textAlign:"center",left:"-68px"}},i))},E=function(e){var t=e.color,a=void 0===t?"grey":t,n=(Object(p.a)(e,["color"]),"grey"===a?"#ababab":"#188cff");return r.a.createElement("div",{style:{backgroundColor:"".concat(n),width:"150px",height:"3px",margin:"auto 0"}})},v=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.currentPage.stage,t="1",a="1",n="1",i="1",o="grey",c="grey",l="grey";if(e)switch(e){case 1:t="2",a="1",n="1",i="1",o="grey",c="grey",l="grey";break;case 2:t="3",a="2",n="1",i="1",o="blue",c="grey",l="grey";break;case 3:t="3",a="3",n="2",i="1",o="blue",c="blue",l="grey";break;case 4:t="3",a="3",n="3",i="2",o="blue",c="blue",l="blue"}return e&&[{s:1,c:"Where you live"},{s:2,c:"Your family"},{s:3,c:"Your caregivers"},{s:4,c:"Your summary"}].map((function(t){return t.s===e?(t.link="img/nav-on.png",t.color="#0175d2"):t.s<e?(t.link="img/nav-completed.png",t.color="#0175d2"):(t.link="img/nav-uncompleted.png",t.color="grey"),r.a.createElement(f,{key:Object(g.uuid)(),color:t.color,link:t.link,content:t.c})})),r.a.createElement(h.Flex,{pt:3,justifyContent:"center"},r.a.createElement(b,{status:t,text:"Where you live"}),r.a.createElement(E,{color:o}),r.a.createElement(b,{status:a,text:"Your family"}),r.a.createElement(E,{color:c}),r.a.createElement(b,{status:n,text:"Your caretakers"}),r.a.createElement(E,{color:l}),r.a.createElement(b,{status:i,text:"Summary"}))}}]),a}(n.Component),y=Object(d.b)((function(e){return{currentPage:e.currentPage}}))(v),x=a(8),k=function(e){return{type:"CURRENT_PAGE",payload:e}},j=function(e){return{type:"CURRENT_LIST",payload:e}},O=function(e){return{type:"UNLOCK_NEXT",payload:e}},N=function(e){return{type:"SHOW_RADIO",payload:e}},w=a(9),C=w.b.custom(h.Box),S={initial:{scale:.5,x:"250px",y:"-330px"},animate:{scale:.5,x:"250px",y:"-330px"},exit:{scale:1,x:"0",y:"0",transition:{duration:1,delay:1}}},T={initial:{opacity:1},animate:{opacity:1},exit:{opacity:0,transition:{duration:1}}};var P=Object(d.b)(null,(function(e){return{currentPage:function(t){return e(k(t))},unlockNext:function(t){return e(O(t))}}}))((function(e){Object(n.useEffect)((function(){var t=e.currentPage,a=e.unlockNext;t({page:"home",mapProps:e}),a({unlock:!0})}),[]);var t=Object(n.useState)(!0),a=Object(x.a)(t,2);return a[0],a[1],r.a.createElement(h.Box,{p:5},r.a.createElement(C,{variants:T,initial:"initial",animate:"animate",exit:"exit"},r.a.createElement(h.Flex,{justifyContent:"center"},r.a.createElement(h.Paragraph,null,"In this section, we'll ask about where you live ",r.a.createElement("br",null),"and who lives with you."))),r.a.createElement("div",{className:"buildingTop"},r.a.createElement(w.b.div,{className:"buildings",variants:S,initial:"initial",animate:"animate",exit:"exit"},r.a.createElement("img",{className:"img1",src:"img/Family structure_2_RowHouse.svg"}),r.a.createElement("img",{className:"img2",src:"img/Family structure_2_House.svg"}),r.a.createElement("img",{className:"img4",src:"img/Family structure_2_Apartment.svg"}),r.a.createElement("img",{className:"img3",src:"img/Family structure_2_Trailer.svg"}))))})),F=(a(87),a(88),{initial:{opacity:0,scale:1,x:"0",y:"0"},animate:{opacity:1,scale:1,x:"0",y:"0",transition:{type:"easeOut",duration:0,delay:2}}}),H={type:"easeOut",duration:1,delay:3},L={initial:{opacity:1,x:"0",y:"0"},animate:{opacity:.5,x:"-400px",y:"40px",transition:H}},_={initial:{opacity:1,x:"0",y:"0"},animate:{opacity:.5,x:"50px",y:"10px",transition:H}},R={initial:{opacity:1,x:"0",y:"0"},animate:{opacity:.5,x:"100px",y:"40px",transition:H}},W={initial:{opacity:1,x:"0",y:"0"},animate:{opacity:.5,x:"-50px",y:"10px",transition:H}},I={initial:{opacity:0},animate:{opacity:1,transition:{type:"easeOut",duration:1,delay:4}}},B={initial:{opacity:1},animate:{opacity:1},exit:{opacity:0}};var D=Object(d.b)((function(e){return{homeOption:e.homeNumber}}),(function(e){return{currentPage:function(t){return e(k(t))},homeNumber:function(t){return e(function(e){return{type:"HOME_NUMBER",payload:e}}(t))},unlockNext:function(t){return e(O(t))}}}))((function(e){var t=e.currentPage,a=e.homeOption,i=e.unlockNext,o=a.number,c=Object(n.useState)(!0),l=Object(x.a)(c,2);return l[0],l[1],Object(n.useEffect)((function(){t({stage:1,page:"choseHome",mapProps:e}),i(null===o?{unlock:!1}:{unlock:!0})}),[]),r.a.createElement(C,{p:5,variants:B,initial:"initial",animate:"animate",exit:"exit"},r.a.createElement(C,{variants:I,initial:"initial",animate:"animate"},r.a.createElement(h.Flex,{justifyContent:"center"},r.a.createElement(h.Paragraph,null,"There are differnt kind of homes,",r.a.createElement("br",null),"like house, apartments, and trailer homes.",r.a.createElement("br",null),r.a.createElement(h.Text,{fontWeight:"bold"},"How many homes"),r.a.createElement(h.Text,null," do you live in?"))),r.a.createElement(h.Flex,{justifyContent:"center"},r.a.createElement(h.SingleSelect,{hasCustomLayout:!0,onChange:function(t){var a=e.homeNumber,n=e.unlockNext;a({number:t}),n({unlock:!0})},selected:o},r.a.createElement(h.Stack,null,r.a.createElement(h.SingleSelectChoice,{value:"2"},"2 or more homes"),r.a.createElement(h.SingleSelectChoice,{value:"1"},"1 home"),r.a.createElement(h.SingleSelectChoice,{value:"0"},"No home"))))),r.a.createElement("div",{className:"buildingTop"},r.a.createElement(w.b.div,{className:"buildings",variants:F,initial:"initial",animate:"animate"},r.a.createElement(w.b.img,{variants:L,className:"img1",src:"img/Family structure_2_RowHouse.svg"}),r.a.createElement(w.b.img,{variants:_,className:"img2",src:"img/Family structure_2_House.svg"}),r.a.createElement(w.b.img,{variants:R,className:"img4",src:"img/Family structure_2_Apartment.svg"}),r.a.createElement(w.b.img,{variants:W,className:"img3",src:"img/Family structure_2_Trailer.svg"}))))})),z=a(14),A=a(94),M=a(41),U=a(96),G="card",Y=a(95),K=function(){return r.a.createElement("div",{style:{backgroundColor:"grey",width:"50px",height:"50px",borderRadius:"25px"}})},X=function(e){var t=e.url,a=e.name,n=void 0===a?"Name":a,i=e.width,o=void 0===i?"50px":i,c=e.alt,l=void 0===c?"character":c,u=e.faded,m=void 0===u?"false":u,s=(Object(p.a)(e,["url","name","width","alt","faded"]),"true"===m||"Me"===n?"grayscale(100%)":"grayscale(0%)"),d=t?r.a.createElement("img",{src:t,alt:l,width:o,style:{filter:"".concat(s)}}):r.a.createElement(K,null);return r.a.createElement(r.a.Fragment,null,r.a.createElement("center",null,d,r.a.createElement("div",{className:"charText"},n)))},J=Object(d.b)((function(e){return{currentPage:e.currentPage}}),null)((function(e){var t=e.item,a=e.tabindex,i=e.deleteIcon,o=void 0===i?function(){}:i,c=Object(p.a)(e,["item","tabindex","deleteIcon"]),l=Object(n.useRef)(),u=c.currentPage.page,m=function(){o(t.id)},s="draggers"===t.container||"Me"===t.name||"dndHome"===u&&"draggers2"===t.container?null:r.a.createElement("i",{tabIndex:"0",ref:l,className:"fa fa-times-circle iconClose fa-2x","aria-hidden":"true",onKeyDown:function(e){13===e.keyCode&&(console.log("remove..."),m())},onClick:m}),d=Object(Y.a)({item:{type:G,id:t.id,name:t.name,url:t.url,container:t.container},collect:function(e){return{isDragging:e.isDragging()}}}),h=Object(x.a)(d,2),f=h[0].isDragging,g=h[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:t.id,tabIndex:a,className:"dragItem",ref:g,onFocus:function(e){e.target.style.outline="1px dotted",e.target.style.outlineOffset=2},onBlur:function(e){e.target.style.outline="none"},onKeyDown:function(e){39===e.keyCode&&null!==s&&(console.log(l.current),l.current.focus())},style:{backgroundColor:"".concat(f?"lightgrey":"white"),opacity:"".concat(f?"0.2":"1")}},r.a.createElement(X,{url:t.url,name:t.name}),s))})),q=function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"home1",r=e.filter((function(e){return"home1"===e.container})),i=e.filter((function(e){return"home2"===e.container})),o=e.filter((function(e){return"draggers2"===e.container}));"predndHome"===n?o.length<=1?a({unlock:!1}):a({unlock:!0}):("1"===t.number&&(1===r.length?a({unlock:!1}):a({unlock:!0})),"2"===t.number&&(1===r.length||1===i.length?a({unlock:!1}):a({unlock:!0})))},$=a(40);var Q=Object(d.b)(null,(function(e){return{updateTitle:function(t){return e(function(e){return{type:"UPDATE_TITLE",payload:e}}(t))}}}))((function(e){var t=e.title,a=void 0===t?"Home":t,i=e.titleClass,o=void 0===i?"title":i,c=e.name,l=Object(p.a)(e,["title","titleClass","name"]),u=Object(n.useState)("none"),m=Object(x.a)(u,2),s=m[0],d=m[1],h=""===a?null:r.a.createElement("span",{style:{margin:"auto 10px"}},r.a.createElement("i",{className:"fa fa-pencil","aria-hidden":"true",onClick:function(){d("none"===s?"inline":"none")}}),r.a.createElement("input",{type:"text",style:{width:"150px",height:"18px",display:"".concat(s)},onKeyDown:function(e){13===e.keyCode&&(l.updateTitle(Object($.a)({},c,e.target.value)),e.target.value="",d("none"))}}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:o},a,h))})),V=function(e){var t=e.currentPage,a=e.homeNumber,n=e.currentList,i=e.updateList,o=e.unlockNext,c=e.title,l=e.border,u=e.id,m=e.over,s=e.className,d=t.page,h="draggers";"dndHome"===d&&"2"===a.number&&(h="draggers2");var f=1;"draggers2"===u&&(f=100),"home1"===u&&(f=200),"home2"===u&&(f=300);var p=Object(z.a)(n.container),b=Object(U.a)({accept:G,drop:function(e,t){if("me"!==e.name.toLowerCase()){if(u!==h){if(e.container===h){var n={};n.id=Object(g.uuid)(),n.name=e.name,n.url=e.url,n.container=u,n.name=function(e,t){for(var a=t.filter((function(t){return t.container===e.container})).map((function(e){return e.name})),n=e.name,r=2;r<10&&a.includes(n);r++)n=e.name+r;return n}(n,p),p.push(n)}}else if(e.container!==h){var r=p.filter((function(t){return t.id!==e.id}));p=r}"predndHome"===d?q(p,a,o,"predndHome"):q(p,a,o),i({container:p})}},collect:function(e){return{isOver:e.isOver()}}}),E=Object(x.a)(b,2),v=E[0].isOver,y=E[1],k=l;"none"!==k&&(k=v?m:k);var j=function(e){var t=p.filter((function(t){return t.id!==e}));"predndHome"===d?q(t,a,o,"predndHome"):q(t,a,o),i({container:t})};return(r.a.createElement("div",null,r.a.createElement(Q,{title:c,name:u}),r.a.createElement("div",{ref:y,className:s,style:{border:"".concat(k)}},p.filter((function(e){return e.container===u})).map((function(e,t){return r.a.createElement(J,{tabindex:f+5*t,item:e,key:e.id,deleteIcon:j})})))))};V.defaultProps={title:"",border:"none"};var Z=Object(d.b)((function(e){return{currentList:e.currentList,homeNumber:e.homeNumber,currentPage:e.currentPage}}),(function(e){return{updateList:function(t){return e(j(t))},unlockNext:function(t){return e(O(t))}}}))(V),ee={initial:{opacity:0},animate:{opacity:1,transition:{delay:.5}},exit:{opacity:0}};var te=Object(d.b)((function(e){return{homeNumber:e.homeNumber,currentList:e.currentList,homeTitle:e.updateTitle}}),(function(e){return{currentPage:function(t){return e(k(t))},unlockNext:function(t){return e(O(t))}}}))((function(e){Object(n.useEffect)((function(){var t=e.currentPage,a=e.currentList,n=e.homeNumber,r=e.unlockNext;t({stage:2,page:"predndHome",mapProps:e});var i=Object(z.a)(a.container);q(i,n,r,"prehome"),"1"===n.number&&e.history.push("/dndHome")}),[]);var t=e.homeNumber,a=(e.homeTitle,null);switch(t.number){case"0":case"1":break;case"2":a=r.a.createElement(r.a.Fragment,null,r.a.createElement(h.Flex,{justifyContent:"center",pb:"3"},r.a.createElement(Z,{className:"draggers",id:"draggers"})),r.a.createElement(h.Flex,{justifyContent:"center"},r.a.createElement(Z,{title:"Who lives with you",className:"prehome",id:"draggers2",over:"solid 1px #0175d2"})))}return(r.a.createElement(C,{p:"5",variants:ee,initial:"initial",animate:"animate",exit:"exit"},r.a.createElement(A.a,{backend:M.a},r.a.createElement(h.Paragraph,null,"Think about the two homes where you spend the most time.",r.a.createElement("br",null),r.a.createElement(h.Text,{fontWeight:"bold"},"Drag the people"),r.a.createElement(h.Text,null," who live with you in those homes to the box.")),r.a.createElement(h.Box,null,a))))})),ae={initial:{opacity:0},animate:{opacity:1,transition:{delay:.5}},exit:{opacity:0}};var ne=Object(d.b)((function(e){return{homeNumber:e.homeNumber,currentList:e.currentList,homeTitle:e.updateTitle}}),(function(e){return{currentPage:function(t){return e(k(t))},unlockNext:function(t){return e(O(t))}}}))((function(e){Object(n.useEffect)((function(){var t=e.currentPage,a=e.currentList,n=e.homeNumber,r=e.unlockNext;t({stage:2,page:"dndHome",mapProps:e});var i=Object(z.a)(a.container);q(i,n,r)}),[]);var t=e.homeNumber,a=e.homeTitle,i=null;switch(t.number){case"0":break;case"1":i=r.a.createElement(r.a.Fragment,null,r.a.createElement(h.Flex,{justifyContent:"center",pb:"3"},r.a.createElement(Z,{className:"draggers",id:"draggers"})),r.a.createElement(h.Flex,{justifyContent:"center"},r.a.createElement(Z,{title:"Home1",className:"home1",id:"home1",over:"solid 1px #0175d2"})));break;case"2":i=r.a.createElement(r.a.Fragment,null,r.a.createElement(h.Flex,{justifyContent:"center",pb:"3"},r.a.createElement(Z,{className:"draggers",id:"draggers2"})),r.a.createElement(h.Flex,{justifyContent:"center"},r.a.createElement(Z,{title:a.home1,className:"home1",id:"home1",over:"solid 1px #0175d2"}),r.a.createElement(Z,{title:a.home2,className:"home1",id:"home2",over:"solid 1px #0175d2"})))}return(r.a.createElement(C,{p:"5",variants:ae,initial:"initial",animate:"animate",exit:"exit"},r.a.createElement(A.a,{backend:M.a},r.a.createElement(h.Paragraph,null,r.a.createElement(h.Text,{fontWeight:"bold"},"Drag people"),r.a.createElement(h.Text,null," ","to show where they live with you: in Home 1, Home 2, or in both homes.")),r.a.createElement(h.Box,null,i))))})),re=["home","choseHome","predndHome","dndHome","yourfamily","caretakers","caretakerperson","summary","end"],ie=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).next_inside=function(){var t=e.props,a=t.currentPage,n=t.showRadio,r=t.stepStatus,i=a.page,o=re.indexOf(i),c=r.step+1,l=r.totalSteps;"caretakerperson"===i&&c<=l?n({showRadio2:!1,setClass:!0,step:c}):a.mapProps.history.push("/".concat(re[o+1]))},e.prev_inside=function(){console.log("prev...");var t=e.props.currentPage,a=t.page,n=re.indexOf(a);n>0&&("home"===re[n-1]?t.mapProps.history.push("/"):t.mapProps.history.push("/".concat(re[n-1])))},e}return Object(u.a)(a,[{key:"render",value:function(){var e=!this.props.unlockNextButton.unlock;return r.a.createElement("div",null,r.a.createElement(h.Toolbar,{isNextDisabled:e,onClickPrev:this.prev_inside,onClickNext:this.next_inside}))}}],[{key:"next",value:function(){console.log("static next function..."),this.next_inside()}}]),a}(n.Component),oe=Object(d.b)((function(e){return{currentPage:e.currentPage,homeNumber:e.homeNumber,unlockNextButton:e.unlockNext,stepStatus:e.showRadio}}),(function(e){return{unlockNext:function(t){return e(O(t))},showRadio:function(t){return e(N(t))}}}))(ie),ce=function(){function e(){Object(l.a)(this,e)}return Object(u.a)(e,[{key:"init",value:function(){window.parent.hook&&window.parent.hook(this)}},{key:"next",value:function(){console.log("next from api..."),oe.next()}},{key:"sendData",value:function(e){window.parent.getData&&window.parent.getData(e)}}]),e}(),le=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,"Last Page!"))}}]),a}(n.Component),ue=(a(56),function(e){var t=e.checked,a=void 0===t?"false":t,i=e.tabindex,o=void 0===i?"0":i,c=e.item,l=e.checkIcon,u=void 0===l?function(){}:l,m=e.faded,s=void 0===m?"false":m,d=(Object(p.a)(e,["checked","tabindex","item","checkIcon","faded"]),"true"===s?"true":"false"),h=Object(n.useState)("true"===a?"#188cff":"white"),f=Object(x.a)(h,2),g=f[0],b=f[1],E="true"===s?null:r.a.createElement("i",{className:"fa fa-check fa-lg checkframe",style:{backgroundColor:"".concat(g)},"aria-hidden":"true"});return r.a.createElement("div",{id:c.id,tabIndex:o,className:"iconcheck",onClick:function(){"true"!==s&&(b("white"===g?"#188cff":"white"),u(c.id))}},r.a.createElement(X,{url:c.url,name:c.name,faded:d}),E)}),me=function(e){var t=e.title,a=void 0===t?"Home":t,n=e.className,i=void 0===n?"home1":n,o=e.id,c=e.children;Object(p.a)(e,["title","className","id","children"]);return(r.a.createElement(r.a.Fragment,null,r.a.createElement(Q,{title:a,name:o}),r.a.createElement("div",{className:i},c)))};var se=Object(d.b)((function(e){return{currentList:e.currentList}}),(function(e){return{updateList:function(t){return e(j(t))}}}))((function(e){var t=e.currentList,a=e.id,i=e.title,o=e.className,c=e.updateList,l=Object(z.a)(t.container),u=Object(n.useState)("false"),m=Object(x.a)(u,2),s=(m[0],m[1]),d=function(e){for(var t=0,a=l.length;t<a;t++)l[t].id===e&&(l[t].older18&&!0===l[t].older18?l[t].older18=!1:(l[t].older18=!0,s("false")));c({container:l})},h=1;return"Home1"===i&&(h=100),"Home2"===i&&(h=200),r.a.createElement("div",null,r.a.createElement(me,{title:i,className:o,id:a},l.filter((function(e){return e.container===a})).map((function(e,t){var a=e.older18&&!0===e.older18?"true":"false";return(r.a.createElement(ue,{checked:a,tabindex:h+t,item:e,key:e.id,checkIcon:d}))}))))})),de={initial:{opacity:0},animate:{opacity:1,transition:{delay:.5}},exit:{opacity:0}};var he=Object(d.b)((function(e){return{homeNumber:e.homeNumber,homeTitle:e.updateTitle}}),(function(e){return{currentPage:function(t){return e(k(t))}}}))((function(e){Object(n.useEffect)((function(){e.currentPage({stage:2,page:"yourfamily",mapProps:e})}),[]);var t=e.homeNumber,a=e.homeTitle;console.log("homenumber:",t);var i=null;switch(t.number){case"1":i=r.a.createElement(r.a.Fragment,null,r.a.createElement(h.Flex,{justifyContent:"center"},r.a.createElement(se,{id:"home1",title:a.home1,className:"home1"})));break;case"2":i=r.a.createElement(r.a.Fragment,null,r.a.createElement(h.Flex,{justifyContent:"center"},r.a.createElement(se,{id:"home1",title:a.home1,className:"home1"}),r.a.createElement(se,{id:"home2",title:a.home2,className:"home1"})))}return(r.a.createElement(C,{p:"5",variants:de,initial:"initial",animate:"animate",exit:"exit"},r.a.createElement(h.Paragraph,null,r.a.createElement(h.Text,null,"Who in your homes is "),r.a.createElement(h.Text,{fontWeight:"bold"},"18 years or older?")),r.a.createElement(h.Box,null,i)))})),fe=Object(d.b)((function(e){return{currentList:e.currentList}}),(function(e){return{updateList:function(t){return e(j(t))}}}))((function(e){var t=e.currentList,a=e.id,n=e.title,i=e.className,o=e.updateList,c=Object(z.a)(t.container),l=function(e){console.log(e);for(var t=0,a=c.length;t<a;t++)c[t].id===e&&(c[t].caretaker&&!0===c[t].caretaker?c[t].caretaker=!1:c[t].caretaker=!0);o({container:c}),console.log("container:",c)},u=1;return"Home1"===n&&(u=100),"Home2"===n&&(u=200),r.a.createElement("div",null,r.a.createElement(me,{title:n,className:i,id:a},c.filter((function(e){return e.container===a})).filter((function(e){return"me"!==e.name.toLowerCase()})).map((function(e,t){var a=e.older18&&!0===e.older18?"false":"true",n=e.caretaker&&!0===e.caretaker?"true":"false";return r.a.createElement(ue,{tabindex:u+t,item:e,key:e.id,checkIcon:l,faded:a,checked:n})}))))})),ge={initial:{opacity:0},animate:{opacity:1,transition:{delay:.5}},exit:{opacity:0}};var pe=Object(d.b)((function(e){return{homeNumber:e.homeNumber,homeTitle:e.updateTitle}}),(function(e){return{currentPage:function(t){return e(k(t))}}}))((function(e){Object(n.useEffect)((function(){e.currentPage({stage:3,page:"caretakers",mapProps:e})}),[]);var t=e.homeNumber,a=e.homeTitle;console.log("homenumber:",t);var i=null;switch(t.number){case"1":i=r.a.createElement(r.a.Fragment,null,r.a.createElement(h.Flex,{justifyContent:"center"},r.a.createElement(fe,{id:"home1",title:a.home1,className:"home1"})));break;case"2":case"3":i=r.a.createElement(r.a.Fragment,null,r.a.createElement(h.Flex,{justifyContent:"center"},r.a.createElement(fe,{id:"home1",title:a.home1,className:"home1"}),r.a.createElement(fe,{id:"home2",title:a.home2,className:"home1"})))}return(r.a.createElement(C,{p:"5",variants:ge,initial:"initial",animate:"animate",exit:"exit"},r.a.createElement(h.Paragraph,null,r.a.createElement(h.Text,null,"Who "),r.a.createElement(h.Text,{fontWeight:"bold"},"takes care of you?"),r.a.createElement("br",null),"You can select up to four people in each home."),r.a.createElement(h.Box,null,i)))})),be={initial:{x:"0"},animate:{x:"-1050px"}};var Ee=function(e){var t=e.id,a=e.title,i=e.className,o=(Object(p.a)(e,["id","title","className"]),Object(d.d)((function(e){return e.currentList}))),c=Object(d.d)((function(e){return e.showRadio})),l=Object(d.c)(),u=Object(z.a)(o.container),m=c.setClass,s=c.step,f=c.showRadio2,g=u.filter((function(e){return"home1"===e.container&&"me"!==e.name.toLowerCase()&&e.caretaker})).length,b=u.filter((function(e){return"home2"===e.container&&"me"!==e.name.toLowerCase()&&e.caretaker})).length,E=!(s<=g),v=g+b;Object(n.useEffect)((function(){l(N({totalSteps:v}))}),[]);var y=u.filter((function(e){return e.container===t&&"me"!==e.name.toLowerCase()&&e.caretaker})).map((function(e,t){return"home1"===e.container&&(e.step=t+1),"home2"===e.container&&(e.step=t+1+g),0!==s&&(e.faded=!0,e.step===s&&(e.faded=!1)),e})),x=function(e){for(var t=0,a=u.length;t<a;t++)if(u[t].step===s){u[t].work=e;break}l(j({container:u})),l(N({showRadio2:!0}))},k=function(e){for(var t=0,a=u.length;t<a;t++)if(u[t].step===s){u[t].education=e;break}l(j({container:u}))};return r.a.createElement(w.b.div,{variants:be,animate:E?"animate":"initial"},r.a.createElement(me,{title:a,className:m?"home4":i,id:t},r.a.createElement(h.Stack,{spacing:"2",direction:"row"},y.map((function(e){var t=!1;0!==s&&(t=!e.faded);var a=e.work?e.work:null,n=e.education?e.education:null;return r.a.createElement("div",{key:Math.random().toString()},r.a.createElement(X,{url:e.url,name:e.name,key:e.id,faded:e.faded?"true":"false"}),t&&r.a.createElement("div",{className:"radios"},r.a.createElement("p",null,"In the last month, has your ",r.a.createElement("b",null,e.name)," worked for pay?"),r.a.createElement(h.SingleSelect,{hasCustomLayout:!0,onChange:x,selected:a},r.a.createElement(h.Stack,{spacing:"2",direction:"row"},r.a.createElement(h.SingleSelectChoice,{value:"0"},"Yes"),r.a.createElement(h.SingleSelectChoice,{value:"1"},"No"),r.a.createElement(h.SingleSelectChoice,{value:"2"},"I don't know"))),f&&r.a.createElement("div",null,r.a.createElement("p",null,"How far in school did your ",r.a.createElement("b",null,e.name)," go?"),r.a.createElement(h.SingleSelect,{hasCustomLayout:!0,onChange:k,selected:n},r.a.createElement(h.SingleSelectChoice,{value:"0"},"She didn't finish high school."),r.a.createElement(h.SingleSelectChoice,{value:"1"},"She graduated from high school or has a high school degree."),r.a.createElement(h.SingleSelectChoice,{value:"2"},"She had some college but didn't graduate."),r.a.createElement(h.SingleSelectChoice,{value:"3"},"She graduated from college."),r.a.createElement(h.SingleSelectChoice,{value:"4"},"I don't know.")))))})))))},ve={initial:{opacity:0},animate:{opacity:1,transition:{delay:.5}},exit:{opacity:0}};var ye=Object(d.b)((function(e){return{homeNumber:e.homeNumber,homeTitle:e.updateTitle,careSteps:e.showRadio}}),(function(e){return{currentPage:function(t){return e(k(t))}}}))((function(e){var t=e.homeNumber,a=e.homeTitle,i=e.currentPage,o=0===e.careSteps.step;Object(n.useEffect)((function(){i({stage:3,page:"caretakerperson",mapProps:e})}),[]);var c=null;switch(t.number){case"1":c=r.a.createElement(r.a.Fragment,null,r.a.createElement(h.Flex,{justifyContent:"center"},r.a.createElement(Ee,{id:"home1",title:a.home1,className:"home3"})));break;case"2":c=r.a.createElement(r.a.Fragment,null,r.a.createElement(h.Flex,{spacing:"1"},r.a.createElement(Ee,{id:"home1",title:a.home1,className:"home3"}),r.a.createElement(Ee,{id:"home2",title:a.home2,className:"home3"})))}return(r.a.createElement(C,{variants:ve,initial:"initial",animate:"animate",exit:"exit"},o&&r.a.createElement(C,{p:"5"},r.a.createElement(h.Flex,{justifyContent:"center"},r.a.createElement(h.Paragraph,null,"Now we'll ask some questions about",r.a.createElement("br",null),"the people whoe take care of you.",r.a.createElement("br",null),r.a.createElement(h.Text,null,"Tap "),r.a.createElement(h.Text,{fontWeight:"bold"},"Next"),r.a.createElement(h.Text,null," to continue")))),r.a.createElement(h.Box,{p:"4"},c)))}));var xe=function(e){var t=e.fontSize,a=void 0===t?"2":t,n=e.fontWeight,i=void 0===n?"medium":n,o=e.color,c=void 0===o?"primary":o;return Object(p.a)(e,["fontSize","fontWeight","color"]),r.a.createElement(h.Box,{css:{cursor:"pointer"}},r.a.createElement(h.Flex,{justifyContent:"center"},r.a.createElement("i",{className:"fa fa-trash iconRemove","aria-hidden":"true"}),r.a.createElement(h.Text,{pl:"2",fontSize:a,fontWeight:i,color:c},"Remove")))};var ke=function(e){var t=e.fontSize,a=void 0===t?"2":t,i=e.fontWeight,o=void 0===i?"medium":i,c=e.color,l=void 0===c?"primary":c,u=e.title,m=void 0===u?"Home":u,s=e.opened,d=void 0===s||s,f=e.toggleContent,g=void 0===f?function(){}:f,b=(Object(p.a)(e,["fontSize","fontWeight","color","title","opened","toggleContent"]),Object(n.useState)(d?"down":"right")),E=Object(x.a)(b,2),v=E[0],y=E[1];return r.a.createElement(h.Box,{onClick:function(){y("down"===v?"right":"down"),g()},css:{cursor:"pointer"}},r.a.createElement(h.Flex,{justifyContent:"center"},r.a.createElement("i",{className:"fa fa-caret-".concat(v," iconRemove"),"aria-hidden":"true"}),r.a.createElement(h.Text,{pl:"2",fontSize:a,fontWeight:o,color:l},m)))};var je=function(e){var t=e.width,a=void 0===t?"700px":t,i=e.height,o=void 0===i?"400px":i,c=e.title,l=void 0===c?"Home":c,u=e.opened,m=void 0===u||u,s=e.children,d=(Object(p.a)(e,["width","height","title","opened","children"]),Object(n.useState)(!!m)),f=Object(x.a)(d,2),g=f[0],b=f[1];return o=g?"400px":"auto",r.a.createElement(h.Box,{p:"3",width:a,height:o,border:"1",borderRadius:"md",borderColor:"n.600"},r.a.createElement(h.Flex,{justifyContent:"space-between"},r.a.createElement(ke,{opened:m,toggleContent:function(){b(!g),o=g?"400px":"auto"},title:l}),r.a.createElement(xe,null)),g&&s)},Oe={work:["Works for pay","Not work for pay","I don't know"],education:["Did't finish high school.","Graduated from high school or has a high school degree.","Had some college but didn't graduate.","Graduated from college.","I don't know his/her education."]},Ne=function(){return r.a.createElement("div",{style:{backgroundColor:"grey",width:"50px",height:"50px",borderRadius:"25px"}})},we=function(e){var t=e.item,a=e.width,n=void 0===a?"50px":a,i=e.alt,o=void 0===i?"character":i,c=(e.faded,Object(p.a)(e,["item","width","alt","faded"]),t.url),l=t.name?t.name:"Name",u=t.work?Oe.work[Number(t.work)]:"Works for pay",m=t.education?Oe.education[Number(t.education)]:"Graduated from college",s=c?r.a.createElement("img",{src:c,alt:o,width:n}):r.a.createElement(Ne,null);return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.Stack,{direction:"row"},s,r.a.createElement(h.Paragraph,null,r.a.createElement(h.Text,{fontSize:"1"},l),r.a.createElement("br",null),r.a.createElement(h.Text,{fontSize:"1",color:"n.600"},u,r.a.createElement("br",null),m))))};var Ce=function(e){var t=e.fontSize,a=void 0===t?"2":t,n=e.fontWeight,i=void 0===n?"normal":n,o=e.id,c=(Object(p.a)(e,["fontSize","fontWeight","id"]),Object(d.d)((function(e){return e.currentList})).container);return r.a.createElement(h.Box,{p:"2"},r.a.createElement(h.Text,{fontSize:a,fontWeight:i},"People who take care of you"),r.a.createElement(h.Box,{pt:"3"},r.a.createElement(h.Flex,null,c.filter((function(e){return e.container===o&&e.caretaker})).map((function(e){return r.a.createElement(we,{item:e,key:e.id})})))),r.a.createElement(h.Text,{fontSize:a,fontWeight:i},"Other people who live with you"),r.a.createElement(h.Box,{pt:"3",width:"80px"},r.a.createElement(h.Flex,null,c.filter((function(e){return e.container===o&&!e.caretaker})).map((function(e){return r.a.createElement(X,{url:e.url,name:e.name,key:e.id})})))))},Se={initial:{opacity:0},animate:{opacity:1,transition:{delay:.5}},exit:{opacity:0}};var Te=function(e){Object(c.f)();var t=Object(d.c)(),a=Object(d.d)((function(e){return e.homeNumber})),i=Object(d.d)((function(e){return e.updateTitle}));Object(n.useEffect)((function(){t(k({stage:4,page:"summary",mapProps:e}))}),[]);var o=null;switch(a.number){case"1":o=r.a.createElement(r.a.Fragment,null,r.a.createElement(h.Flex,{justifyContent:"center"},r.a.createElement(je,{id:"home1",title:i.home1},r.a.createElement(Ce,{id:"home1"}))));break;case"2":o=r.a.createElement(r.a.Fragment,null,r.a.createElement(h.Flex,{justifyContent:"center"},r.a.createElement(je,{id:"home1",title:i.home1},r.a.createElement(Ce,{id:"home1"}))),r.a.createElement(h.Flex,{justifyContent:"center",mt:"2"},r.a.createElement(je,{id:"home2",title:i.home2},r.a.createElement(Ce,{id:"home2"}))))}return(r.a.createElement(C,{variants:Se,initial:"initial",animate:"animate",exit:"exit"},r.a.createElement(C,{p:"5"},r.a.createElement(h.Flex,{justifyContent:"center"},r.a.createElement(h.Paragraph,null,"Here's what you told us about where you live.",r.a.createElement("br",null),r.a.createElement(h.Text,null,"Tap "),r.a.createElement(h.Text,{fontWeight:"bold"},"Next"),r.a.createElement(h.Text,null," if everything looks correct.")))),r.a.createElement(h.Box,null,o)))};var Pe=function(e){var t=Object(c.g)();return Object(n.useEffect)((function(){(new ce).init()}),[]),r.a.createElement("div",{className:"App"},r.a.createElement(h.GlobalProvider,null,r.a.createElement(oe,null),r.a.createElement(y,{className:"nav"}),r.a.createElement("div",null,r.a.createElement(w.a,null,r.a.createElement(c.c,{location:t,key:t.key},r.a.createElement(c.a,{exact:!0,path:"/",component:P}),r.a.createElement(c.a,{path:"/choseHome",component:D}),r.a.createElement(c.a,{path:"/predndHome",component:te}),r.a.createElement(c.a,{path:"/dndHome",component:ne}),r.a.createElement(c.a,{path:"/yourfamily",component:he}),r.a.createElement(c.a,{path:"/caretakers",component:pe}),r.a.createElement(c.a,{path:"/caretakerperson",component:ye}),r.a.createElement(c.a,{path:"/summary",component:Te}),r.a.createElement(c.a,{path:"/end",component:le}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Fe=a(16),He=a(60),Le=a.n(He),_e=a(20),Re=[{name:"Mother",id:Object(g.uuid)(),container:"draggers",url:"img/mother.svg"},{name:"Father",id:Object(g.uuid)(),container:"draggers",url:"img/father.svg"},{name:"Foster mother",id:Object(g.uuid)(),container:"draggers",url:"img/fostermother.svg"},{name:"Foster father",id:Object(g.uuid)(),container:"draggers",url:"img/fosterfather.svg"},{name:"Stepmother",id:Object(g.uuid)(),container:"draggers",url:"img/stepmother.svg"},{name:"Stepfather",id:Object(g.uuid)(),container:"draggers",url:"img/stepfather.svg"},{name:"Sister",id:Object(g.uuid)(),container:"draggers",url:"img/sister.svg"},{name:"Brother",id:Object(g.uuid)(),container:"draggers",url:"img/brother.svg"},{name:"Cousin",id:Object(g.uuid)(),container:"draggers",url:"img/cousin.svg"},{name:"Grandmother",id:Object(g.uuid)(),container:"draggers",url:"img/grandmother.svg"},{name:"Grandfather",id:Object(g.uuid)(),container:"draggers",url:"img/grandfather.svg"},{name:"Uncle",id:Object(g.uuid)(),container:"draggers",url:"img/uncle.svg"},{name:"Aunt",id:Object(g.uuid)(),container:"draggers",url:"img/aunt.svg"},{name:"Someone",id:Object(g.uuid)(),container:"draggers",url:"img/someone.svg"},{name:"Me",id:Object(g.uuid)(),container:"draggers2",url:"img/me.svg"},{name:"Me",id:Object(g.uuid)(),container:"home1",url:"img/me.svg"},{name:"Me",id:Object(g.uuid)(),container:"home2",url:"img/me.svg"}],We={},Ie={},Be={container:Re},De={number:null},ze={unlock:!1},Ae={home1:"Home1",home2:"Home2"},Me={showRadio2:!1,setClass:!1,step:0,totalSteps:0},Ue=Object(Fe.combineReducers)({next:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CLICK_NEXT":return console.log("next clicked..."),t.payload.push("/page2"),e;default:return e}},currentPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CURRENT_PAGE":return t.payload;default:return e}},currentList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CURRENT_LIST":return Object(_e.a)(Object(_e.a)({},e),t.payload);default:return e}},homeNumber:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"HOME_NUMBER":return Object(_e.a)({},t.payload);default:return e}},unlockNext:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ze,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UNLOCK_NEXT":return Object(_e.a)({},t.payload);default:return e}},updateTitle:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_TITLE":return console.log("update title..."),Object(_e.a)(Object(_e.a)({},e),t.payload);default:return e}},showRadio:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW_RADIO":return Object(_e.a)(Object(_e.a)({},e),t.payload);default:return e}}}),Ge=a(48),Ye=a(61),Ke=Object(Fe.createStore)(Ue,Object(Ye.composeWithDevTools)(Object(Fe.applyMiddleware)(Le.a)));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d.a,{store:Ke},r.a.createElement(Ge.a,null,r.a.createElement(Pe,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[63,1,2]]]);
//# sourceMappingURL=main.9ec4b11d.chunk.js.map