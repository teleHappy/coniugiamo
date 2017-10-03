
/**
 * areTableGenerator: manages logic for forming regular "are" verb conjugations
 */

const rules = require('../../data/rules.json');

class areTableGenerator {

    /**
     * Returns array of conjugated verbs
     */
    getTableData (verbDataObj, tense) {

        const verbTableData = [];

        for (let i = 0; i < rules.pronouns.length; i++) { // TODO: stem logic

            verbTableData.push([rules.pronouns[i], this.getVerbStem(verbDataObj.name, tense, rules.pronouns[i]) + rules.are[tense][i]]);

        }

        return verbTableData;

    }

    getVerbStem (name, tense, pronoun) {

        let stem = name.slice(0, name.length - 3);

        if (tense === 'future' || tense === 'conditional') {

            stem += 'er';

        }

        if (name.slice(name.length - 5) === 'ciare' || name.slice(name.length - 5) === 'giare') {

            stem = this.getVerbStemForCiareGiareEndings(name, pronoun, tense);

        }

        if (name.slice(name.length - 4) === 'care' || name.slice(name.length - 4) === 'gare') {

            stem = this.getVerbStemForCareGareEndings(name, pronoun, tense);

        }

        return stem;

    }

    getVerbStemForCiareGiareEndings (name, pronoun, tense) {

        let stem = name.slice(0, name.length - 3);

        if (tense === 'present') {

            if (pronoun === 'tu' || pronoun === 'noi') { // Avoid double i

                stem = name.slice(0, name.length - 4);

            }

        }
        if (tense === 'subjunctive') {

            stem = name.slice(0, name.length - 4);

        }
        if (tense === 'future' || tense === 'conditional') {

            stem = name.replace('iare', 'er');

        }

        return stem;

    }

    getVerbStemForCareGareEndings (name, pronoun, tense) {

        let stem = name.slice(0, name.length - 3);

        if (tense === 'present') {

            stem = pronoun === 'tu' || pronoun === 'noi' ? `${stem}h` : stem;

        }
        if (tense === 'subjunctive') {

            stem += 'h';

        }
        if (tense === 'future' || tense === 'conditional') {

            stem = name.replace('are', 'her');

        }

        return stem;

    }
}

export default areTableGenerator;
