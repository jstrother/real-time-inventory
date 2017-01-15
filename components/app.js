// components/app.js
// imported into ./index.js

import React from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import InStock from './inStock.js';

class Main extends React.Component {
    render() {
        return (
            <div>
                <AppBar title="Real-Time Inventory Tracker"
                        showMenuIconButton={false}
                        className="mainTitle" />
                <InStock items={this.props.items} />
            </div>
        );
    }
}

function mapStateToProps(item) {
    console.log('item', item);
    return { item };
}

// export default Main;
export default connect(mapStateToProps)(Main);