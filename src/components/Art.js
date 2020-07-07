import React, {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Art() {
    
    return (
        <div className="art-grid">
            <div className="title-section__art">
            <div className="title-sub__art" data-aos="fade-right">Maybe would you like to see something <span className="bw" data-aos="flip-up">non-IT related?</span></div>
            </div>
            
            <div className="container card card-art-one" data-aos="fade-up-right" data-aos-delay='1000'>
                
            </div>
        

            <div className="container card card-art-two" data-aos="flip-up" data-aos-delay='1000'>
                
            </div>

            <div className="container card card-art-three" data-aos="fade-left" data-aos-delay='400'>
                
            </div>
            <div className="container card card-art-four" id='blog' data-aos="fade-up-right" data-aos-delay='400'>
                
            </div>
            <div className="title-section__art--two" data-aos="flip-up" data-aos-delay='400'>
            <div className="title-sub__art--two" >Or do you like <span className="bw">to read?</span></div>
            </div>
        </div>
    )
}
