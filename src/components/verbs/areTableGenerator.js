import _ from 'lodash';

//require data files
const rules = require('../../data/rules.json');
const verbs = require('../../data/verbs.json');

class areTableGenerator {

    /**
     * returns array of conjugated verbs
     */
    getTableData(verbDataObj, tense){
        let verbTableData = [];
        for(let i = 0; i <rules.pronouns.length; i++){ //TODO: stem logic
            verbTableData.push([rules.pronouns[i], this.getVerbStem(verbDataObj.name, tense, rules.pronouns[i]) + rules['are'][tense][i]])
        }
        return verbTableData;
    }
    
    getVerbStem(name, tense, pronoun){
        let stem = '';
        
        if(tense === 'present'){
           return this.getPresentVerbStem(name, pronoun)
        }
        

        if(tense === 'future'){
            stem = name.slice(0, name.length-1)
        }
        else{
            stem = name.slice(0, name.length-3)
        }
        return stem
    }

    getPresentVerbStem(name, pronoun){
    
    let stem = name.slice(0, name.length-3);
    
    //handle -ciare, -giare endings
    if(name.slice(name.length-5) === 'ciare' || name.slice(name.length-5) === 'giare'){
        //drop the -are and retain the i of the ending
        //do not write a double 'i' in the present indicative endings for 3rd person singular or 1st person plural
        stem = (pronoun === 'lui/lei/Lei' || pronoun === 'noi') ? name.slice(0, name.length-4) : stem
    }

    //handle -care, -gare endings
    if(name.slice(name.length-4) === 'care' || name.slice(name.length-4) === 'gare'){
        //drop the -are but add an 'h' before the present indicative endings 'i' and 'iamo'
        stem = (pronoun === 'lui/lei/Lei' || pronoun === 'noi') ? stem + 'h' : stem
    }

    return stem
    }

}

export default areTableGenerator