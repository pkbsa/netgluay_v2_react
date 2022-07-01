import React from 'react'
import {Link} from 'react-router-dom'

import './homepage.css'

export default function Homepage(){
    return(
        <div className='homepage'>
            <div className='mainboxhome'>
                <div className='homeinsidebox'>
                    <h1>NetGluay</h1>
                    <h3>You Are Seem To Be Lost</h3>
                    <Link to="/dashboard">
                        < button id="loginBox">Get Back</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}