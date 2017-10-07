import React, {Component} from 'react';

class Button extends Component{

    constructor(props){
        super(props);
    }
    render(){
        const disabled = this.props.disabled || false;
        return(
            <div className="buttonContainer">
                <button onClick={this.props.action} disabled={this.props.disabled}>
                    {this.props.label}
                </button>
            </div>
            )
    }
    
};

export default Button;
