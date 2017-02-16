// components/app.js
// imported into ./index.js

import React from 'react';
import { connect } from 'react-redux';
// import InStock from './inStock.js';
// import ItemAdd from './itemAdd.js';
// import ItemSold from './itemSold.js';
// import ItemReplenished from './itemReplenished.js';
// import ItemDiscontinued from './itemDiscontinued.js';
//                 <InStock items={this.props.items} />
//                 <ItemAdd items={this.props.items} />
//                 <ItemSold items={this.props.items} />
//                 <ItemReplenished items={this.props.items} />
//                 <ItemDiscontinued items={this.props.items} />

class Main extends React.Component {
    render() {
        return (
            <div>
                <header className="mainTitle">
                    <h1>Real-Time Inventory Tracker</h1>
                </header>
            </div>
        );
    }
}

function mapStateToProps(items) {
    return { items };
}

export default connect(mapStateToProps)(Main);