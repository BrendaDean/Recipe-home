define([
	'fontoxml-editor/registerEditorSidebarTab',

	'./MyIngredientSidebar.jsx'
], function (
	registerEditorSidebarTab,

	MyIngredientSidebar
) {
	'use strict';

	return function install () {
		registerEditorSidebarTab({
			id: 'ingredient',
			icon: 'leaf',
			label: 'Ingredients',
			size: 'm',
			tooltipContent: 'Shows a list of ingredients in your document',
			Component: MyIngredientSidebar,
			priority: 0
		});
	};
});
