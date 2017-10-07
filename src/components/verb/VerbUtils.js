import Verb from './Verb';
import {are} from '../../data/verbs';

import _ from 'lodash';

const rules = require('../../data/rules.json');
const verb = new Verb();

class VerbUtils {

    getRandomTense () {

        const min = Math.ceil(0);
        const max = Math.floor(rules.tenses.length);

        return rules.tenses[Math.floor(Math.random() * (max - min)) + min];

    }

    getUniqueTenseArrayByCount (tense, count) {

        const tensesArray = rules.tenses;
        const countOffset = count - 1;
        const uniqueArray = [tense];

        for (let idx = 0; idx < countOffset; idx += 1) {

            const differenceArray = _.difference(tensesArray, uniqueArray);
            const min = Math.ceil(0);
            const max = Math.floor(differenceArray.length);

            uniqueArray.push(differenceArray[Math.floor(Math.random() * (max - min)) + min]);

        }

        return uniqueArray;

    }

    // Handle generating three unique verb tables and decorate each with an 'isCorrect' object
    getThreeVerbTables (name, tenses) {

        let vt = [];
        const conjugatedVerbTables = [];
        // Populate three conjugation tables

        for (let idx = 0; idx < tenses.length; idx += 1) {

            vt = verb.getConjugatedVerbTable(name, tenses[idx]);
            // The first entry is the correct quiz verb, track with this added object
            if (idx === 0) {

                vt.push({'isCorrect': true});

            } else {

                vt.push({'isCorrect': false});

            }

            conjugatedVerbTables.push(vt);

        }

        return conjugatedVerbTables;

    }

    getRandomPersonIndex () {

        const min = Math.ceil(0);
        const max = Math.floor(rules.pronouns.length);

        return Math.floor(Math.random() * (max - min) + min);

    }

    // Gets an array of unique verb objects
    // Used to instatiate verb quiz and assure that there are no duplicate verbs in any quiz
    // TODO: incorporate ere, ire and irregular verbs
    getUniqueAreVerbObjectsByCount (count) {

        const verbObjArray = are;
        const offset = count - 1;
        const uniqueArray = [are[0]];

        for (let idx = 0; idx < offset; idx += 1) {

            const differenceArray = _.difference(verbObjArray, uniqueArray);
            const min = Math.ceil(0);

            const max = Math.floor(differenceArray.length - 1);

            uniqueArray.push(differenceArray[Math.floor(Math.random() * (max - min)) + 1]);

        }

        return uniqueArray;

    }

    getVerbNamesFromObjectArray (arr) {

        const newArray = arr.map(obj => obj.name);

        return newArray;

    }

    getRandomQuizVerbObject () {

        const verbs = this.quizVerbArray;
        const min = Math.ceil(0);
        const max = Math.floor(verbs.length);

        return verbs[Math.floor(Math.random() * (max - min)) + min];

    }

    // Returns an array of {count} random verb names from verbObjectArry
    getUniqueKeyValuesFromObjectArrayByCount (value, array, count) {

        const verbNameArray = this.getVerbNamesFromObjectArray(array);
        const uniqueArray = [];

        for (let int = 0; int < count; int += 1) {

            const differenceArray = _.difference(verbNameArray, uniqueArray);
            const min = Math.ceil(0);
            const max = Math.floor(differenceArray.length);

            uniqueArray.push(differenceArray[Math.floor(Math.random() * (max - min)) + min]);

        }

        return uniqueArray;

    }

}

export default new VerbUtils();
