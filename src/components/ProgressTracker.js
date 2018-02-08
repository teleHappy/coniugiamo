import React, { Component } from 'react';

class ProgressTracker extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    showProgress() {
        let items = [];
        for (let i = 0; i < this.props.questionsLength; i++) {
            let className = (i + 1 <= this.props.count) ? "active" : "inactive"
            items.push(<li key={i} className={className}><span></span></li>)
        }

        return items;
    }


    render() {
        return (

            <div className="progressbarWrapper" >
                <div className="progressbarTrack"></div>
                <ol className="progressbar">
                    {this.showProgress()}
                </ol>
            </div>

        )
    }
}

export default ProgressTracker;
