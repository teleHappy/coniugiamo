const rules = require('../../data/rules.json');

class ireTableGenerator {

    /**
     * returns array of conjugated verbs
     */
    getTableData(verbDataObj, tense){
        let verbTableData = [];
        for(let i = 0; i <rules.pronouns.length; i++){ //TODO: stem logic
            verbTableData.push([rules.pronouns[i], this.getVerbStem(verbDataObj.name) + this.getVerbEnding(verbDataObj, tense, i)])
        }
        return verbTableData;
    }

    getVerbStem(name){
        return name.slice(0, name.length-3);
    }

    getVerbEnding(verbDataObj, tense, idx){
        const name = verbDataObj.name
        const type = verbDataObj.type
        let ending = rules["ire"][tense][idx]


        if(tense === 'present'){
            ending = this.getPresentVerbEnding(type, idx)
        }
        
        return ending;

    }

    getPresentVerbEnding(type, idx){
        let ending = '';

        if(type === 1){
            ending = rules["ire"]["present"]["type1"][idx]
            console.log("type1 ending = " + ending)
        }

        if(type === 2){
            ending = rules["ire"]["present"]["type2"][idx]
            console.log("type2 ending = " + ending)
        }

        return ending;
    }

}
export default ireTableGenerator