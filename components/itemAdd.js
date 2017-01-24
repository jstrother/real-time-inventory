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
		this.state = {
			open: false,
			itemNameTextFieldValue: '',
	    itemIdTextFieldValue: '',
	    locationTextFieldValue: '',
      quantityTextFieldValue: ''
    }
	};

  handleItemNameTextFieldChange = (event) => {
      this.setState({
          itemNameTextFieldValue: event.target.value
      });
  };

  handleItemIdTextFieldChange = (event) => {
    this.setState({
        itemIdTextFieldValue: event.target.value
    });
  };

  handleQuantityTextFieldChange = (event) => {
    this.setState({
        quantityTextFieldValue: event.target.value
    });
  };

  handleLocationTextFieldChange = (event) => {
    this.setState({
        locationTextFieldValue: event.target.value
    });
  };

	handlePopoverAction = (event) => {
		this.setState({
			open: true,
			anchor: event.currentTarget
		});
	};

	handlePopoverClose = () => {
		this.setState = {
			open: false,
			itemNameTextFieldValue: '',
	    itemIdTextFieldValue: '',
	    locationTextFieldValue: '',
      quantityTextFieldValue: ''
    }
	};

	handleNewItemInput = (event) => {
		event.preventDefault();
		let item = {
					itemId: this.state.itemNameTextFieldValue,
					itemName: this.state.itemIdTextFieldValue,
					location: this.state.locationTextFieldValue,
					quantity: this.state.quantityTextFieldValue,
				};
		console.log(item);
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
							flexFlow: 'row wrap'
						}}
						onRequestClose={this.handlePopoverClose} >
						<div
								style={{
									display: 'flex',
									flexFlow: 'column nowrap'
								}} >
							<TextField
									id="newItemName"
									value={this.state.textFieldValue}
									onChange={this.handleItemNameTextFieldChange}
									style={{
										margin: 20
									}}
									autoFocus="autofocus"
									floatingLabelText="Enter New Item Name"
									floatingLabelFixed={true}
									errorText={this.state.error} />
							<TextField
									id="newItemId"
									value={this.state.textFieldValue}
									onChange={this.handleItemIdTextFieldChange}
									style={{
										margin: 20
									}}
									floatingLabelText="Enter New Item ID"
									floatingLabelFixed={true}
									errorText={this.state.error} />
						</div>
						<div
								style={{
									display: 'flex',
									flexFlow: 'column nowrap'
								}} >
							<TextField
									id="newItemQuantity"
									value={this.state.textFieldValue}
									onChange={this.handleQuantityTextFieldChange}
									style={{
										margin: 20
									}}
									floatingLabelText="Enter New Item Quantity"
									floatingLabelFixed={true}
									errorText={this.state.error} />
							<TextField
									id="newItemLocation"
									value={this.state.textFieldValue}
									onChange={this.handleLocationTextFieldChange}
									style={{
										margin: 20
									}}
									floatingLabelText="Enter New Item Location"
									floatingLabelFixed={true}
									errorText={this.state.error} />
							<FlatButton 
								label="Add New Item"
								secondary={true}
								onClick={this.handleNewItemInput} />
						</div>
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