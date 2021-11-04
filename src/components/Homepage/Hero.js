import React, { useState } from 'react'
import logo from '../../assets/netflix-logo.png'

const Hero = () => {

    const [email, setEmail] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        console.log(email)

        setEmail("")
    }

    return (
        <div className='container hero' style={{height: "110vh", borderBottom:"8px solid #222222"}}>
            <header className="hero-header">
                <img src={logo} alt="Netflix-logo" />
                <button>Sign In</button>
            </header>
            <div className="hero-body">
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h4>Watch anywhere. Cancel anytime.</h4>
                <h5> Ready to watch? Enter your email to create or restart your membership.</h5>
                <form onSubmit={handleSubmit} className="hero-input">
                    <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                    <button type="submit">Get Started</button>
                </form>
            </div>
        </div>
    )
}

export default Hero
