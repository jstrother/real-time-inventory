// ./components/itemAdd.js
// imported into ./app.js

import React from 'react';
import io from 'socket.io-client';

import { Popover } from 'material-ui/Popover';
import { ContentAdd } from 'material-ui/svg-icons/content/add';
import { RaisedButton } from 'material-ui/RaisedButton';
import { TextField } from 'material-ui/TextField';

const socket = io.connect('/');

export default ItemAdd extends React.Component {
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

	handlePopoverClose = (event) => {
		this.setState({
			open: false
		});
	};

	handleNewItemInput = (event) => {
		// this will handle all input from the text field for new items, location, id, & quantity
	};
	render() {
		return (
			<div>
				<Popover
						open={this.state.open}
						anchorEl={this.state.anchor}
						anchorOrigin={{
							horizontal: 'right',
							vertical: 'top'
						}}
						targetOrigin={{
							horizontal: 'right',
							vertical: 'top'
						}}
						onRequestClose={this.handlePopoverClose}>
					<TextField
							style={{
								margin: 20
							}}
							autofocus="autofocus"
							hintText="Add New Item"
							errorText={this.state.error}
							onKeyDown={this.handleNewItemInput} />
				</Popover>
				<RaisedButton
						label="Add New Item"
						onTouchTap={this.handlePopoverAction}
						onClick={this.handlePopoverAction}
						style={{
							position: 'fixed',
							bottom: 20,
							right: 20,
							margin: 12
						}}>
					<ContentAdd />
				</RaisedButton>
			</div>
		);
	}
}