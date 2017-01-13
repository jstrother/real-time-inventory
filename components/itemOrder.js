// ./components/itemOrder.js
// imported into ./app.js

import React from 'react';
import { Table, TableHeader, TableBody, TableRow, TableHeaderColumn } from 'material-ui/Table';
import Item from './item.js';

// to be placed in to <TableBody> when ready: this.props.items.inventoryReducer.map(item => <Item key={item.id} item={item} />)

export default class ItemOrder extends React.Component {
	render() {
		return(
			<Table>
				<TableHeader>
					<TableRow>
						<TableHeaderColumn></TableHeaderColumn>
						<TableHeaderColumn className="tableTitle">Your Order</TableHeaderColumn>
						<TableHeaderColumn></TableHeaderColumn>
					</TableRow>
					<TableRow>
						<TableHeaderColumn>Item Name</TableHeaderColumn>
						<TableHeaderColumn>Item Id</TableHeaderColumn>
						<TableHeaderColumn>Quantity</TableHeaderColumn>
					</TableRow>
				</TableHeader>
				<TableBody>
					{}
				</TableBody>
			</Table>
		);
	}
}
