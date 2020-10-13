import React from 'react'

export default function Portfolio() {
  return (
    <>
      <div className="title-section" id="portfolio">
        <div className="title-sub" data-aos="fade-in" data-aos-delay="600">
          Visit my GitHub to see all my applications
        </div>
        <span className="bw" data-aos="fade-in" data-aos-delay="400">
          My Projects.
        </span>
      </div>
      <div className="container-flex">
        <div
          className="container card card-one"
          data-aos="fade-right"
          data-aos-delay="400"
        >
          <div className="overlay">
            <div className="items" />
            <div className="items head">
              <p>Gradobor RPG</p>
            </div>
            <div className="items descr">
              <p>
                Gradobor is a text-based RPG where the whole concept is
                based on interactions between users - create your own character
                and go on a great adventure!
              </p>
              <p>Technologies used: React, Redux and Firebase.</p>
            </div>
            <div className="items go">
              <div className="multi-button">
                <a
                  href="https://gradobor-rpg.web.app/"
                  target="_blank"
                  rel="noreferrer"
                  class="buttonOne"
                >
                  Website
                </a>
                <a
                  href="https://github.com/AlexJohnSadowski/Gradobor-rpg"
                  target="_blank"
                  rel="noreferrer"
                  class="buttonOne"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className="container card card-three"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <div className="overlay">
            <div className="items"></div>
            <div className="items head">
              <p>Blind Eyed</p>
            </div>
            <div className="items descr">
              <p>
                Blind Eyed is a project created for an organisation that helps
                people to rediscover themselves.
                <p>
                  Written with React and styled components.
                  
                  <p>Custom cursor +
                  canvas to create the "cleaning" effect on the landing page of the desktop version.</p>
                </p>
              </p>
            </div>
            <div className="items go">
              <div className="multi-button">
                <a
                  href="https://blindeyed.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  class="buttonOne"
                >
                  Website
                </a>
                <a
                  href="https://github.com/AlexJohnSadowski/Blind-Eyed"
                  target="_blank"
                  rel="noreferrer"
                  class="buttonOne"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-flex">
        <div
          className="container card card-two"
          data-aos="fade-right"
          data-aos-delay="400"
        >
          <div className="overlay">
            <div className="items"></div>
            <div className="items head">
              <p>Paris Resort</p>
            </div>
            <div className="items descr">
              <p>
                A project created for a parisian hostel. The project uses React
                router for routing, React context API for state management and
                Contentful CMS for data management <br /> (e.g. adding, deleting or
                editing new rooms).
              </p>
            </div>
            <div className="items go">
              <div className="multi-button">
                <a
                  href="https://parisresort.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  class="buttonOne"
                >
                  Website
                </a>
                <a
                  href="https://github.com/AlexJohnSadowski/Paris-Resort"
                  target="_blank"
                  rel="noreferrer"
                  class="buttonOne"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className="container card card-five"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <div className="overlay">
            <div className="items" />
            <div className="items head">
              <p>Quorum Fashion</p>
            </div>
            <div className="items descr">
              <p>
                Project made for a fashion atelier made with Gatsby and GraphQL.
                Urban fashion and city lights as the main theme. The project can
                be easily expandable via backend Shopify API that might be added.
              </p>
            </div>
            <div className="items go">
              <div className="multi-button">
                <a
                  href="https://quorum-fashion.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  class="buttonOne"
                >
                  Website
                </a>
                <a
                  href="https://github.com/AlexJohnSadowski/Quorum"
                  target="_blank"
                  rel="noreferrer"
                  class="buttonOne"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
