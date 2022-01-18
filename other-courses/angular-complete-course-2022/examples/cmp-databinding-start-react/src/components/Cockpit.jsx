import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Cockpit extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="row">
                <div className="col-xs-12">
                    <p>Add new Servers or blueprints!</p>
                </div>
            </div>
        )
    }
}

Cockpit.propTypes = {
    serverCreated: PropTypes.func.isRequired,
    bluePrintCreated: PropTypes.func.isRequired
}
export default Cockpit

