import React from 'react'
import img from '../../assets/mobile.jpg'

const Download = () => {
    return (
        <div className="container download" style={{borderBottom:"8px solid #222222"}}>
            <img src={img} alt="Doownload to watch offline" />
            <div className="download-text">
                <h1> Download your shows to watch offline.</h1>
                <h3>Save your favorites easily and always have something to watch.</h3>
            </div>
        </div>
    )
}

export default Download
