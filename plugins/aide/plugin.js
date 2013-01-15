/**
 * Richard
 */

(function() {
	var o = {
		exec: function(p) {
			showHelpCKEditorOverlay();
		}
	};
	CKEDITOR.plugins.add('aide', {
		icons: 'aide',
		lang: 'de,en,fr',
		init: function(editor) {
			editor.addCommand('aide', o);
			editor.ui.addButton('Aide', {
				label: 'aide',
				command: 'aide'
			});
		}
	});
})();