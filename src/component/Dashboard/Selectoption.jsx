import React from 'react'


const Selectoption = ({ data, labelName}) => {
    let option = data.map((eachData) => {
        return <option value="1">{eachData}</option>
    })
    return (
        <div>
            <label className='propertypostLabel2'>{labelName}</label>
            <select name="mode" className="propertyText1" required>         
                {option}   
            </select>
        </div>
    )
}

export default Selectoption;