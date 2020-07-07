import React, {useEffect, useRef} from 'react'

import Header from '../components/Header'
import Dashboard from '../components/Dashboard'
import Portfolio from '../components/Portfolio'
import Personal from '../components/Personal'
import Blog from '../components/Blog'
import Art from '../components/Art'
import Contact from '../components/Contact'


import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import ListSubheader from '@material-ui/core/ListSubheader'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'

import StarIcon from '@material-ui/icons/Star'
import InfoIcon from '@material-ui/icons/Info'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import Done from '@material-ui/icons/Done'
import '../styles.scss'
import { Helmet } from "react-helmet"
import AOS from 'aos'


const IndexPage = () => {
  
  useEffect(() => {
    AOS.init({
        // Global settings:
        disable: 'mobile', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
        
      
        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 150, // offset (in px) from the original trigger point
        delay: 400, // values from 0 to 3000, with step 50ms
        duration: 2000, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: true, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
      
      });
}, [])

  return (

    <div>
      <Helmet>
          <html lang="en" />
          <meta charSet="utf-8" />
          <title>Alex Sadowski || Front-End Developer</title>
          <meta name="description" content="Hello, my name is Alex - I am a React Developer and foreign language enthusiast. Contact me if you want me to help you develop your project!" />

      </Helmet>
        <Header />
        <Dashboard />
        <Portfolio />
        <Personal />
        <Art />
        <Blog />
        <Contact />
      
    </div>
  )
}
  


export default IndexPage
