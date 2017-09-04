import React, { Component } from 'react';
import Question from './question/Question';
import Verb from './verb/Verb'
import {are, ere, ire} from '../data/verbs'
import _ from 'lodash';

//require data files
const rules = require('../data/rules.json');
const verb = new Verb();

class Quiz extends Component{
    constructor(){
        super()
        this.state = {
            "params" : {
                "verbEnding": "",
                "verbName": "",
                "verbObj": null,
                "personIndex": 0,
                "tense": "",
                "verbTablesArray": []
            }
        }
        
        this.startQuiz = this.startQuiz.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    // TODO: verbEnding should be random, but need to add verb data to ere and ire verbs first
    // every question has its answers
    handleClick(e){
        const verbEnding = "are"
        const verbObj = this.getRandomVerbObject(verbEnding)
        const personIndex = this.getRandomPersonIndex()
        const tense = this.getRandomTense()
        const tenses = this.getUniqueTenseArrayByCount(tense, 3)
        const verbTables = this.getThreeVerbTables(verbObj.name, tenses)
        const verbName = verbObj.name

        this.setState({
            "params" : {
                "verbEnding": verbEnding,
                "verbName": verbName,
                "personIndex": personIndex,
                "tense": tense,
                "verbTablesArray": verbTables
            }
        })
    }

    getVerbNamesFromObjectArray(arr) {
        const newArray = arr.map(function(o){
            return o.name
        })
        return newArray
    }
    
    // returns an array opf three random verb names from verbObjectArry
    getUniqueKeyValuesFromObjectArrayByCount(value, array, count, seedValue){
        const verbNameArray = this.getVerbNamesFromObjectArray(array)
        const countOffset = (seedValue) ? count-1: count
        let uniqueArray = [seedValue]
        
        for(var i=0; i<countOffset; i++){
            let differenceArray = (_.difference(verbNameArray, uniqueArray))
            let min = Math.ceil(0);
            let max = Math.floor(differenceArray.length);
            uniqueArray.push(differenceArray[Math.floor(Math.random() * (max - min)) + min])

        }
        
        return uniqueArray
    }

    getUniqueTenseArrayByCount(tense, count){
        const tensesArray = rules['tenses']
        const countOffset = count-1;
        let uniqueArray = [tense]
            
        for(var i = 0; i<countOffset; i++){
            let differenceArray = _.difference(tensesArray, uniqueArray)
            let min = Math.ceil(0)
            let max = Math.floor(differenceArray.length)
            uniqueArray.push(differenceArray[Math.floor(Math.random() * (max - min)) + min])
        }
        
        return uniqueArray
    }

    // handle generating three unique verb tables (tracking against random)
    getThreeVerbTables(name, tenses){
        let conjugatedVerbTables = [];
        // populate three conjugation tables
        for(var i=0; i<tenses.length; i++){
            conjugatedVerbTables.push(verb.getConjugatedVerbTable(name, tenses[i]))
        }
        return conjugatedVerbTables;

    }

    getRandomTense(){
        let min = Math.ceil(0);
        let max = Math.floor(rules['tenses'].length)
        return rules['tenses'][Math.floor(Math.random() * (max - min) + min)];
    }

    getRandomPersonIndex(){
        let min = Math.ceil(0);
        let max = Math.floor(rules['pronouns'].length);

        return Math.floor(Math.random() * (max - min) + min) 
    }

    getRandomVerbObject (verbEnding) {
        const verbs = (verbEnding === 'are') ? are : (verbEnding === 'ere') ? ere : ire
        let min = Math.ceil(0);
        let max = Math.floor(are.length);

        return verbs[Math.floor(Math.random() * (max - min)) + min] 
    }

    startQuiz(){}

    finishQuiz(){}    

    render(){

        return(
            <div>
                <Question params = {this.state.params}/>
                <button onClick={this.handleClick}>Next Question</button>
            </div>
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