import React, { PureComponent } from 'react';

import { MastheadToolbar, MastheadToolbarButtons } from 'fds/components';

import FxEditorMasthead from 'fontoxml-fx/FxEditorMasthead.jsx';
import FxOperationButton from 'fontoxml-fx/FxOperationButton.jsx';

const tabs = [
	{
		id: 0,
		label: 'Start',
		content: (
			<MastheadToolbar>
				<MastheadToolbarButtons>
					<FxOperationButton operationName="toggle-ingredient"/>
				</MastheadToolbarButtons>
			</MastheadToolbar>
		)
	}
];

class YourAppMasthead extends PureComponent {
	render() {
		return (
			<FxEditorMasthead tabs={tabs} />
		);
	}
}

export default YourAppMasthead;
