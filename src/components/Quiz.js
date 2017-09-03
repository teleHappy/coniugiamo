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
import Question from './question/Question';

class Quiz extends Component{
    constructor(){
        super()
        
        this.startQuiz = this.startQuiz.bind(this)
        this.getNextQuestion = this.getNextQuestion.bind(this)
    }

    getNextQuestion(verbEnding){
        
    }

    getNextAnswers(){}


    // ui:
    
    // method that randomly generates three verb conjugation tables using the same verb but different tenses/moods
    // also, randomly selects which pronoun to test with in the question
    // behavior:
    // user selects right/wrong choice green/red text coloring
    // display verb/tense formatted conjugation table

    /**
     * initializes Quiz 
     */
    startQuiz(){
        this.setState({
            "questionParams" : {
                "verbEnding": "are"
            }
        })
    }

    /**
     * When user is finished with quiz, calculate total, display finish screen
     * could have a replay button, 'show me my wrong answers...
     */
    finishQuiz(){}    

    componentWillMount(){
        this.startQuiz();        
    }

    render(){

        return(
            <Question params = {this.state.questionParams} />
        )

        // answers list

        // link to toggle conjugation table (after answer is selected)

        // const qArr = this.state.conjugationTableData;
        // // eslint-disable-next-line
        // let s1Label, s1Verb, s2Label, s2Verb, s3Label, s3Verb, p1Label, p1Verb, p2Label, p2Verb, p3Label, p3Verb = "";
        // if(qArr.length > 0){
        //     s1Label = qArr[0][0];
        //     s1Verb = qArr[0][1];

        //     s2Label = qArr[1][0];
        //     s2Verb = qArr[1][1];

        //     s3Label = qArr[2][0];
        //     s3Verb = qArr[2][1];

        //     p1Label = qArr[3][0];
        //     p1Verb = qArr[3][1];

        //     p2Label = qArr[4][0];
        //     p2Verb = qArr[4][1];

        //     p3Label = qArr[5][0];
        //     p3Verb = qArr[5][1];
            
        // }            
        // return (
        //     <div>
        //     <div>
        //         <button name="startQuiz" onClick={this.startQuiz}>Start Verb Quiz</button> 
        //     </div>
        //     <div>
        //         <table>
                    
        //             <tbody>
        //                 <tr>
        //                     <th>{s1Label}</th>
        //                     <td>{s1Verb}</td>
        //                     <th>{p2Label}</th>
        //                     <td>{p1Verb}</td>
        //                 </tr>
        //                 <tr>
        //                     <th>{s2Label}</th>
        //                     <td>{s2Verb}</td>
        //                     <th>{p2Label}</th>
        //                     <td>{p2Verb}</td>
        //                 </tr>
        //                 <tr>
        //                     <th>{s3Label}</th>
        //                     <td>{s3Verb}</td>
        //                     <th>{p3Label}</th>
        //                     <td>{p3Verb}</td>
        //                 </tr>
        //             </tbody>
        //         </table>
        //     </div>
        //     </div>
    
    }


}

export default Quiz;