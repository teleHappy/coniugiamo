import React, {Component} from 'react';

import AppHeader from '../components/AppHeader';
import ScoreCard from '../components/ScoreCard';
import Button from '../components/controls/Button';


class Results extends Component {

    constructor (props) {
        
        super(props);
    
    }

    render () {

        const {totalQuestions, correctAnswers, action} = this.props;

        return (
            <div className="resultsContainer">
                <AppHeader />
                <div className="introTextContainer">
                    <p className="introText">
                        Si, po fare!
                    </p>

                    <ScoreCard
                        correctAnswers = {correctAnswers}
                        totalQuestions = {totalQuestions} />

                    <Button 
                        action={action}
                        label="Vai Ancora"/>
                </div>
            </div>
        );
    }

};

export default Results;
