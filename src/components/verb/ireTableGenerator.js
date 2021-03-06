/**
 * IreTableGenerator: manages logic for forming regular "ire" verb conjugations
 */

const rules = require('../../data/rules.json');

class ireTableGenerator {

    /**
     * Returns array of conjugated verbs
     */
    getTableData (verbDataObj, tense) {

        const verbTableData = [];

        for (let i = 0; i < rules.pronouns.length; i++) { // TODO: stem logic

            verbTableData.push([rules.pronouns[i], this.getVerbStem(verbDataObj.name, tense) + this.getVerbEnding(verbDataObj, tense, i)]);

        }

        return verbTableData;

    }

    getVerbStem (name, tense) {

        if(tense === 'future' || tense === 'conditional'){
            return name.slice(0, name.length - 1); 
        } else {
            return name.slice(0, name.length - 3);
        }

    }

    getVerbEnding (verbDataObj, tense, idx) {

        const type = verbDataObj.type;
        let ending = rules.ire[tense][idx];

        if (tense === 'present' || tense === 'subjunctive') {

            ending = this.getTypedVerbEnding(type, idx);

        }

        return ending;

    }

    getTypedVerbEnding (type, idx) {
        
        let ending = '';

        if (type === 1) {

            ending = rules.ire.present.type1[idx];

        }

        if (type === 2) {

            ending = rules.ire.present.type2[idx];

        }

        return ending;

    }

}
export default ireTableGenerator;
