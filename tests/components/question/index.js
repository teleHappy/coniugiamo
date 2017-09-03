/* eslint no-undef: 0 */ 
import Question from '../../../src/components/question/Question'
import {are, ere, ire} from '../../../src/data/verbs'

var assert = require('chai').assert;

const question = new Question({"params": {
    "verbEnding": "are",
    "personIndex": 0,
    "tense": "present"
}});

describe('Tests for the Question component', function(){

    describe('Testing methods in question module', function(){
        it('question.getRandomPersonIndex should return a valid integer', function(){
            assert.exists(question.getRandomPersonIndex(), 'randomPersonIndex is either `null` or `undefined`')
        })
        it('question.getRandomPersonIndex should return an integer greater than 0', function(){
            assert.isAtLeast(question.getRandomPersonIndex(), 0, `randomPersonIndex is less than 0`)
        })
        it('question.getRandomPersonIndex should return an integer less than or equal to 5', function(){
            assert.isAtMost(question.getRandomPersonIndex(), 5, `randomPersonIndex is greater than 5`)
        })
        
        it('question.getRandomVerbObject should return an object', function(){
            let verbObj = question.getRandomVerbObject()
            assert.isObject(verbObj, `was expecting an object`)
        })
        it(`should return an array of "are" verbs by name`, function(){
            const areVerbNames = question.getVerbNamesFromObjectArray(are)
            assert.isArray(areVerbNames)
        })
        it('should return an array of random and unique verb names whose length is three', function(){
            const threeArray = question.getUniqueKeyValuesFromObjectArrayByCount("name", are, 3, "parlare")
            assert.equal(threeArray.length, 3)
        })
        it('should return an array of random tenses (inclusive of "present") whose length is three', function(){
            const threeArray = question.getUniqueTenseArrayByCount("present", 3)
            assert.equal(threeArray.length, 3)
        })
        it('should return return an array with three verb tables', function(){
            const uniqueTenses = question.getUniqueTenseArrayByCount("present", 3)
            const threeVerbTablesArray = question.getThreeVerbTables("parlare", uniqueTenses)
            assert.equal(threeVerbTablesArray.length, 3)
        })
    })
    
})