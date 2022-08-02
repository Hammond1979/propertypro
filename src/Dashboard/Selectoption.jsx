import React from 'react'


const Selectoption = ({ data, labelName, onChange, name}) => {
    let option = data.map((eachData) => {
        return <option value={eachData}>{eachData}</option>
    })
    return (
        <div>
            <label className='propertypostLabel2'>{labelName}</label>
            <select name={name} className="propertyText1"
            onChange={onChange}
             required>         
                {option}   
            </select>
        </div>
    )
}

export default Selectoption;