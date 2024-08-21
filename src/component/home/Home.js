import React from 'react'
import Carousel from './Carousel'
import Book from './Book'
import { About } from './About'
import { Rooms } from './Rooms'
import { Service } from './Service'
import { Sliders } from './Slider'
import Teams from './Teams'

export const Home = () => {
  return (
    <>
      <Carousel />
      <Book />
      <About />
      <Rooms />
      <Service />
      <Sliders />
      <Teams />
    </>
  )
}
