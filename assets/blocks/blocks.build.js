!function(e){function t(m){if(a[m])return a[m].exports;var i=a[m]={i:m,l:!1,exports:{}};return e[m].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var a={};t.m=e,t.c=a,t.d=function(e,a,m){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:m})},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});a(1)},function(e,t,a){"use strict";a(2)},function(e,t,a){"use strict";function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=a(3),n=a(4),r=a(5),s=function(){function e(e,t){for(var a=0;a<t.length;a++){var m=t[a];m.enumerable=m.enumerable||!1,m.configurable=!0,"value"in m&&(m.writable=!0),Object.defineProperty(e,m.key,m)}}return function(t,a,m){return a&&e(t.prototype,a),m&&e(t,m),t}}(),c=wp.i18n.__,x=wp.blocks.registerBlockType,d=wp.element,p=d.Component,u=d.Fragment,f=wp.editor,b=f.RichText,h=f.InspectorControls,v=wp.components,y=v.PanelBody,g=v.ToggleControl,k=v.SelectControl,w=wp.compose.withState,j=function(e){function t(){return m(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),s(t,[{key:"getThemeOptions",value:function(){return Object(l.a)()}},{key:"getModeOptions",value:function(){for(var e=[],t=Object(n.a)(),a=0;a<t.length;a++){var m=t[a];if(void 0!==m.mime&&e.push({label:c(m.name),value:m.mime}),void 0!==m.mimes)for(var i=0;i<m.mimes.length;i++)e.push({label:c(m.name+" ("+m.mimes[i]+")"),value:m.mimes[i]})}return e}},{key:"getModeByMime",value:function(e){var t=Object(n.a)();e=e.toLowerCase();for(var a=0;a<t.length;a++){var m=t[a];if(m.mime==e)return m;if(m.mimes)for(var i=0;i<m.mimes.length;i++)if(m.mimes[i]==e)return m}}},{key:"render",value:function(){var e=this.getThemeOptions,t=this.getModeOptions,a=this.getModeByMime,m=this.props,i=m.attributes,o=m.setAttributes,l=i.mime,n=i.mode,s=i.theme,x=i.lineNumbers,d=i.lineWrapping,p=i.readOnly,f=i.disableCopy,b=i.content,v=function(e){o({content:e})},j=w({codeEditorSettings:{codemirror:{mime:l,mode:n,lineNumbers:x,lineWrapping:d,styleActiveLine:!0,theme:s,styleSelectedText:!0,scrollbarStyle:"simple"}}})(function(e){var t=e.codeEditorSettings;return wp.element.createElement(r.a,{key:"code",placeholder:c("/* Write or Paste Your Code Here \n And Select Code Language Mode, by default (javaScript) Mode is selected*/"),value:b,settings:t,tagName:"pre",onChange:v})}),S=function(e){o({mime:e});var t=a(e);o({mode:t.mode})};return wp.element.createElement(u,null,wp.element.createElement(h,null,wp.element.createElement(y,{title:c("CodeMirror Settings")},wp.element.createElement(k,{label:c("Language / Mode"),value:l,options:t(),onChange:S}),wp.element.createElement(k,{label:c("Theme"),value:s,options:e(),onChange:function(e){return o({theme:e})}}),wp.element.createElement(g,{label:c("Show Line Numbers?"),checked:x,onChange:function(){return o({lineNumbers:!x})}}),wp.element.createElement(g,{label:c("Warp Long Line?"),checked:d,onChange:function(){return o({lineWrapping:!d})}}),wp.element.createElement(g,{label:c("Editable on Frontend?"),checked:!p,onChange:function(){return o({readOnly:!p})}}),p&&wp.element.createElement(g,{label:c("Disable Copy on Frontend?"),checked:f,onChange:function(){return o({disableCopy:!f})}}))),wp.element.createElement("div",{className:"codeMirror-editor"},wp.element.createElement(j,null)))}}]),t}(p);x("codemirror-blocks/code-block",{title:c("Code Block"),description:c("Display formated Program Code."),icon:"media-code",category:"codemirror-blocks",keywords:[c("code block"),c("codemirror CodeMirror"),c("gutenberg code block")],attributes:{content:{type:"array",source:"children",selector:"pre"},alignment:{type:"string"},mode:{type:"string",default:"htmlmixed"},mime:{type:"string",default:"text/html"},lineNumbers:{type:"boolean",default:!1},lineWrapping:{type:"boolean",default:!1},readOnly:{type:"boolean",default:!0},disableCopy:{type:"boolean",default:!1},theme:{type:"string",default:"material"}},edit:j,save:function(e){var t=e.attributes,a=t.content,m=t.mode,i=t.mime,o=t.lineNumbers,l=t.lineWrapping,n=t.readOnly,r=t.disableCopy,s=t.theme,c="CodeMirror cm-s-"+s,x={mode:m,mime:i,theme:s,lineNumbers:o,lineWrapping:l,readOnly:1==n&&(1!=r||"nocursor")};return wp.element.createElement("div",{className:"code-block"},wp.element.createElement(b.Content,{className:c,"data-setting":JSON.stringify(x),tagName:"pre",value:function(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}(a)}))}})},function(e,t,a){"use strict";function m(){return[{label:"Default",value:"default"},{label:"3024-day",value:"3024-day"},{label:"3024-night",value:"3024-night"},{label:"Abcdef",value:"abcdef"},{label:"Ambiance",value:"ambiance"},{label:"Ambiance Moblie",value:"ambiance-mobile"},{label:"Base16-dark",value:"base16-dark"},{label:"Base16-light",value:"base16-light"},{label:"Bespin",value:"bespin"},{label:"Blackboard",value:"blackboard"},{label:"Cobalt",value:"cobalt"},{label:"Colorforth",value:"colorforth"},{label:"Darcula",value:"darcula"},{label:"Dracula",value:"dracula"},{label:"Duotone-dark",value:"duotone-dark"},{label:"Duotone-light",value:"duotone-light"},{label:"Eclipse",value:"eclipse"},{label:"Elegant",value:"elegant"},{label:"Erlang-dark",value:"erlang-dark"},{label:"Gruvbox-dark",value:"gruvbox-dark"},{label:"Hopscotch",value:"hopscotch"},{label:"Icecoder",value:"icecoder"},{label:"Idea",value:"idea"},{label:"Isotope",value:"isotope"},{label:"Lesser-dark",value:"lesser-dark"},{label:"Liquibyte",value:"liquibyte"},{label:"Lucario",value:"lucario"},{label:"Material",value:"material"},{label:"Mbo",value:"mbo"},{label:"Mdn-like",value:"mdn-like"},{label:"Midnight",value:"midnight"},{label:"Monokai",value:"monokai"},{label:"Neat",value:"neat"},{label:"Neo",value:"neo"},{label:"Night",value:"night"},{label:"Oceanic-next",value:"oceanic-next"},{label:"Panda-syntax",value:"panda-syntax"},{label:"Paraiso-dark",value:"paraiso-dark"},{label:"Paraiso-light",value:"paraiso-light"},{label:"Pastel-on-dark",value:"pastel-on-dark"},{label:"Railscasts",value:"railscasts"},{label:"Reactjs.org Doc Theme",value:"react"},{label:"Rubyblue",value:"rubyblue"},{label:"Seti",value:"seti"},{label:"Shadowfox",value:"shadowfox"},{label:"Solarized",value:"solarized"},{label:"The-matrix",value:"the-matrix"},{label:"Tomorrow-night-bright",value:"tomorrow-night-bright"},{label:"Tomorrow-night-eighties",value:"tomorrow-night-eighties"},{label:"Ttcn",value:"ttcn"},{label:"Twilight",value:"twilight"},{label:"Vibrant-ink",value:"vibrant-ink"},{label:"Xq-dark",value:"xq-dark"},{label:"Xq-light",value:"xq-light"},{label:"Yeti",value:"yeti"},{label:"Zenburn",value:"zenburn"}]}t.a=m},function(e,t,a){"use strict";function m(){return[{name:"APL",mime:"text/apl",mode:"apl",ext:["dyalog","apl"]},{name:"PGP",mimes:["application/pgp","application/pgp-encrypted","application/pgp-keys","application/pgp-signature"],mode:"asciiarmor",ext:["asc","pgp","sig"]},{name:"ASN.1",mime:"text/x-ttcn-asn",mode:"asn.1",ext:["asn","asn1"]},{name:"Brainfuck",mime:"text/x-brainfuck",mode:"brainfuck",ext:["b","bf"]},{name:"C",mime:"text/x-csrc",mode:"clike",ext:["c","h","ino"]},{name:"C++",mime:"text/x-c++src",mode:"clike",ext:["cpp","c++","cc","cxx","hpp","h++","hh","hxx"],alias:["cpp"]},{name:"Cobol",mime:"text/x-cobol",mode:"cobol",ext:["cob","cpy"]},{name:"C#",mime:"text/x-csharp",mode:"clike",ext:["cs"],alias:["csharp"]},{name:"Clojure",mime:"text/x-clojure",mode:"clojure",ext:["clj","cljc","cljx"]},{name:"ClojureScript",mime:"text/x-clojurescript",mode:"clojure",ext:["cljs"]},{name:"Closure Stylesheets (GSS)",mime:"text/x-gss",mode:"css",ext:["gss"]},{name:"CMake",mime:"text/x-cmake",mode:"cmake",ext:["cmake","cmake.in"],file:/^CMakeLists.txt$/},{name:"CoffeeScript",mimes:["application/vnd.coffeescript","text/coffeescript","text/x-coffeescript"],mode:"coffeescript",ext:["coffee"],alias:["coffee","coffee-script"]},{name:"Common Lisp",mime:"text/x-common-lisp",mode:"commonlisp",ext:["cl","lisp","el"],alias:["lisp"]},{name:"CSS",mime:"text/css",mode:"css",ext:["css"]},{name:"CQL",mime:"text/x-cassandra",mode:"sql",ext:["cql"]},{name:"D",mime:"text/x-d",mode:"d",ext:["d"]},{name:"Dart",mimes:["application/dart","text/x-dart"],mode:"dart",ext:["dart"]},{name:"diff",mime:"text/x-diff",mode:"diff",ext:["diff","patch"]},{name:"Django",mime:"text/x-django",mode:"django"},{name:"Dockerfile",mime:"text/x-dockerfile",mode:"dockerfile",file:/^Dockerfile$/},{name:"DTD",mime:"application/xml-dtd",mode:"dtd",ext:["dtd"]},{name:"Dylan",mime:"text/x-dylan",mode:"dylan",ext:["dylan","dyl","intr"]},{name:"EBNF",mime:"text/x-ebnf",mode:"ebnf"},{name:"ECL",mime:"text/x-ecl",mode:"ecl",ext:["ecl"]},{name:"edn",mime:"application/edn",mode:"clojure",ext:["edn"]},{name:"Eiffel",mime:"text/x-eiffel",mode:"eiffel",ext:["e"]},{name:"Elm",mime:"text/x-elm",mode:"elm",ext:["elm"]},{name:"Embedded Javascript",mime:"application/x-ejs",mode:"htmlembedded",ext:["ejs"]},{name:"Embedded Ruby",mime:"application/x-erb",mode:"htmlembedded",ext:["erb"]},{name:"Erlang",mime:"text/x-erlang",mode:"erlang",ext:["erl"]},{name:"Esper",mime:"text/x-esper",mode:"sql"},{name:"Factor",mime:"text/x-factor",mode:"factor",ext:["factor"]},{name:"FCL",mime:"text/x-fcl",mode:"fcl"},{name:"Fortran",mime:"text/x-fortran",mode:"fortran",ext:["f","for","f77","f90"]},{name:"F#",mime:"text/x-fsharp",mode:"mllike",ext:["fs"],alias:["fsharp"]},{name:"Gas",mime:"text/x-gas",mode:"gas",ext:["s"]},{name:"Gherkin",mime:"text/x-feature",mode:"gherkin",ext:["feature"]},{name:"GitHub Flavored Markdown",mime:"text/x-gfm",mode:"gfm",file:/^(readme|contributing|history).md$/i},{name:"Go",mime:"text/x-go",mode:"go",ext:["go"]},{name:"Groovy",mime:"text/x-groovy",mode:"groovy",ext:["groovy","gradle"],file:/^Jenkinsfile$/},{name:"HAML",mime:"text/x-haml",mode:"haml",ext:["haml"]},{name:"Haskell",mime:"text/x-haskell",mode:"haskell",ext:["hs"]},{name:"ASP.NET",mime:"application/x-aspx",mode:"htmlembedded",ext:["aspx"],alias:["asp","aspx"]},{name:"HTML",mime:"text/html",mode:"htmlmixed",ext:["html","htm","handlebars","hbs"],alias:["xhtml"]},{name:"HTTP",mime:"message/http",mode:"http"},{name:"IDL",mime:"text/x-idl",mode:"idl",ext:["pro"]},{name:"Pug",mime:"text/x-pug",mode:"pug",ext:["jade","pug"],alias:["jade"]},{name:"Java",mime:"text/x-java",mode:"clike",ext:["java"]},{name:"Java Server Pages",mime:"application/x-jsp",mode:"htmlembedded",ext:["jsp"],alias:["jsp"]},{name:"JavaScript",mimes:["text/javascript","text/ecmascript","application/javascript","application/x-javascript","application/ecmascript"],mode:"javascript",ext:["js"],alias:["ecmascript","js","node"]},{name:"JSON",mimes:["application/json","application/x-json"],mode:"javascript",ext:["json","map"],alias:["json5"]},{name:"JSON-LD",mime:"application/ld+json",mode:"javascript",ext:["jsonld"],alias:["jsonld"]},{name:"JSX",mime:"text/jsx",mode:"jsx",ext:["jsx"],dependency:["xml","javascript"]},{name:"Kotlin",mime:"text/x-kotlin",mode:"clike",ext:["kt"]},{name:"LESS",mime:"text/x-less",mode:"css",ext:["less"]},{name:"LiveScript",mime:"text/x-livescript",mode:"livescript",ext:["ls"],alias:["ls"]},{name:"Lua",mime:"text/x-lua",mode:"lua",ext:["lua"]},{name:"Markdown",mime:"text/x-markdown",mode:"markdown",ext:["markdown","md","mkd"]},{name:"MariaDB SQL",mime:"text/x-mariadb",mode:"sql"},{name:"Modelica",mime:"text/x-modelica",mode:"modelica",ext:["mo"]},{name:"MUMPS",mime:"text/x-mumps",mode:"mumps",ext:["mps"]},{name:"MS SQL",mime:"text/x-mssql",mode:"sql"},{name:"MySQL",mime:"text/x-mysql",mode:"sql"},{name:"Nginx",mime:"text/x-nginx-conf",mode:"nginx",file:/nginx.*\.conf$/i},{name:"Objective-C",mime:"text/x-objectivec",mode:"clike",ext:["m","mm"],alias:["objective-c","objc"]},{name:"Octave",mime:"text/x-octave",mode:"octave",ext:["m"]},{name:"Oz",mime:"text/x-oz",mode:"oz",ext:["oz"]},{name:"Pascal",mime:"text/x-pascal",mode:"pascal",ext:["p","pas"]},{name:"Perl",mime:"text/x-perl",mode:"perl",ext:["pl","pm"]},{name:"PHP",mimes:["text/x-php","application/x-httpd-php","application/x-httpd-php-open"],mode:"php",ext:["php","php3","php4","php5","php7","phtml"]},{name:"Pig",mime:"text/x-pig",mode:"pig",ext:["pig"]},{name:"Plain Text",mime:"text/plain",mode:"null",ext:["txt","text","conf","def","list","log"]},{name:"PLSQL",mime:"text/x-plsql",mode:"sql",ext:["pls"]},{name:"PowerShell",mime:"application/x-powershell",mode:"powershell",ext:["ps1","psd1","psm1"]},{name:"Properties files",mime:"text/x-properties",mode:"properties",ext:["properties","ini","in"],alias:["ini","properties"]},{name:"ProtoBuf",mime:"text/x-protobuf",mode:"protobuf",ext:["proto"]},{name:"Python",mime:"text/x-python",mode:"python",ext:["BUILD","bzl","py","pyw"],file:/^(BUCK|BUILD)$/},{name:"Puppet",mime:"text/x-puppet",mode:"puppet",ext:["pp"]},{name:"Q",mime:"text/x-q",mode:"q",ext:["q"]},{name:"R",mime:"text/x-rsrc",mode:"r",ext:["r","R"],alias:["rscript"]},{name:"Ruby",mime:"text/x-ruby",mode:"ruby",ext:["rb"],alias:["jruby","macruby","rake","rb","rbx"]},{name:"Rust",mime:"text/x-rustsrc",mode:"rust",ext:["rs"]},{name:"SAS",mime:"text/x-sas",mode:"sas",ext:["sas"]},{name:"Scala",mime:"text/x-scala",mode:"clike",ext:["scala"]},{name:"Scheme",mime:"text/x-scheme",mode:"scheme",ext:["scm","ss"]},{name:"SCSS",mime:"text/x-scss",mode:"css",ext:["scss"]},{name:"Shell",mimes:["text/x-sh","application/x-sh"],mode:"shell",ext:["sh","ksh","bash"],alias:["bash","sh","zsh"],file:/^PKGBUILD$/},{name:"Slim",mimes:["text/x-slim","application/x-slim"],mode:"slim",ext:["slim"]},{name:"Smalltalk",mime:"text/x-stsrc",mode:"smalltalk",ext:["st"]},{name:"Smarty",mime:"text/x-smarty",mode:"smarty",ext:["tpl"]},{name:"Solr",mime:"text/x-solr",mode:"solr"},{name:"SML",mime:"text/x-sml",mode:"mllike",ext:["sml","sig","fun","smackspec"]},{name:"Soy",mime:"text/x-soy",mode:"soy",ext:["soy"],alias:["closure template"]},{name:"SPARQL",mime:"application/sparql-query",mode:"sparql",ext:["rq","sparql"],alias:["sparul"]},{name:"Spreadsheet",mime:"text/x-spreadsheet",mode:"spreadsheet",alias:["excel","formula"]},{name:"SQL",mime:"text/x-sql",mode:"sql",ext:["sql"]},{name:"SQLite",mime:"text/x-sqlite",mode:"sql"},{name:"Squirrel",mime:"text/x-squirrel",mode:"clike",ext:["nut"]},{name:"Stylus",mime:"text/x-styl",mode:"stylus",ext:["styl"]},{name:"Swift",mime:"text/x-swift",mode:"swift",ext:["swift"]},{name:"sTeX",mime:"text/x-stex",mode:"stex"},{name:"LaTeX",mime:"text/x-latex",mode:"stex",ext:["text","ltx","tex"],alias:["tex"]},{name:"SystemVerilog",mime:"text/x-systemverilog",mode:"verilog",ext:["v","sv","svh"]},{name:"Tcl",mime:"text/x-tcl",mode:"tcl",ext:["tcl"]},{name:"Textile",mime:"text/x-textile",mode:"textile",ext:["textile"]},{name:"TiddlyWiki ",mime:"text/x-tiddlywiki",mode:"tiddlywiki"},{name:"Tiki wiki",mime:"text/tiki",mode:"tiki"},{name:"TOML",mime:"text/x-toml",mode:"toml",ext:["toml"]},{name:"Tornado",mime:"text/x-tornado",mode:"tornado"},{name:"troff",mime:"text/troff",mode:"troff",ext:["1","2","3","4","5","6","7","8","9"]},{name:"TTCN",mime:"text/x-ttcn",mode:"ttcn",ext:["ttcn","ttcn3","ttcnpp"]},{name:"TTCN_CFG",mime:"text/x-ttcn-cfg",mode:"ttcn-cfg",ext:["cfg"]},{name:"Turtle",mime:"text/turtle",mode:"turtle",ext:["ttl"]},{name:"TypeScript",mime:"application/typescript",mode:"javascript",ext:["ts"],alias:["ts"]},{name:"TypeScript-JSX",mime:"text/typescript-jsx",mode:"jsx",ext:["tsx"],alias:["tsx"]},{name:"Twig",mime:"text/x-twig",mode:"twig"},{name:"Web IDL",mime:"text/x-webidl",mode:"webidl",ext:["webidl"]},{name:"VB.NET",mime:"text/x-vb",mode:"vb",ext:["vb"]},{name:"VBScript",mime:"text/vbscript",mode:"vbscript",ext:["vbs"]},{name:"Velocity",mime:"text/velocity",mode:"velocity",ext:["vtl"]},{name:"Verilog",mime:"text/x-verilog",mode:"verilog",ext:["v"]},{name:"VHDL",mime:"text/x-vhdl",mode:"vhdl",ext:["vhd","vhdl"]},{name:"Vue.js Component",mimes:["script/x-vue","text/x-vue"],mode:"vue",ext:["vue"]},{name:"XML",mimes:["application/xml","text/xml"],mode:"xml",ext:["xml","xsl","xsd","svg"],alias:["rss","wsdl","xsd"]},{name:"XQuery",mime:"application/xquery",mode:"xquery",ext:["xy","xquery"]},{name:"Yacas",mime:"text/x-yacas",mode:"yacas",ext:["ys"]},{name:"YAML",mimes:["text/x-yaml","text/yaml"],mode:"yaml",ext:["yaml","yml"],alias:["yml"]},{name:"Z80",mime:"text/x-z80",mode:"z80",ext:["z80"]},{name:"mscgen",mime:"text/x-mscgen",mode:"mscgen",ext:["mscgen","mscin","msc"]},{name:"xu",mime:"text/x-xu",mode:"mscgen",ext:["xu"]},{name:"msgenny",mime:"text/x-msgenny",mode:"mscgen",ext:["msgenny"]}]}t.a=m},function(e,t,a){"use strict";function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var m=t[a];m.enumerable=m.enumerable||!1,m.configurable=!0,"value"in m&&(m.writable=!0),Object.defineProperty(e,m.key,m)}}return function(t,a,m){return a&&e(t.prototype,a),m&&e(t,m),t}}(),n=wp.element.Component,r=wp.keycodes,s=r.UP,c=r.DOWN,x=function(e){function t(){m(this,t);var e=i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.onFocus=e.onFocus.bind(e),e.onBlur=e.onBlur.bind(e),e.onCursorActivity=e.onCursorActivity.bind(e),e.onKeyHandled=e.onKeyHandled.bind(e),e}return o(t,e),l(t,[{key:"componentDidMount",value:function(){var e=this.props.settings,t=wpcm.codeEditor.initialize(this.textarea,e);this.editor=t.codemirror,this.editor.on("focus",this.onFocus),this.editor.on("blur",this.onBlur),this.editor.on("cursorActivity",this.onCursorActivity),this.editor.on("keyHandled",this.onKeyHandled),this.props.editorRef&&this.props.editorRef(this.editor),this.updateFocus()}},{key:"componentDidUpdate",value:function(e){this.props.value!==e.value&&this.editor.getValue()!==this.props.value&&this.editor.setValue(this.props.value),this.props.focus!==e.focus&&this.updateFocus()}},{key:"componentWillUnmount",value:function(){this.editor.on("focus",this.onFocus),this.editor.off("blur",this.onBlur),this.editor.off("cursorActivity",this.onCursorActivity),this.editor.off("keyHandled",this.onKeyHandled),this.editor.toTextArea(),this.editor=null}},{key:"onFocus",value:function(){this.props.onFocus&&this.props.onFocus()}},{key:"onBlur",value:function(e){this.props.onChange&&this.props.onChange(e.getValue())}},{key:"onCursorActivity",value:function(e){this.lastCursor=e.getCursor()}},{key:"onKeyHandled",value:function(e,t,a){if(a.keyCode===s||a.keyCode===c){this.lastCursor&&!function(e,t){return e.line===t.line&&e.ch===t.ch}(e.getCursor(),this.lastCursor)&&a.stopImmediatePropagation()}}},{key:"updateFocus",value:function(){var e=this;this.props.focus&&!this.editor.hasFocus()&&window.requestAnimationFrame(function(){e.editor.focus()}),!this.props.focus&&this.editor.hasFocus()&&document.activeElement.blur()}},{key:"render",value:function(){var e=this;return wp.element.createElement("textarea",{ref:function(t){return e.textarea=t},defaultValue:this.props.value})}}]),t}(n);t.a=x}]);