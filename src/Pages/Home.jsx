import React from 'react'
import { Navbar } from '../Components/Navbar'
import { SearchBar } from '../Components/SearchBar'
import { MainContainer } from '../Components/MainContainer'
import { Services } from '../Components/Services'
import { Pricing } from '../Components/Pricing'


export const Home = () => {
  return (
    <>
    <Navbar/>
    <SearchBar/>
    <MainContainer/>
    <Services/>
    <Pricing/>
    </>
  )
}
