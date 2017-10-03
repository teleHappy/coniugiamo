/* eslint   no-warning-comments: ["error", { "terms": ["fixme", "any other term"], "location": "anywhere" }],
            id-length: 0, no-console: 0, no-mixed-operators: 1, no-empty-function: 1, new-cap: 0, max-statements: 0,
            no-magic-numbers: 0, multiline-ternary: 0, no-nested-ternary: 0, no-ternary: 0
*/

/**
 * VerbTableFactory returns verb tables
 * delegates regular/irregular verb table creation
 */
import are from '../../data/verbs/are';


import areTableGenerator from './areTableGenerator';
import ereTableGenerator from './ereTableGenerator';
import ireTableGenerator from './ireTableGenerator';

import _ from 'lodash';

// Require data files
const rules = require('../../data/rules.json');

class Verb {

    constructor () {

        this.areTableGenerator = new areTableGenerator();
        this.ereTableGenerator = new ereTableGenerator();
        this.ireTableGenerator = new ireTableGenerator();

    }

    getConjugatedVerbTable (name, tense) {

        if (!name) {

            throw new Error('verb not supplied');

        }

        if (!tense) {

            throw new Error('tense not supplied');

        }

        if (!this.validateVerbName(name)) {

            throw new Error('non-valid verb ending');

        }

        const verbDataObj = this.getVerbDataObj(name);
        const {regular} = verbDataObj;
        const conjugation = name.slice(name.length - 3);
        let verbTableData = [];
        // TODO: handle irregular verbs

        if (regular) {

            verbTableData = conjugation === 'are' ? this.areTableGenerator.getTableData(verbDataObj, tense)
                : conjugation === 'ere' ? this.ereTableGenerator.getTableData(verbDataObj, tense)
                    : conjugation === 'ire' ? this.ireTableGenerator.getTableData(verbDataObj, tense) : () => {

                        throw new Error('unhandled verb');

                    };

        }

        return verbTableData;

    }

    validateVerbName (name) {

        return _.indexOf(rules.endingsArray, name.slice(-3)) >= 0;

    }

    getVerbDataObj (verb) {

        return _.find(are, {'name': verb});

    }

}

export default Verb;
