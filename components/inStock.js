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
				<TableHeader
						displaySelectAll={false}
						adjustForCheckbox={false} >
					<TableRow>
						<TableHeaderColumn></TableHeaderColumn>
						<TableHeaderColumn
								style={{
									textAlign: 'center'
								}} >
							Item Name
						</TableHeaderColumn>
						<TableHeaderColumn
								style={{
									textAlign: 'center'
								}} >
							Item Id
						</TableHeaderColumn>
						<TableHeaderColumn
								style={{
									textAlign: 'center'
								}} >
							Quantity
						</TableHeaderColumn>
						<TableHeaderColumn
								style={{
									textAlign: 'center'
								}} >
							Location
						</TableHeaderColumn>
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