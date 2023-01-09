import React from 'react'
import { Navbar } from '../Components/Navbar'
import { SearchBar } from '../Components/SearchBar'
import { MainContainer } from '../Components/MainContainer'
import { Services } from '../Components/Services'
import { Pricing } from '../Components/Pricing'
import { Aboutus } from '../Components/Aboutus'
import { Footer } from '../Components/Footer'


export const Home = () => {
  return (
    <>
    <head><meta name="viewport" content="width=device-width, initial-scale=1.0"/> </head>
    <Navbar/>
    <SearchBar/>
    <MainContainer/>
    <Services/>
    <Pricing/>
    <Aboutus/>
    <Footer/>
    </>
  )
}
