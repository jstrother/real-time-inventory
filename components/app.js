// components/app.js
// imported into ./index.js

// import React from 'react';
import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import { connect } from 'react-redux';
// need components to set-up new user and see inventory

class Main extends Component {
    render() {
        return (
            <div>
                <AppBar title="Real-Time Inventory Tracker"
                        showMenuIconButton={false}
                        id="main-title" />
                <h1></h1>
            </div>
        );
    }
}

function mapStateToProps(user, item) {
    console.log('user', user, 'item', item);
    return { user, item };
}

export default Main;
// export default connect(mapStateToProps(Main));