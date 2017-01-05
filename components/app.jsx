// components/app.jsx
// imported into ./index.jsx

import React from 'react';
import { connect } from 'react-redux';
// need components to set-up new user and see inventory

class Main extends React.component {
    render() {
        return (
            <div>
            
            </div>
        );
    }
}

function mapStateToProps() {
    
}

export default connect(mapStateToProps(Main));