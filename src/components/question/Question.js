import Utils from './Utils'

//require data files
const rules = require('../../data/rules.json');
const verbs = require('../../data/verbs.json');



const utils = new Utils()


class Question{


    getQuestion(){
        const person = utils.getRandomPersonIndex();
        const verbName = 'parlare'
        const tense = 'present'
        //const question = utils.getQuestion(person, tense, verbName)
        //const conjugatedVerbTable = verb.getConjugatedVerbTable(verbName, tense);
        
        return 'hello rick'
    }


}

export default Question