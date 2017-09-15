import React from 'react'

// TODO: far from beautiful, this function can be improved...

const VerbDisplayTable = ({verbTablesArray}) =>{

        const verbTableArray = verbTablesArray[0];
        
        return (
            <div id="verbTableContainer">
                <table>
                    <tbody>
                        <tr>
                            <th>{verbTableArray[0][0]}</th>
                            <td>{verbTableArray[0][1]}</td>
                            <th>{verbTableArray[3][0]}</th>
                            <td>{verbTableArray[3][1]}</td>
                        </tr>
                        <tr>
                            <th>{verbTableArray[1][0]}</th>
                            <td>{verbTableArray[1][1]}</td>
                            <th>{verbTableArray[4][0]}</th>
                            <td>{verbTableArray[4][1]}</td>
                        </tr>
                        <tr>
                            <th>{verbTableArray[2][0]}</th>
                            <td>{verbTableArray[2][1]}</td>
                            <th>{verbTableArray[5][0]}</th>
                            <td>{verbTableArray[5][1]}</td>
                        </tr>
                    </tbody>
                </table>
            </div>)
    }

 export default VerbDisplayTable;
 
        