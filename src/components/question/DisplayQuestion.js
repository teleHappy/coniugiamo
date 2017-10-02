/* eslint arrow-body-style: 0 */
import React, {Component} from 'react';


class DisplayQuestion extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        document.getElementsByClassName('questionTextContainer')[0].style.display='block';
        
    }

    componentWillReceiveProps(){
        setTimeout(function(){
            document.getElementsByClassName('questionTextContainer')[0].style.display='block';
        }, 200)
        
        
    }

    render(){
        
        return (
            <div className="questionTextWrapper">
                <div className="questionTextContainer">    
                    <p className="questionText">Which is the correct <span className="param">{this.props.pronoun}</span> form for the <span className="param">{this.props.tense}</span> tense of <span className="param">{this.props.verbName}</span>?</p>
                </div>
            </div>
        );
    }
    

};

export default DisplayQuestion;
