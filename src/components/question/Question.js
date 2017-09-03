import React, {Component} from 'react';
import Verb from '../verb/Verb'
import {are, ere, ire} from '../../data/verbs'
import _ from 'lodash';

//require data files
const rules = require('../../data/rules.json');
const verb = new Verb();
const ANSWERS_LENGTH = 3;

class Question extends Component{
    constructor(props){
        super(props)
        this.state = {
            "verbObj": {},
            "verbEnding": "",
            "personIndex": null,
            "tense": "",
            "verbTablesArray": []
        }
    }

    // returns answer array (randomly sorted)
    // tracks correct answer and verbTable (in random list)
    // only one contains the correct answer, remaining are used for false answers
    // generates a link to verb table

    // returns display question str
    getDisplayQuestion(){
        const questionStr =  `Which is the correct ${rules['pronouns'][this.state.personIndex]} form for the ${this.state.tense} tense of ${this.state.verbObj.name}?`

        return (
            <h3>{questionStr}</h3>
        )
    }

    getDisplayAnswers(){

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

    getAnswersArray(){
        
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

    componentDidMount(){
        const verbEnding = this.props.params.verbEnding
        const verbObj = this.getRandomVerbObject(verbEnding)
        const personIndex = this.getRandomPersonIndex()
        const tense = this.getRandomTense()
        const tenses = this.getUniqueTenseArrayByCount(tense, ANSWERS_LENGTH)
        const verbTables = this.getThreeVerbTables(verbObj.name, tenses)
        
        this.setState({
            "verbObj": verbObj,
            "verbEnding": verbEnding,
            "personIndex": personIndex,
            "tense": tense,
            "verbTablesArray": verbTables
        })

    }
    
    render(){
       
        return(
            <div>
                {this.getDisplayQuestion()}
            </div>
        )
        //this.getDispayAnswers()
        //this.getCorrectTableLink()
    }

}

export default Question