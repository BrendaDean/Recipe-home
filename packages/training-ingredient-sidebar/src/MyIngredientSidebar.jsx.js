import React, { Component } from 'react';

import { SidebarHeader } from 'fds/components';

import documentsManager from 'fontoxml-documents/documentsManager';

import indexManager from 'fontoxml-indices/indexManager';

import evaluateXPathToString from 'fontoxml-selectors/evaluateXPathToString';
import readOnlyBlueprint from 'fontoxml-blueprints/readOnlyBlueprint';
export default class MyIngredientSidebar extends Component {
	state = {
		ingredients: []
	};

	componentWillMount () {
		console.log('Opening the Ingredient sidebar!');

		const documentIds = documentsManager.getAllDocumentIds();

		const documentDoms = documentIds.map(documentId => documentsManager.getDocumentNode(documentId));

		this.ingredientListeners = documentDoms.map(dom => indexManager.observeQueryResults(
			'//ingredient',
			dom,
			{}));


		this.updateMyComponentWithAllTheIngredients();

		this.ingredientListeners.forEach(listener => {
			listener.resultsChangedNotifier.addCallback(() => {
				console.log('The ingredient index has updated!');
				this.updateMyComponentWithAllTheIngredients();
			});
		});
	}

	updateMyComponentWithAllTheIngredients () {
		const results = this.ingredientListeners.reduce((result, listener) => {
			return result.concat(listener.getResults());
		}, []);

		console.log(results);

		this.setState({
			ingredients: results.map(node => evaluateXPathToString('.', node, readOnlyBlueprint))
		})


		// @TODO: Update the state when one of the listeners fires
	}

	componentWillUnmount () {
		console.log('Closing the ingredient addon');

		this.ingredientListeners.forEach(listener => listener.stopObservingQueryResults());
	}
	render () {
		return <div>
			<SidebarHeader title="Ingredients" subtitle="Delicious!" />

			<ol>
				{ this.state.ingredients.map((ingredient, i) => <li key={ i }>{ ingredient }</li>) }

			</ol>
		</div>
	}
}
