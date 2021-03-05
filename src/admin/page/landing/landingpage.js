import React from 'react';
import '../../style/admin.scss';
import Left from './leftside';
import Right from './rightside';



export default function Manage () {
    return (
        <div className='manageCont'>
            <Left />
            <Right />
        </div>
    )
}

