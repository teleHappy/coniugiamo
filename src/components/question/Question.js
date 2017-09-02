import Verb from '../verb/Verb'
import {verbs, are, ere, ire} from '../../data/verbs'

//require data files
const rules = require('../../data/rules.json');
const verb = new Verb();

class Question{
    getQuestion(verbEnding){
        const person = rules['pronouns'][this.getRandomPersonIndex()];
        const verbObj = this.getRandomVerbObject(verbEnding);
        const tense = this.getRandomTense();
        const verbDataTable = verb.getConjugatedVerbTable('parlare', 'present')
        //const question = this.getQuestion(person, tense, verbName)
        //const conjugatedVerbTable = verb.getConjugatedVerbTable(verbName, tense);
        
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