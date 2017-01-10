// components/app.jsx
// imported into ./index.jsx

import React from 'react';
import AppBar from 'material-ui/AppBar';
import { connect } from 'react-redux';
// need components to set-up new user and see inventory

class Main extends React.component {
    render() {
        return (
            <div>
                <AppBar title="Real-Time Inventory Tracker" />
            </div>
        );
    }
}

function mapStateToProps(user, item) {
    console.log('user', user, 'item', item);
    return { user, item };
}

export default connect(mapStateToProps(Main));