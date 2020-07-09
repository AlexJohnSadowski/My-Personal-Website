import React from 'react'
import stop4_japan_as from '../static/stop4_japan_as.pdf'
import Astronaut_as_en1 from '../static/Astronaut_as_en1.pdf'

export default function Blog() {
    return (
    <div>
        <div className="container-flex">
            <div className="container card card-blog-one" data-aos="zoom-in-right" data-aos-delay='1000'>
                <div className="overlay">
                    <div className = "items" />
                    <div className = "items head">
                        <p>Stop number 4 in the Land of the Rising Sun.</p>
                    </div>
                    <div className = "items descr">
                        <p>My first short story which I wrote when I was still studying. Certainly influenced by V.Woolf, Hemingway and other modernist writers.</p>
                    </div>
                    <div className="items go">
                        <div className="multi-button__blog">
                            <a href={stop4_japan_as} target="_blank" rel="noopener" class="buttonOne">Read</a>                     
                        </div>
                    </div>
                </div>
            </div>
            <div className="container card card-blog-two" data-aos="zoom-in-left" data-aos-delay='1000'>
                <div className="overlay">
                    <div className = "items"></div>
                    <div className = "items head">
                        <p>To become an astronaut</p>
                    </div>
                <div className = "items descr">
                    <p>Second attempt to deliver to the reader an unusual perspective of a young man, constantly dreaming about reaching the stars and becoming an astronaut.</p>
                </div>
                <div className="items go">
                    <div className="multi-button__blog">
                        <a href={Astronaut_as_en1} target="_blank" rel="noopener" class="buttonOne">Read</a>     
                    </div>
                </div>
            </div>
        </div>        
    </div>
            
            
</div>
    )
}
