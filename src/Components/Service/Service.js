
import React from 'react';
import { Link } from 'react-router-dom';

import './Service.css';


const Service = (props) => {



    return (


        <div className="m-5   ">

            <div>
                <img className='fluid img' src={props.servic.picture} alt="" />
                <h4 className='text mt-3 '>{props.servic.name}</h4>
                <p >{props.servic.Details.slice(0, 30)}......</p>
                <Link to={`/detail/${props.servic.key}`} className="btn btn-sm px-4 py-1 fs-6 btn-custom">Details</Link>
            </div>


        </div>

    );
};

export default Service;