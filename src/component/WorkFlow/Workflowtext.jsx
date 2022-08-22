import React from 'react'
import './Workflow.css'

const Workflowdata = [
    { tagNumber: '01', workFlowTitle: 'Evaluate Property' },
    { tagNumber: '02', workFlowTitle: 'Meet Your Agent ' },
    { tagNumber: '03', workFlowTitle: 'Close the Deal' },
    { tagNumber: '04', workFlowTitle: 'Have Your Property' }
]

const Workflowtext = () => {

    return (

        <>
            <div className='Workflow_wrapper'>
                {Workflowdata.map((phone) =>

                    <div>
                        <div className='Workflow_container'>
                            <span className='work_number'>{phone.tagNumber}</span>
                            <img src='images/blob.svg' alt='workflow' className='workflow-image' />
                        </div>
                        <h3 className='Workflowtitle'>{phone.workFlowTitle}</h3>
                        <p className='Workflowsubtitle'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    </div>



                )}
            </div>
        </>





    )
}

export default Workflowtext
