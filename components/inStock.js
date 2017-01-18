// ./components/inStock.js
// imported into ./app.js

import React from 'react';
import { Table, TableHeader, TableBody, TableRow, TableHeaderColumn } from 'material-ui/Table';
import Item from './item.js';

export default class InStock extends React.Component {
	render() {
		return (
			<Table
				selectable={true}
				multiSelectable={true} >
				<TableHeader displaySelectAll={false}>
					<TableRow>
						<TableHeaderColumn></TableHeaderColumn>
						<TableHeaderColumn>Item Name</TableHeaderColumn>
						<TableHeaderColumn>Item Id</TableHeaderColumn>
						<TableHeaderColumn>Quantity</TableHeaderColumn>
						<TableHeaderColumn>Location</TableHeaderColumn>
						<TableHeaderColumn></TableHeaderColumn>
					</TableRow>
				</TableHeader>
				<TableBody>
					{this.props.items.inventoryReducer.map(item => <Item key={item.itemId} item={item} />)}
				</TableBody>
			</Table>
		);
	}
}