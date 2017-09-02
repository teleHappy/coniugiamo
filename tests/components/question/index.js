/* eslint no-undef: 0 */ 
import Question from '../../../src/components/question/Question'
//import Utils from '../../../src/components/question/Utils'
var assert = require('chai').assert;

describe('Tests for the Question component', function(){
    
    let question = null

    before(function(){
        question = new Question();
    })

    it('Question.getQuestion returns a string', function(){
        assert(typeof question.getQuestion() === 'string', 'method does not return a string')
    })

    // describe('Testing methods in utils module', function(){
    //     it('utils.getRandomPersonIndex should return a valid integer', function(){
    //         assert.exists(utils.getRandomPersonIndex(), 'randomPersonIndex is either `null` or `undefined`')
    //     })
    //     it('utils.getRandomPersonIndex should return an integer greater than 0', function(){
    //         assert.isAtLeast(utils.getRandomPersonIndex(), 0, `randomPersonIndex is less than 0`)
    //     })
    //     it('utils.getRandomPersonIndex should return an integer less than 5', function(){
    //         assert.isAtMost(utils.getRandomPersonIndex(), 5, `randomPersonIndex is less than 0`)
    //     })
    // })
    
})