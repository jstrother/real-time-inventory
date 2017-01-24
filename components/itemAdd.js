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
    };
	};

	handlePopoverAction = (event) => {
		this.setState({
			open: true,
			anchor: event.currentTarget
		});
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

	handleNewItemInput = (event) => {
		event.preventDefault();
		let item = {
					itemName: this.state.itemNameTextFieldValue,
					itemId: this.state.itemIdTextFieldValue,
					location: this.state.locationTextFieldValue,
					quantity: this.state.quantityTextFieldValue,
				};
		console.log(item);
		socket.emit('item:insert', item);
		this.setState({
			open: false,
			itemNameTextFieldValue: '',
	    itemIdTextFieldValue: '',
	    locationTextFieldValue: '',
      quantityTextFieldValue: ''
    });
	};

	render() {
		return (
			<div>
				<Popover 
						open={this.state.open}
						anchorEl={this.state.anchor}
						anchorOrigin={{
							horizontal: 'left',
							vertical: 'top'
						}}
						targetOrigin={{
							horizontal: 'right',
							vertical: 'bottom'
						}}
						style={{
							display: 'flex',
							flexFlow: 'row wrap'
						}} >
						<TextField
								value={this.state.itemNameTextFieldValue}
								onChange={this.handleItemNameTextFieldChange}
								style={{
									margin: 20
								}}
								autoFocus="autofocus"
								floatingLabelText="Enter New Item Name"
								floatingLabelFixed={true}
								errorText={this.state.error} />
						<TextField
								value={this.state.itemIdTextFieldValue}
								onChange={this.handleItemIdTextFieldChange}
								style={{
									margin: 20
								}}
								floatingLabelText="Enter New Item ID"
								floatingLabelFixed={true}
								errorText={this.state.error} />
						<TextField
								value={this.state.quantityTextFieldValue}
								onChange={this.handleQuantityTextFieldChange}
								style={{
									margin: 20
								}}
								floatingLabelText="Enter New Item Quantity"
								floatingLabelFixed={true}
								errorText={this.state.error} />
						<TextField
								value={this.state.locationTextFieldValue}
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