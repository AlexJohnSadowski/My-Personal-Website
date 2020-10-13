import Typed from 'react-typed'
import React from 'react'

const Dashboard = () => {
  return (
    <>
      <div
        className="title"
        id="title"
        data-aos="fade-right"
        data-aos-delay="1500"
      >
        Hello, I am Alex.
      </div>
      <div className="subtitle" data-aos="fade-in" data-aos-delay="2000">
        <Typed
          data-aos="fade-right"
          strings={[
            'Front-End Developer.',
            'Web Designer.',
            'Foreign Language Enthusiast.',
          ]}
          typeSpeed={70}
          backSpeed={30}
          loop="yes"
        />
        <br />
      </div>
    </>
  )
}

export default Dashboard
