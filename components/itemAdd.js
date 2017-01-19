// ./components/itemAdd.js
// imported into ./app.js

import React from 'react';
import io from 'socket.io-client';

import Popover from 'material-ui/Popover';
import ContentAdd from 'material-ui/svg-icons/content/add';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

const socket = io.connect('/');

export default class ItemAdd extends React.Component {
	constructor(props) {
		super(props);
		this.state = { open: false }
	};

	handlePopoverAction = (event) => {
		this.setState({
			open: true,
			anchor: event.currentTarget
		});
	};

	handlePopoverClose = () => {
		this.setState({
			open: false
		});
	};

	handleNewItemInput = (event) => {
		event.preventDefault();
		let itemId = document.getElementById('newItemId').value,
				itemName = document.getElementById('newItemName').value,
				location = document.getElementById('location').value,
				quantity = document.getElementById('quantity').value,
				item = {
					itemId,
					itemName,
					location,
					quantity,
				};
		console.log(itemId, itemName, location, quantity, item);
		socket.emit('item:client:insert', item);
	};

	render() {
		return (
			<div>
				<Popover 
						open={this.state.open}
						anchorEl={this.state.anchor}
						anchorOrigin={{
							horizontal: 'middle',
							vertical: 'center'
						}}
						targetOrigin={{
							horizontal: 'middle',
							verticl: 'center'
						}}
						style={{
							display: 'flex',
							flexFlow: 'column nowrap'
						}}
						onRequestClose={this.handlePopoverClose} >
						<TextField
								id="newItemName"
								style={{
									margin: 20
								}}
								autoFocus="autofocus"
								hintText="Enter New Item Name"
								errorText={this.state.error} />
						<TextField
								id="newItemId"
								style={{
									margin: 20
								}}
								hintText="Enter New Item ID"
								errorText={this.state.error} />
						<TextField
								id="newItemQuantity"
								style={{
									margin: 20
								}}
								hintText="Enter New Item Quantity"
								errorText={this.state.error} />
						<TextField
								id="newItemLocation"
								style={{
									margin: 20
								}}
								hintText="Enter New Item Location"
								errorText={this.state.error} />
						<FlatButton 
							label="Add New Item"
							secondary={true}
							onClick={this.handleNewItemInput} />
				</Popover>
				<RaisedButton
						label="Add New Item"
						onClick={this.handlePopoverAction}
						secondary={true}
						style={{
							position: 'fixed',
							bottom: 20,
							right: 20
						}} >
					<ContentAdd />
				</RaisedButton>
			</div>
		);
	}
}