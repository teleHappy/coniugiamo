
/* eslint no-undef: 0 */ 
import Verb from '../../../src/components/verbs/Verb'
var assert = require('chai').assert;

describe('Testing verb components', function(){
    let verb = null;

    beforeEach(function(){
        verb = new Verb();
    })
    it('verbs is an object', function(){
        assert.exists(verb, 'verbs is either `null` or `undefined`');
    })

    it('should validate verb names', function() {
        assert.isTrue(verb.validateVerbName("parlare"), 'parlare is a valid verb name')
        assert.isFalse(verb.validateVerbName("parlaro"), 'parlare is a valid verb name')
    });
})