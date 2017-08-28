const rules = require('../../data/rules.json');

class ereTableGenerator {

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
        return name.slice(0, name.length-3)
    }

    getPresentVerbStem(name, pronoun){}

    getFutureVerbStem(name){}    
    
}

export default ereTableGenerator