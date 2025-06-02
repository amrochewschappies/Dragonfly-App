import React, { Fragment } from 'react'
import Hero from '../components/Hero'
import EventOTD from '../components/EventOTD'
import EventsCTA from '../components/EventsCTA'
import Highligts from '../components/Highligts'
import Footer from '../components/Footer'
import SearchBar from '../components/SearchBar'
import Intro from '../components/Intro'
import Closer from '../components/Closer'
import Newsletter from '../components/Newsletter'
import "./HomePage.css"


function HomePage() {
  return (
    <Fragment>
      <main>
        <Hero />
        <Intro />
        <SearchBar />
        <EventOTD />
        <EventsCTA />
        <Highligts />
        <Closer />
        <Newsletter />
        <Footer />
      </main>
    </Fragment>
  )
}

export default HomePage
