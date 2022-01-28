import React from 'react'
import './Workflow.css';

const Workflow = ({header, subHeader}) => {
    return (
         <>
          <div className='heading'>
              <span className='Subheading'>
                {header}
              </span>
              <h2 className='Subheading2'>{subHeader}</h2>
          </div>  
         </>
    )
}

export default Workflow;
