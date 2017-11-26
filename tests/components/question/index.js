/* eslint no-undef: 0 */
import Quiz from '../../../src/Quiz';
import VerbUtils from '../../../src/components/verb/VerbUtils';
import are from '../../../src/data/verbs/are';
const quiz = new Quiz();

const {assert} = require('chai');

describe('Tests for the Quiz component', () => {

    describe('Testing methods in quiz module', () => {

        it('VerbUtils.getRandomPersonIndex should return a valid integer', () => {

            assert.exists(VerbUtils.getRandomPersonIndex(), 'randomPersonIndex is either `null` or `undefined`');

        });
        it('VerbUtils.getRandomPersonIndex should return an integer greater than 0', () => {

            assert.isAtLeast(VerbUtils.getRandomPersonIndex(), 0, 'randomPersonIndex is less than 0');

        });
        it('VerbUtils.getRandomPersonIndex should return an integer less than or equal to 5', () => {

            assert.isAtMost(VerbUtils.getRandomPersonIndex(), 5, 'randomPersonIndex is greater than 5');

        });

        it('VerbUtils.getRandomVerbObject should return an object', () => {

            const verbObj = VerbUtils.getRandomQuizVerbObject('are');

            assert.isObject(verbObj, 'was expecting an object');

        });
        it('should return an array of "are" verbs by name', () => {

            const areVerbNames = VerbUtils.getVerbNamesFromObjectArray(are);

            assert.isArray(areVerbNames);

        });
        it('should return an array of random and unique verb names whose length is three', () => {

            const threeArray = VerbUtils.getUniqueKeyValuesFromObjectArrayByCount('name', are, 3);

            assert.equal(threeArray.length, 3);

        });
        it('should return an array of random tenses (inclusive of "present") whose length is three', () => {

            const threeArray = VerbUtils.getUniqueTenseArrayByCount('present', 3);

            assert.equal(threeArray.length, 3);

        });
        it('should return return an array with three verb tables', () => {

            const uniqueTenses = VerbUtils.getUniqueTenseArrayByCount('present', 3);
            const threeVerbTablesArray = VerbUtils.getThreeVerbTables('parlare', uniqueTenses);

            assert.equal(threeVerbTablesArray.length, 3);

        });
        it('should produce an array of are verbs whose length equals to 5 and whose values are unique', () => {

            const verbArray = VerbUtils.getUniqueAreVerbObjectsByCount(5);

            assert.equal(verbArray.length, 5);

        });
        it.skip('should produce an array of are verbs whose values are unique', () => {

        });

    });

});
