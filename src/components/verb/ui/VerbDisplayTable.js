import React from 'react'

// TODO: far from beautiful, this function can be improved...

const VerbDisplayTable = ({ verbTablesArray, verbTranslation, verbName }) => {
    console.log(verbTranslation)
    const verbTableArray = verbTablesArray[0];

    return (

        <div className="verbTableWrapper">
            <div className="verbTableHeader">{`${verbName}: ${verbTranslation}`}</div>
            <div className="verbTableContainer">

                <div className="leftCol">
                    <div>{verbTableArray[0][0]}</div>
                    <div>{verbTableArray[0][1]}</div>
                    <div>{verbTableArray[1][0]}</div>
                    <div>{verbTableArray[1][1]}</div>
                    <div>{verbTableArray[2][0]}</div>
                    <div>{verbTableArray[2][1]}</div>
                </div>

                <div className="rightCol">
                    <div>{verbTableArray[3][0]}</div>
                    <div>{verbTableArray[3][1]}</div>
                    <div>{verbTableArray[4][0]}</div>
                    <div>{verbTableArray[4][1]}</div>
                    <div>{verbTableArray[5][0]}</div>
                    <div>{verbTableArray[5][1]}</div>
                </div>
            </div>
        </div>

    )
}

export default VerbDisplayTable;

