import React from 'react'
import img from '../../assets/kids.png'

const Kids = () => {
    return (
        <div className="kids container" style={{borderBottom:"8px solid #222222"}}>
            <img src={img} alt="" />
            <div className="kids-text">
                <h1> Create profiles for kids.</h1>
                <h3>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</h3>
            </div>
        </div>
    )
}

export default Kids
