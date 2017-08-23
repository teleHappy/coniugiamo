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
            verbTableData.push(rules.pronouns[i] + " " + verbDataObj.stem + rules['are'][tense][i]  )
        }
        return verbTableData;
    }

}

export default areTableGenerator