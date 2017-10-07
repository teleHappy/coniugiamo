import React from 'react';

const Button = props =>
            <div className="buttonContainer">
                <button onClick={props.action} disabled={props.disabled}>
                    {props.label}
                </button>
            </div>

export default Button;
