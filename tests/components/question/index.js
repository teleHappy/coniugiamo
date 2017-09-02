/* eslint no-undef: 0 */ 
import Question from '../../../src/components/question/Question'
var assert = require('chai').assert;

const question = new Question();

describe('Tests for the Question component', function(){
    
    it('Question.getQuestion returns a string', function(){
        assert(typeof question.getQuestion() === 'string', 'method does not return a string')
    })


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
    })
    
})