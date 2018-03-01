define([
	'fontoxml-modular-ui/uiManager',

	'./MyMasthead.jsx'
], function (
	uiManager,
	MyMasthead
) {
	return function () {
		uiManager.registerReactComponent('Masthead', MyMasthead);
	}
});
