// ./components/itemSold.js
// imported into ./app.js

import React from 'react';
import io from 'socket.io-client';

import Popover from 'material-ui/Popover';
import ContentAdd from 'material-ui/svg-icons/content/add';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const socket = io.connect('/');

export default class ItemSold extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
			value: 1,
      quantityTextFieldValue: ''
    };
	};

	handlePopoverAction = (event) => {
		this.setState({
			open: true,
			anchor: event.currentTarget
		});
	};

	handleDropDownChange = (event, index, value) => {
		this.setState({
			value
		});
	};

  handlePopoverClose = () => {
  	this.setState({
			open: false,
			value: 1,
      quantityTextFieldValue: ''
		});
  };

	handleQuantityTextFieldChange = (event) => {
    this.setState({
        quantityTextFieldValue: event.target.value
    });
  };

	handleSoldItemInput = (event) => {
		event.preventDefault();
		let item = {
			itemId: parseInt(this.state.value),
			quantityChange: parseInt(this.state.quantityTextFieldValue)
		};
		socket.emit('item:sold', item);
		this.setState({
			open: false,
			value: 1,
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
							width: 300
						}} >
						<DropDownMenu
								value={this.state.value}
								onChange={this.handleDropDownChange} >
							{this.props.items.inventoryReducer.map(item => <MenuItem key={item.itemId} value={item.itemId} primaryText={item.itemName} />)}
						</DropDownMenu>
						<TextField
								value={this.state.quantityTextFieldValue}
								onChange={this.handleQuantityTextFieldChange}
								style={{
									margin: 20
								}}
								floatingLabelText="Enter Quantity Sold"
								floatingLabelFixed={true}
								errorText={this.state.error} />
						<FlatButton 
							label="Sell Selected Item"
							secondary={true}
							onClick={this.handleSoldItemInput} />
						<FlatButton
							label="Close This Window"
							secondary={true}
							onClick={this.handlePopoverClose} />
				</Popover>
				<RaisedButton
						label="Sell Item"
						onClick={this.handlePopoverAction}
						secondary={true}
						style={{
							position: 'fixed',
							bottom: 20,
							right: 190
						}} >
					<ContentAdd />
				</RaisedButton>
			</div>
		);
	}
}