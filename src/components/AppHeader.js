import React, { Component } from 'react';

import ProgressTracker from './ProgressTracker';

class AppHeader extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="header">
                <h1>ITALOVERBI</h1>
                {this.props.count > 0 &&
                    <ProgressTracker count={this.props.count} questionsLength={this.props.questionsLength} />
                }
            </div>
        );
    }
}

export default AppHeader;
