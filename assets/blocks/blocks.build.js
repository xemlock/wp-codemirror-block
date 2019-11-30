/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blocks_code_index_js__ = __webpack_require__(1);
/**
 * Import the blocks
 */



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CodeBlock_js__ = __webpack_require__(2);

// import './CodeBlock.1.2.js';

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modes_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__deprecated_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CodeMirrorEditor_js__ = __webpack_require__(5);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * BLOCK: Codemirror-block
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same HeaderHtml without any interactivity.
 */

var __ = wp.i18n.__; // Import __() from wp.i18n

// import { themes } from './themes.js';




var _wp$blocks = wp.blocks,
    registerBlockType = _wp$blocks.registerBlockType,
    createBlock = _wp$blocks.createBlock; // Import registerBlockType() from wp.blocks



var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    InspectorControls = _wp$blockEditor.InspectorControls;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    ToggleControl = _wp$components.ToggleControl,
    SelectControl = _wp$components.SelectControl,
    Toolbar = _wp$components.Toolbar;
var _window$wpcm = window.wpcm,
    defaults = _window$wpcm.defaults,
    themes = _window$wpcm.themes;
var withState = wp.compose.withState;

var CodeMirror_Block = function (_Component) {
	_inherits(CodeMirror_Block, _Component);

	function CodeMirror_Block() {
		_classCallCheck(this, CodeMirror_Block);

		return _possibleConstructorReturn(this, (CodeMirror_Block.__proto__ || Object.getPrototypeOf(CodeMirror_Block)).apply(this, arguments));
	}

	_createClass(CodeMirror_Block, [{
		key: 'getThemeOptions',
		value: function getThemeOptions() {
			return themes;
		}
	}, {
		key: 'getModeOptions',
		value: function getModeOptions() {
			var modeOptions = [];
			var modeInfo = Object(__WEBPACK_IMPORTED_MODULE_0__modes_js__["a" /* modes */])();
			for (var i = 0; i < modeInfo.length; i++) {
				var info = modeInfo[i];

				if (info.mime !== undefined) {
					modeOptions.push({ label: __(info.name), value: info.mime });
				}
				if (info.mimes !== undefined) {
					for (var j = 0; j < info.mimes.length; j++) {
						modeOptions.push({ label: __(info.name + ' (' + info.mimes[j] + ')'), value: info.mimes[j] });
					}
				}
			}
			return modeOptions;
		}
	}, {
		key: 'getModeByMime',
		value: function getModeByMime(mime) {
			var modeInfo = Object(__WEBPACK_IMPORTED_MODULE_0__modes_js__["a" /* modes */])();
			mime = mime.toLowerCase();
			for (var i = 0; i < modeInfo.length; i++) {
				var info = modeInfo[i];
				if (info.mime == mime) return info;
				if (info.mimes) for (var j = 0; j < info.mimes.length; j++) {
					if (info.mimes[j] == mime) return info;
				}
			}
		}
	}, {
		key: 'onChange',
		value: function onChange(newContent) {
			console.log(newContent);
			// setAttributes( { content: newContent } );
		}
	}, {
		key: 'render',
		value: function render() {
			var getThemeOptions = this.getThemeOptions,
			    getModeOptions = this.getModeOptions,
			    getModeByMime = this.getModeByMime;
			var _props = this.props,
			    attributes = _props.attributes,
			    setAttributes = _props.setAttributes;
			var align = attributes.align,
			    mime = attributes.mime,
			    mode = attributes.mode,
			    theme = attributes.theme,
			    lineNumbers = attributes.lineNumbers,
			    lineWrapping = attributes.lineWrapping,
			    readOnly = attributes.readOnly,
			    styleActiveLine = attributes.styleActiveLine,
			    disableCopy = attributes.disableCopy,
			    content = attributes.content;


			var onChangeCode = function onChangeCode(newContent) {
				setAttributes({ content: newContent });
			};

			var CodeMirrorEditorInstance = withState({
				codeEditorSettings: {
					codemirror: {
						mime: mime,
						mode: mode,
						// lint: false,
						styleActiveLine: styleActiveLine,
						lineNumbers: lineNumbers,
						lineWrapping: lineWrapping,
						theme: theme,
						// hint: null,
						styleSelectedText: true,
						scrollbarStyle: "simple"
						// smartIndent: true,
						// electricChars: true,
						// readOnly: 'nocursor',
					}
				}
			})(function (_ref) {
				var codeEditorSettings = _ref.codeEditorSettings;
				return wp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__CodeMirrorEditor_js__["a" /* default */], {
					key: 'code',
					placeholder: __("/* Write or Paste Your Code Here \n And Select Code Language Mode, by default (javaScript) Mode is selected*/"),
					value: content,
					settings: codeEditorSettings,
					tagName: 'pre',
					onChange: onChangeCode
				});
			});

			var onChangemode = function onChangemode(value) {
				// set mime
				setAttributes({ mime: value });
				var info = getModeByMime(value);
				// set mode
				setAttributes({ mode: info.mode });
			};

			var onChangeAlign = function onChangeAlign(value) {
				// set mime
				setAttributes({ align: 'align' + value });
				console.log(value);
			};

			// const setOption = (name, value) => {
			// 	// set mime
			// 	setAttributes( { mime : value } );
			// 	let info = getModeByMime(value);
			// 	// set mode
			// 	setAttributes( { mode: info.mode } );
			// };

			return wp.element.createElement(
				Fragment,
				null,
				wp.element.createElement(
					InspectorControls,
					null,
					wp.element.createElement(
						PanelBody,
						{ title: __('CodeMirror Settings') },
						wp.element.createElement(SelectControl, {
							label: __("Language / Mode"),
							value: mime,
							options: getModeOptions(),
							onChange: onChangemode
						}),
						wp.element.createElement(SelectControl, {
							label: __("Theme"),
							value: theme,
							options: getThemeOptions(),
							onChange: function onChange(theme) {
								return setAttributes({ theme: theme });
							}
						}),
						wp.element.createElement(ToggleControl, {
							label: __("Show Line Numbers?"),
							checked: lineNumbers,
							onChange: function onChange() {
								return setAttributes({ lineNumbers: !lineNumbers });
							}
						}),
						wp.element.createElement(ToggleControl, {
							label: __("Highlight Active Line?"),
							checked: styleActiveLine,
							onChange: function onChange() {
								return setAttributes({ styleActiveLine: !styleActiveLine });
							}
						}),
						wp.element.createElement(ToggleControl, {
							label: __("Warp Long Line?"),
							checked: lineWrapping,
							onChange: function onChange() {
								return setAttributes({ lineWrapping: !lineWrapping });
							}
						}),
						wp.element.createElement(ToggleControl, {
							label: __("Editable on Frontend?"),
							checked: !readOnly,
							onChange: function onChange() {
								return setAttributes({ readOnly: !readOnly });
							}
						}),
						readOnly && wp.element.createElement(ToggleControl, {
							label: __("Disable Copy on Frontend?"),
							checked: disableCopy,
							onChange: function onChange() {
								return setAttributes({ disableCopy: !disableCopy });
							}
						})
					)
				),
				wp.element.createElement(
					'div',
					{ className: 'codeMirror-editor' },
					wp.element.createElement(CodeMirrorEditorInstance, null)
				)
			);
		}
	}]);

	return CodeMirror_Block;
}(Component);

/**
 * Register: CodeMirror Block 1.1.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */

registerBlockType('codemirror-blocks/code-block', {

	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __('CodeMrror Block 1.1'), // Block title.
	description: __('CodeMrror Block, It gives you more flexibility to Display formated Program Code.'),
	icon: 'media-code', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'codemirror-blocks', //'codemirror-blocks', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [__('code'), __('codemirror CodeMirror'), __('gutenberg code block')],
	attributes: {
		content: {
			type: 'array',
			source: 'children',
			selector: 'pre'
			// default: ''
		},
		align: {
			type: 'string',
			default: ''
		},
		mode: {
			type: 'string',
			default: defaults.mode || 'htmlmixed'
		},
		mime: {
			type: 'string',
			default: defaults.mime || 'text/html'
		},
		lineNumbers: {
			type: 'boolean',
			default: defaults.lineNumbers || false
		},
		lineWrapping: {
			type: 'boolean',
			default: defaults.lineWrapping || false
		},
		readOnly: {
			type: 'boolean',
			default: defaults.readOnly || false
		},
		styleActiveLine: {
			type: 'boolean',
			default: defaults.styleActiveLine || false
		},
		disableCopy: {
			type: 'boolean',
			default: false
		},
		theme: {
			type: 'string',
			default: defaults.theme || 'material' //'default'
		}
	},
	supports: {
		align: ['wide', 'full']
	},
	// Register block styles.
	// styles: [
	// 	// Mark style as default.
	// 	{
	// 		name: 'default',
	// 		label: __('Rounded'),
	// 		isDefault: true
	// 	},
	// 	{
	// 		name: 'outline',
	// 		label: __('Outline')
	// 	},
	// 	{
	// 		name: 'squared',
	// 		label: __('Squared')
	// 	},
	// ],
	// Don't allow the block to be converted into a reusable block.
	// reusable: false,
	// Remove the support for the generated className.
	// className: false,
	// Remove the support for the custom className.
	// customClassName: false,
	transforms: {
		from: [{
			type: 'raw',
			priority: 4,
			isMatch: function isMatch(element) {
				return "PRE" === element.nodeName && 1 === element.children.length && "CODE" === element.firstChild.nodeName;
			},
			transform: function transform(element) {
				return createBlock('codemirror-blocks/code-block', {
					content: element.textContent
				});
			}
		}, {
			type: 'block',
			blocks: ["core/code", "core/preformatted", "core/paragraph"],
			transform: function transform(_ref2) {
				var content = _ref2.content;

				return createBlock('codemirror-blocks/code-block', {
					content: content
				});
			}
		}],
		to: [{
			type: "block",
			blocks: ["core/code"],
			transform: function transform(_ref3) {
				var content = _ref3.content;

				return createBlock("core/code", {
					content: content
				});
			}
		}, {
			type: "block",
			blocks: ["core/preformatted"],
			transform: function transform(_ref4) {
				var content = _ref4.content;

				return createBlock("core/preformatted", {
					content: content
				});
			}
		}]
	},

	edit: CodeMirror_Block,

	save: function save(props) {
		var content = props.attributes.content;


		var htmlEntities = function htmlEntities(str) {
			return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
		};

		return wp.element.createElement(
			'div',
			{ className: 'code-block' },
			wp.element.createElement(RichText.Content, {
				tagName: 'pre',
				value: htmlEntities(content)
			})
		);
	},
	deprecated: __WEBPACK_IMPORTED_MODULE_1__deprecated_js__["a" /* default */]
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = modes;
// modes.js
function modes() {
    return [{ name: "APL", mime: "text/apl", mode: "apl", ext: ["dyalog", "apl"] }, { name: "PGP", mimes: ["application/pgp", "application/pgp-encrypted", "application/pgp-keys", "application/pgp-signature"], mode: "asciiarmor", ext: ["asc", "pgp", "sig"] }, { name: "ASN.1", mime: "text/x-ttcn-asn", mode: "asn.1", ext: ["asn", "asn1"] },
    // {name: "Asterisk", mime: "text/x-asterisk", mode: "asterisk", file: /^extensions\.conf$/i},
    { name: "Brainfuck", mime: "text/x-brainfuck", mode: "brainfuck", ext: ["b", "bf"] }, { name: "C", mime: "text/x-csrc", mode: "clike", ext: ["c", "h", "ino"] }, { name: "C++", mime: "text/x-c++src", mode: "clike", ext: ["cpp", "c++", "cc", "cxx", "hpp", "h++", "hh", "hxx"], alias: ["cpp"] }, { name: "Cobol", mime: "text/x-cobol", mode: "cobol", ext: ["cob", "cpy"] }, { name: "C#", mime: "text/x-csharp", mode: "clike", ext: ["cs"], alias: ["csharp"] }, { name: "Clojure", mime: "text/x-clojure", mode: "clojure", ext: ["clj", "cljc", "cljx"] }, { name: "ClojureScript", mime: "text/x-clojurescript", mode: "clojure", ext: ["cljs"] }, { name: "Closure Stylesheets (GSS)", mime: "text/x-gss", mode: "css", ext: ["gss"] }, { name: "CMake", mime: "text/x-cmake", mode: "cmake", ext: ["cmake", "cmake.in"], file: /^CMakeLists.txt$/ }, { name: "CoffeeScript", mimes: ["application/vnd.coffeescript", "text/coffeescript", "text/x-coffeescript"], mode: "coffeescript", ext: ["coffee"], alias: ["coffee", "coffee-script"] }, { name: "Common Lisp", mime: "text/x-common-lisp", mode: "commonlisp", ext: ["cl", "lisp", "el"], alias: ["lisp"] },
    // {name: "Cypher", mime: "application/x-cypher-query", mode: "cypher", ext: ["cyp", "cypher"]},
    // {name: "Cython", mime: "text/x-cython", mode: "python", ext: ["pyx", "pxd", "pxi"]},
    // {name: "Crystal", mime: "text/x-crystal", mode: "crystal", ext: ["cr"]},
    { name: "CSS", mime: "text/css", mode: "css", ext: ["css"] }, { name: "CQL", mime: "text/x-cassandra", mode: "sql", ext: ["cql"] }, { name: "D", mime: "text/x-d", mode: "d", ext: ["d"] }, { name: "Dart", mimes: ["application/dart", "text/x-dart"], mode: "dart", ext: ["dart"] }, { name: "diff", mime: "text/x-diff", mode: "diff", ext: ["diff", "patch"] }, { name: "Django", mime: "text/x-django", mode: "django", ext: ["py"] }, { name: "Dockerfile", mime: "text/x-dockerfile", mode: "dockerfile", file: /^Dockerfile$/ }, { name: "DTD", mime: "application/xml-dtd", mode: "dtd", ext: ["dtd"] }, { name: "Dylan", mime: "text/x-dylan", mode: "dylan", ext: ["dylan", "dyl", "intr"] }, { name: "EBNF", mime: "text/x-ebnf", mode: "ebnf" }, { name: "ECL", mime: "text/x-ecl", mode: "ecl", ext: ["ecl"] }, { name: "edn", mime: "application/edn", mode: "clojure", ext: ["edn"] }, { name: "Eiffel", mime: "text/x-eiffel", mode: "eiffel", ext: ["e"] }, { name: "Elm", mime: "text/x-elm", mode: "elm", ext: ["elm"] }, { name: "Embedded Javascript", mime: "application/x-ejs", mode: "htmlembedded", ext: ["ejs"] }, { name: "Embedded Ruby", mime: "application/x-erb", mode: "htmlembedded", ext: ["erb"] }, { name: "Erlang", mime: "text/x-erlang", mode: "erlang", ext: ["erl"] }, { name: "Esper", mime: "text/x-esper", mode: "sql" }, { name: "Factor", mime: "text/x-factor", mode: "factor", ext: ["factor"] }, { name: "FCL", mime: "text/x-fcl", mode: "fcl" },
    // {name: "Forth", mime: "text/x-forth", mode: "forth", ext: ["forth", "fth", "4th"]},
    { name: "Fortran", mime: "text/x-fortran", mode: "fortran", ext: ["f", "for", "f77", "f90"] }, { name: "F#", mime: "text/x-fsharp", mode: "mllike", ext: ["fs"], alias: ["fsharp"] }, { name: "Gas", mime: "text/x-gas", mode: "gas", ext: ["s"] }, { name: "Gherkin", mime: "text/x-feature", mode: "gherkin", ext: ["feature"] }, { name: "GitHub Flavored Markdown", mime: "text/x-gfm", mode: "gfm", file: /^(readme|contributing|history).md$/i }, { name: "Go", mime: "text/x-go", mode: "go", ext: ["go"] }, { name: "Groovy", mime: "text/x-groovy", mode: "groovy", ext: ["groovy", "gradle"], file: /^Jenkinsfile$/ }, { name: "HAML", mime: "text/x-haml", mode: "haml", ext: ["haml"] }, { name: "Haskell", mime: "text/x-haskell", mode: "haskell", ext: ["hs"] },
    // {name: "Haskell (Literate)", mime: "text/x-literate-haskell", mode: "haskell-literate", ext: ["lhs"]},
    // {name: "Haxe", mime: "text/x-haxe", mode: "haxe", ext: ["hx"]},
    // {name: "HXML", mime: "text/x-hxml", mode: "haxe", ext: ["hxml"]},
    { name: "ASP.NET", mime: "application/x-aspx", mode: "htmlembedded", ext: ["aspx"], alias: ["asp", "aspx"] }, { name: "HTML", mime: "text/html", mode: "htmlmixed", ext: ["html", "htm", "handlebars", "hbs"], alias: ["xhtml"] }, { name: "HTTP", mime: "message/http", mode: "http" }, { name: "IDL", mime: "text/x-idl", mode: "idl", ext: ["pro"] }, { name: "Pug", mime: "text/x-pug", mode: "pug", ext: ["jade", "pug"], alias: ["jade"] }, { name: "Java", mime: "text/x-java", mode: "clike", ext: ["java"] }, { name: "Java Server Pages", mime: "application/x-jsp", mode: "htmlembedded", ext: ["jsp"], alias: ["jsp"] }, { name: "JavaScript", mimes: ["text/javascript", "text/ecmascript", "application/javascript", "application/x-javascript", "application/ecmascript"],
        mode: "javascript", ext: ["js"], alias: ["ecmascript", "js", "node"] }, { name: "JSON", mimes: ["application/json", "application/x-json"], mode: "javascript", ext: ["json", "map"], alias: ["json5"] }, { name: "JSON-LD", mime: "application/ld+json", mode: "javascript", ext: ["jsonld"], alias: ["jsonld"] }, { name: "JSX", mime: "text/jsx", mode: "jsx", ext: ["jsx"], dependency: ['xml', 'javascript'] },
    // {name: "Jinja2", mime: "null", mode: "jinja2", ext: ["j2", "jinja", "jinja2"]},
    // {name: "Julia", mime: "text/x-julia", mode: "julia", ext: ["jl"]},
    { name: "Kotlin", mime: "text/x-kotlin", mode: "clike", ext: ["kt"] }, { name: "LESS", mime: "text/x-less", mode: "css", ext: ["less"] }, { name: "LiveScript", mime: "text/x-livescript", mode: "livescript", ext: ["ls"], alias: ["ls"] }, { name: "Lua", mime: "text/x-lua", mode: "lua", ext: ["lua"] }, { name: "Markdown", mime: "text/x-markdown", mode: "markdown", ext: ["markdown", "md", "mkd"] },
    // {name: "mIRC", mime: "text/mirc", mode: "mirc"},
    { name: "MariaDB SQL", mime: "text/x-mariadb", mode: "sql" },
    // {name: "Mathematica", mime: "text/x-mathematica", mode: "mathematica", ext: ["m", "nb"]},
    { name: "Modelica", mime: "text/x-modelica", mode: "modelica", ext: ["mo"] }, { name: "MUMPS", mime: "text/x-mumps", mode: "mumps", ext: ["mps"] }, { name: "MS SQL", mime: "text/x-mssql", mode: "sql" },
    // {name: "mbox", mime: "application/mbox", mode: "mbox", ext: ["mbox"]},
    { name: "MySQL", mime: "text/x-mysql", mode: "sql" }, { name: "Nginx", mime: "text/x-nginx-conf", mode: "nginx", file: /nginx.*\.conf$/i },
    // {name: "NSIS", mime: "text/x-nsis", mode: "nsis", ext: ["nsh", "nsi"]},
    // {name: "NTriples", mimes: ["application/n-triples", "application/n-quads", "text/n-triples"],
    //  mode: "ntriples", ext: ["nt", "nq"]},
    { name: "Objective-C", mime: "text/x-objectivec", mode: "clike", ext: ["m", "mm"], alias: ["objective-c", "objc"] },
    // {name: "OCaml", mime: "text/x-ocaml", mode: "mllike", ext: ["ml", "mli", "mll", "mly"]},
    { name: "Octave", mime: "text/x-octave", mode: "octave", ext: ["m"] }, { name: "Oz", mime: "text/x-oz", mode: "oz", ext: ["oz"] }, { name: "Pascal", mime: "text/x-pascal", mode: "pascal", ext: ["p", "pas"] },
    // {name: "PEG.js", mime: "null", mode: "pegjs", ext: ["jsonld"]},
    { name: "Perl", mime: "text/x-perl", mode: "perl", ext: ["pl", "pm"] }, { name: "PHP", mimes: ["text/x-php", "application/x-httpd-php", "application/x-httpd-php-open"], mode: "php", ext: ["php", "php3", "php4", "php5", "php7", "phtml"] }, { name: "Pig", mime: "text/x-pig", mode: "pig", ext: ["pig"] }, { name: "Plain Text", mime: "text/plain", mode: "null", ext: ["txt", "text", "conf", "def", "list", "log"] }, { name: "PLSQL", mime: "text/x-plsql", mode: "sql", ext: ["pls"] }, { name: "PowerShell", mime: "application/x-powershell", mode: "powershell", ext: ["ps1", "psd1", "psm1"] }, { name: "Properties files", mime: "text/x-properties", mode: "properties", ext: ["properties", "ini", "in"], alias: ["ini", "properties"] }, { name: "ProtoBuf", mime: "text/x-protobuf", mode: "protobuf", ext: ["proto"] }, { name: "Python", mime: "text/x-python", mode: "python", ext: ["BUILD", "bzl", "py", "pyw"], file: /^(BUCK|BUILD)$/ }, { name: "Puppet", mime: "text/x-puppet", mode: "puppet", ext: ["pp"] }, { name: "Q", mime: "text/x-q", mode: "q", ext: ["q"] }, { name: "R", mime: "text/x-rsrc", mode: "r", ext: ["r", "R"], alias: ["rscript"] },
    // {name: "reStructuredText", mime: "text/x-rst", mode: "rst", ext: ["rst"], alias: ["rst"]},
    // {name: "RPM Changes", mime: "text/x-rpm-changes", mode: "rpm"},
    // {name: "RPM Spec", mime: "text/x-rpm-spec", mode: "rpm", ext: ["spec"]},
    { name: "Ruby", mime: "text/x-ruby", mode: "ruby", ext: ["rb"], alias: ["jruby", "macruby", "rake", "rb", "rbx"] }, { name: "Rust", mime: "text/x-rustsrc", mode: "rust", ext: ["rs"] }, { name: "SAS", mime: "text/x-sas", mode: "sas", ext: ["sas"] },
    // {name: "Sass", mime: "text/x-sass", mode: "sass", ext: ["sass"]},
    { name: "Scala", mime: "text/x-scala", mode: "clike", ext: ["scala"] }, { name: "Scheme", mime: "text/x-scheme", mode: "scheme", ext: ["scm", "ss"] }, { name: "SCSS", mime: "text/x-scss", mode: "css", ext: ["scss"] }, { name: "Shell", mimes: ["text/x-sh", "application/x-sh"], mode: "shell", ext: ["sh", "ksh", "bash"], alias: ["bash", "sh", "zsh"], file: /^PKGBUILD$/ },
    // {name: "Sieve", mime: "application/sieve", mode: "sieve", ext: ["siv", "sieve"]},
    { name: "Slim", mimes: ["text/x-slim", "application/x-slim"], mode: "slim", ext: ["slim"] }, { name: "Smalltalk", mime: "text/x-stsrc", mode: "smalltalk", ext: ["st"] }, { name: "Smarty", mime: "text/x-smarty", mode: "smarty", ext: ["tpl"] }, { name: "Solr", mime: "text/x-solr", mode: "solr" }, { name: "SML", mime: "text/x-sml", mode: "mllike", ext: ["sml", "sig", "fun", "smackspec"] }, { name: "Soy", mime: "text/x-soy", mode: "soy", ext: ["soy"], alias: ["closure template"] }, { name: "SPARQL", mime: "application/sparql-query", mode: "sparql", ext: ["rq", "sparql"], alias: ["sparul"] }, { name: "Spreadsheet", mime: "text/x-spreadsheet", mode: "spreadsheet", alias: ["excel", "formula"] }, { name: "SQL", mime: "text/x-sql", mode: "sql", ext: ["sql"] }, { name: "SQLite", mime: "text/x-sqlite", mode: "sql" }, { name: "Squirrel", mime: "text/x-squirrel", mode: "clike", ext: ["nut"] }, { name: "Stylus", mime: "text/x-styl", mode: "stylus", ext: ["styl"] }, { name: "Swift", mime: "text/x-swift", mode: "swift", ext: ["swift"] }, { name: "sTeX", mime: "text/x-stex", mode: "stex" }, { name: "LaTeX", mime: "text/x-latex", mode: "stex", ext: ["text", "ltx", "tex"], alias: ["tex"] }, { name: "SystemVerilog", mime: "text/x-systemverilog", mode: "verilog", ext: ["v", "sv", "svh"] }, { name: "Tcl", mime: "text/x-tcl", mode: "tcl", ext: ["tcl"] }, { name: "Textile", mime: "text/x-textile", mode: "textile", ext: ["textile"] }, { name: "TiddlyWiki ", mime: "text/x-tiddlywiki", mode: "tiddlywiki" }, { name: "Tiki wiki", mime: "text/tiki", mode: "tiki" }, { name: "TOML", mime: "text/x-toml", mode: "toml", ext: ["toml"] }, { name: "Tornado", mime: "text/x-tornado", mode: "tornado" }, { name: "troff", mime: "text/troff", mode: "troff", ext: ["1", "2", "3", "4", "5", "6", "7", "8", "9"] }, { name: "TTCN", mime: "text/x-ttcn", mode: "ttcn", ext: ["ttcn", "ttcn3", "ttcnpp"] }, { name: "TTCN_CFG", mime: "text/x-ttcn-cfg", mode: "ttcn-cfg", ext: ["cfg"] }, { name: "Turtle", mime: "text/turtle", mode: "turtle", ext: ["ttl"] }, { name: "TypeScript", mime: "application/typescript", mode: "javascript", ext: ["ts"], alias: ["ts"] }, { name: "TypeScript-JSX", mime: "text/typescript-jsx", mode: "jsx", ext: ["tsx"], alias: ["tsx"] }, { name: "Twig", mime: "text/x-twig", mode: "twig", ext: ["php"] }, { name: "Web IDL", mime: "text/x-webidl", mode: "webidl", ext: ["webidl"] }, { name: "VB.NET", mime: "text/x-vb", mode: "vb", ext: ["vb"] }, { name: "VBScript", mime: "text/vbscript", mode: "vbscript", ext: ["vbs"] }, { name: "Velocity", mime: "text/velocity", mode: "velocity", ext: ["vtl"] }, { name: "Verilog", mime: "text/x-verilog", mode: "verilog", ext: ["v"] }, { name: "VHDL", mime: "text/x-vhdl", mode: "vhdl", ext: ["vhd", "vhdl"] }, { name: "Vue.js Component", mimes: ["script/x-vue", "text/x-vue"], mode: "vue", ext: ["vue"] }, { name: "XML", mimes: ["application/xml", "text/xml"], mode: "xml", ext: ["xml", "xsl", "xsd", "svg"], alias: ["rss", "wsdl", "xsd"] }, { name: "XQuery", mime: "application/xquery", mode: "xquery", ext: ["xy", "xquery"] }, { name: "Yacas", mime: "text/x-yacas", mode: "yacas", ext: ["ys"] }, { name: "YAML", mimes: ["text/x-yaml", "text/yaml"], mode: "yaml", ext: ["yaml", "yml"], alias: ["yml"] }, { name: "Z80", mime: "text/x-z80", mode: "z80", ext: ["z80"] }, { name: "mscgen", mime: "text/x-mscgen", mode: "mscgen", ext: ["mscgen", "mscin", "msc"] }, { name: "xu", mime: "text/x-xu", mode: "mscgen", ext: ["xu"] }, { name: "msgenny", mime: "text/x-msgenny", mode: "mscgen", ext: ["msgenny"] }];
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var RichText = wp.blockEditor.RichText;


var blockAttributes = {
    content: {
        type: 'array',
        source: 'children',
        selector: 'pre'
    },
    alignment: {
        type: 'string'
    },
    mode: {
        type: 'string',
        default: 'htmlmixed'
    },
    mime: {
        type: 'string',
        default: 'text/html'
    },
    lineNumbers: {
        type: 'boolean',
        default: false
    },
    lineWrapping: {
        type: 'boolean',
        default: false
    },
    readOnly: {
        type: 'boolean',
        default: true
    },
    disableCopy: {
        type: 'boolean',
        default: false
    },
    theme: {
        type: 'string',
        default: 'material' //'default'
    }
};

var deprecated = [{
    attributes: blockAttributes,
    save: function save(_ref) {
        var attributes = _ref.attributes;
        var content = attributes.content,
            mode = attributes.mode,
            mime = attributes.mime,
            lineNumbers = attributes.lineNumbers,
            lineWrapping = attributes.lineWrapping,
            readOnly = attributes.readOnly,
            disableCopy = attributes.disableCopy,
            theme = attributes.theme;

        var preclassname = 'CodeMirror cm-s-' + theme;

        // convert html entity for display symbol.
        var htmlEntities = function htmlEntities(str) {
            return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
        };
        var blockSetting = {
            mode: mode,
            mime: mime,
            theme: theme,
            lineNumbers: lineNumbers,
            lineWrapping: lineWrapping,
            readOnly: readOnly == true ? disableCopy == true ? 'nocursor' : true : false
        };
        return wp.element.createElement(
            'div',
            { className: 'code-block' },
            wp.element.createElement(RichText.Content, {
                className: preclassname,
                'data-setting': JSON.stringify(blockSetting),
                tagName: 'pre',
                value: htmlEntities(content)
            })
        );
    }
}];

/* harmony default export */ __webpack_exports__["a"] = (deprecated);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * WordPress dependencies
 */
// import { Component } from '@wordpress/element';
// import { UP, DOWN } from '@wordpress/keycodes';

// https://github.com/WordPress/gutenberg/blob/3.8/components/code-editor/editor.js

var Component = wp.element.Component;
var _wp$keycodes = wp.keycodes,
    UP = _wp$keycodes.UP,
    DOWN = _wp$keycodes.DOWN;

var CodeMirrorEditor = function (_Component) {
	_inherits(CodeMirrorEditor, _Component);

	function CodeMirrorEditor() {
		_classCallCheck(this, CodeMirrorEditor);

		var _this = _possibleConstructorReturn(this, (CodeMirrorEditor.__proto__ || Object.getPrototypeOf(CodeMirrorEditor)).apply(this, arguments));

		_this.onFocus = _this.onFocus.bind(_this);
		_this.onBlur = _this.onBlur.bind(_this);
		_this.onCursorActivity = _this.onCursorActivity.bind(_this);
		_this.onKeyHandled = _this.onKeyHandled.bind(_this);
		return _this;
	}

	_createClass(CodeMirrorEditor, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var settings = this.props.settings; // || wpcm.codeEditor.defaultSettings;
			var instance = wpcm.codeEditor.initialize(this.textarea, settings);
			this.editor = instance.codemirror;

			this.editor.on('focus', this.onFocus);
			this.editor.on('blur', this.onBlur);
			this.editor.on('cursorActivity', this.onCursorActivity);
			this.editor.on('keyHandled', this.onKeyHandled);

			// Pass a reference to the editor back up.
			if (this.props.editorRef) {
				this.props.editorRef(this.editor);
			}

			this.updateFocus();
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps) {
			if (this.props.value !== prevProps.value && this.editor.getValue() !== this.props.value) {
				this.editor.setValue(this.props.value);
			}

			if (this.props.focus !== prevProps.focus) {
				this.updateFocus();
			}
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.editor.on('focus', this.onFocus);
			this.editor.off('blur', this.onBlur);
			this.editor.off('cursorActivity', this.onCursorActivity);
			this.editor.off('keyHandled', this.onKeyHandled);

			this.editor.toTextArea();
			this.editor = null;
		}
	}, {
		key: 'onFocus',
		value: function onFocus() {
			if (this.props.onFocus) {
				this.props.onFocus();
			}
		}
	}, {
		key: 'onBlur',
		value: function onBlur(editor) {
			if (this.props.onChange) {
				this.props.onChange(editor.getValue());
			}
		}
	}, {
		key: 'onCursorActivity',
		value: function onCursorActivity(editor) {
			this.lastCursor = editor.getCursor();
		}
	}, {
		key: 'onKeyHandled',
		value: function onKeyHandled(editor, name, event) {
			/*
    * Pressing UP/DOWN should only move focus to another block if the cursor is
    * at the start or end of the editor.
    *
    * We do this by stopping UP/DOWN from propagating if:
    *  - We know what the cursor was before this event; AND
    *  - This event caused the cursor to move
    */
			if (event.keyCode === UP || event.keyCode === DOWN) {
				var areCursorsEqual = function areCursorsEqual(a, b) {
					return a.line === b.line && a.ch === b.ch;
				};
				if (this.lastCursor && !areCursorsEqual(editor.getCursor(), this.lastCursor)) {
					event.stopImmediatePropagation();
				}
			}
		}
	}, {
		key: 'updateFocus',
		value: function updateFocus() {
			var _this2 = this;

			if (this.props.focus && !this.editor.hasFocus()) {
				// Need to wait for the next frame to be painted before we can focus the editor
				window.requestAnimationFrame(function () {
					_this2.editor.focus();
				});
			}

			if (!this.props.focus && this.editor.hasFocus()) {
				document.activeElement.blur();
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			return wp.element.createElement('textarea', { ref: function ref(_ref) {
					return _this3.textarea = _ref;
				}, defaultValue: this.props.value });
		}
	}]);

	return CodeMirrorEditor;
}(Component);

/* harmony default export */ __webpack_exports__["a"] = (CodeMirrorEditor);

/***/ })
/******/ ]);