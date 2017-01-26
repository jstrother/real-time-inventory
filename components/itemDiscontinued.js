// ./components/itemDiscontinued.js
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

export default class ItemDiscontinued extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
			value: 1
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
			value: 1
		});
  };

	handleDiscontinuedItemInput = (event) => {
		event.preventDefault();
		let item = {
			itemId: parseInt(this.state.value)
		};
		socket.emit('item:delete', item);
		this.setState({
			open: false,
			value: 1
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
						<FlatButton 
							label="Discontinue Selected Item"
							secondary={true}
							onClick={this.handleDiscontinuedItemInput} />
						<FlatButton
							label="Close This Window"
							secondary={true}
							onClick={this.handlePopoverClose} />
				</Popover>
				<RaisedButton
						label="Discontinue Item"
						onClick={this.handlePopoverAction}
						secondary={true}
						style={{
							position: 'fixed',
							bottom: 20,
							left: 20
						}} >
					<ContentAdd />
				</RaisedButton>
			</div>
		);
	}
}