// ./components/item.js
// imported into both ./inStock.js and ./outOfStock.js

import React from 'react';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import io from 'socket.io-client/dist/socket.io';

// const socket = io.connect('/');

export default class Item extends React.Component {
	// checking the box will delete the item from the database
	handleCheck(item) {
		socket.emit('item:client:delete', item);
	}

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
				<TableRowColumn>
					{this.props.item.location}
				</TableRowColumn>
				<TableRowColumn></TableRowColumn>
			</TableRow>
		);
	}
}