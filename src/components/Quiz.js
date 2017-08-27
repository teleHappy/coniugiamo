/* eslint no-tabs: 0, 
indent: 0, 
consistent-this: 0, 
no-trailing-spaces: 0,
brace-style: 0,
padded-blocks: 0,
no-console: 0,
semi: 0,
object-curly-spacing: 0,
space-before-blocks: 0,
no-useless-constructor: 0
 */

import React, { Component } from 'react';

import Verbs from './verbs/Verbs'

const verbs = new Verbs()

class Quiz extends Component{
    constructor(props){
        console.log('initiate quiz...')
        super(props)
        this.state = {
            'score': 0,
            'questions': [],
            'userAnswers': [],
            'currentQuestion': []
        }
        this.startQuiz = this.startQuiz.bind(this)
    }

    /**
     * initializes Quiz 
     */
    startQuiz(){
        let currentQuestion = verbs.getConjugatedVerbTable('parlare', 'present');
        console.log(currentQuestion)
        this.setState({'currentQuestion': currentQuestion})
    }

    /**
     * When user is finished with quiz, calculate total, display finish screen
     * could have a replay button, 'show me my wrong answers...
     */
    finishQuiz(){}    

    componentWillMount(){
        //this.startQuiz();        
    }

    render(){
        const qArr = this.state.currentQuestion;
        let s1Label, s1Verb, s2Label, s2Verb, s3Label, s3Verb, p1Label, p1Verb, p2Label, p2Verb, p3Label, p3Verb = "";
        if(qArr.length > 0){
            s1Label = qArr[0][0];
            s1Verb = qArr[0][1];

            s2Label = qArr[1][0];
            s2Verb = qArr[1][1];

            s3Label = qArr[2][0];
            s3Verb = qArr[2][1];

            p1Label = qArr[3][0];
            p1Verb = qArr[3][1];

            p2Label = qArr[4][0];
            p2Verb = qArr[4][1];

            p3Label = qArr[5][0];
            p3Verb = qArr[5][1];
            
        }            
        return (
            <div>
            <div>
                <button name="startQuiz" onClick={this.startQuiz}>Start Verb Quiz</button> 
            </div>
            <div>
                <table>
                    
                    <tbody>
                        <tr>
                            <th>{s1Label}</th>
                            <td>{s1Verb}</td>
                            <th>{p2Label}</th>
                            <td>{p1Verb}</td>
                        </tr>
                        <tr>
                            <th>{s2Label}</th>
                            <td>{s2Verb}</td>
                            <th>{p2Label}</th>
                            <td>{p2Verb}</td>
                        </tr>
                        <tr>
                            <th>{s3Label}</th>
                            <td>{s3Verb}</td>
                            <th>{p3Label}</th>
                            <td>{p3Verb}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
        )
    }


}

export default Quiz;