import React, {Component} from 'react';

import AppHeader from '../components/views/AppHeader';
import QuizForm from '../components/views/QuizForm';
import Button from '../components/controls/Button';


class Start extends Component{

    constructor(props){
        
        super(props);
    
    }

    render () {

        const {setVerbGroup, startQuiz} = this.props; 
        return (
            <div className="startContainer">
                <AppHeader />
                <div className="introTextContainer">
                    <p className="introText">Select a verb ending, then click Cominciamo to get started</p>
                    <QuizForm verbGroupHandler={setVerbGroup} />
                <Button 
                    action={startQuiz}
                    label="Cominciamo"/>
                </div>
            </div>
        );
        
    }
};

export default Start;