import React, { Component } from 'react';
import Question from '../question/Question';
import Verb from '../verb/Verb'
import {are, ere, ire} from '../../data/verbs'
import _ from 'lodash';

//require data files
const rules = require('../../data/rules.json');
const verb = new Verb();
const ANSWERS_LENGTH = 3;

class Quiz extends Component{
    constructor(){
        super()
        this.state = {
            "verbEnding": "",
            "verbName": "",
            "verbObj": null,
            "personIndex": 0,
            "tense": "",
            "verbTablesArray": []
        }
        
        this.handleClick = this.handleClick.bind(this)
    }

    // TODO: verbEnding should be random, but need to add verb data to ere and ire verbs first
    // every question has its answers
    handleClick(e){
        const verbEnding = "are"
        const verbObj = this.getRandomVerbObject(verbEnding)
        const personIndex = this.getRandomPersonIndex()
        const tense = this.getRandomTense()
        const tenses = this.getUniqueTenseArrayByCount(tense, ANSWERS_LENGTH)
        const verbTables = this.getThreeVerbTables(verbObj.name, tenses)
        const verbName = verbObj.name

        this.setState({
            "verbEnding": verbEnding,
            "verbName": verbName,
            "personIndex": personIndex,
            "tense": tense,
            "verbTablesArray": verbTables
        
        })
    }

    getVerbNamesFromObjectArray(arr) {
        const newArray = arr.map(function(o){
            return o.name
        })
        return newArray
    }
    
    // returns an array of {count} random verb names from verbObjectArry
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

    // handle generating three unique verb tables and decorate each with an 'isCorrect' object
    getThreeVerbTables(name, tenses){
        let vt = []
        let conjugatedVerbTables = [];
        // populate three conjugation tables
        for(var i=0; i<tenses.length; i++){
            vt = verb.getConjugatedVerbTable(name, tenses[i])
            // the first entry is the correct quiz verb, track with this added object
            vt.push( (i === 0) ? {'isCorrect': true} : {'isCorrect': false}) 
            
            conjugatedVerbTables.push(vt)
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
        const {verbEnding, verbName, verbObj, personIndex, tense, verbTablesArray} = this.state;

        return(
            <div>
                <Question verbEnding={verbEnding} verbName={verbName} verbObj={verbObj} personIndex={personIndex} tense={tense} verbTablesArray={verbTablesArray}/>
                <button onClick={this.handleClick}>Next Question</button>
            </div>
        )
    }
}

export default Quiz;