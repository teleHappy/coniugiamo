import Verb from '../verb/Verb'
import {are, ere, ire} from '../../data/verbs'

//require data files
const rules = require('../../data/rules.json');
const verb = new Verb();

class Question{
    
    // need to break this out
    // returns display question str
    // returns answer array (randomly sorted)
    // tracks correct answer and verbTable (in random list)
    // handle generating three unique verb tables (tracking against random) 
    // only one contains the correct answer, remaining are used for false answers
    // generates a link to verb table

    getDisplayQuestion(person, tense, name){
        let questionStr =  `Which is the correct ${person} form for the ${tense} tense of ${name}?`
        console.log(questionStr)
    }

    getThreeVerbTables(name, tense, verbEnding){
        let exisitingVerbTables = [name];
        let verbTableArray = [];
        // get table for name
        const verbDataTable = verb.getConjugatedVerbTable(name, tense)
        console.log(verbDataTable)
        // get table that is not name
    }

    getQuestion(verbEnding){
        const person = rules['pronouns'][this.getRandomPersonIndex()];
        const verbObj = this.getRandomVerbObject(verbEnding);
        const tense = this.getRandomTense();
        const threeTables = this.getThreeVerbTables(verbObj.name, tense, verbEnding)
        const displayQuestion = this.getDisplayQuestion(person, tense, verbObj.name)
        return tense
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

}

export default Question