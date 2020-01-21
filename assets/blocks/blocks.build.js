!function(e){var t={};function m(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,m),a.l=!0,a.exports}m.m=e,m.c=t,m.d=function(e,t,i){m.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},m.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},m.t=function(e,t){if(1&t&&(e=m(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(m.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)m.d(i,a,function(t){return e[t]}.bind(null,a));return i},m.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return m.d(t,"a",t),t},m.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},m.p="",m(m.s=0)}([function(e,t,m){"use strict";m.r(t);var i=wp.blockEditor.RichText,a=[{attributes:{panel:{type:"boolean",default:!0},fileName:{type:"string",default:""},content:{type:"array",source:"children",selector:"pre"},alignment:{type:"string"},mode:{type:"string",default:"htmlmixed"},mime:{type:"string",default:"text/html"},lineNumbers:{type:"boolean",default:!1},firstLineNumber:{type:"number",default:1},lineWrapping:{type:"boolean",default:!1},readOnly:{type:"boolean",default:!0},disableCopy:{type:"boolean",default:!1},theme:{type:"string",default:"material"}},save:function(e){var t,m=e.attributes,a=m.content,o=m.mode,n=m.mime,l=m.lineNumbers,r=m.lineWrapping,s=m.readOnly,x=m.disableCopy,p=m.theme,c="CodeMirror cm-s-"+p,d={mode:o,mime:n,theme:p,lineNumbers:l,lineWrapping:r,readOnly:1==s&&(1!=x||"nocursor")};return wp.element.createElement("div",{className:"code-block"},wp.element.createElement(i.Content,{className:c,"data-setting":JSON.stringify(d),tagName:"pre",value:(t=a,String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"))}))}}];function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var m=0;m<t.length;m++){var i=t[m];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?x(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var c=wp.element.Component,d=wp.keycodes,f=d.UP,u=d.DOWN,h=window.CodeMirror,y=function(e){function t(){var e;return n(this,t),(e=r(this,s(t).apply(this,arguments))).selectAll=!0,e.onValueChange=e.onValueChange.bind(x(e)),e.onPaste=e.onPaste.bind(x(e)),e.onFocus=e.onFocus.bind(x(e)),e.onBlur=e.onBlur.bind(x(e)),e.onCursorActivity=e.onCursorActivity.bind(x(e)),e.onKeyHandled=e.onKeyHandled.bind(x(e)),e}var m,i,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),m=t,(i=[{key:"componentDidMount",value:function(){this.editor=h.fromTextArea(this.textarea,this.props.options);var e=this.editor.getWrapperElement();!0===this.props.hasPanel&&e.classList.add("has-panel"),this.editor.setOption("mode",this.props.options.mime),h.autoLoadTheme(this.editor,this.props.options.theme),h.autoLoadMode(this.editor,this.props.options.mode),this.editor.on("change",this.onValueChange),this.editor.on("paste",this.onPaste),this.editor.on("cursorActivity",this.onCursorActivity),this.editor.on("focus",this.onFocus),this.editor.on("blur",this.onBlur),this.editor.on("keyHandled",this.onKeyHandled),this.props.editorRef&&this.props.editorRef(this.editor),this.updateFocus()}},{key:"componentWillUnmount",value:function(){this.editor.off("change",this.onValueChange),this.editor.on("paste",this.onPaste),this.editor.off("focus",this.onFocus),this.editor.off("blur",this.onBlur),this.editor.off("cursorActivity",this.onCursorActivity),this.editor.off("keyHandled",this.onKeyHandled),this.selectAll=null,this.editor&&this.editor.toTextArea()}},{key:"componentDidUpdate",value:function(e){if(this.props.value!==e.value&&this.editor.getValue()!==this.props.value&&this.editor.setValue(this.props.value),"object"===o(e.options))for(var t in e.options)e.options.hasOwnProperty(t)&&e.options[t]!==this.props.options[t]&&this.setOptionIfChanged(t,this.props.options[t],this.props.options);this.props.focus!==e.focus&&this.updateFocus();var m=this.editor.getWrapperElement();!0===this.props.hasPanel?m.classList.add("has-panel"):m.classList.remove("has-panel")}},{key:"setOptionIfChanged",value:function(e,t,m){this.editor.setOption(e,t),"theme"==e&&h.autoLoadTheme(this.editor,t),"mime"==e&&h.autoLoadMode(this.editor,m.mode)}},{key:"onFocus",value:function(){this.props.onFocus&&this.props.onFocus()}},{key:"onBlur",value:function(e){this.props.onChange&&this.props.onChange(e.getValue()),this.selectAll=!0}},{key:"onCursorActivity",value:function(e){this.lastCursor=e.getCursor()}},{key:"onKeyHandled",value:function(e,t,m){var i,a;m.keyCode!==f&&m.keyCode!==u||this.lastCursor&&(i=e.getCursor(),a=this.lastCursor,i.line!==a.line||i.ch!==a.ch)&&m.stopImmediatePropagation(),m.ctrlKey&&65===m.keyCode&&this.selectAll&&(this.selectAll=!1,m.stopImmediatePropagation())}},{key:"updateFocus",value:function(){var e=this;this.props.focus&&!this.editor.hasFocus()&&window.requestAnimationFrame((function(){e.editor.focus()})),!this.props.focus&&this.editor.hasFocus()&&document.activeElement.blur()}},{key:"onPaste",value:function(e,t){}},{key:"onValueChange",value:function(e,t){if(this.props.onChange&&"setValue"!==t.origin){var m=e.getValue();String(m).replace(/“/g,'"').replace(/”/g,'"').replace(/"/g,'"'),this.props.onChange(m,t)}}},{key:"render",value:function(){var e=this;return wp.element.createElement("textarea",{ref:function(t){return e.textarea=t},autoFocus:this.props.autoFocus,autoComplete:"off",defaultValue:this.props.value,placeholder:this.props.placeholder})}}])&&l(m.prototype,i),a&&l(m,a),t}(c);function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var m=0;m<t.length;m++){var i=t[m];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function k(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var w=wp.i18n.__,j=wp.blocks,C=j.registerBlockType,L=j.createBlock,P=wp.element,E=P.Component,T=P.Fragment,q=wp.blockEditor,M=q.RichText,O=q.InspectorControls,F=wp.components,D=F.PanelBody,A=F.TextControl,B=F.ToggleControl,_=F.SelectControl,V=window.wpcm,H=V.defaults,I=V.themes,Q=function(e){function t(){return b(this,t),k(this,N(t).apply(this,arguments))}var m,i,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(t,e),m=t,(i=[{key:"getThemeOptions",value:function(){return I}},{key:"getModeOptions",value:function(){for(var e=[],t=[{name:"APL",mime:"text/apl",mode:"apl",ext:["dyalog","apl"]},{name:"PGP",mimes:["application/pgp","application/pgp-encrypted","application/pgp-keys","application/pgp-signature"],mode:"asciiarmor",ext:["asc","pgp","sig"]},{name:"ASN.1",mime:"text/x-ttcn-asn",mode:"asn.1",ext:["asn","asn1"],fileName:"filename"},{name:"Brainfuck",mime:"text/x-brainfuck",mode:"brainfuck",ext:["b","bf"]},{name:"C",mime:"text/x-csrc",mode:"clike",ext:["c","h","ino"],fileName:"file"},{name:"C++",mime:"text/x-c++src",mode:"clike",ext:["cpp","c++","cc","cxx","hpp","h++","hh","hxx"],alias:["cpp"],fileName:"file"},{name:"Cobol",mime:"text/x-cobol",mode:"cobol",ext:["cob","cpy"]},{name:"C#",mime:"text/x-csharp",mode:"clike",ext:["cs"],alias:["csharp"],fileName:"index"},{name:"Clojure",mime:"text/x-clojure",mode:"clojure",ext:["clj","cljc","cljx"]},{name:"ClojureScript",mime:"text/x-clojurescript",mode:"clojure",ext:["cljs"],fileName:"clojureScript"},{name:"Closure Stylesheets (GSS)",mime:"text/x-gss",mode:"css",ext:["gss"],fileName:"closureStyle"},{name:"CMake",mime:"text/x-cmake",mode:"cmake",ext:["cmake","cmake.in"],file:/^CMakeLists.txt$/},{name:"CoffeeScript",mimes:["application/vnd.coffeescript","text/coffeescript","text/x-coffeescript"],mode:"coffeescript",ext:["coffee"],alias:["coffee","coffee-script"],fileName:"script"},{name:"Common Lisp",mime:"text/x-common-lisp",mode:"commonlisp",ext:["cl","lisp","el"],alias:["lisp"]},{name:"CSS",mime:"text/css",mode:"css",ext:["css"],fileName:"style"},{name:"CQL",mime:"text/x-cassandra",mode:"sql",ext:["cql"],fileName:"cassandra"},{name:"D",mime:"text/x-d",mode:"d",ext:["d"]},{name:"Dart",mimes:["application/dart","text/x-dart"],mode:"dart",ext:["dart"]},{name:"diff",mime:"text/x-diff",mode:"diff",ext:["diff","patch"]},{name:"Django",mime:"text/x-django",mode:"django",ext:["py"],fileName:"manage"},{name:"Dockerfile",mime:"text/x-dockerfile",mode:"dockerfile",file:/^Dockerfile$/},{name:"DTD",mime:"application/xml-dtd",mode:"dtd",ext:["dtd"]},{name:"Dylan",mime:"text/x-dylan",mode:"dylan",ext:["dylan","dyl","intr"]},{name:"EBNF",mime:"text/x-ebnf",mode:"ebnf"},{name:"ECL",mime:"text/x-ecl",mode:"ecl",ext:["ecl"]},{name:"edn",mime:"application/edn",mode:"clojure",ext:["edn"]},{name:"Eiffel",mime:"text/x-eiffel",mode:"eiffel",ext:["e"]},{name:"Elm",mime:"text/x-elm",mode:"elm",ext:["elm"]},{name:"Erlang",mime:"text/x-erlang",mode:"erlang",ext:["erl"]},{name:"Esper",mime:"text/x-esper",mode:"sql"},{name:"Factor",mime:"text/x-factor",mode:"factor",ext:["factor"]},{name:"FCL",mime:"text/x-fcl",mode:"fcl"},{name:"Fortran",mime:"text/x-fortran",mode:"fortran",ext:["f","for","f77","f90"]},{name:"F#",mime:"text/x-fsharp",mode:"mllike",ext:["fs"],alias:["fsharp"]},{name:"Gas",mime:"text/x-gas",mode:"gas",ext:["s"]},{name:"Gherkin",mime:"text/x-feature",mode:"gherkin",ext:["feature"]},{name:"GitHub Flavored Markdown",mime:"text/x-gfm",mode:"gfm",file:/^(readme|contributing|history).md$/i,ext:["md"],fileName:"readme"},{name:"Go",mime:"text/x-go",mode:"go",ext:["go"]},{name:"Groovy",mime:"text/x-groovy",mode:"groovy",ext:["groovy","gradle"],file:/^Jenkinsfile$/},{name:"HAML",mime:"text/x-haml",mode:"haml",ext:["haml"],fileName:"index"},{name:"Haskell",mime:"text/x-haskell",mode:"haskell",ext:["hs"]},{name:"ASP.NET",mime:"application/x-aspx",mode:"htmlembedded",ext:["aspx"],alias:["asp","aspx"],fileName:"index"},{name:"HTML",mime:"text/html",mode:"htmlmixed",ext:["html","htm","handlebars","hbs"],alias:["xhtml"],fileName:"index"},{name:"HTTP",mime:"message/http",mode:"http"},{name:"IDL",mime:"text/x-idl",mode:"idl",ext:["pro"]},{name:"Pug",mime:"text/x-pug",mode:"pug",ext:["jade","pug"],alias:["jade"]},{name:"Java",mime:"text/x-java",mode:"clike",ext:["java"],fileName:"class"},{name:"Java Server Pages",mime:"application/x-jsp",mode:"htmlembedded",ext:["jsp"],alias:["jsp"],fileName:"index"},{name:"JavaScript",mimes:["text/javascript","text/ecmascript","application/javascript","application/x-javascript","application/ecmascript"],mode:"javascript",ext:["js"],alias:["ecmascript","js","node"],fileName:"script"},{name:"JSON",mimes:["application/json","application/x-json"],mode:"javascript",ext:["json","map"],alias:["json5"],fileName:"data"},{name:"JSON-LD",mime:"application/ld+json",mode:"javascript",ext:["jsonld"],alias:["jsonld"],fileName:"data"},{name:"JSX",mime:"text/jsx",mode:"jsx",ext:["jsx"],dependency:["xml","javascript"],fileName:"app"},{name:"Kotlin",mime:"text/x-kotlin",mode:"clike",ext:["kt"],fileName:"kotlin"},{name:"LESS",mime:"text/x-less",mode:"css",ext:["less"],fileName:"style"},{name:"LiveScript",mime:"text/x-livescript",mode:"livescript",ext:["ls"],alias:["ls"]},{name:"Lua",mime:"text/x-lua",mode:"lua",ext:["lua"]},{name:"Markdown",mime:"text/x-markdown",mode:"markdown",ext:["markdown","md","mkd"],fileName:"readme"},{name:"MariaDB SQL",mime:"text/x-mariadb",mode:"sql"},{name:"Modelica",mime:"text/x-modelica",mode:"modelica",ext:["mo"]},{name:"MUMPS",mime:"text/x-mumps",mode:"mumps",ext:["mps"]},{name:"MS SQL",mime:"text/x-mssql",mode:"sql"},{name:"MySQL",mime:"text/x-mysql",mode:"sql"},{name:"Nginx",mime:"text/x-nginx-conf",mode:"nginx",file:/nginx.*\.conf$/i,ext:["conf"],fileName:"nginx"},{name:"Objective-C",mime:"text/x-objectivec",mode:"clike",ext:["m","mm"],alias:["objective-c","objc"],fileName:"object"},{name:"Octave",mime:"text/x-octave",mode:"octave",ext:["m"],fileName:"octave"},{name:"Oz",mime:"text/x-oz",mode:"oz",ext:["oz"]},{name:"Pascal",mime:"text/x-pascal",mode:"pascal",ext:["p","pas"]},{name:"Perl",mime:"text/x-perl",mode:"perl",ext:["pl","pm"],fileName:"perl"},{name:"PHP",mimes:["text/x-php","application/x-httpd-php","application/x-httpd-php-open"],mode:"php",ext:["php","php3","php4","php5","php7","phtml"],fileName:"index"},{name:"Php Ini Config files",mime:"text/x-properties",mode:"properties",ext:["ini","in"],alias:["ini","properties"],fileName:"php"},{name:"Pig",mime:"text/x-pig",mode:"pig",ext:["pig"]},{name:"Plain Text",mime:"text/plain",mode:"null",ext:["txt","text","conf","def","list","log"],fileName:"file"},{name:"PLSQL",mime:"text/x-plsql",mode:"sql",ext:["pls"],fileName:"procedure"},{name:"PowerShell",mime:"application/x-powershell",mode:"powershell",ext:["ps1","psd1","psm1"],fileName:"shell"},{name:"Ini Config files",mime:"text/x-properties",mode:"properties",ext:["ini","in"],alias:["ini","properties"],fileName:"config"},{name:"Properties files",mime:"text/x-properties",mode:"properties",ext:["properties","ini","in"],alias:["ini","properties"]},{name:"ProtoBuf",mime:"text/x-protobuf",mode:"protobuf",ext:["proto"]},{name:"Python",mime:"text/x-python",mode:"python",ext:["BUILD","bzl","py","pyw"],file:/^(BUCK|BUILD)$/,fileName:"index"},{name:"Puppet",mime:"text/x-puppet",mode:"puppet",ext:["pp"]},{name:"Q",mime:"text/x-q",mode:"q",ext:["q"]},{name:"R",mime:"text/x-rsrc",mode:"r",ext:["r","R"],alias:["rscript"],fileName:"script"},{name:"Ruby",mime:"text/x-ruby",mode:"ruby",ext:["rb"],alias:["jruby","macruby","rake","rb","rbx"],fileName:"index"},{name:"Rust",mime:"text/x-rustsrc",mode:"rust",ext:["rs"]},{name:"SAS",mime:"text/x-sas",mode:"sas",ext:["sas"]},{name:"Scala",mime:"text/x-scala",mode:"clike",ext:["scala"],fileName:"filename"},{name:"Scheme",mime:"text/x-scheme",mode:"scheme",ext:["scm","ss"]},{name:"SCSS",mime:"text/x-scss",mode:"css",ext:["scss"],fileName:"style"},{name:"Shell",mimes:["text/x-sh","application/x-sh"],mode:"shell",ext:["sh","ksh","bash"],alias:["bash","sh","zsh"],file:/^PKGBUILD$/,fileName:"file"},{name:"Slim",mimes:["text/x-slim","application/x-slim"],mode:"slim",ext:["slim"]},{name:"Smalltalk",mime:"text/x-stsrc",mode:"smalltalk",ext:["st"],fileName:"smalltalk"},{name:"Smarty",mime:"text/x-smarty",mode:"smarty",ext:["tpl"]},{name:"Solr",mime:"text/x-solr",mode:"solr"},{name:"SML",mime:"text/x-sml",mode:"mllike",ext:["sml","sig","fun","smackspec"]},{name:"Soy",mime:"text/x-soy",mode:"soy",ext:["soy"],alias:["closure template"]},{name:"SPARQL",mime:"application/sparql-query",mode:"sparql",ext:["rq","sparql"],alias:["sparul"]},{name:"SQL",mime:"text/x-sql",mode:"sql",ext:["sql"],fileName:"query"},{name:"SQLite",mime:"text/x-sqlite",mode:"sql"},{name:"Squirrel",mime:"text/x-squirrel",mode:"clike",ext:["nut"]},{name:"Stylus",mime:"text/x-styl",mode:"stylus",ext:["styl"]},{name:"Swift",mime:"text/x-swift",mode:"swift",ext:["swift"],fileName:"file"},{name:"sTeX",mime:"text/x-stex",mode:"stex"},{name:"LaTeX",mime:"text/x-latex",mode:"stex",ext:["text","ltx","tex"],alias:["tex"]},{name:"SystemVerilog",mime:"text/x-systemverilog",mode:"verilog",ext:["v","sv","svh"]},{name:"Tcl",mime:"text/x-tcl",mode:"tcl",ext:["tcl"]},{name:"Textile",mime:"text/x-textile",mode:"textile",ext:["textile"]},{name:"TiddlyWiki ",mime:"text/x-tiddlywiki",mode:"tiddlywiki"},{name:"Tiki wiki",mime:"text/tiki",mode:"tiki"},{name:"TOML",mime:"text/x-toml",mode:"toml",ext:["toml"]},{name:"Tornado",mime:"text/x-tornado",mode:"tornado"},{name:"troff",mime:"text/troff",mode:"troff",ext:["1","2","3","4","5","6","7","8","9"]},{name:"TTCN",mime:"text/x-ttcn",mode:"ttcn",ext:["ttcn","ttcn3","ttcnpp"]},{name:"TTCN_CFG",mime:"text/x-ttcn-cfg",mode:"ttcn-cfg",ext:["cfg"]},{name:"Turtle",mime:"text/turtle",mode:"turtle",ext:["ttl"]},{name:"TypeScript",mime:"application/typescript",mode:"javascript",ext:["ts"],alias:["ts"],fileName:"script"},{name:"TypeScript-JSX",mime:"text/typescript-jsx",mode:"jsx",ext:["tsx"],alias:["tsx"],fileName:"script"},{name:"Twig",mime:"text/x-twig",mode:"twig",ext:["php"],fileName:"template"},{name:"Web IDL",mime:"text/x-webidl",mode:"webidl",ext:["webidl"]},{name:"VB.NET",mime:"text/x-vb",mode:"vb",ext:["vb"]},{name:"VBScript",mime:"text/vbscript",mode:"vbscript",ext:["vbs"],fileName:"script"},{name:"Velocity",mime:"text/velocity",mode:"velocity",ext:["vtl"]},{name:"Verilog",mime:"text/x-verilog",mode:"verilog",ext:["v"]},{name:"VHDL",mime:"text/x-vhdl",mode:"vhdl",ext:["vhd","vhdl"]},{name:"Vue.js Component",mimes:["script/x-vue","text/x-vue"],mode:"vue",ext:["vue"],fileName:"component"},{name:"XML",mimes:["application/xml","text/xml"],mode:"xml",ext:["xml","xsl","xsd","svg"],alias:["rss","wsdl","xsd"]},{name:"XQuery",mime:"application/xquery",mode:"xquery",ext:["xy","xquery"]},{name:"Yacas",mime:"text/x-yacas",mode:"yacas",ext:["ys"]},{name:"YAML",mimes:["text/x-yaml","text/yaml"],mode:"yaml",ext:["yaml","yml"],alias:["yml"]},{name:"Z80",mime:"text/x-z80",mode:"z80",ext:["z80"]},{name:"mscgen",mime:"text/x-mscgen",mode:"mscgen",ext:["mscgen","mscin","msc"]},{name:"xu",mime:"text/x-xu",mode:"mscgen",ext:["xu"]},{name:"msgenny",mime:"text/x-msgenny",mode:"mscgen",ext:["msgenny"]}],m=0;m<t.length;m++){var i=t[m];if(void 0!==i.mime&&e.push({label:w(i.name),value:i.mime}),void 0!==i.mimes)for(var a=0;a<i.mimes.length;a++)0==a?e.push({label:w(i.name),value:i.mimes[a]}):e.push({label:w(i.name+" ("+i.mimes[a]+")"),value:i.mimes[a]})}return e}},{key:"getModeByMime",value:function(e){var t=[{name:"APL",mime:"text/apl",mode:"apl",ext:["dyalog","apl"]},{name:"PGP",mimes:["application/pgp","application/pgp-encrypted","application/pgp-keys","application/pgp-signature"],mode:"asciiarmor",ext:["asc","pgp","sig"]},{name:"ASN.1",mime:"text/x-ttcn-asn",mode:"asn.1",ext:["asn","asn1"],fileName:"filename"},{name:"Brainfuck",mime:"text/x-brainfuck",mode:"brainfuck",ext:["b","bf"]},{name:"C",mime:"text/x-csrc",mode:"clike",ext:["c","h","ino"],fileName:"file"},{name:"C++",mime:"text/x-c++src",mode:"clike",ext:["cpp","c++","cc","cxx","hpp","h++","hh","hxx"],alias:["cpp"],fileName:"file"},{name:"Cobol",mime:"text/x-cobol",mode:"cobol",ext:["cob","cpy"]},{name:"C#",mime:"text/x-csharp",mode:"clike",ext:["cs"],alias:["csharp"],fileName:"index"},{name:"Clojure",mime:"text/x-clojure",mode:"clojure",ext:["clj","cljc","cljx"]},{name:"ClojureScript",mime:"text/x-clojurescript",mode:"clojure",ext:["cljs"],fileName:"clojureScript"},{name:"Closure Stylesheets (GSS)",mime:"text/x-gss",mode:"css",ext:["gss"],fileName:"closureStyle"},{name:"CMake",mime:"text/x-cmake",mode:"cmake",ext:["cmake","cmake.in"],file:/^CMakeLists.txt$/},{name:"CoffeeScript",mimes:["application/vnd.coffeescript","text/coffeescript","text/x-coffeescript"],mode:"coffeescript",ext:["coffee"],alias:["coffee","coffee-script"],fileName:"script"},{name:"Common Lisp",mime:"text/x-common-lisp",mode:"commonlisp",ext:["cl","lisp","el"],alias:["lisp"]},{name:"CSS",mime:"text/css",mode:"css",ext:["css"],fileName:"style"},{name:"CQL",mime:"text/x-cassandra",mode:"sql",ext:["cql"],fileName:"cassandra"},{name:"D",mime:"text/x-d",mode:"d",ext:["d"]},{name:"Dart",mimes:["application/dart","text/x-dart"],mode:"dart",ext:["dart"]},{name:"diff",mime:"text/x-diff",mode:"diff",ext:["diff","patch"]},{name:"Django",mime:"text/x-django",mode:"django",ext:["py"],fileName:"manage"},{name:"Dockerfile",mime:"text/x-dockerfile",mode:"dockerfile",file:/^Dockerfile$/},{name:"DTD",mime:"application/xml-dtd",mode:"dtd",ext:["dtd"]},{name:"Dylan",mime:"text/x-dylan",mode:"dylan",ext:["dylan","dyl","intr"]},{name:"EBNF",mime:"text/x-ebnf",mode:"ebnf"},{name:"ECL",mime:"text/x-ecl",mode:"ecl",ext:["ecl"]},{name:"edn",mime:"application/edn",mode:"clojure",ext:["edn"]},{name:"Eiffel",mime:"text/x-eiffel",mode:"eiffel",ext:["e"]},{name:"Elm",mime:"text/x-elm",mode:"elm",ext:["elm"]},{name:"Erlang",mime:"text/x-erlang",mode:"erlang",ext:["erl"]},{name:"Esper",mime:"text/x-esper",mode:"sql"},{name:"Factor",mime:"text/x-factor",mode:"factor",ext:["factor"]},{name:"FCL",mime:"text/x-fcl",mode:"fcl"},{name:"Fortran",mime:"text/x-fortran",mode:"fortran",ext:["f","for","f77","f90"]},{name:"F#",mime:"text/x-fsharp",mode:"mllike",ext:["fs"],alias:["fsharp"]},{name:"Gas",mime:"text/x-gas",mode:"gas",ext:["s"]},{name:"Gherkin",mime:"text/x-feature",mode:"gherkin",ext:["feature"]},{name:"GitHub Flavored Markdown",mime:"text/x-gfm",mode:"gfm",file:/^(readme|contributing|history).md$/i,ext:["md"],fileName:"readme"},{name:"Go",mime:"text/x-go",mode:"go",ext:["go"]},{name:"Groovy",mime:"text/x-groovy",mode:"groovy",ext:["groovy","gradle"],file:/^Jenkinsfile$/},{name:"HAML",mime:"text/x-haml",mode:"haml",ext:["haml"],fileName:"index"},{name:"Haskell",mime:"text/x-haskell",mode:"haskell",ext:["hs"]},{name:"ASP.NET",mime:"application/x-aspx",mode:"htmlembedded",ext:["aspx"],alias:["asp","aspx"],fileName:"index"},{name:"HTML",mime:"text/html",mode:"htmlmixed",ext:["html","htm","handlebars","hbs"],alias:["xhtml"],fileName:"index"},{name:"HTTP",mime:"message/http",mode:"http"},{name:"IDL",mime:"text/x-idl",mode:"idl",ext:["pro"]},{name:"Pug",mime:"text/x-pug",mode:"pug",ext:["jade","pug"],alias:["jade"]},{name:"Java",mime:"text/x-java",mode:"clike",ext:["java"],fileName:"class"},{name:"Java Server Pages",mime:"application/x-jsp",mode:"htmlembedded",ext:["jsp"],alias:["jsp"],fileName:"index"},{name:"JavaScript",mimes:["text/javascript","text/ecmascript","application/javascript","application/x-javascript","application/ecmascript"],mode:"javascript",ext:["js"],alias:["ecmascript","js","node"],fileName:"script"},{name:"JSON",mimes:["application/json","application/x-json"],mode:"javascript",ext:["json","map"],alias:["json5"],fileName:"data"},{name:"JSON-LD",mime:"application/ld+json",mode:"javascript",ext:["jsonld"],alias:["jsonld"],fileName:"data"},{name:"JSX",mime:"text/jsx",mode:"jsx",ext:["jsx"],dependency:["xml","javascript"],fileName:"app"},{name:"Kotlin",mime:"text/x-kotlin",mode:"clike",ext:["kt"],fileName:"kotlin"},{name:"LESS",mime:"text/x-less",mode:"css",ext:["less"],fileName:"style"},{name:"LiveScript",mime:"text/x-livescript",mode:"livescript",ext:["ls"],alias:["ls"]},{name:"Lua",mime:"text/x-lua",mode:"lua",ext:["lua"]},{name:"Markdown",mime:"text/x-markdown",mode:"markdown",ext:["markdown","md","mkd"],fileName:"readme"},{name:"MariaDB SQL",mime:"text/x-mariadb",mode:"sql"},{name:"Modelica",mime:"text/x-modelica",mode:"modelica",ext:["mo"]},{name:"MUMPS",mime:"text/x-mumps",mode:"mumps",ext:["mps"]},{name:"MS SQL",mime:"text/x-mssql",mode:"sql"},{name:"MySQL",mime:"text/x-mysql",mode:"sql"},{name:"Nginx",mime:"text/x-nginx-conf",mode:"nginx",file:/nginx.*\.conf$/i,ext:["conf"],fileName:"nginx"},{name:"Objective-C",mime:"text/x-objectivec",mode:"clike",ext:["m","mm"],alias:["objective-c","objc"],fileName:"object"},{name:"Octave",mime:"text/x-octave",mode:"octave",ext:["m"],fileName:"octave"},{name:"Oz",mime:"text/x-oz",mode:"oz",ext:["oz"]},{name:"Pascal",mime:"text/x-pascal",mode:"pascal",ext:["p","pas"]},{name:"Perl",mime:"text/x-perl",mode:"perl",ext:["pl","pm"],fileName:"perl"},{name:"PHP",mimes:["text/x-php","application/x-httpd-php","application/x-httpd-php-open"],mode:"php",ext:["php","php3","php4","php5","php7","phtml"],fileName:"index"},{name:"Php Ini Config files",mime:"text/x-properties",mode:"properties",ext:["ini","in"],alias:["ini","properties"],fileName:"php"},{name:"Pig",mime:"text/x-pig",mode:"pig",ext:["pig"]},{name:"Plain Text",mime:"text/plain",mode:"null",ext:["txt","text","conf","def","list","log"],fileName:"file"},{name:"PLSQL",mime:"text/x-plsql",mode:"sql",ext:["pls"],fileName:"procedure"},{name:"PowerShell",mime:"application/x-powershell",mode:"powershell",ext:["ps1","psd1","psm1"],fileName:"shell"},{name:"Ini Config files",mime:"text/x-properties",mode:"properties",ext:["ini","in"],alias:["ini","properties"],fileName:"config"},{name:"Properties files",mime:"text/x-properties",mode:"properties",ext:["properties","ini","in"],alias:["ini","properties"]},{name:"ProtoBuf",mime:"text/x-protobuf",mode:"protobuf",ext:["proto"]},{name:"Python",mime:"text/x-python",mode:"python",ext:["BUILD","bzl","py","pyw"],file:/^(BUCK|BUILD)$/,fileName:"index"},{name:"Puppet",mime:"text/x-puppet",mode:"puppet",ext:["pp"]},{name:"Q",mime:"text/x-q",mode:"q",ext:["q"]},{name:"R",mime:"text/x-rsrc",mode:"r",ext:["r","R"],alias:["rscript"],fileName:"script"},{name:"Ruby",mime:"text/x-ruby",mode:"ruby",ext:["rb"],alias:["jruby","macruby","rake","rb","rbx"],fileName:"index"},{name:"Rust",mime:"text/x-rustsrc",mode:"rust",ext:["rs"]},{name:"SAS",mime:"text/x-sas",mode:"sas",ext:["sas"]},{name:"Scala",mime:"text/x-scala",mode:"clike",ext:["scala"],fileName:"filename"},{name:"Scheme",mime:"text/x-scheme",mode:"scheme",ext:["scm","ss"]},{name:"SCSS",mime:"text/x-scss",mode:"css",ext:["scss"],fileName:"style"},{name:"Shell",mimes:["text/x-sh","application/x-sh"],mode:"shell",ext:["sh","ksh","bash"],alias:["bash","sh","zsh"],file:/^PKGBUILD$/,fileName:"file"},{name:"Slim",mimes:["text/x-slim","application/x-slim"],mode:"slim",ext:["slim"]},{name:"Smalltalk",mime:"text/x-stsrc",mode:"smalltalk",ext:["st"],fileName:"smalltalk"},{name:"Smarty",mime:"text/x-smarty",mode:"smarty",ext:["tpl"]},{name:"Solr",mime:"text/x-solr",mode:"solr"},{name:"SML",mime:"text/x-sml",mode:"mllike",ext:["sml","sig","fun","smackspec"]},{name:"Soy",mime:"text/x-soy",mode:"soy",ext:["soy"],alias:["closure template"]},{name:"SPARQL",mime:"application/sparql-query",mode:"sparql",ext:["rq","sparql"],alias:["sparul"]},{name:"SQL",mime:"text/x-sql",mode:"sql",ext:["sql"],fileName:"query"},{name:"SQLite",mime:"text/x-sqlite",mode:"sql"},{name:"Squirrel",mime:"text/x-squirrel",mode:"clike",ext:["nut"]},{name:"Stylus",mime:"text/x-styl",mode:"stylus",ext:["styl"]},{name:"Swift",mime:"text/x-swift",mode:"swift",ext:["swift"],fileName:"file"},{name:"sTeX",mime:"text/x-stex",mode:"stex"},{name:"LaTeX",mime:"text/x-latex",mode:"stex",ext:["text","ltx","tex"],alias:["tex"]},{name:"SystemVerilog",mime:"text/x-systemverilog",mode:"verilog",ext:["v","sv","svh"]},{name:"Tcl",mime:"text/x-tcl",mode:"tcl",ext:["tcl"]},{name:"Textile",mime:"text/x-textile",mode:"textile",ext:["textile"]},{name:"TiddlyWiki ",mime:"text/x-tiddlywiki",mode:"tiddlywiki"},{name:"Tiki wiki",mime:"text/tiki",mode:"tiki"},{name:"TOML",mime:"text/x-toml",mode:"toml",ext:["toml"]},{name:"Tornado",mime:"text/x-tornado",mode:"tornado"},{name:"troff",mime:"text/troff",mode:"troff",ext:["1","2","3","4","5","6","7","8","9"]},{name:"TTCN",mime:"text/x-ttcn",mode:"ttcn",ext:["ttcn","ttcn3","ttcnpp"]},{name:"TTCN_CFG",mime:"text/x-ttcn-cfg",mode:"ttcn-cfg",ext:["cfg"]},{name:"Turtle",mime:"text/turtle",mode:"turtle",ext:["ttl"]},{name:"TypeScript",mime:"application/typescript",mode:"javascript",ext:["ts"],alias:["ts"],fileName:"script"},{name:"TypeScript-JSX",mime:"text/typescript-jsx",mode:"jsx",ext:["tsx"],alias:["tsx"],fileName:"script"},{name:"Twig",mime:"text/x-twig",mode:"twig",ext:["php"],fileName:"template"},{name:"Web IDL",mime:"text/x-webidl",mode:"webidl",ext:["webidl"]},{name:"VB.NET",mime:"text/x-vb",mode:"vb",ext:["vb"]},{name:"VBScript",mime:"text/vbscript",mode:"vbscript",ext:["vbs"],fileName:"script"},{name:"Velocity",mime:"text/velocity",mode:"velocity",ext:["vtl"]},{name:"Verilog",mime:"text/x-verilog",mode:"verilog",ext:["v"]},{name:"VHDL",mime:"text/x-vhdl",mode:"vhdl",ext:["vhd","vhdl"]},{name:"Vue.js Component",mimes:["script/x-vue","text/x-vue"],mode:"vue",ext:["vue"],fileName:"component"},{name:"XML",mimes:["application/xml","text/xml"],mode:"xml",ext:["xml","xsl","xsd","svg"],alias:["rss","wsdl","xsd"]},{name:"XQuery",mime:"application/xquery",mode:"xquery",ext:["xy","xquery"]},{name:"Yacas",mime:"text/x-yacas",mode:"yacas",ext:["ys"]},{name:"YAML",mimes:["text/x-yaml","text/yaml"],mode:"yaml",ext:["yaml","yml"],alias:["yml"]},{name:"Z80",mime:"text/x-z80",mode:"z80",ext:["z80"]},{name:"mscgen",mime:"text/x-mscgen",mode:"mscgen",ext:["mscgen","mscin","msc"]},{name:"xu",mime:"text/x-xu",mode:"mscgen",ext:["xu"]},{name:"msgenny",mime:"text/x-msgenny",mode:"mscgen",ext:["msgenny"]}];e=e.toLowerCase();for(var m=0;m<t.length;m++){var i=t[m];if(i.mime==e)return i;if(i.mimes)for(var a=0;a<i.mimes.length;a++)if(i.mimes[a]==e)return i}}},{key:"render",value:function(){var e=this.getThemeOptions,t=this.getModeOptions,m=this.getModeByMime,i=this.props,a=i.attributes,o=i.setAttributes,n=a.panel,l=a.fileName,r=a.mime,s=a.mode,x=a.theme,p=a.lineNumbers,c=a.firstLineNumber,d=a.lineWrapping,f=a.readOnly,u=a.styleActiveLine,h=a.disableCopy,g=a.content,b=function(e){var t=m(e);return t.name};function v(e){alert(e+"\n\nThis button will work only on front end!")}var k={mime:r,mode:s,lineNumbers:p,firstLineNumber:Math.abs(c),lineWrapping:d,theme:x,styleActiveLine:u,scrollbarStyle:"simple",smartIndent:!0,electricChars:!0},N=["CodeMirror","CodeMirror-panel","cm-s-"+x],S=["info-panel",n?"":"hide-panel"],j=m(r),C=["language",j.name.toLowerCase(),j.mime?j.mime.replace(/\w+\/\w+[-.]/g,""):j.mimes[0].replace(/\w+\/\w+[-.]/g,""),j.ext?j.ext[0]:""],L=b(r);""==l&&o({fileName:L});var P=!1;["htmlmixed","javascript","xml","jsx","vue"].includes(s)&&(P=!!window.wpcm.options.panel.runButton);var E,q,F,V=!!window.wpcm.options.panel.fullScreenButton,H=!!window.wpcm.options.panel.copyButton&&!h;return wp.element.createElement(T,null,wp.element.createElement(O,null,wp.element.createElement(D,{title:w("CodeMirror Panel Settings")},wp.element.createElement(B,{label:w("Show Panel"),checked:n,onChange:function(){return o({panel:!n})}})),wp.element.createElement(D,{title:w("CodeMirror Settings")},wp.element.createElement(_,{label:w("Language / Mode"),value:r,options:t(),onChange:function(e){o({mime:e});var t=m(e);o({mode:t.mode});var i=b(e);o({fileName:i})}}),wp.element.createElement(_,(E={label:w("Theme"),value:x,options:e(),onChange:function(e){return o({theme:e})}},F=function(e){o({theme:e})},(q="onChange")in E?Object.defineProperty(E,q,{value:F,enumerable:!0,configurable:!0,writable:!0}):E[q]=F,E))),wp.element.createElement(D,{initialOpen:!1,title:w("Line Settings")},wp.element.createElement(B,{label:w("Show Line Numbers?"),checked:p,onChange:function(){return o({lineNumbers:!p})}}),p&&wp.element.createElement(A,{label:w("First Line Number"),type:"number",value:c,onChange:function(e){o({firstLineNumber:e=e||1})},min:"1"}),wp.element.createElement(B,{label:w("Highlight Active Line?"),checked:u,onChange:function(){return o({styleActiveLine:!u})}}),wp.element.createElement(B,{label:w("Warp Long Line?"),checked:d,onChange:function(){return o({lineWrapping:!d})}})),wp.element.createElement(D,null,wp.element.createElement(B,{label:w("Editable on Frontend?"),checked:!f,onChange:function(e){!0===e&&o({disableCopy:!1}),o({readOnly:!e})}}),f&&wp.element.createElement(B,{label:w("Disable Copy on Frontend?"),checked:h,onChange:function(){return o({disableCopy:!h})}}))),wp.element.createElement("div",{className:"codeMirror-editor"},wp.element.createElement("div",{className:N.join(" ")},wp.element.createElement("div",{className:S.join(" ")},wp.element.createElement(M,{tagName:"span",className:C.join(" "),value:l,onChange:function(e){return o({fileName:e})},autoFocus:!1}),wp.element.createElement("div",{className:"control-panel"},P&&wp.element.createElement("span",{title:"It Execute Code on Front End",onClick:function(){return v("It Execute Code on Front End")}},wp.element.createElement("b",{className:"run-code execute-code"})),V&&wp.element.createElement("span",{title:"To Set Full Screen on Front End",onClick:function(){return v("To Set Full Screen on Front End")}},wp.element.createElement("b",{className:"fullscreen maximize"})),H&&wp.element.createElement("span",{title:"Copy Code on Front End",onClick:function(){return v("Copy Code on Front End")}},wp.element.createElement("b",{className:"copy"}))))),wp.element.createElement(y,{key:"code",placeholder:w("/* Write or Paste Your Code Here \n And Select Code Language Mode, by default (javaScript) Mode is selected*/"),value:g,options:k,hasPanel:n,onChange:function(e){return o({content:e})}})))}}])&&v(m.prototype,i),a&&v(m,a),t}(E);C("codemirror-blocks/code-block",{title:w("CodeMrror Block 1.1"),description:w("CodeMrror Block, It gives you more flexibility to Display formated Program Code."),icon:"media-code",category:"codemirror-blocks",keywords:[w("code"),w("codemirror CodeMirror"),w("gutenberg code block")],attributes:{panel:{type:"boolean",default:!0},fileName:{type:"string",default:""},content:{type:"array",source:"children",selector:"pre"},align:{type:"string",default:""},mode:{type:"string",default:H.mode||"htmlmixed"},mime:{type:"string",default:H.mime||"text/html"},lineNumbers:{type:"boolean",default:H.lineNumbers||!1},firstLineNumber:{type:"number",default:1},lineWrapping:{type:"boolean",default:H.lineWrapping||!1},readOnly:{type:"boolean",default:H.readOnly||!1},styleActiveLine:{type:"boolean",default:H.styleActiveLine||!1},disableCopy:{type:"boolean",default:!1},theme:{type:"string",default:H.theme||"material"}},supports:{align:["wide","full"]},transforms:{from:[{type:"raw",priority:4,isMatch:function(e){return"PRE"===e.nodeName&&1===e.children.length&&"CODE"===e.firstChild.nodeName},transform:function(e){return L("codemirror-blocks/code-block",{content:e.textContent})}},{type:"block",blocks:["core/code","core/preformatted","core/paragraph"],transform:function(e){var t=e.content;return L("codemirror-blocks/code-block",{content:t})}}],to:[{type:"block",blocks:["core/code"],transform:function(e){var t=e.content;return L("core/code",{content:t})}},{type:"block",blocks:["core/preformatted"],transform:function(e){var t=e.content;return L("core/preformatted",{content:t})}}]},edit:Q,save:function(e){var t,m=e.attributes.content;return wp.element.createElement("div",{className:"code-block"},wp.element.createElement(M.Content,{tagName:"pre",value:(t=m,String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"))}))},deprecated:a})}]);