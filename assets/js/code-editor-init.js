if ('undefined' === typeof window.wpcm) {
	// GutenBerg CodeMirror wpcm
	window.wpcm = {};
}
if ('undefined' === typeof window.wpcm.codeEditor) {
	window.wpcm.codeEditor = {};
}
if ('undefined' === typeof window.wpcm.editors) {
	window.wpcm.editors = [];
}

(function ($, wpcm, CodeMirror) {
	'use strict';

	// set mode url path
	CodeMirror.modeURL = CODEMIRROR_BLOCK_URL + "mode/%N/%N.js";
	// set addon url path
	CodeMirror.addonURL = CODEMIRROR_BLOCK_URL + "addon/%D/%F.js";

	/**
	 * Default settings for code editor.
	 *
	 * @type {object}
	 */
	wpcm.codeEditor.defaultSettings = {
		codemirror: {

		},
		// csslint: {},
		// htmlhint: {},
		// jshint: {},
		// onTabNext: function() {},
		// onTabPrevious: function() {},
		// onChangeLintingErrors: function() {},
		// onUpdateErrorNotice: function() {}
	};

	/**
	 * @typedef {object} CodeEditorInstance
	 * @property {object} settings - The code editor settings.
	 * @property {CodeMirror} codemirror - The CodeMirror instance.
	 */

	/**
	 * Initialize Code Editor (CodeMirror) for an existing textarea.
	 *
	 * @since 4.9.0
	 *
	 * @param {string|jQuery|Element} textarea - The HTML id, jQuery object, or DOM Element for the textarea that is used for the editor.
	 * @param {object}                [settings] - Settings to override defaults.
	 * @param {Function}              [settings.onChangeLintingErrors] - Callback for when the linting errors have changed.
	 * @param {Function}              [settings.onUpdateErrorNotice] - Callback for when error notice should be displayed.
	 * @param {Function}              [settings.onTabPrevious] - Callback to handle tabbing to the previous tabbable element.
	 * @param {Function}              [settings.onTabNext] - Callback to handle tabbing to the next tabbable element.
	 * @param {object}                [settings.codemirror] - Options for CodeMirror.
	 * @param {object}                [settings.csslint] - Rules for CSSLint.
	 * @param {object}                [settings.htmlhint] - Rules for HTMLHint.
	 * @param {object}                [settings.jshint] - Rules for JSHint.
	 * @returns {CodeEditorInstance} Instance.
	 */
	wpcm.codeEditor.initialize = function initialize(textarea, settings) {
		var $textarea, codemirror, instanceSettings, instance;
		if ('string' === typeof textarea) {
			$textarea = $('#' + textarea);
		} else {
			$textarea = $(textarea);
		}

		instanceSettings = $.extend({}, wpcm.codeEditor.defaultSettings, settings);
		instanceSettings.codemirror = $.extend({}, instanceSettings.codemirror);

		codemirror = CodeMirror.fromTextArea($textarea[0], instanceSettings.codemirror);

		instance = {
			settings: instanceSettings,
			codemirror: codemirror
		};

		// console.log(codemirror);
		codemirror.setOption("mode", instance.settings.codemirror.mime);

		wpcm.autoLoadAddon(instance.codemirror, instance.settings.codemirror.mode);

		wpcm.autoLoadTheme(instance.codemirror, instance.settings.codemirror.theme);

		CodeMirror.autoLoadMode(codemirror, instance.settings.codemirror.mode);

		return instance;
	};

	wpcm.autoLoadAddon = function (instance, mode) {
		// console.log(mode);
		var addon = [];

		if (mode.search('embed') >= 0) {
			addon.push({
				dirName: 'mode',
				fileName: 'multiplex'
			});
		}
		if (mode == 'rust' || mode == 'dockerfile' || mode == 'factor') {
			addon.push({
				dirName: 'mode',
				fileName: 'simple'
			});
		}
		if (mode == 'django' || mode == 'gfm') {
			addon.push({
				dirName: 'mode',
				fileName: 'overlay'
			});

			CodeMirror.requireMode('htmlmixed', function () {
				instance.setOption("mode", instance.getOption("mode"));
				// return;
			});
		}
		if (addon) {
			for (var i = 0; i < addon.length; i++) {
				var id = 'wpcm-' + addon[i].dirName + '-' + addon[i].fileName;
				// console.log(id, addon.length);

				if (document.getElementById(id) != undefined) {
					continue;
				}
				var file = CodeMirror.addonURL.replace(/%D/g, addon[i].dirName).replace(/%F/g, addon[i].fileName);
				var script = document.createElement("script");
				script.src = file;
				script.id = id;
				var others = document.getElementsByTagName("script")[0];
				others.parentNode.insertBefore(script, others);
			}
		}
	}

	wpcm.autoLoadTheme = function (instance, theme) {
		if (theme == 'default') {
			return;
		};
		var theme_id = 'wmcm-theme-' + theme + '-css',
			theme_href = CODEMIRROR_BLOCK_URL + 'theme/' + theme + '.css',
			loaded_theme = document.getElementById(theme_id),
			svgLoader = null;
		// console.log(instance);

		if (loaded_theme == undefined) {
			var head = document.getElementsByTagName('head')[0];
			var link = document.createElement('link');
			link.rel = 'stylesheet';
			link.id = theme_id;
			link.href = theme_href;
			head.appendChild(link);

			wpcm.loaderSVG(instance.display.wrapper, link);

		}
	}

	wpcm.loaderSVG = function (element, link) {
		// console.info('link requested.');
		var svgns = "http://www.w3.org/2000/svg",
			xlinkns = "http://www.w3.org/1999/xlink",
			svg = document.createElementNS(svgns, "svg"),
			path = document.createElementNS(svgns, "path"),
			use = document.createElementNS(svgns, "use");

		svg.setAttribute('class', 'loader');
		svg.setAttribute("viewBox", '-2000 -1000 4000 2000');
		path.setAttribute('id', 'inf');
		path.setAttribute('d', "M354-354A500 500 0 1 1 354 354L-354-354A500 500 0 1 0-354 354z");
		use.setAttributeNS(xlinkns, 'xlink:href', '#inf');
		use.setAttribute('stroke-dasharray', '1570 5143');
		use.setAttribute('stroke-dashoffset', '6713px');
		svg.appendChild(path);
		svg.appendChild(use);

		element.appendChild(svg);
		// element.classList.add('loading');

		CodeMirror.on(link, "load", function () {
			// element.classList.remove('loading');
			element.querySelector('svg').remove();
		});
	}

	wpcm.frontEndInitialization = function () {
		var codeBlocks = document.querySelectorAll('.code-block .CodeMirror');
		// console.log(codeBlocks);

		for (var i = 0; i < codeBlocks.length; i++) {
			// console.log(codeBlocks[i].textContent);

			var block = codeBlocks[i],
				dataset = block.dataset,
				setting = JSON.parse(dataset.setting),

				code = codeBlocks[i].textContent,
				id = 'code-block-' + i;

			block.setAttribute('id', id);

			if (setting.mode !== undefined) {
				CodeMirror.modeURL = CODEMIRROR_BLOCK_URL + "mode/%N/%N.js";


				wpcm.codemirrorInit(id, code, setting);
				// wpcm.codemirror_from_textarea(block, id, code, setting);
				// wpcm.runmode(id, code, setting);
			}
		}
		// this event triggers with all editor instance
		$(document.body).trigger('wpcm_editors_loaded');
	};

	wpcm.codemirrorInit = function (id, code, setting) {
		var el = document.getElementById(id);
		el.style = "display: none";
		el.innerHTML = '';
		var editor = CodeMirror(el.parentNode, {
			value: code,
			lineNumbers: setting.lineNumbers,
			lineWrapping: setting.lineWrapping,
			readOnly: setting.readOnly,
			scrollbarStyle: "simple"
		});
		// console.log(editor);
		wpcm.autoLoadAddon(editor, setting.mode);

		editor.setOption("mode", setting.mime);
		editor.setOption("theme", setting.theme);

		wpcm.autoLoadTheme(editor, setting.theme);

		CodeMirror.autoLoadMode(editor, setting.mode);

		wpcm.editors.push(editor);
		// this event triggers current editor instance
		$(document.body).trigger('wpcm_editor_loaded', [ editor ]);

	}

	wpcm.runmode = function (id, code, setting) {
		CodeMirror.requireMode(setting.mode, function () {
			CodeMirror.runMode(
				code, //Code Content
				setting.mime, // Mode
				document.getElementById(id) // Element Node
			);
		});
	}

	/*
	wpcm.codemirror_from_textarea = function (block, id, code, setting) {
		var el = document.getElementById(id);
		el.style = "display: none";
		el.innerHTML = '';
		// console.log(block);

		// textarea element
		var textarea = document.createElement('textarea');
		id = id+ '-editor';
		textarea.id = id;
		textarea.value = code;
		textarea.dataset = block.dataset;
		// block.replaceWith(textarea);
		block.after(textarea);

		var editor = CodeMirror.fromTextArea(document.getElementById(id), {
			value: code,
			lineNumbers: setting.lineNumbers,
			readOnly: 'nocursor',
		});

		editor.setOption("mode", setting.mime);
		editor.setOption("theme", setting.theme);

		CodeMirror.autoLoadMode(editor, setting.mode);
	}
	*/
})(window.jQuery, window.wpcm, window.CodeMirror);
