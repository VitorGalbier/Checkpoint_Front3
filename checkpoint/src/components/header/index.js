import './style.scss';
import React from 'react'


export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="#">Home <span className="sr-only"></span></a>
                        <a className="nav-item nav-link" href="#aboutMe">About Me</a>
                        <a className="nav-item nav-link" href="#cards">Skills</a>
                        <a className="nav-item nav-link" href="#contactMe">Contact Me</a>
                    </div>
                </div>
            </nav>
        </header>
    )
}

