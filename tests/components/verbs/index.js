
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

    describe('Testing regular present tense verb stems for conjugation', function(){
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
    
        it('present tense: returns properly formatted regular verb stem for standard "ere" verbs')
        
        it('present tense: returns properly formatted regular verb stem for type 1 "ire" verbs')
        it('present tense: returns properly formatted regular verb stem for type 2 "ire" verbs')
    })
    
    describe('Testing regular future tense verb stems for conjugation', function(){
        it('future tense: returns properly formatted regular verb stem for "are verbs', function(){
            assert.equal(verb.areTableGenerator.getVerbStem('parlare', 'future', 'io'), 'parler')
        })
    })
    



})