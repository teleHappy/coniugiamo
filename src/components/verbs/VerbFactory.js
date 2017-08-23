/**
 * VerbTableFactory returns verb tables  
 * delegates regular/irregular verb table creation
 */



import areTableGenerator from './areTableGenerator';
import ereTableGenerator from './ereTableGenerator';
import ireTableGenerator from './ireTableGenerator';

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

        const verbDataObj = this.getVerbDataObj(name)

        const conjugationPosition = this.getConjugationPosition(verbDataObj.name)
        
        //TODO: move this into specific TableGenerators with Observables
        // see areTableGenerator.js getTableData
        let verbTableData = []
        for(let i = 0; i <rules.pronouns.length; i++){ //TODO: stem logic
            verbTableData.push(rules.pronouns[i] + " " + verbDataObj.stem + rules[conjugationPosition][tense][i]  )
        }

        console.log(verbTableData[person])
        console.log(verbTableData)
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