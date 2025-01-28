import React from 'react';
import './Body.css';
import bg from '../utils/img/bg.jpg'; 

function Body() {
    return (
        <div className='container2'>
            <div>
            {/* <img src={bg} alt="Body Image" /> */}
                <p className="line1"><b>SKIN CLEANSER</b></p><br />
                <h1><b>Balancing Gel<br />Cleanser</b></h1>
                
                <p className="line2">
                    A balancing gel Cleanser is a gentle yet effective skincare product <br />
                    designed to remove impurities, excess oil, and makeup while <br />
                    maintaining the skin's natural pH balance.
                </p><br></br>
            
                <button  href='Explore Now'className="v1">Explore Now</button>
                <button  href='How To Buy'className="v2">How To Buy</button>
                
            </div>
            
        
                
        
        </div>
    );
}

export default Body;
