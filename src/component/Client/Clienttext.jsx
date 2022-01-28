import React from 'react'
import './Client.css';

const Clienttextdata = [
    { title: 'Robert Hooke', role: 'Marketing Manager', img: 'images/male.jpg' },
    { title: 'Matthrew Bentley', role: 'Service Engineer', img: 'images/male4.jpg' },
    { title: 'Christian Lukaku', role: 'Software Engineer', img: 'images/male3.jpg' }


]

const Clienttext = () => {
    return (
        <>
            <div className='Workflow_wrapper'>
                {Clienttextdata.map((phone) =>
                    <div className='client-info-wrapper'>
                        <span className='quote-left'> <i class="fa fa-quote-left"></i>
                        </span>
                        <p className='client-review mb'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <div className='client-info-container mb'>
                            <div className='client-img'>
                                <img src={phone.img} />
                            </div>
                            <div className='client-details'>
                                <p className='client-name'>{phone.title}</p>
                                <span className='client-role'>{phone.role}</span>
                            </div>
                        </div>

                    </div>
                )}
            </div>
        </>
    )
}

export default Clienttext


