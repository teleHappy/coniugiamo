import React, { Component } from 'react';

import AppHeader from '../components/AppHeader';
import QuizForm from '../components/QuizForm';
import Button from '../components/controls/Button';


class Start extends Component {

    constructor(props) {

        super(props);

    }

    render() {

        const { setVerbGroup, startQuiz } = this.props;
        return (
            <div className="startContainer">

                <div className="introTextContainer">
                    <p className="introText">Select a verb ending, then click Cominciamo to get started</p>
                </div>

                <QuizForm verbGroupHandler={setVerbGroup} />

                <Button
                    action={startQuiz}
                    label="Cominciamo" />

            </div>
        );

    }
};

export default Start;
