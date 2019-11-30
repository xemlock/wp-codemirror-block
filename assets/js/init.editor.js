(function ($, wpcm, CodeMirror) {
	'use strict';

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
	 * @since 1.0.0
	 *
	 * @param {string|jQuery|Element} textarea - The HTML id, jQuery object, or DOM Element for the textarea that is used for the editor.
	 * @param {object}                [settings] - Settings to override defaults.
	 * @returns {CodeEditorInstance} Instance.
	 */
	wpcm.codeEditor.initialize = function initialize(textarea, settings) {
		// console.log(textarea);
		var $textarea, editor, instanceSettings, instance;
		if ('string' === typeof textarea) {
			$textarea = $('#' + textarea);
		} else {
			$textarea = $(textarea);
		}

		instanceSettings = $.extend({}, wpcm.codeEditor.defaultSettings, settings);

		// Extended setting added to codemirror object . Because CodeMirror will get settings from codemirror object.
		instanceSettings.codemirror = $.extend({}, instanceSettings.codemirror);

		editor = CodeMirror.fromTextArea($textarea[0], instanceSettings.codemirror);

		instance = {
			settings: instanceSettings,
			codemirror: editor
		};

		settings = instance.settings.codemirror;

		editor.setOption("mode", settings.mime);

		CodeMirror.autoLoadAddon(editor, settings);

		CodeMirror.autoLoadTheme(editor, settings.theme);

		CodeMirror.autoLoadMode(editor, settings.mode);

		return instance;
	};

})(window.jQuery, window.wpcm, window.CodeMirror);
