define([
	'fontoxml-families/configureAsBlock',
	'fontoxml-families/configureAsTitleFrame',
	'fontoxml-families/configureAsFrame',
	'fontoxml-families/configureAsInlineFrame',
	'fontoxml-families/configureAsSheetFrame',
	'fontoxml-families/configureAsStructure',
	'fontoxml-list-flow/configureAsListElements'
], function (
	configureAsBlock,
	configureAsTitleFrame,
	configureAsFrame,
	configureAsInlineFrame,
	configureAsSheetFrame,
	configureAsStructure,
	configureAsListElements
) {
	'use strict';

	return function configureSxModule (sxModule) {
		configureAsSheetFrame(sxModule, 'self::recipe', 'recipe');

		configureAsTitleFrame(sxModule, 'self::title', 'title');

		configureAsStructure(sxModule, 'self::description', 'description');

		configureAsFrame(sxModule, 'self::allergy-warning', 'allergy warning', {
			defaultTextContainer: 'p'
		});

		configureAsListElements(sxModule, {
			list: {
				selector: 'self::steps',
				style: configureAsListElements.NUMBERED_LIST_STYLE
			},
			item: {
				nodeName: 'step'
			},
			paragraph: {
				nodeName: 'p'
			}
		});

		configureAsListElements(sxModule, {
			list: {
				selector: 'self::ul',
				style: configureAsListElements.BULLETED_LIST_STYLE
			},
			item: {
				nodeName: 'li'
			},
			paragraph: {
				nodeName: 'p'
			}
		});

		configureAsBlock(sxModule, 'self::p', 'paragraph');

		configureAsInlineFrame(sxModule, 'self::ingredient', 'ingredient');
	};
});
