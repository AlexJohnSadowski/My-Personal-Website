import React from 'react'


export default function Portfolio() {
    return (
    <>
        
        <div className="title-section" id='portfolio'>
        <div className="title-sub" data-aos="fade-in" data-aos-delay='600'>Visit my GitHub to see all my applications</div>
            <span className="bw" data-aos="fade-in" data-aos-delay='400'>My Projects.</span>
            </div>
        <div className="container-flex">
        
            <div className="container card card-one" data-aos="fade-right" data-aos-delay='400'>
                <div className="overlay">
                    <div className = "items"></div>
                    <div className = "items head">
                    <p>Gradobor RPG</p>
                </div>
                <div className = "items descr">
                <p>Gradobor is a text-based rpg game where the whole concept is based on interactions between users - you create your own character, and then move on to talk in the tavern, or go on a great adventure!</p>
                <p>Technologies used: React, React Router, Redux, Firebase (authentication, databases, firebase cloud)</p>
                </div>
                <div className="items go">
                <div className="multi-button">
                <a href="https://gradobor-rpg.web.app/" target="_blank" rel="noopener" class="buttonOne">Website</a>   
                <a href="https://github.com/AlexJohnSadowski/Gradobor-rpg" target="_blank" rel="noopener" class="buttonOne">GitHub</a>   
                </div>
            </div>
            </div>
            </div>

            <div className="container card card-three" data-aos="fade-left" data-aos-delay='400'>
                <div className="overlay">
                    <div className = "items"></div>
                    <div className = "items head">
                    <p>Expensify App</p>
                </div>
                <div className = "items descr">
                <p>Expensify is designed to help us organise...well... our own expenses! The application was written using React and Redux. Firebase is responsible for the authentication and the database itself.</p>
                </div>
                <div className="items go">
                <div className="multi-button">
                <a href="https://real-expensify.herokuapp.com/" target="_blank" rel="noopener" class="buttonOne">Website</a>   
                <a href="https://github.com/AlexJohnSadowski/Expensify-App---Updated-Version" target="_blank" rel="noopener" class="buttonOne">GitHub</a>   
                </div>
            </div>
            </div>
            </div>        

        </div>
        <div className="container-flex">
        
            <div className="container card card-two" data-aos="fade-right" data-aos-delay='400'>
                <div className="overlay">
                    <div className = "items"></div>
                    <div className = "items head">
                    <p>Paris Resort</p>
                    
                </div>
                <div className = "items descr">
                <p>A project created for a parisian hostel. The project uses React router for routing, React context API for state management and Contentful CMS for data management ( e.g. adding, deleting or editing new rooms).</p>

                </div>
                <div className="items go">
                <div className="multi-button">
                <a href="https://github.com/AlexJohnSadowski/Paris-Resort" target="_blank" rel="noopener" class="buttonOne">Website</a>   
                <a href="https://parisresort.netlify.app/" target="_blank" rel="noopener" class="buttonOne">GitHub</a>   
                </div>
            </div>
            </div>
            </div>

            <div className="container card card-five" data-aos="fade-left" data-aos-delay='400'>
                <div className="overlay">
                    <div className = "items"></div>
                    <div className = "items head">
                    <p>This very website that you are on right now!</p>
                </div>
                <div className = "items descr">
                <p>My personal website was written using Gatsby and SCSS. The old version (that included only HTML, CSS and vanilla JS) I wrote long time ago, so I decided that it's time to tweak it a little bit.</p>
                </div>
                <div className="items go">
                <div className="multi-button">
                <a href="https://github.com/AlexJohnSadowski" target="_blank" rel="noopener" class="buttonOne">GitHub</a>   
                </div>
            </div>
            </div>
            </div>        

        </div>

        
    </>
    )
}

