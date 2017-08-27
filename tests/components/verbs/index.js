
/* eslint no-undef: 0 */ 
import Verbs from '../../../src/components/verbs/Verbs'

var assert = require('chai').assert;



describe('Testing verb components', function(){
    let verbs = null;

    beforeEach(function(){
        verbs = new Verbs();
    })
    it('verbs is an object', function(){
        assert.exists(verbs, 'verbs is either `null` or `undefined`');
    })

    it('should validate verb names', function() {
        assert.isTrue(verbs.validateVerbName("parlare"), 'parlare is a valid verb name')
        assert.isFalse(verbs.validateVerbName("parlaro"), 'parlare is a valid verb name')
    });
})