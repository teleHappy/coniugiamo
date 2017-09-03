/**
 * VerbTableFactory returns verb tables  
 * delegates regular/irregular verb table creation
 */

import {are} from '../../data/verbs';
import areTableGenerator from './areTableGenerator';
import ereTableGenerator from './ereTableGenerator';
import ireTableGenerator from './ireTableGenerator';

import _ from 'lodash';

//require data files
const rules = require('../../data/rules.json');

class Verb{

    constructor(){
        this.areTableGenerator = new areTableGenerator()
        this.ereTableGenerator = new ereTableGenerator()
        this.ireTableGenerator = new ireTableGenerator()
    }

    getConjugatedVerbTable(name, tense){
        
        if(!name) throw new Error('verb not supplied')

        if(!tense) throw new Error('tense not supplied')

        if(!this.validateVerbName(name)) throw new Error('non-valid verb ending')

        const verbDataObj = this.getVerbDataObj(name)
        const regular = verbDataObj.regular;
        const conjugation = name.slice(-3);
        let verbTableData
        // TODO: handle irregular verbs
        if(regular){
            verbTableData = (conjugation === 'are') ? this.areTableGenerator.getTableData(verbDataObj, tense) : 
            (conjugation === 'ere') ? this.ereTableGenerator.getTableData(verbDataObj, tense) : 
            (conjugation === 'ire') ? this.ireTableGenerator.getTableData(verbDataObj, tense) : () => {throw new Error ('unhandled verb')}
        }

        return verbTableData;
    }

    validateVerbName(name){
        return  _.indexOf(rules.endingsArray, name.slice(-3)) >= 0
    }

    getVerbDataObj(verb){
        return _.find(are, {"name": verb})
    }

}

export default Verb