import React, {useState} from 'react'
import logo from '../../assets/netflix-logo.png'
import { Link } from 'react-router-dom'
import './style.css'

const SignIn = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [remember, setRemember] = useState(false)

    const handleLogin = (e) => {
        e.preventDefault();
        if(!email || !password) return alert("Enter your email and password")
        console.log(email, password, remember);

        setPassword('')
        setEmail('')        
        setRemember(false)
        document.getElementById('checkbox').checked = false;
    }

    return (
        <div className="sign-in">
            <header>
                <img style={{width:"100px", padding:"20px 5%"}} src={logo} alt='netflix' />
            </header>
            <form onSubmit={handleLogin}>
                <p className="sign" style={{margin:"30px 0"}}>Sign In</p>
                <div>
                    <label></label>
                    <input id="input" value={email} onChange={(e)=> setEmail(e.target.value)} type="text" placeholder="Enter email or phone" />
                </div>
                <div>
                    <label></label>
                    <input id="input" value={password} onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="Password" />
                </div>
                <button className="submit-btn" type='submit'>Sign In</button>
                <div className="remember">
                    <div style={{display:"flex", alignItems:"center"}}>
                        <input id="checkbox" type="checkbox" onChange={() => setRemember(!remember) } /> 
                        <label style={{color:"#B3ADAD"}}>Remember me</label>
                    </div>
                    <p style={{color:"#B3ADAD"}}>Need help?</p>
                </div>

                <div className="sign-up">
                    <p><a href="/#" style={{color:"#8C8C8C"}}>Login with Facebook</a></p>
                    <p style={{fontSize:"16px"}}> New to Netflix <Link to='/signup'><a href="/#" style={{color:"#fff"}}>Sign Up Now</a></Link></p>
                    <p style={{color:"#B3ADAD"}}>This page is protected by Google reCAPTCHA to ensure you're not a bot</p>
                </div>
            </form>

            <div className="footer signin-f">
            <p style={{padding:"10px 10%"}} >Questions? Contact us.</p>
            <div className="footer-links">
                <ul>
                    <li>FAQ</li>
                    <li>Cookie Preferences</li>
                </ul>
                <ul>
                    <li>Help Center</li>
                    <li>Coporate Information</li>
                </ul>
                <ul>
                    <li>Time of Use</li>
                </ul>
                <ul>
                    <li>Privacy</li>
                </ul>
            </div>
            </div>
        </div>
    )
}

export default SignIn
