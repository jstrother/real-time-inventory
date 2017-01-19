// ./components/itemReplenished.js
// imported into ./app.js

import React from 'react';
import io from 'socket.io-client';

import Popover from 'material-ui/Popover';
import ContentAdd from 'material-ui/svg-icons/content/add';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';

const socket = io.connect('/');

export default class ItemReplenished extends React.Component {
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

	handleReplenishedItemInput = (event) => {
		// this will handle all input from the dropdown menu of items and the text field for quantity
	};

	render() {
		return (
			<div>

			</div>
		);
	}
}