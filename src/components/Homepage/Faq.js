import React, { useState } from 'react'
import { faqData } from './faqData'

const Faq = () => {

    const [data] = useState(faqData)

    const [email, setEmail] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        console.log(email)

        setEmail("")
    }

    return (
        <div className="faq container" style={{borderBottom:"8px solid #222222"}}>
            <h1>Frequently Asked Questions</h1>

            <div className="faq-all">
            {
                data.map( item => {
                    return <Questions data={item} />
                    
                })
            }
            </div>

            <h5> Ready to watch? Enter your email to create or restart your membership.</h5>
            <form onSubmit={handleSubmit} className="hero-input">
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                <button type="submit">Get Started</button>
            </form>
        </div>
    )
}

export default Faq





const Questions = ({ data }) =>{ 

    const [isOpen, setIsOpen] = useState(false)

    return(
        <>
            {
                <div className="faq-details" key={data.title}>
                    <div onClick={() => setIsOpen(!isOpen)} className="title"><span>{data.title}</span><span style={{fontSize:"25px", fontWeight:"lighter"}}>{ isOpen ? "x" : "+" }</span></div>
                    { isOpen && <div className="message">{data.message}</div> }
                </div>
            }
        </>
    )
}