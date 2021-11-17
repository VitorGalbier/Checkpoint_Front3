import './style.scss';

import React from 'react'

export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                    <a href="#">
                        Home
                    </a>
                    </li>
                    <li>
                    <a href="#">
                        About Me
                    </a>
                    </li>
                    <li>
                    <a href="#">
                        Projects
                    </a>
                    </li>
                    <li>
                    <a href="#">
                        Contact Me
                    </a>
                    </li>
                </ul>    
            </nav>   
        </header>
    )
}

