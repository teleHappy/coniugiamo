
/**
 * areTableGenerator: manages logic for forming regular "are" verb conjugations
 */

const rules = require('../../data/rules.json');

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
        
        let stem = name.slice(0, name.length-3);
        
        if(tense === 'present'){
           stem = this.getPresentVerbStem(name, pronoun)
        }

        if(tense === 'future'){
            stem = this.getFutureVerbStem(name);
        }

        return stem
    }

    getPresentVerbStem(name, pronoun){
    
        let stem = name.slice(0, name.length-3);
        
        //handle -ciare, -giare endings
        if(name.slice(name.length-5) === 'ciare' || name.slice(name.length-5) === 'giare'){
            //drop the -are and retain the i of the ending
            //do not write a double 'i' in the present indicative endings for 3rd person singular or 1st person plural
            stem = (pronoun === 'lui/lei/Lei' || pronoun === 'noi') ? name.slice(0, name.length-4) : stem;
        }

        //handle -care, -gare endings
        if(name.slice(name.length-4) === 'care' || name.slice(name.length-4) === 'gare'){
            //drop the -are but add an 'h' before the present indicative endings 'i' and 'iamo'
            stem = (pronoun === 'lui/lei/Lei' || pronoun === 'noi') ? stem + 'h' : stem;
        }

        return stem;
    }

    getFutureVerbStem(name){
        let stem = name.slice(0, name.length-3) + "er"
        
        if(name.slice(name.length-5) === 'ciare' || name.slice(name.length-5) === 'giare'){
            // replace ciare|giare with er
            stem = name.replace('iare', 'er')
        }

        if(name.slice(name.length-4) === 'care' || name.slice(name.length-4) === 'gare'){
            stem = name.replace('are', 'her')
        }

        return stem;
    }
}

export default areTableGenerator