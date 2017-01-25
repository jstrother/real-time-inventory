// ./components/item.js
// imported into both ./inStock.js and ./outOfStock.js

import React from 'react';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import Checkbox from 'material-ui/Checkbox';
import io from 'socket.io-client/dist/socket.io';

const socket = io.connect('/');

export default class Item extends React.Component {
	render() {
		return (
			<TableRow 
				hoverable={true}
				selectable={true} >
				<TableRowColumn></TableRowColumn>
				<TableRowColumn
						style={{
							textAlign: 'center'
						}} >
					{this.props.item.itemId}
				</TableRowColumn>
				<TableRowColumn
						style={{
							textAlign: 'center'
						}} >
					{this.props.item.itemName}
				</TableRowColumn>
				<TableRowColumn
						style={{
							textAlign: 'center'
						}} >
					{this.props.item.quantity}
				</TableRowColumn>
				<TableRowColumn
						style={{
							textAlign: 'center'
						}} >
					{this.props.item.location}
				</TableRowColumn>
				<TableRowColumn></TableRowColumn>
			</TableRow>
		);
	}
}