(function(e){function t(t){for(var n,o,s=t[0],u=t[1],c=t[2],h=0,p=[];h<s.length;h++)o=s[h],i[o]&&p.push(i[o][0]),i[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);l&&l(t);while(p.length)p.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,s=1;s<r.length;s++){var u=r[s];0!==i[u]&&(n=!1)}n&&(a.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},i={app:0},a=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/login-page/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var l=u;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},2856:function(e,t,r){},"517d":function(e,t,r){"use strict";var n=r("74cf"),i=r.n(n);i.a},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("097d");var n=r("2b0e"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("button",{directives:[{name:"shortkey",rawName:"v-shortkey",value:["enter"],expression:"['enter']"}],staticClass:"btn btn-primary",attrs:{id:"open-modal"},on:{click:e.onClick,shortkey:e.onClick}},[e._v("\n\t\tВход\n\t")]),e.modal.show?r("login-modal",{attrs:{modal:e.modal},on:{cancel:e.onClose}}):e._e()],1)},a=[],o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("base-modal",{ref:"dialog",attrs:{title:e.title,visible:e.modal.show},on:{close:e.onCancelClick}},[0===e.certificates.length?[e._v("\n\t\tПоиск сертификатов...\n\t")]:[e.stage>0?r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",[r("a",{attrs:{href:"#"},on:{click:function(t){t.preventDefault(),e.setStage(0)}}},[e._v("Сертификат")])]),r("el-breadcrumb-item",[r("a",{attrs:{href:"#"},on:{click:function(t){t.preventDefault(),e.setStage(1)}}},[e._v("Роль")])]),e.stage>1?r("el-breadcrumb-item",[r("a",{attrs:{href:"#"},on:{click:function(t){t.preventDefault(),e.setStage(2)}}},[e._v("Организация")])]):e._e()],1):e._e(),0===e.stage?r("certificates-list",{attrs:{certificates:e.certificates,"current-certificate":e.currentCertificate},on:{select:e.onCertificateSelect}}):e._e(),1===e.stage?r("roles-list",{attrs:{roles:e.roles,"current-role":e.currentRole},on:{select:e.onRoleSelect}}):e._e(),2===e.stage?r("organizations-list",{attrs:{organizations:e.organizations,"current-organization":e.currentOrganization},on:{select:e.onOrganizationSelect}}):e._e()],r("template",{slot:"footer"},[e.stage>0?r("button",{directives:[{name:"shortkey",rawName:"v-shortkey",value:["arrowleft"],expression:"['arrowleft']"}],staticClass:"btn btn-primary",on:{click:e.deselect,shortkey:e.deselect}},[e._v("\n\t\t\tНазад\n\t\t")]):e._e(),r("button",{directives:[{name:"shortkey",rawName:"v-shortkey",value:{arrowright:["arrowright"],enter:["enter"]},expression:"{ arrowright: ['arrowright'], enter: ['enter']}"}],staticClass:"btn btn-primary",attrs:{disabled:!e.canSelect},on:{click:e.select,shortkey:e.select}},[e._v("\n\t\t\tВыбрать\n\t\t")])])],2)},s=[],u=(r("20d6"),r("96cf"),r("3040")),c=r("5c96"),l=function(e,t){var r,n,i=t._c;return i("div",{staticClass:"form-group",class:{required:t.props.required}},[i("label",{staticClass:"control-label",class:[(r={},r["col-md-"+t.props.labelWidth]=!t.props.withoutMd,r),t.props.labelClass]},[t._v("\n\t\t"+t._s(t.props.label)+"\n\t")]),t._t("tips"),i("div",{class:(n={},n["col-md-"+t.props.inputWidth]=!t.props.withoutMd,n)},[t._t("default")],2)],2)},h=[],p={name:"form-group",props:{label:{type:String,required:!0},required:{type:Boolean,required:!1,default:function(){return!1}},labelWidth:{required:!1,default:function(){return 3}},inputWidth:{required:!1,default:function(){return 9}},labelClass:{required:!1,default:function(){return""}},withoutMd:{type:Boolean,required:!1,default:function(){return!1}}}},f=p,d=r("2877"),g=Object(d["a"])(f,l,h,!0,null,null,null);g.options.__file="FormGroup.vue";var m=g.exports,b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",e._g(e._b({attrs:{visible:e.visible,top:"5vh"}},"el-dialog",e.props,!1),e.$listeners),[r("h4",{staticClass:"modal-header",attrs:{slot:"title"},slot:"title"},[e._v(e._s(e.title))]),e._t("default"),r("div",{staticClass:"modal-footer",attrs:{slot:"footer"},slot:"footer"},[e._t("footer")],2)],2)},v=[],w=r("c93e"),x={name:"base-modal",components:{"el-dialog":c["Dialog"]},model:{event:"close",prop:"show"},props:{visible:{type:Boolean,required:!0},title:{type:String,required:!0},appendToBody:{type:Boolean,required:!1,default:function(){return!0}}},computed:{props:function(){return Object(w["a"])({},this.$attrs,this.$props)}}},y=x,k=Object(d["a"])(y,b,v,!1,null,null,null);k.options.__file="BaseModal.vue";var C=k.exports,R={data:function(){return{loadingServicePool:{}}},methods:{startLoadingSpinner:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Загрузка",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],a=c["Loading"].service({target:i?null:this.$target(n,r),fullscreen:i,text:t});this.$set(this.loadingServicePool,e,a),this.loadingServicePool[e]=a},stopLoadingSpinner:function(e){var t=this.loadingServicePool[e];t&&(t.close(),this.$delete(this.loadingServicePool,e))}},computed:{$target:function(){var e=this;return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return null===t&&null===r?e.$el:null!==t&&null!==r?e.$refs[t].$el.querySelector(r):null!==t&&null===r?e.$refs[t].$el:document.querySelector(r)}}}},O=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"shortkey",rawName:"v-shortkey",value:{up:["arrowup"],down:["arrowdown"]},expression:"{up: ['arrowup'], down: ['arrowdown']}"}],staticClass:"list-group list-group-hover",on:{shortkey:e.onShortKey}},e._l(e.certificates,function(t,n){return r("div",{key:t.Thumbprint,staticClass:"list-group-item",class:{active:n===e.currentCertificateIndex},on:{click:function(){return e.onCertificateClick(n)}}},[r("h4",{staticClass:"list-group-item-heading"},[r("strong",[e._v(e._s(t.Name))]),r("small",{staticClass:"pull-right"},[e._v("до "+e._s(t.ValidTo))])]),r("p",{staticClass:"list-group-item-text"},[r("small",[e._v(e._s(t.SubjectName))])])])}))},z=[],_=r("6bde"),S={name:"certificates-list",props:{certificates:{type:Array,required:!0},currentCertificate:{required:!0,validator:function(e){return"object"===Object(_["a"])(e)||null===e}}},data:function(){return{currentCertificateIndex:null}},mounted:function(){var e=this;null!==this.currentCertificate&&(this.currentCertificateIndex=this.certificates.findIndex(function(t){return t.Thumbprint===e.currentCertificate.Thumbprint}))},methods:{onCertificateClick:function(e){this.currentCertificateIndex=e,this.$emit("select",e)},onShortKey:function(e){switch(e.srcKey){case"up":null===this.currentCertificateIndex?this.onCertificateClick(this.certificates.length-1):this.currentCertificateIndex>0&&this.onCertificateClick(--this.currentCertificateIndex);break;case"down":null===this.currentCertificateIndex?this.onCertificateClick(0):this.currentCertificateIndex+1<this.certificates.length&&this.onCertificateClick(++this.currentCertificateIndex);break}}}},j=S,I=Object(d["a"])(j,O,z,!1,null,null,null);I.options.__file="CertificatesList.vue";var L=I.exports,T=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"shortkey",rawName:"v-shortkey",value:{up:["arrowup"],down:["arrowdown"]},expression:"{up: ['arrowup'], down: ['arrowdown']}"}],staticClass:"list-group list-group-hover",on:{shortkey:e.onShortKey}},e._l(e.roles,function(t,n){return r("div",{key:t.Value,staticClass:"list-group-item",class:{active:n===e.currentRoleIndex},on:{click:function(){return e.onRoleClick(n)}}},[e._v("\n\t\t"+e._s(t.Name)+"\n\t")])}))},A=[],N={name:"roles-list",props:{roles:{type:Array,required:!0},currentRole:{required:!0,validator:function(e){return"object"===Object(_["a"])(e)||null===e}}},data:function(){return{currentRoleIndex:null}},mounted:function(){var e=this;null!==this.currentRole&&(this.currentRoleIndex=this.roles.findIndex(function(t){return t.Value===e.currentRole.Value}))},methods:{onRoleClick:function(e){this.currentRoleIndex=e,this.$emit("select",e)},onShortKey:function(e){switch(e.srcKey){case"up":null===this.currentRoleIndex?this.onRoleClick(this.roles.length-1):this.currentRoleIndex>0&&this.onRoleClick(--this.currentRoleIndex);break;case"down":null===this.currentRoleIndex?this.onRoleClick(0):this.currentRoleIndex+1<this.roles.length&&this.onRoleClick(++this.currentRoleIndex);break}}}},$=N,q=Object(d["a"])($,T,A,!1,null,null,null);q.options.__file="RolesList.vue";var V=q.exports,M=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"shortkey",rawName:"v-shortkey",value:{up:["arrowup"],down:["arrowdown"]},expression:"{up: ['arrowup'], down: ['arrowdown']}"}],staticClass:"list-group list-group-hover",on:{shortkey:e.onShortKey}},e._l(e.organizations,function(t,n){return r("div",{key:t.Id,staticClass:"list-group-item",class:{active:n===e.currentOrganizationIndex},on:{click:function(){return e.onOrganizationClick(n)}}},[e._v("\n\t\t"+e._s(t.Name)+"\n\t")])}))},P=[],D={name:"organizations-list",props:{organizations:{type:Array,required:!0},currentOrganization:{required:!0,validator:function(e){return"object"===Object(_["a"])(e)||null===e}}},data:function(){return{currentOrganizationIndex:null}},mounted:function(){var e=this;null!==this.currentOrganization&&(this.currentOrganizationIndex=this.organizations.findIndex(function(t){return t.Id===e.currentOrganization.Id}))},methods:{onOrganizationClick:function(e){this.currentOrganizationIndex=e,this.$emit("select",e)},onShortKey:function(e){switch(e.srcKey){case"up":null===this.currentOrganizationIndex?this.onOrganizationClick(this.organizations.length-1):this.currentOrganizationIndex>0&&this.onOrganizationClick(--this.currentOrganizationIndex);break;case"down":null===this.currentOrganizationIndex?this.onOrganizationClick(0):this.currentOrganizationIndex+1<this.organizations.length&&this.onOrganizationClick(++this.currentOrganizationIndex);break}}}},K=D,B=Object(d["a"])(K,M,P,!1,null,null,null);B.options.__file="OrganizationsList.vue";var E=B.exports,G=(r("ac6a"),r("7f7f"),r("7514"),r("93a4")),W=r.n(G),F=r("bc3a"),J=r.n(F),H=(function(){function e(e){return t.apply(this,arguments)}function t(){return t=Object(u["a"])(regeneratorRuntime.mark(function e(t){var r,n,i,a=arguments;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:for(r=a.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=a[i];return e.abrupt("return",W.a.call.apply(W.a,[t].concat(n)).catch(function(e){return window.alert('Ошибка при обращении к плагину Крипто-Про: "'+e+'"')}));case 2:case"end":return e.stop()}},e,this)})),t.apply(this,arguments)}function r(e){return n.apply(this,arguments)}function n(){return n=Object(u["a"])(regeneratorRuntime.mark(function e(t){var r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(r=function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.all(t.map(function(e){return e.Thumbprint})));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),n=function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",J.a.post("/Auth/GetAvailableCertificates",{thumbprints:t}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),!t){e.next=4;break}return e.abrupt("return",r(t).then(n));case 4:return e.abrupt("return",[]);case 5:case"end":return e.stop()}},e,this)})),n.apply(this,arguments)}(function(){var t=Object(u["a"])(regeneratorRuntime.mark(function t(r){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",e("getCert",r));case 1:case"end":return t.stop()}},t,this)}))})(),function(){var t=Object(u["a"])(regeneratorRuntime.mark(function t(){var n,i,a,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=function(e){return e.reduce(function(e,t){return e[t.thumbprint]=t,e},{})},t.next=3,e("getCertsList");case 3:return i=t.sent,t.next=6,r(i);case 6:return a=t.sent,o=n(i),t.abrupt("return",a.map(function(e){var t=o[e.Thumbprint],r=a.find(function(e){return e.Thumbprint===t.thumbprint});return{Role:r.Role,Thumbprint:t.thumbprint,SubjectName:t.subjectName,Name:t.name,ValidTo:t.validTo}}));case 9:case"end":return t.stop()}},t,this)}))}(),function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",J.a.post("/Auth/GetAvailableOrganizations",{thumbprint:t}));case 1:case"end":return e.stop()}},e,this)}))}(),function(){var t=Object(u["a"])(regeneratorRuntime.mark(function t(r,n){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",e("signData",n,window.btoa(r)));case 1:case"end":return t.stop()}},t,this)}))}()}(),function(){function e(e,t){return Math.floor(Math.random()*(t-e))+e}function t(e){return r.apply(this,arguments)}function r(){return r=Object(u["a"])(regeneratorRuntime.mark(function e(t){var r,n,i,a=arguments;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:for(r=a.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=a[i];return e.abrupt("return",W.a.call.apply(W.a,[t].concat(n)).catch(function(e){return window.alert('Ошибка при обращении к плагину Крипто-Про: "'+e+'"')}));case 2:case"end":return e.stop()}},e,this)})),r.apply(this,arguments)}function n(e){return i.apply(this,arguments)}function i(){return i=Object(u["a"])(regeneratorRuntime.mark(function t(r){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",r.map(function(t){return{Thumbprint:t.thumbprint,Role:Math.pow(2,e(1,7))-1}}));case 1:case"end":return t.stop()}},t,this)})),i.apply(this,arguments)}return{getCertificateByThumbprintAsync:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(r){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",t("getCert",r));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),getCertificateListAsync:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(){var r,i,a,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=function(e){return e.reduce(function(e,t){return e[t.thumbprint]=t,e},{})},e.next=3,t("getCertsList");case 3:return i=e.sent,e.next=6,n(i);case 6:return a=e.sent,o=r(i),e.abrupt("return",a.map(function(e){var t=o[e.Thumbprint],r=a.find(function(e){return e.Thumbprint===t.thumbprint});return{Role:r.Role,Thumbprint:t.thumbprint,SubjectName:t.subjectName,Name:t.name,ValidTo:t.validTo}}));case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),getAvailableOrganizationsAsync:function(){var t=Object(u["a"])(regeneratorRuntime.mark(function t(r){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise(function(t,r){for(var n=e(1,10),i=[],a=0;a<n;a++)i.push({Id:a,Name:"Организация "+a,Default:!1});if(n>3){var o=e(1,n);i[o].Default=!0}t(i)}));case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),signDataAsync:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(r,n){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",t("signData",n,window.btoa(r)));case 1:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}()}}()),Q=function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t,r,n,i){var a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,H.signDataAsync(t,r);case 2:return a=e.sent,e.abrupt("return",J.a.post("Auth/Authorize",{role:n,selectedOrganizationId:i,signatureValue:a}).catch(function(e){return window.alert("Ошибка при авторизации "+e)}));case 4:case"end":return e.stop()}},e,this)}));return function(t,r,n,i){return e.apply(this,arguments)}}(),U={name:"login-modal",components:{CertificatesList:L,BaseModal:C,FormGroup:m,RolesList:V,OrganizationsList:E,"el-breadcrumb":c["Breadcrumb"],"el-breadcrumb-item":c["BreadcrumbItem"]},mixins:[R],props:{modal:{type:Object,required:!0}},data:function(){return{certificates:[],roles:[],organizations:[],selectedRole:null,selectedOrganization:null,selectedCertificate:null,currentCertificate:null,currentRole:null,currentOrganization:null}},mounted:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.startLoadingSpinner(0,"Загрузка сертификатов",".el-dialog","dialog"),e.next=3,H.getCertificateListAsync();case 3:return this.certificates=e.sent,e.next=6,this.tryCertificateSelect();case 6:this.stopLoadingSpinner(0);case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),methods:{onCancelClick:function(){this.$emit("cancel")},select:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:e.t0=this.stage,e.next=0===e.t0?3:1===e.t0?6:2===e.t0?9:12;break;case 3:return e.next=5,this.onCertificateSelect(null,!0);case 5:return e.abrupt("break",12);case 6:return e.next=8,this.onRoleSelect(null,!0);case 8:return e.abrupt("break",12);case 9:return e.next=11,this.onOrganizationSelect(null,!0);case 11:return e.abrupt("break",12);case 12:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),deselect:function(){this.setStage(this.stage-1)},tryCertificateSelect:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(1!==this.certificates.length||null!==this.currentCertificate){e.next=9;break}if(this.selectedCertificate=this.certificates[0],this.currentCertificate=this.certificates[0],null===this.selectedCertificate){e.next=9;break}return this.startLoadingSpinner(1,"Загрузка ролей",".list-group","dialog"),this.roles=this.getAvailableRoles(this.selectedCertificate.Role),e.next=8,this.tryRoleSelect();case 8:this.stopLoadingSpinner(1);case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),tryRoleSelect:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(1!==this.roles.length||null!==this.currentRole){e.next=11;break}if(this.selectedRole=this.roles[0],this.currentRole=this.roles[0],null==this.selectedCertificate){e.next=11;break}return this.startLoadingSpinner(2,"Загрузка ролей",".list-group","dialog"),e.next=7,H.getAvailableOrganizationsAsync(this.selectedCertificate.Thumbprint);case 7:return this.organizations=e.sent,e.next=10,this.tryOrganizationSelect();case 10:this.stopLoadingSpinner(2);case 11:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),tryOrganizationSelect:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(1!==this.organizations.length||null!==this.currentOrganization){e.next=8;break}if(this.selectedOrganization=this.organizations[0],this.currentOrganization=this.organizations[0],null===this.selectedOrganization){e.next=8;break}return this.startLoadingSpinner(3,"Авторизация",".el-dialog","dialog"),e.next=7,Q("abc",this.selectedCertificate.Thumbprint,this.selectedRole.Value,this.selectedOrganization.Id);case 7:this.stopLoadingSpinner(3);case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),onCertificateSelect:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t,r){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(null!==t&&(this.currentCertificate=this.certificates[t]),!0===r&&(this.selectedCertificate=this.currentCertificate),null===this.selectedCertificate){e.next=8;break}return this.startLoadingSpinner(4,"Загрузка ролей",".list-group","dialog"),this.roles=this.getAvailableRoles(this.selectedCertificate.Role),e.next=7,this.tryRoleSelect();case 7:this.stopLoadingSpinner(4);case 8:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),onRoleSelect:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t,r){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(null!==t&&(this.currentRole=this.roles[t]),!0===r&&(this.selectedRole=this.currentRole),null==this.selectedCertificate||null==this.selectedRole){e.next=17;break}return this.startLoadingSpinner(5,"Загрузка списка организаций",".list-group","dialog"),e.next=6,H.getAvailableOrganizationsAsync(this.selectedCertificate.Thumbprint);case 6:if(this.organizations=e.sent,"Заказчик"!==this.selectedRole.Name){e.next=12;break}return e.next=10,this.tryOrganizationSelect();case 10:e.next=16;break;case 12:if(n=this.organizations.findIndex(function(e){return e.Default}),!n){e.next=16;break}return e.next=16,this.onOrganizationSelect(n,!0);case 16:this.stopLoadingSpinner(5);case 17:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),onOrganizationSelect:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t,r){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(null!==t&&(this.currentOrganization=this.organizations[t]),!0!==r||null===this.currentOrganization){e.next=7;break}return this.selectedOrganization=this.currentOrganization,this.startLoadingSpinner(6,"Авторизация",".el-dialog","dialog"),e.next=6,Q("abc",this.selectedCertificate.Thumbprint,this.selectedRole.Value,this.selectedOrganization.Id);case 6:this.stopLoadingSpinner(6);case 7:case"end":return e.stop()}},e,this)}));return function(t,r){return e.apply(this,arguments)}}(),setStage:function(e){switch(e){case 0:this.selectedCertificate=null,this.selectedRole=null,this.selectedOrganization=null;break;case 1:this.selectedRole=null,this.selectedOrganization=null;break;case 2:this.selectedOrganization=null;break}},getAvailableRoles:function(e){var t=[];return void 0===e?t:(1===(1&e)&&t.push({Name:"Заказчик",Value:1}),2===(2&e)&&t.push({Name:"ГРБС",Value:2}),4===(4&e)&&t.push({Name:"Финансовый орган",Value:4}),8===(8&e)&&t.push({Name:"Администратор",Value:8}),16===(16&e)&&t.push({Name:"Уполномоченный орган",Value:16}),32===(32&e)&&t.push({Name:"Организатор совместных закупок",Value:32}),64===(64&e)&&t.push({Name:"Служба технической поддержки",Value:64}),t)},onShortKey:function(e){switch(e.srcKey){case"left":this.deselect();break;case"rigth":this.select();break}}},computed:{canSelect:function(){switch(this.stage){case 0:return null!==this.currentCertificate;case 1:return null!==this.currentRole;case 2:return null!==this.currentOrganization;default:return!1}},title:function(){switch(this.stage){case 0:return"Выберите сертификат";case 1:return"Выберите роль";case 2:return"Выберите организацию";default:return""}},stage:function(){var e=0;return this.selectedCertificate&&this.currentCertificate&&e++,this.selectedRole&&this.currentRole&&e++,e}},watch:{currentCertificate:function(e,t){e&&t&&e.Thumbprint!==t.Thumbprint&&(this.currentRole=null,this.currentOrganization=null)},currentRole:function(e,t){e&&t&&e.Value!==t.Value&&(this.currentOrganization=null)}}},X=U,Y=(r("517d"),Object(d["a"])(X,o,s,!1,null,null,null));Y.options.__file="LoginModal.vue";var Z=Y.exports,ee={name:"app",components:{LoginModal:Z},data:function(){return{modal:{show:!1}}},methods:{onClose:function(){this.modal.show=!1},onClick:function(){this.modal.show=!0}}},te=ee,re=(r("5c0b"),Object(d["a"])(te,i,a,!1,null,null,null));re.options.__file="App.vue";var ne=re.exports,ie=r("dccd"),ae=r.n(ie),oe=r("4897"),se=r.n(oe);r("0fae");se.a.use(ae.a);var ue=r("3717"),ce=r.n(ue);n["default"].use(ce.a),n["default"].config.productionTip=!1,new n["default"]({render:function(e){return e(ne)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var n=r("2856"),i=r.n(n);i.a},"74cf":function(e,t,r){}});
//# sourceMappingURL=app.45a1814f.js.map