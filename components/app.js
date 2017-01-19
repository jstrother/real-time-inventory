// components/app.js
// imported into ./index.js

import React from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import InStock from './inStock.js';
import ItemAdd from './itemAdd.js';
import ItemSold from './itemSold.js';
import ItemReplenished from './itemReplenished.js';

class Main extends React.Component {
    render() {
        return (
            <div>
                <AppBar title="Real-Time Inventory Tracker"
                        showMenuIconButton={false}
                        className="mainTitle" />
                <InStock items={this.props.items} />
                <ItemAdd items={this.props.items} />
                <ItemSold items={this.props.items} />
                <ItemReplenished items={this.props.items} />
            </div>
        );
    }
}

function mapStateToProps(items) {
    return { items };
}

export default connect(mapStateToProps)(Main);