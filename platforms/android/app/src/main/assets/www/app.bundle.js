webpackJsonp([0],{0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}n(1);var o=n(4),a=n(8),i=r(a),c=n(38),l=r(c),u=n(186),s=r(u),f=document.getElementById("app"),p=null;document.addEventListener("deviceready",function(){console.log("hi"),p=window.sqlitePlugin.openDatabase({name:"demo.db",location:"default"}),p.sqlBatch(["CREATE TABLE IF NOT EXISTS DemoTable (name, score)",["INSERT INTO DemoTable VALUES (?,?)",["Alice",101]],["INSERT INTO DemoTable VALUES (?,?)",["Betty",202]],["INSERT INTO DemoTable VALUES (?,?)",["Cveti",202]]],function(){console.log("Populated database OK")},function(e){console.log("SQL batch ERROR: "+e.message)}),p.executeSql("SELECT * FROM DemoTable",[],function(e){console.log(e.rows)},function(e){console.log("SELECT SQL statement ERROR: "+e.message)})}),l["default"].render(i["default"].createElement(o.AppContainer,null,i["default"].createElement(s["default"],{db:p})),f),function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(f,"rootElement","C:/PROJECTS/sladka-prikazka/Inventory-lab/src/main.jsx"),__REACT_HOT_LOADER__.register(p,"db","C:/PROJECTS/sladka-prikazka/Inventory-lab/src/main.jsx"))}()},1:function(e,t,n){e.exports=n(2)},2:function(e,t,n){"use strict";e.exports=n(3)},3:function(e,t){"use strict"},4:function(e,t,n){e.exports=n(5)},5:function(e,t,n){"use strict";var r=n(6);e.exports=function(e){throw this&&this.callback?new Error('React Hot Loader: The Webpack loader is now exported separately. If you use Babel, we recommend that you remove "react-hot-loader" from the "loaders" section of your Webpack configuration altogether, and instead add "react-hot-loader/babel" to the "plugins" section of your .babelrc file. If you prefer not to use Babel, replace "react-hot-loader" or "react-hot" with "react-hot-loader/webpack" in the "loaders" section of your Webpack configuration.'):e&&e.types&&e.types.IfStatement?new Error('React Hot Loader: The Babel plugin is exported separately. Replace "react-hot-loader" with "react-hot-loader/babel" in the "plugins" section of your .babelrc file. While we recommend the above, if you prefer not to use Babel, you may remove "react-hot-loader" from the "plugins" section of your .babelrc file altogether, and instead add "react-hot-loader/webpack" to the "loaders" section of your Webpack configuration.'):new Error('React Hot Loader does not have a default export. If you use the import statement, make sure to include the curly braces: import { AppContainer } from "react-hot-loader". If you use CommonJS, make sure to read the named export: require("react-hot-loader").AppContainer.')},e.exports.AppContainer=r},6:function(e,t,n){"use strict";e.exports=n(7)},7:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(8),l=c.Component,u=function(e){function t(){return r(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),i(t,[{key:"render",value:function(){return this.props.component?c.createElement(this.props.component,this.props.prop):c.Children.only(this.props.children)}}]),t}(l);e.exports=u},186:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(8),u=r(l),s=n(38),f=(r(s),n(187)),p=r(f),d=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={storage:{}},n}return i(t,e),c(t,[{key:"render",value:function(){return u["default"].createElement(p["default"],null)}}]),t}(u["default"].Component),y=d;t["default"]=y,function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(d,"App","C:/PROJECTS/sladka-prikazka/Inventory-lab/src/App.jsx"),__REACT_HOT_LOADER__.register(y,"default","C:/PROJECTS/sladka-prikazka/Inventory-lab/src/App.jsx"))}()},187:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(8),u=r(l),s=n(188),f=r(s),p=n(191),d=r(p),y=n(194),h=r(y),_=n(195),g=r(_),m=n(196),b=r(m),v=n(197),O=r(v);n(198);var E=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={creatOverlayCategoryActive:!1,creatOverlayProductActive:!1,categoryWrapOpacity:{opacity:"1"},editActive:!1,selectingEdit:!1,selectingDelete:!1,id:0,productActive:!1,categoryClicked:0},n}return i(t,e),c(t,[{key:"onCreateCategory",value:function(){this.setState({creatOverlayCategoryActive:!0})}},{key:"onEditCategory",value:function(){if(this.state.selectingEdit){var e={opacity:"1"};this.setState({selectingEdit:!1,categoryWrapOpacity:e})}else{var t=localStorage.getItem("categories");if(null===t||0===t.length)alert("Моля първо създайте категория!");else{alert("Моля изберете категория, която да редактирате!");var n={opacity:"0.5"};this.setState({categoryWrapOpacity:n,selectingEdit:!0,selectingDelete:!1})}}}},{key:"onCategoryEditComplete",value:function(e,t){var n=this,r=localStorage.getItem("categories");null!==r&&(r=JSON.parse(r),r=r.map(function(r){if(r.id===n.state.id){var o=Object.assign({},r);return o.id=n.state.id,""!==e&&e!==r.name?o.name=e:o.name=r.name,""!==t&&t!==r.url?o.url=t:o.url=r.url,o}return r}),localStorage.setItem("categories",JSON.stringify(r)));var o={opacity:"1"};this.setState({editActive:!1,categoryWrapOpacity:o})}},{key:"onDeleteCategory",value:function(){if(this.state.selectingDelete){var e={opacity:"1"};this.setState({selectingDelete:!1,categoryWrapOpacity:e})}else{var t=localStorage.getItem("categories");if(null===t||0===t.length)alert("Моля първо създайте категория!");else{alert("Моля изберете категория, която да изтриете!");var n={opacity:"0.5"};this.setState({categoryWrapOpacity:n,selectingDelete:!0,selectingEdit:!1})}}}},{key:"createCategory",value:function(e,t){var n={opacity:"1"};this.setState({selectingEdit:!1,selectingDelete:!1,categoryWrapOpacity:n});var r=null===localStorage.getItem("categories")?[]:JSON.parse(localStorage.getItem("categories")),o={id:(new Date).valueOf(),name:e,url:t,products:[]};""!==o.name&&(r.push(o),localStorage.setItem("categories",JSON.stringify(r))),this.setState({creatOverlayCategoryActive:!1})}},{key:"returnToHome",value:function(){this.setState({creatOverlayCategoryActive:!1,productActive:!1,creatOverlayProductActive:!1})}},{key:"categoryOnClick",value:function(e){var t=this;this.state.selectingEdit?this.setState({selectingEdit:!1,editActive:!0,id:e}):this.state.selectingDelete?this.setState({selectingDelete:!1,id:e},function(){var e=localStorage.getItem("categories");null!==e&&(e=JSON.parse(e),e.forEach(function(n,r){n.id===t.state.id&&e.splice(r,1)}),localStorage.setItem("categories",JSON.stringify(e)));var n={opacity:"1"};t.setState({editActive:!1,categoryWrapOpacity:n})}):this.setState({productActive:!0,categoryClicked:e})}},{key:"render",value:function(){return u["default"].createElement("div",{className:"home-page-wrapper"},this.state.editActive&&u["default"].createElement(O["default"],{onEdit:this.onCategoryEditComplete.bind(this)}),u["default"].createElement(f["default"],{returnToHomeHandler:this.returnToHome.bind(this)}),this.state.creatOverlayCategoryActive&&!this.state.creatOverlayProductActive&&u["default"].createElement(h["default"],{createHandler:this.createCategory.bind(this),name:"категория"}),!this.state.creatOverlayCategoryActive&&!this.state.creatOverlayProductActive&&!this.state.productActive&&u["default"].createElement(d["default"],{categoryStyle:this.state.categoryWrapOpacity,categoryOnClick:this.categoryOnClick.bind(this)}),!this.state.creatOverlayCategoryActive&&!this.state.creatOverlayProductActive&&this.state.productActive&&u["default"].createElement(b["default"],{categoryId:this.state.categoryClicked}),!this.state.creatOverlayCategoryActive&&!this.state.creatOverlayProductActive&&!this.state.productActive&&u["default"].createElement(g["default"],{create:"Нова категория",edit:"Редактиране категория","delete":"Изтриване категория",onCreate:this.onCreateCategory.bind(this),onEdit:this.onEditCategory.bind(this),onDelete:this.onDeleteCategory.bind(this)}))}}]),t}(u["default"].Component),C=E;t["default"]=C,function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(E,"HomePageScreen","C:/PROJECTS/sladka-prikazka/Inventory-lab/src/homepage/HomePageScreenIntro.jsx"),__REACT_HOT_LOADER__.register(C,"default","C:/PROJECTS/sladka-prikazka/Inventory-lab/src/homepage/HomePageScreenIntro.jsx"))}()},188:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(8),u=r(l),s=n(189),f=r(s),p=n(190),d=r(p),y=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),c(t,[{key:"render",value:function(){return u["default"].createElement("div",{className:"navigation-container"},u["default"].createElement("img",{id:"cake-logo",src:f["default"],alt:"alt"}),u["default"].createElement(d["default"],{onClickHandler:this.props.returnToHomeHandler,content:"Продукти"}),u["default"].createElement(d["default"],{content:"Поръчки"}))}}]),t}(u["default"].Component),h=y;t["default"]=h,function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(y,"NavigationComponentContainer","C:/PROJECTS/sladka-prikazka/Inventory-lab/src/common/NavigationComponentContainer.jsx"),__REACT_HOT_LOADER__.register(h,"default","C:/PROJECTS/sladka-prikazka/Inventory-lab/src/common/NavigationComponentContainer.jsx"))}()},189:function(e,t,n){e.exports=n.p+"assets/cake-logo.7892b3c8d64e5a7a8d614c64bbc5930a.jpg"},190:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(8),u=r(l),s=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),c(t,[{key:"render",value:function(){return u["default"].createElement("div",{onClick:this.props.onClickHandler,className:"navigation-item"},this.props.content)}}]),t}(u["default"].Component),f=s;t["default"]=f,function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(s,"NavigationItemComponent","C:/PROJECTS/sladka-prikazka/Inventory-lab/src/common/NavigationItemComponent.jsx"),__REACT_HOT_LOADER__.register(f,"default","C:/PROJECTS/sladka-prikazka/Inventory-lab/src/common/NavigationItemComponent.jsx"))}()},191:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(8),u=r(l),s=n(192),f=r(s),p=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),c(t,[{key:"calculateStyle",value:function(e){var t=localStorage.getItem("categories");null===t&&(t=[]),t=JSON.parse(t);var n={};return t.forEach(function(t){t.id===e&&t.products.forEach(function(e){0===e.count&&(n=Object.assign({},{border:"1vw solid red",opacity:"0.5"})),e.count>0&&e.count<3&&(n=Object.assign({},{border:"1vw solid yellow",opacity:"0.5"})),e.count>3&&(n=Object.assign({},{border:"1vw solid green",opacity:"1"}))})}),n}},{key:"render",value:function(){var e=this,t=localStorage.getItem("categories");return null===t?t=[]:null!==t&&(t=JSON.parse(t)),u["default"].createElement("div",{style:this.props.categoryStyle,className:"category-wrapper"},t.map(function(t){var n=e.calculateStyle(t.id);return u["default"].createElement(f["default"],{key:t.id,name:t.name,photoURL:t.url,id:t.id,categoryOnClick:e.props.categoryOnClick,categoryStyle:n})}))}}]),t}(u["default"].Component),d=p;t["default"]=d,function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(p,"CategoryWrapComponent","C:/PROJECTS/sladka-prikazka/Inventory-lab/src/homepage/CateogryWrapComponent.jsx"),__REACT_HOT_LOADER__.register(d,"default","C:/PROJECTS/sladka-prikazka/Inventory-lab/src/homepage/CateogryWrapComponent.jsx"))}()},192:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(8),u=r(l),s=n(193),f=(r(s),function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),c(t,[{key:"categoryOnClick",value:function(){this.props.categoryOnClick(this.props.id)}},{key:"render",value:function(){return u["default"].createElement("div",{style:this.props.categoryStyle,onClick:this.categoryOnClick.bind(this),className:"category-item-container"},u["default"].createElement("img",{className:"category-item-photo",src:this.props.photoURL,alt:"product"}),u["default"].createElement("label",{className:"category-item-name"},this.props.name))}}]),t}(u["default"].Component)),p=f;t["default"]=p,function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(f,"CategoryComponent","C:/PROJECTS/sladka-prikazka/Inventory-lab/src/homepage/CategoryComponent.jsx"),__REACT_HOT_LOADER__.register(p,"default","C:/PROJECTS/sladka-prikazka/Inventory-lab/src/homepage/CategoryComponent.jsx"))}()},193:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(8),u=r(l),s=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),c(t,[{key:"render",value:function(){var e=this;return u["default"].createElement("div",{style:this.props.style,onClick:function(t){return e.props.onProductClick(e.props.id)},key:this.props.id,className:"category-item-wrap"},u["default"].createElement("label",{className:"product-count"},this.props.count),u["default"].createElement("label",{className:"product-name"},this.props.name),u["default"].createElement("img",{className:"product-url",src:this.props.url,alt:"product"}))}}]),t}(u["default"].Component),f=s;t["default"]=f,function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(s,"ProductItemComponent","C:/PROJECTS/sladka-prikazka/Inventory-lab/src/homepage/ProductItemComponent.jsx"),__REACT_HOT_LOADER__.register(f,"default","C:/PROJECTS/sladka-prikazka/Inventory-lab/src/homepage/ProductItemComponent.jsx"))}()},194:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(8),u=r(l),s=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={name:"",url:""},n}return i(t,e),c(t,[{key:"handleChangeName",value:function(e){this.setState({name:e})}},{key:"handleChangeURL",value:function(e){this.setState({url:e})}},{key:"createHandler",value:function(){this.props.createHandler(this.state.name,this.state.url)}},{key:"render",value:function(){var e=this;return u["default"].createElement("div",{className:"create-category-overlay"},u["default"].createElement("label",{className:"category-name-label"},"Моля въведете име на ",this.props.name),u["default"].createElement("input",{className:"name-category-input",value:this.state.name,onChange:function(t){return e.handleChangeName(t.target.value)}}),u["default"].createElement("label",{className:"category-url-label"},"Моля въведете url на снимката за ",this.props.name,"та"),u["default"].createElement("input",{className:"url-category-input",value:this.state.url,onChange:function(t){return e.handleChangeURL(t.target.value)}}),u["default"].createElement("div",{className:"category-submit",onClick:this.createHandler.bind(this)},"Създай ",this.props.name))}}]),t}(u["default"].Component),f=s;t["default"]=f,function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(s,"CreateCategoryComponent","C:/PROJECTS/sladka-prikazka/Inventory-lab/src/homepage/CreateComponent.jsx"),__REACT_HOT_LOADER__.register(f,"default","C:/PROJECTS/sladka-prikazka/Inventory-lab/src/homepage/CreateComponent.jsx"))}()},195:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(8),u=r(l),s=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),c(t,[{key:"render",value:function(){return u["default"].createElement("div",{className:"footer-container"},u["default"].createElement("div",{onClick:this.props.onCreate,className:"create-new-item"},this.props.create),u["default"].createElement("div",{onClick:this.props.onEdit,className:"edit-item"},this.props.edit),u["default"].createElement("div",{onClick:this.props.onDelete,className:"delete-item"},this.props["delete"]))}}]),t}(u["default"].Component),f=s;t["default"]=f,function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(s,"Footer","C:/PROJECTS/sladka-prikazka/Inventory-lab/src/common/Footer.jsx"),__REACT_HOT_LOADER__.register(f,"default","C:/PROJECTS/sladka-prikazka/Inventory-lab/src/common/Footer.jsx"))}()},196:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(8),u=r(l),s=n(195),f=r(s),p=n(194),d=r(p),y=n(197),h=r(y),_=n(193),g=r(_),m=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={category:{},createProductActive:!1,categories:[],isDeleteSelecting:!1,isEditSelecting:!1,editOverlayActive:!1,id:0},n}return i(t,e),c(t,[{key:"componentWillMount",value:function(){var e=this,t=JSON.parse(localStorage.getItem("categories"));t.forEach(function(n){n.id===e.props.categoryId&&(n=Object.assign({},n),e.setState({category:n,categories:t}))})}},{key:"onCreateProduct",value:function(){this.setState({createProductActive:!0})}},{key:"createProductHandler",value:function(e,t){var n=this;if(this.setState({isEditSelecting:!1,isDeleteSelecting:!1}),""!==e){var r=this.state.categories.slice();r.forEach(function(r,o){r.id===n.props.categoryId&&r.products.push({id:(new Date).valueOf(),name:e,url:t,count:0})}),localStorage.setItem("categories",JSON.stringify(r)),this.setState({createProductActive:!1,categories:r})}}},{key:"onEditProduct",value:function(){this.state.isEditSelecting||alert("Моля изберете продукт, който да редактирате!"),this.setState({isEditSelecting:!this.state.isEditSelecting,isDeleteSelecting:!1})}},{key:"onDeleteProduct",value:function(){this.state.isDeleteSelecting||alert("Моля изберете продукт, който да изтриете!"),this.setState({isDeleteSelecting:!this.state.isDeleteSelecting,isEditSelecting:!1})}},{key:"onProductClick",value:function(e){var t=this;if(this.state.isDeleteSelecting){this.setState({isDeleteSelecting:!1,isEditSelecting:!1,id:e});var n=this.state.categories.slice();n.forEach(function(n){n.id===t.props.categoryId&&n.products.forEach(function(t,r){t.id===e&&n.products.splice(r,1)})}),localStorage.setItem("categories",JSON.stringify(n)),this.setState({categories:n})}else this.state.isEditSelecting&&this.setState({editOverlayActive:!0,id:e})}},{key:"onEditComplelete",value:function(e,t,n){var r=this,o=this.state.categories.slice();o.forEach(function(o){o.id===r.props.categoryId&&(o.products=o.products.map(function(o){if(o.id===r.state.id){var a=Object.assign({},o);return""!==t&&t!==a.url&&(a.url=t),""!==e&&e!==a.name&&(a.name=e),n&&n!==a.count&&(a.count=n),a}return o}),r.setState({category:o}))}),localStorage.setItem("categories",JSON.stringify(o)),this.setState({categories:o,createProductActive:!1,isDeleteSelecting:!1,isEditSelecting:!1,editOverlayActive:!1})}},{key:"render",value:function(){var e=this,t={opacity:"1"};return t=this.state.createProductActive||!this.state.isEditSelecting&&!this.state.isDeleteSelecting?{opacity:"1"}:{opacity:"0.5"},u["default"].createElement("div",null,!this.state.editOverlayActive&&!this.state.createProductActive&&u["default"].createElement("div",{style:t,className:"products-wrap"},this.state.category.products.map(function(t){return u["default"].createElement(g["default"],{key:t.id,name:t.name,url:t.url,id:t.id,count:t.count,onProductClick:e.onProductClick.bind(e)})})),!this.state.editOverlayActive&&this.state.createProductActive&&u["default"].createElement(d["default"],{name:"продукт",createHandler:this.createProductHandler.bind(this)}),!this.state.editOverlayActive&&!this.state.createProductActive&&u["default"].createElement(f["default"],{create:"Нов продукт",edit:"Редактиране продукт","delete":"Изтриване продукт",onCreate:this.onCreateProduct.bind(this),onEdit:this.onEditProduct.bind(this),onDelete:this.onDeleteProduct.bind(this)}),this.state.editOverlayActive&&u["default"].createElement(h["default"],{onEdit:this.onEditComplelete.bind(this),editCount:!0}))}}]),t}(u["default"].Component),b=m;t["default"]=b,function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(m,"ProductWrapComponent","C:/PROJECTS/sladka-prikazka/Inventory-lab/src/homepage/ProductWrapComponent.jsx"),__REACT_HOT_LOADER__.register(b,"default","C:/PROJECTS/sladka-prikazka/Inventory-lab/src/homepage/ProductWrapComponent.jsx"))}()},197:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(8),u=r(l),s=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={name:"",url:"",count:0},n}return i(t,e),c(t,[{key:"handleChangeName",value:function(e){this.setState({name:e})}},{key:"handleChangeURL",value:function(e){this.setState({url:e})}},{key:"handleChangeCount",value:function(e){this.setState({count:e})}},{key:"onEdit",value:function(){this.props.onEdit(this.state.name,this.state.url,this.state.count)}},{key:"render",value:function(){var e=this;return u["default"].createElement("div",{className:"edit-category-container"},u["default"].createElement("label",null,"Желано от вас име за смяна"),u["default"].createElement("input",{onChange:function(t){return e.handleChangeName(t.target.value)},value:this.state.name,className:"edit-name"}),u["default"].createElement("label",{className:"edit-name-label"},"Желано от вас url за смяна"),u["default"].createElement("input",{onChange:function(t){return e.handleChangeURL(t.target.value)},value:this.state.url,
className:"edit-url"}),this.props.editCount&&u["default"].createElement("label",null,"Ново количество от дадения продукт "),this.props.editCount&&u["default"].createElement("input",{onChange:function(t){return e.handleChangeCount(t.target.value)},value:this.state.count,className:"edit-count"}),u["default"].createElement("div",{onClick:this.onEdit.bind(this),className:"category-submit edit"},"Промяна"))}}]),t}(u["default"].Component),f=s;t["default"]=f,function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(s,"EditOverlay","C:/PROJECTS/sladka-prikazka/Inventory-lab/src/homepage/EditOverlay.jsx"),__REACT_HOT_LOADER__.register(f,"default","C:/PROJECTS/sladka-prikazka/Inventory-lab/src/homepage/EditOverlay.jsx"))}()},198:function(e,t){}});