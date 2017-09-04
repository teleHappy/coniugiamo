/* eslint no-undef: 0 */ 
import Quiz from '../../../src/components/Quiz'
import {are, ere, ire} from '../../../src/data/verbs'
const quiz = new Quiz();

var assert = require('chai').assert;

describe('Tests for the Quiz component', function(){

    describe('Testing methods in quiz module', function(){
        it('quiz.getRandomPersonIndex should return a valid integer', function(){
            assert.exists(quiz.getRandomPersonIndex(), 'randomPersonIndex is either `null` or `undefined`')
        })
        it('quiz.getRandomPersonIndex should return an integer greater than 0', function(){
            assert.isAtLeast(quiz.getRandomPersonIndex(), 0, `randomPersonIndex is less than 0`)
        })
        it('quiz.getRandomPersonIndex should return an integer less than or equal to 5', function(){
            assert.isAtMost(quiz.getRandomPersonIndex(), 5, `randomPersonIndex is greater than 5`)
        })
        
        it('quiz.getRandomVerbObject should return an object', function(){
            let verbObj = quiz.getRandomVerbObject('are')
            assert.isObject(verbObj, `was expecting an object`)
        })
        it(`should return an array of "are" verbs by name`, function(){
            const areVerbNames = quiz.getVerbNamesFromObjectArray(are)
            assert.isArray(areVerbNames)
        })
        it('should return an array of random and unique verb names whose length is three', function(){
            const threeArray = quiz.getUniqueKeyValuesFromObjectArrayByCount("name", are, 3, "parlare")
            assert.equal(threeArray.length, 3)
        })
        it('should return an array of random tenses (inclusive of "present") whose length is three', function(){
            const threeArray = quiz.getUniqueTenseArrayByCount("present", 3)
            assert.equal(threeArray.length, 3)
        })
        it('should return return an array with three verb tables', function(){
            const uniqueTenses = quiz.getUniqueTenseArrayByCount("present", 3)
            const threeVerbTablesArray = quiz.getThreeVerbTables("parlare", uniqueTenses)
            assert.equal(threeVerbTablesArray.length, 3)
        })
    })
    
})