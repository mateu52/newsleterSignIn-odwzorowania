import React from 'react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
function Subnews(){
    const textInput = useRef();
    const handleInputValidation = () => {
        console.log(textInput.current.value.indexOf("@"));
        const valid = document.getElementsByClassName("valid")[0];
        
        console.log(valid)
        if(textInput.current.value.indexOf("@") === -1){
            valid.style.display ="block";
        }
        else{
            valid.style.display ="none";
        }
    }
    return(
        <div className="container" >
        <div className="newsletter">
        <div className="background-img" >
        </div>
        <div className="content">
            <h1>Stay updated</h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <div className="list">
            <div className="img" />
            <p>Product discovery and building what matters</p>
            </div>
            <div className="list">
            <div className="img" />
            <p>Measuring to ensure updates are a success</p>
            </div>
            <div className="list">
            <div className="img" />
            <p>And much more!</p>
            </div>
            <div  className="email">
                <p>Email address</p>
                <p className='valid'>Valid email required</p>
            </div>
            <input className="emailInput" 
            ref={textInput}
            onChange={handleInputValidation}
            placeholder="email@company.com" />
            
            <Link to={'/send'}>
                <button className="button">
                Subscribe to monthly newsletter
                </button>
            </Link>
        </div>
        </div> 
    </div>
    )
}

export default Subnews;