/**
 * @license Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.html or http://ckeditor.com/license
 */

CKEDITOR.dialog.add( 'aide', function( editor ) {
	var lang = editor.lang.aide;

	return {
		minWidth: 390,
		minHeight: 230,
		contents: [
			{
			id: 'tab1',
			label: '',
			title: '',
			expand: true,
			padding: 0,
			elements: [
				{
				type: 'html',
				html:
					'<div class="cke_aide_container">' +
					'<div class="cke_aide_logo"></div>' +
						'<p>' +
							'CKEditor ' + CKEDITOR.version +
						'</p>' +
					'</div></div>'
				}
			]
		}
		],
		buttons: [ CKEDITOR.dialog.cancelButton ]
	};
});
