import React from 'react';

const QuizForm = props => 

    <div className="formWrapper">
        <form action="" className="verbEndingForm">
            <fieldset>        
                <div>
                    <input onClick={props.verbEndingHandler} value="are" type="radio" name="areVerb" id="areVerb"/>
                    <label htmlFor="areVerb">are</label>
                </div>
                <div>    
                    <input onClick={props.verbEndingHandler} value="ere" type="radio" name="ereVerb" id="ereVerb"/>
                    <label htmlFor="ereVerb">ere</label>
                </div>
                <div>
                    <input onClick={props.verbEndingHandler} value="ire" type="radio" name="ireVerb" id="ireVerb"/>
                    <label htmlFor="ireVerb">ire</label>
                </div>
            </fieldset>
        </form>
    </div>

export default QuizForm;
