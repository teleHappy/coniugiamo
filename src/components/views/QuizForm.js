import React from 'react';

const QuizForm = props => 

    <div className="formWrapper">
        <form action="" className="verbEndingForm">
            <fieldset>        
                <div>
                    <input onClick={props.verbGroupHandler} value="are" type="radio" name="verbradio" id="areVerb"/>
                    <label htmlFor="areVerb">are</label>
                </div>
                <div>    
                    <input onClick={props.verbGroupHandler} value="ere" type="radio" name="verbradio" id="ereVerb"/>
                    <label htmlFor="ereVerb">ere</label>
                </div>
                <div>
                    <input onClick={props.verbGroupHandler} value="ire" type="radio" name="verbradio" id="ireVerb"/>
                    <label htmlFor="ireVerb">ire</label>
                </div>
            </fieldset>
        </form>
    </div>

export default QuizForm;
