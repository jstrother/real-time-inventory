// components/app.jsx
// imported into ./index.jsx

import React from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
// need components to set-up new user and see inventory

class Main extends React.component {
    render() {
        return (
            <div>
                <AppBar title="Real-Time Inventory Tracker"
                        showMenuIconButton={ false } />
            </div>
        );
    }
}

function mapStateToProps() {
    
}

export default connect(mapStateToProps(Main));