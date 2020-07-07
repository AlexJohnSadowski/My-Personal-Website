import React, {useEffect, useState} from 'react'


const Header = (props) => {
    
    function hideMenu(){
        let menuOpen = document.querySelector('.main-navigation-toggle').checked;
        if(menuOpen = true){
          document.querySelector('.main-navigation-toggle').checked = false;
        }
        }
        useEffect(() => {
            window.addEventListener("scroll", hideMenu);
        }, [])
        

    return (
    <header data-aos="fade-in" id="home">
        <input id="page-nav-toggle" className="main-navigation-toggle" type="checkbox"/>
            <label for="page-nav-toggle">
                <svg className="icon--menu-toggle" viewBox="0 0 60 30">
                    <g className="icon-group">
                    <g className="icon--menu">
                        <path d="M 6 0 L 54 0" />
                        <path d="M 6 15 L 54 15" />
                        <path d="M 6 30 L 54 30" />
                    </g>
                    <g className="icon--close">
                        <path d="M 15 0 L 45 30" />
                        <path d="M 15 30 L 45 0" />
                    </g>
                    </g>
                </svg>
            </label>
            <nav className="main-navigation">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#portrait">About</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
    </header>
    )
}
  
      


export default Header
