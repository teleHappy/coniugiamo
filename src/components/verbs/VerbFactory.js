/**
 * VerbTableFactory returns verb tables  
 * delegates regular/irregular verb table creation
 */



import areTableGenerator from './areTableGenerator';
import _ from 'lodash';

//require data files
const rules = require('../../data/rules.json');
const verbs = require('../../data/verbs.json');

class VerbFactory{

    constructor(){
        return 
    }

    getConjugatedVerbTable(name, person, tense){
        if(!name) throw new Error('verb not supplied')

        if(person<0 || person > 6) throw new Error('person index out of bounds')

        if(!tense) throw new Error('tense not supplied')

        if(!this.validateVerbName(name)) throw new Error('non-valid verb ending')

        // need the conjugation position, stem, verb endings
        let verbDataObj = this.getVerbDataObj(name)
        //get conjugation position
        let conjugationPosition = this.getConjugationPosition(name)
        //get conjugated verb
        let verbTable = []
        for(let i = 0; i <rules.pronouns.length; i++){ //TODO: stem logic
            verbTable.push(rules.pronouns[i] + " " + verbDataObj.stem + rules[conjugationPosition].present[i]  )
        }
        console.log(verbTable[person])
    }

    validateVerbName(name){
        return  _.indexOf(rules.endingsArray, name.slice(-3)) >= 0
    }

    getVerbDataObj(verb){
        return _.find(verbs, {"name": verb})
    }

    getConjugationPosition(verb){
        if( _.indexOf(rules.endingsArray, verb.slice(-3)) === -1) throw new Error('non-valid verb ending')
    
        return verb.slice(-3);
    }


}

export default VerbFactory