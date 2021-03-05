import React from 'react';
import {Link} from 'react-router-dom';

export default function Nav () {
    return (
        <div className='nav'>
            <div className='navbar'>
                <Link to='/' style={{textDecoration: 'none'}}> 
                <h1>
                    EnovLab Admin
                </h1>
                </Link>
            </div>
        </div>
    )
}
