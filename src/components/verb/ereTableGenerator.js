/**
 * EreTableGenerator: manages logic for forming regular "ere" verb conjugations
 */

const rules = require('../../data/rules.json');

class ereTableGenerator {

    /**
     * Returns array of conjugated verbs
     */
    getTableData (verbDataObj, tense) {

        const verbTableData = [];

        for (let i = 0; i < rules.pronouns.length; i++) { // TODO: stem logic

            verbTableData.push([rules.pronouns[i], this.getVerbStem(verbDataObj.name, tense) + rules.are[tense][i]]);

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

}

export default ereTableGenerator;
