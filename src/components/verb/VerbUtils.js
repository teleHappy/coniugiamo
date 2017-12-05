import _ from 'lodash';

import are from '../../data/verbs/are';
import areTableGenerator from './areTableGenerator';
import ereTableGenerator from './ereTableGenerator';
import ireTableGenerator from './ireTableGenerator';

const rules = require('../../data/rules.json');

const ereTG = new ereTableGenerator();

const areTG = new areTableGenerator();

const ireTG = new ireTableGenerator();

class VerbUtils {

    getConjugation(name){
        return name.slice(name.length - 3);
    }

    getConjugatedVerbTable (name, tense, verbGroup) {
        
        if (!name) {

            throw new Error('verb not supplied');

        }

        if (!tense) {

            throw new Error('tense not supplied');

        }

        if (!this.validateVerbName(name)) {

            throw new Error('non-valid verb ending');

        }

        const conjugation = this.getConjugation(name);
        const verbDataObj = this.getVerbDataObj(name, verbGroup);
        const {regular} = verbDataObj;
        
        let verbTableData = [];
        // TODO: handle irregular verbs

        if (regular) {
            if(conjugation === 'are'){
                verbTableData = areTG.getTableData(verbDataObj, tense)
            }
            if(conjugation === 'ere'){
                verbTableData = ereTG.getTableData(verbDataObj, tense)
            }
            if(conjugation === 'ire'){
                verbTableData = ireTG.getTableData(verbDataObj, tense)
            }

            if(conjugation === []){
                throw new Error('unhandled verb');
            }

        }

        return verbTableData;

    }

    validateVerbName (name) {

        return _.indexOf(rules.endingsArray, name.slice(-3)) >= 0;

    }

    getVerbDataObj (name, verbGroup) {

        return _.find(verbGroup, {'name': name});

    }

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
    getThreeVerbTables (name, tenses, verbGroup) {

        let vt = [];
        const conjugatedVerbTables = [];
        // Populate three conjugation tables

        for (let idx = 0; idx < tenses.length; idx += 1) {

            vt = this.getConjugatedVerbTable(name, tenses[idx], verbGroup);
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
    getUniqueAreVerbObjectsByCount (count, verbGroup) {
        
        const offset = count - 1;

        const x = Math.floor(Math.random() * verbGroup.length);

        const uniqueArray = [verbGroup[Math.floor(Math.random() * verbGroup.length)]];

        for (let idx = 0; idx < offset; idx += 1) {

            const differenceArray = _.difference(verbGroup, uniqueArray);
            const min = Math.ceil(0);

            const max = Math.floor(differenceArray.length - 1);

            uniqueArray.push(differenceArray[Math.floor(Math.random() * (max - min)) + 1]);

        }

        return this.getShuffledVerbArray(uniqueArray);

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

    getShuffledVerbArray (array) {
        var currentIndex = array.length, 
            temporaryValue, 
            randomIndex;
    
        while (0 !== currentIndex) {
    

            randomIndex = Math.floor(Math.random() * currentIndex);

            currentIndex -= 1;
        
            temporaryValue = array[currentIndex];

            array[currentIndex] = array[randomIndex];

            array[randomIndex] = temporaryValue;

        }
    
        return array;
    }

}

export default new VerbUtils();
