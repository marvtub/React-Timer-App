import React from 'react'
import logo from '../Logo.png'

function Header(){



    return(
        <div className="header">
            <nav>
                <img src={logo} alt="Logo" />
                <h1>Marvins React Pomodoro Timer</h1>
            </nav>

        </div>


    )
}

export default Header