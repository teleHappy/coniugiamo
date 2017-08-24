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
            verbTableData.push(rules.pronouns[i] + " " + this.getVerbStem(verbDataObj.name, tense) + rules['are'][tense][i]  )
        }
        return verbTableData;
    }
    
    getVerbStem(name, tense){
        let stem = '';
        if(tense === 'future'){
            stem = name.slice(0, name.length-1)
        }
        else{
            stem = name.slice(0, name.length-3)
        }
        return stem
    }

}

export default areTableGenerator