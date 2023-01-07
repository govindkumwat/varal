import React from 'react'
import { Navbar } from '../Components/Navbar'
import { SearchBar } from '../Components/SearchBar'
import { MainContainer } from '../Components/MainContainer'


export const Home = () => {
  return (
    <>
    <Navbar/>
    <SearchBar/>
    <MainContainer/>
    </>
  )
}
