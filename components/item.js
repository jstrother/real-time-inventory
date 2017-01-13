// ./components/item.js
// imported into both ./inStock.js and ./outOfStock.js

import React from 'react';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import io from 'socket.io-client/dist/socket.io';
import injectTapEventPlugin from 'react-tap-event-plugin';

export default class Item extends React.Component {

	render() {
		return (
			<TableRow>
				<TableRowColumn>
					{this.props.item.itemName}
				</TableRowColumn>
				<TableRowColumn>
					{this.props.item.itemId}
				</TableRowColumn>
				<TableRowColumn>
					{this.props.item.quantity}
				</TableRowColumn>
			</TableRow>
		);
	}
}