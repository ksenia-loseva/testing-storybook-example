(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return Footer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);__webpack_require__(845);function Footer(props){var stampString=new Date(props.value).toString();return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"footer__wrapper"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,"Invalid Date"===stampString?"This is just a footer.":stampString))}Footer.__docgenInfo={description:"",methods:[],displayName:"Footer"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Footer/Footer.js"]={name:"Footer",docgenInfo:Footer.__docgenInfo,path:"src/components/Footer/Footer.js"})},149:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return TodoForm});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_AddButton_AddButton__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__(841),__webpack_require__(64));function TodoForm(_ref){var addTodo=_ref.addTodo,todoValue=_ref.todoValue,onChange=_ref.onChange;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"todo-form__wrapper"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"todo-form__wrapper-flex"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input",{className:"todo-form__input",value:todoValue,onChange:onChange}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AddButton_AddButton__WEBPACK_IMPORTED_MODULE_2__.a,{disabled:!todoValue,onClick:function onClick(){todoValue&&addTodo(todoValue)}},"Add something!")))}TodoForm.__docgenInfo={description:"",methods:[],displayName:"TodoForm"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TodoForm/TodoForm.js"]={name:"TodoForm",docgenInfo:TodoForm.__docgenInfo,path:"src/components/TodoForm/TodoForm.js"})},150:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return Text});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);__webpack_require__(913);function Text(props){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"label"},props.content||"Yeay")}Text.__docgenInfo={description:"",methods:[],displayName:"Text"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Text/Text.js"]={name:"Text",docgenInfo:Text.__docgenInfo,path:"src/components/Text/Text.js"})},387:function(module,exports,__webpack_require__){},432:function(module,__webpack_exports__,__webpack_require__){"use strict";var toConsumableArray=__webpack_require__(431),classCallCheck=__webpack_require__(425),createClass=__webpack_require__(426),possibleConstructorReturn=__webpack_require__(433),getPrototypeOf=__webpack_require__(427),inherits=__webpack_require__(434),react=__webpack_require__(0),react_default=__webpack_require__.n(react),Header=__webpack_require__(79),TodoForm=__webpack_require__(149);__webpack_require__(843),__webpack_require__(844);function Todo_Todo(_ref){var todo=_ref.todo,remove=_ref.remove;return react_default.a.createElement("li",{className:"todo-list__item",onClick:function onClick(){return remove(todo.id)}},todo.text)}function TodoList_TodoList(_ref){var todos=_ref.todos,remove=_ref.remove,todoNode=todos.map(function(todo){return react_default.a.createElement(Todo_Todo,{todo:todo,key:todo.id,remove:remove})});return react_default.a.createElement("ul",{className:"todo-list"},todoNode)}Todo_Todo.__docgenInfo={description:"",methods:[],displayName:"Todo"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Todo/Todo.js"]={name:"Todo",docgenInfo:Todo_Todo.__docgenInfo,path:"src/components/Todo/Todo.js"}),TodoList_TodoList.__docgenInfo={description:"",methods:[],displayName:"TodoList"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TodoList/TodoList.js"]={name:"TodoList",docgenInfo:TodoList_TodoList.__docgenInfo,path:"src/components/TodoList/TodoList.js"});var Footer=__webpack_require__(100),App_App=(__webpack_require__(387),function(_Component){function App(props){var _this;return Object(classCallCheck.a)(this,App),(_this=Object(possibleConstructorReturn.a)(this,Object(getPrototypeOf.a)(App).call(this,props))).addTodo=function(val){var todo={text:val,id:_this.state.id++};_this.setState({todos:[].concat(Object(toConsumableArray.a)(_this.state.todos),[todo]),todoValue:""})},_this.handleRemove=function(id){var remainingTodos=_this.state.todos.filter(function(todo){return todo.id!==id});_this.setState({todos:remainingTodos})},_this.handleInputChange=function(event){_this.setState({todoValue:event.target.value})},_this.state={id:2,todoValue:"",todos:[{text:"Be kind.",id:0},{text:"Be awesome.",id:1}]},_this}return Object(inherits.a)(App,_Component),Object(createClass.a)(App,[{key:"render",value:function render(){var _this$state=this.state,todos=_this$state.todos,todoValue=_this$state.todoValue;return react_default.a.createElement("div",{className:"app"},react_default.a.createElement(Header.a,{className:"blue",count:todos.length}),react_default.a.createElement(TodoForm.a,{addTodo:this.addTodo,todoValue:todoValue,onChange:this.handleInputChange}),react_default.a.createElement(TodoList_TodoList,{todos:todos,remove:this.handleRemove}),react_default.a.createElement(Footer.a,null))}}]),App}(react.Component));__webpack_exports__.a=App_App},435:function(module,exports,__webpack_require__){__webpack_require__(436),__webpack_require__(598),module.exports=__webpack_require__(599)},599:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(10),_percy_io_percy_storybook__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(826),__webpack_require__(837),__webpack_require__(430)),_percy_io_percy_storybook__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_percy_io_percy_storybook__WEBPACK_IMPORTED_MODULE_3__),req=__webpack_require__(838);var _createPercyAddon=_percy_io_percy_storybook__WEBPACK_IMPORTED_MODULE_3___default()(),percyAddon=_createPercyAddon.percyAddon,serializeStories=_createPercyAddon.serializeStories;Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.setAddon)(percyAddon),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(function loadStories(){req.keys().forEach(function(filename){return req(filename)})},module),serializeStories(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.getStorybook)}.call(this,__webpack_require__(51)(module))},64:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return AddButton});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);__webpack_require__(842);function AddButton(props){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button",{className:"add-button",onClick:props.onClick,disabled:props.disabled},props.content||"Add 👍")}AddButton.__docgenInfo={description:"",methods:[],displayName:"AddButton"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/AddButton/AddButton.js"]={name:"AddButton",docgenInfo:AddButton.__docgenInfo,path:"src/components/AddButton/AddButton.js"})},79:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return Header});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);__webpack_require__(840);function Header(props){var className=props.className,count=props.count,value=props.value;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"header"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",{className:className,style:{backgroundColor:value}},"You have ",count," things to do."))}Header.__docgenInfo={description:"",methods:[],displayName:"Header"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Header/Header.js"]={name:"Header",docgenInfo:Header.__docgenInfo,path:"src/components/Header/Header.js"})},838:function(module,exports,__webpack_require__){var map={"./App.js":839,"./addButton.js":846,"./footer.js":905,"./header.js":906,"./index.js":907,"./text.js":912,"./todoForm.js":914};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=838},839:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(10),_App__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(432);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("App",module).add("default",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_2__.a,null)})}.call(this,__webpack_require__(51)(module))},840:function(module,exports,__webpack_require__){},841:function(module,exports,__webpack_require__){},842:function(module,exports,__webpack_require__){},843:function(module,exports,__webpack_require__){},844:function(module,exports,__webpack_require__){},845:function(module,exports,__webpack_require__){},846:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(10),_storybook_addon_knobs_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(12),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(428),_components_AddButton_AddButton__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(64);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("AddButton",module).addDecorator(_storybook_addon_knobs_react__WEBPACK_IMPORTED_MODULE_2__.withKnobs).add("default",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AddButton_AddButton__WEBPACK_IMPORTED_MODULE_4__.a,null)}).add("your Input with Knobs",function(){var label=Object(_storybook_addon_knobs_react__WEBPACK_IMPORTED_MODULE_2__.text)("Label","Add this to list!");return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AddButton_AddButton__WEBPACK_IMPORTED_MODULE_4__.a,{content:label})}).add("your Button with Action",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AddButton_AddButton__WEBPACK_IMPORTED_MODULE_4__.a,{onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action)("clicked")})}).add("your disabled Button",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AddButton_AddButton__WEBPACK_IMPORTED_MODULE_4__.a,{disabled:Object(_storybook_addon_knobs_react__WEBPACK_IMPORTED_MODULE_2__.boolean)("Disabled",!1)})})}.call(this,__webpack_require__(51)(module))},905:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(10),_storybook_addon_knobs_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(12),_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(100);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Footer",module).addDecorator(_storybook_addon_knobs_react__WEBPACK_IMPORTED_MODULE_2__.withKnobs).add("default",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__.a,null)}).add("your Date-Pick-Footer",function(){var defaultValue=new Date("Feb 20 2018"),value=Object(_storybook_addon_knobs_react__WEBPACK_IMPORTED_MODULE_2__.date)("Event Date",defaultValue,"GROUP-ID1");return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__.a,{value:value})})}.call(this,__webpack_require__(51)(module))},906:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(10),_components_Header_Header__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(79),_storybook_addon_knobs_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(12);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Header",module).addDecorator(_storybook_addon_knobs_react__WEBPACK_IMPORTED_MODULE_3__.withKnobs).add("blue Header",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header_Header__WEBPACK_IMPORTED_MODULE_2__.a,{className:"blue"})}).add("green Header",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header_Header__WEBPACK_IMPORTED_MODULE_2__.a,{className:"green"})}).add("your colored Header",function(){var value=Object(_storybook_addon_knobs_react__WEBPACK_IMPORTED_MODULE_3__.color)("Color","#AA6798","GROUP-ID1");return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header_Header__WEBPACK_IMPORTED_MODULE_2__.a,{value:value})})}.call(this,__webpack_require__(51)(module))},907:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(10),_storybook_react_demo__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(429);__webpack_require__(387);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Welcome",module).add("to Storybook",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_storybook_react_demo__WEBPACK_IMPORTED_MODULE_2__.Welcome,null)})}.call(this,__webpack_require__(51)(module))},912:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(10),_storybook_addon_knobs_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(12),_components_Text_Text__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(150);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Text",module).addDecorator(_storybook_addon_knobs_react__WEBPACK_IMPORTED_MODULE_2__.withKnobs).add("default",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Text_Text__WEBPACK_IMPORTED_MODULE_3__.a,null)}).add("Text and Input with Knobs",function(){var name=Object(_storybook_addon_knobs_react__WEBPACK_IMPORTED_MODULE_2__.text)("Name","React App"),level=Object(_storybook_addon_knobs_react__WEBPACK_IMPORTED_MODULE_2__.number)("Level",3),content="This is a ".concat(name," and it has Level ").concat(level," .");return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Text_Text__WEBPACK_IMPORTED_MODULE_3__.a,{content:content})}).add("Input with Knobs",function(){var input=Object(_storybook_addon_knobs_react__WEBPACK_IMPORTED_MODULE_2__.text)("Input","Type away ...");return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Text_Text__WEBPACK_IMPORTED_MODULE_3__.a,{content:input})})}.call(this,__webpack_require__(51)(module))},913:function(module,exports,__webpack_require__){},914:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(10),_storybook_addon_knobs_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(12),_components_TodoForm_TodoForm__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(149);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("TodoForm",module).addDecorator(_storybook_addon_knobs_react__WEBPACK_IMPORTED_MODULE_2__.withKnobs).add("default",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TodoForm_TodoForm__WEBPACK_IMPORTED_MODULE_3__.a,null)})}.call(this,__webpack_require__(51)(module))}},[[435,1,2]]]);
//# sourceMappingURL=main.8b0df00541f8ddf1f904.bundle.js.map