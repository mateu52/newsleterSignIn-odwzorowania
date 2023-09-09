import { Link } from "react-router-dom";
import Subnews from "./Subsnews";
import React from 'react';

function Subaccept(){
    const handleClick = () => {
        return (
            <Subnews />
        )
    }
    return(
        <div className="container">
        <div className="newsletter succes">
        <div className="content">
        <div className="thanks"></div>
        <h1>Thanks for subscribing!</h1>
        <p>A confirmation email has been sent to ash@loremcompany.com. 
        Please open it and click the button inside to confirm your subscription.</p>
        <Link to={'/'}>
            <button onClick={handleClick} className="button">
            Dismiss message
            </button>
        </Link>
        </div>
        </div>
        </div>
    )
}
export default Subaccept;