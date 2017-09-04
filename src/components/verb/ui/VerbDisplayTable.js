 import React, {Component} from 'react'

class VerbDisplayTable extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const qArr = this.props.verbTable;
        // eslint-disable-next-line
        let s1Label, s1Verb, s2Label, s2Verb, s3Label, s3Verb, p1Label, p1Verb, p2Label, p2Verb, p3Label, p3Verb = "";
        if(qArr.length > 0){
            s1Label = qArr[0][0];
            s1Verb = qArr[0][1];
    
            s2Label = qArr[1][0];
            s2Verb = qArr[1][1];
    
            s3Label = qArr[2][0];
            s3Verb = qArr[2][1];
    
            p1Label = qArr[3][0];
            p1Verb = qArr[3][1];
    
            p2Label = qArr[4][0];
            p2Verb = qArr[4][1];
    
            p3Label = qArr[5][0];
            p3Verb = qArr[5][1];
            
        }            
        return (
            <div>
            <div>
                <table>
                    
                    <tbody>
                        <tr>
                            <th>{s1Label}</th>
                            <td>{s1Verb}</td>
                            <th>{p2Label}</th>
                            <td>{p1Verb}</td>
                        </tr>
                        <tr>
                            <th>{s2Label}</th>
                            <td>{s2Verb}</td>
                            <th>{p2Label}</th>
                            <td>{p2Verb}</td>
                        </tr>
                        <tr>
                            <th>{s3Label}</th>
                            <td>{s3Verb}</td>
                            <th>{p3Label}</th>
                            <td>{p3Verb}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>)
    }
    
 }

 export default VerbDisplayTable;
 
        