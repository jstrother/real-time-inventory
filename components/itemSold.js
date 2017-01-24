// ./components/itemSold.js
// imported into ./app.js

import React from 'react';
import io from 'socket.io-client';

import Popover from 'material-ui/Popover';
import ContentAdd from 'material-ui/svg-icons/content/add';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const socket = io.connect('/');

export default class ItemSold extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
      quantityTextFieldValue: ''
    };
	};

	handlePopoverAction = (event) => {
		this.setState({
			open: true,
			anchor: event.currentTarget
		});
	};

	handleSoldItemInput = (event) => {
		// this will handle all input from the dropdown menu of items and the text field for quantity
	};

	render() {
		return (
			<div>
				<Popover 
						open={this.state.open}
						anchorEl={this.state.anchor}
						anchorOrigin={{
							horizontal: 'middle',
							vertical: 'top'
						}}
						targetOrigin={{
							horizontal: 'middle',
							vertical: 'bottom'
						}}
						style={{
							display: 'flex',
							flexFlow: 'row wrap'
						}} >
						<DropDownMenu>
							{
								// set up a function to iterate over the number of itemNames and create a MenuItem for each
							}
						</DropDownMenu>
						<TextField
								value={this.state.quantityTextFieldValue}
								onChange={this.handleQuantityTextFieldChange}
								style={{
									margin: 20
								}}
								floatingLabelText="Enter Updated Quantity"
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