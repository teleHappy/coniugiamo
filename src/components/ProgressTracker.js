import React, { Component } from 'react';

class ProgressTracker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: props.count,
            questions_length: props.questionsLength
        };
    }

    componentDidMount() {

    }

    showProgress() {

    }

    render() {
        return (

            <div className="progressbarWrapper" >
                <div className="progressbarTrack"></div>
                <ol className="progressbar">
                    <li className="inactive"><span></span></li>
                    <li className="inactive"><span></span></li>
                    <li className="inactive"><span></span></li>
                    <li className="inactive"><span></span></li>
                    <li className="inactive"><span></span></li>
                </ol>
            </div>

        )
    }
}

export default ProgressTracker;
