
/* eslint no-undef: 0 */ 
import Verb from '../../../src/components/verbs/Verb'
var assert = require('chai').assert;

describe('Testing Verb component', function(){
    let verb = null;

    before(function(){
        verb = new Verb();
    })
    it('verb is neither null or undefined', function(){
        assert.exists(verb, 'verb is either `null` or `undefined`');
    })

    it('has a valid verb ending', function() {
        assert.isTrue(verb.validateVerbName("parlare"), 'parlare is a valid verb name')
        assert.isFalse(verb.validateVerbName("parlar"), 'parlare is a valid verb name')
    });

    describe('Testing verb stems for regular "are" conjugation', function(){
        it('present tense: returns properly formatted regular verb stem for standard "are" verbs', function(){
            assert.equal(verb.areTableGenerator.getVerbStem('parlare', 'present', 'io'), 'parl')
        })
    
        it('present tense:returns properly formatted regular verb stem for "-ciare", "-giare" verbs', function(){
            assert.equal(verb.areTableGenerator.getVerbStem('cominciare', 'present', 'io'), 'cominci')
            assert.equal(verb.areTableGenerator.getVerbStem('cominciare', 'present', 'tu'), 'cominci')
            assert.equal(verb.areTableGenerator.getVerbStem('cominciare', 'present', 'lui/lei/Lei'), 'cominc')
            assert.equal(verb.areTableGenerator.getVerbStem('cominciare', 'present', 'noi'), 'cominc')
            assert.equal(verb.areTableGenerator.getVerbStem('cominciare', 'present', 'voi'), 'cominci')
            assert.equal(verb.areTableGenerator.getVerbStem('cominciare', 'present', 'loro/Loro'), 'cominci')
            
            assert.equal(verb.areTableGenerator.getVerbStem('mangiare', 'present', 'io'), 'mangi')
            assert.equal(verb.areTableGenerator.getVerbStem('mangiare', 'present', 'tu'), 'mangi')
            assert.equal(verb.areTableGenerator.getVerbStem('mangiare', 'present', 'lui/lei/Lei'), 'mang')
            assert.equal(verb.areTableGenerator.getVerbStem('mangiare', 'present', 'noi'), 'mang')
            assert.equal(verb.areTableGenerator.getVerbStem('mangiare', 'present', 'voi'), 'mangi')
            assert.equal(verb.areTableGenerator.getVerbStem('mangiare', 'present', 'loro/Loro'), 'mangi')
        })
    
        it('present tense: returns properly formatted regular verb stem for "-care", "-gare" verbs', function(){
            assert.equal(verb.areTableGenerator.getVerbStem('cercare', 'present', 'io'), 'cerc')
            assert.equal(verb.areTableGenerator.getVerbStem('cercare', 'present', 'tu'), 'cerc')
            assert.equal(verb.areTableGenerator.getVerbStem('cercare', 'present', 'lui/lei/Lei'), 'cerch')
            assert.equal(verb.areTableGenerator.getVerbStem('cercare', 'present', 'noi'), 'cerch')
            assert.equal(verb.areTableGenerator.getVerbStem('cercare', 'present', 'io'), 'cerc')
            assert.equal(verb.areTableGenerator.getVerbStem('cercare', 'present', 'io'), 'cerc')
      
            assert.equal(verb.areTableGenerator.getVerbStem('pagare', 'present', 'io'), 'pag')
            assert.equal(verb.areTableGenerator.getVerbStem('pagare', 'present', 'tu'), 'pag')
            assert.equal(verb.areTableGenerator.getVerbStem('pagare', 'present', 'lui/lei/Lei'), 'pagh')
            assert.equal(verb.areTableGenerator.getVerbStem('pagare', 'present', 'noi'), 'pagh')
            assert.equal(verb.areTableGenerator.getVerbStem('pagare', 'present', 'voi'), 'pag')
            assert.equal(verb.areTableGenerator.getVerbStem('pagare', 'present', 'loro/Loro'), 'pag')
        })

        it('future tense: returns properly formatted regular verb stem for "are verbs', function(){
            assert.equal(verb.areTableGenerator.getVerbStem('parlare', 'future', 'io'), 'parler')
        })
        it('future tense: returns properly formatted regular verb stem for "-ciare" and "-giare" verbs')
        it('future tense: returns properly formatted regular verb stem for "-care" and "-gare" verbs')
    })
    
    describe('Testing verb stems for regular "ere" conjugation', function (){
        it('present tense: returns properly formatted regular verb stem for standard "ere" verbs', function(){
            assert.equal(verb.areTableGenerator.getVerbStem('vedere', 'present', 'io'), 'ved')
            assert.equal(verb.areTableGenerator.getVerbStem('vedere', 'present', 'noi'), 'ved')
        })
    })

    describe('Testing verb stems for regular "ire" conjugation', function(){
        it('present tense: returns properly formatted regular verb stem for "ire" verbs', function(){
            assert.equal(verb.ireTableGenerator.getVerbStem('dormire'), 'dorm')
            assert.equal(verb.ireTableGenerator.getVerbStem('capire'), 'cap')
        })
    })
    
    describe('Testing verb endings for regular "ire" verbs', function(){
        it('present tense: returns the proper verb ending for "type1" "ire" verbs', function(){
            assert.equal(verb.ireTableGenerator.getPresentVerbEnding(1, 0), 'o')
            assert.equal(verb.ireTableGenerator.getPresentVerbEnding(1, 1), 'i')
            assert.equal(verb.ireTableGenerator.getPresentVerbEnding(1, 2), 'e')
            assert.equal(verb.ireTableGenerator.getPresentVerbEnding(1, 3), 'iamo')
            assert.equal(verb.ireTableGenerator.getPresentVerbEnding(1, 4), 'ite')
            assert.equal(verb.ireTableGenerator.getPresentVerbEnding(1, 5), 'ono')
        })
        it('present tense: returns the proper verb ending for "type2" "ire" verbs', function(){
            assert.equal(verb.ireTableGenerator.getPresentVerbEnding(2, 0), 'isco')
            assert.equal(verb.ireTableGenerator.getPresentVerbEnding(2, 1), 'isci')
            assert.equal(verb.ireTableGenerator.getPresentVerbEnding(2, 2), 'isce')
            assert.equal(verb.ireTableGenerator.getPresentVerbEnding(2, 3), 'iamo')
            assert.equal(verb.ireTableGenerator.getPresentVerbEnding(2, 4), 'ite')
            assert.equal(verb.ireTableGenerator.getPresentVerbEnding(2, 5), 'iscono')
        })
    })
})