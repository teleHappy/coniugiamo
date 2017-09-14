/* eslint no-undef: 0 */
import Quiz from '../../../src/components/quiz/Quiz';
import {are, ere, ire} from '../../../src/data/verbs';
const quiz = new Quiz();

const {assert} = require('chai');

describe('Tests for the Quiz component', () => {

    describe('Testing methods in quiz module', () => {

        it('quiz.getRandomPersonIndex should return a valid integer', () => {

            assert.exists(quiz.getRandomPersonIndex(), 'randomPersonIndex is either `null` or `undefined`');

        });
        it('quiz.getRandomPersonIndex should return an integer greater than 0', () => {

            assert.isAtLeast(quiz.getRandomPersonIndex(), 0, 'randomPersonIndex is less than 0');

        });
        it('quiz.getRandomPersonIndex should return an integer less than or equal to 5', () => {

            assert.isAtMost(quiz.getRandomPersonIndex(), 5, 'randomPersonIndex is greater than 5');

        });

        it('quiz.getRandomVerbObject should return an object', () => {

            const verbObj = quiz.getRandomQuizVerbObject('are');

            assert.isObject(verbObj, 'was expecting an object');

        });
        it('should return an array of "are" verbs by name', () => {

            const areVerbNames = quiz.getVerbNamesFromObjectArray(are);

            assert.isArray(areVerbNames);

        });
        it('should return an array of random and unique verb names whose length is three', () => {

            const threeArray = quiz.getUniqueKeyValuesFromObjectArrayByCount('name', are, 3);

            assert.equal(threeArray.length, 3);

        });
        it('should return an array of random tenses (inclusive of "present") whose length is three', () => {

            const threeArray = quiz.getUniqueTenseArrayByCount('present', 3);

            assert.equal(threeArray.length, 3);

        });
        it('should return return an array with three verb tables', () => {

            const uniqueTenses = quiz.getUniqueTenseArrayByCount('present', 3);
            const threeVerbTablesArray = quiz.getThreeVerbTables('parlare', uniqueTenses);

            assert.equal(threeVerbTablesArray.length, 3);

        });
        it('should produce an array of are verbs whose length equals to 5 and whose values are unique', () => {

            const verbArray = quiz.getUniqueAreVerbObjectsByCount(5);

            assert.equal(verbArray.length, 5);

        });
        it.skip('should produce an array of are verbs whose values are unique', () => {

        });

    });

});
