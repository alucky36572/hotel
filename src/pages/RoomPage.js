import React from 'react'
import Heading from '../component/common/Heading'
import { Rooms } from '../component/home/Rooms'

export const Room = () => {
  return (
    <>
      <Heading heading="Rooms" title="Home" subtitle="Rooms" />
      <Rooms />
    </>
  )
}
