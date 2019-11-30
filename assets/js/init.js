if ('undefined' === typeof window.wpcm.editors) {
  window.wpcm.editors = [];
}
(function ($, wpcm, CodeMirror) {
  'use strict';

  // var wpcm_editor_loaded = new Event('wpcm_editor_loaded');
  wpcm.frontEndInitialization = function () {
    var codeBlocks = document.querySelectorAll('.code-block > pre.CodeMirror');

    for (var i = 0; i < codeBlocks.length; i++) {

      var block = codeBlocks[i],
        setting = JSON.parse(block.dataset.setting),

        code = codeBlocks[i].textContent,
        id = 'code-block-' + i;

      block.setAttribute('id', id);

      wpcm.codeMirrorInit(id, code, setting);
    }

    // this event triggers with all editor instance
    $(document.body).trigger('wpcm_editors_loaded');
  };

  wpcm.codeMirrorInit = function (id, code, setting) {
    var el = document.getElementById(id);

    el.style = "display: none";

    var editor = CodeMirror(el.parentNode, {
      // value: code,
      lineNumbers: setting.lineNumbers,
      lineWrapping: setting.lineWrapping,
      readOnly: setting.readOnly,
      scrollbarStyle: "simple"
    });

    CodeMirror.autoLoadAddon(editor, setting);
    CodeMirror.autoLoadTheme(editor, setting.theme);

    editor.setValue(code);
    if (setting.disableCopy) {
      editor.setOption("readOnly", "nocursor");
    }
    // editor.setOption("autoRefresh", 1000);

    editor.setOption("mode", setting.mime);
    editor.setOption("theme", setting.theme);
    if (setting.styleActiveLine) {
      editor.on('blur', (e) => {
        editor.setOption("styleActiveLine", false);
      });
      editor.on('focus', (e) => {
        editor.setOption("styleActiveLine", setting.styleActiveLine);
      });
    }

    // setting.fold = true;
    // console.log(setting.fold);
    // if (setting.fold) {
    // 	// editor.on('focus', (e) => {
    // 		setTimeout(() => {
    // 			editor.setOption("gutters", ["CodeMirror-linenumbers", "CodeMirror-foldgutter"]);
    // 			editor.setOption("foldGutter", true);
    // 			editor.foldCode(CodeMirror.Pos(6, 0));
    // 		}, 1000);
    // 	// })
    // }

    CodeMirror.autoLoadMode(editor, setting.mode);

    if (!setting.readOnly) {
      wpcm.renderTextarea(el, code, editor);

      var render_output_mode = ['htmlembedded', 'htmlmixed', 'css', 'javascript', 'sass', 'xml', 'jsx', 'vue'];

      if (window.wpcm.options.output.button) {
        if (render_output_mode.includes(setting.mode)) {
          wpcm.renderOutputBlock(el);
        }
      }
    }

    wpcm.editors.push(editor);

    $(document.body).trigger('wpcm_editor_loaded', [editor]);
    // Listen for the event.
    // document.addEventListener('wpcm_editor_loaded', function (e) { return editor }, false);
    // Dispatch the event.
    // document.dispatchEvent(wpcm_editor_loaded);
    // var event = new CustomEvent('wpcm_editor_loaded', { detail: editor });
    // document.dispatchEvent(event);

  }

  wpcm.renderTextarea = function (el, code, editor) {
    var textarea = document.createElement('textarea');
    textarea.className = 'editor';
    textarea.style = "display: none";
    textarea.value = code;

    el.parentNode.append(textarea);

    editor.on('blur', (e) => {
      textarea.value = editor.getValue();
    });
  }

  wpcm.executeCode = function (e) {
    var code_block = this.parentElement,
      code_editor = code_block.querySelector('textarea.editor'),
      output_frame = code_block.querySelector('.output-block-frame'),
      iframe = null;

    output_frame.classList.add('show');

    iframe = (output_frame.contentWindow)
      ? output_frame.contentWindow : (
        output_frame.contentDocument.document
          ? output_frame.contentDocument.document : output_frame.contentDocument);

    iframe.document.open();
    iframe.document.write(code_editor.value);
    iframe.document.close();
  };

  wpcm.styleOutputBlock = function (e) {
    var output_frame = e.target,
      iframe = null,
      newHeight = 0;

    iframe = (output_frame.contentWindow)
    ? output_frame.contentWindow : (
      output_frame.contentDocument.document
        ? output_frame.contentDocument.document : output_frame.contentDocument);

    output_frame.setAttribute('style', 'height:200px');
    if (iframe.document.body) {
      // iframe.document.body.style.overflow = 'hidden';
      newHeight = Math.round(iframe.document.body.scrollHeight) + 25;
      if (newHeight > 200) {
        output_frame.setAttribute('style', 'height:' + newHeight + 'px');
      }
    } else {
      output_frame.setAttribute('style', 'height:70vh');
    }
  }

  wpcm.renderOutputBlock = function (el) {
    var button = document.createElement('button'),
      iframe = document.createElement('iframe');

    button.className = 'execute-code';
    button.onclick = wpcm.executeCode;
    button.textContent = window.wpcm.options.output.button_text || 'Run';

    iframe.className = 'output-block-frame';
    iframe.onload = wpcm.styleOutputBlock;
    iframe.style.height = '100px';

    iframe.src = "";

    el.parentNode.append(button);
    el.parentNode.append(iframe);
  }

})(window.jQuery, window.wpcm, window.CodeMirror);

// Front End Initialization
wpcm.frontEndInitialization();

jQuery(document).ready( function () {
  // to refresh the editor on some browser
  setTimeout(() => {
    for (var i = 0; i < wpcm.editors.length; i++) {
      wpcm.editors[i].refresh();
    }
  }, 1000);
});
