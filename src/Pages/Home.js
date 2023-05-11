import React from 'react'
import MyBadge from '../Components/MyBadge'
import Mycarousel from '../Components/Mycarousel'
import Myfooter from '../Components/Myfooter'
import Mynav from '../Components/Mynav'
import BookList from '../Components/BookList'
import { Last } from 'react-bootstrap/esm/PageItem'

const Home = () => {
  return (
    <>
    <Mynav/>
    <MyBadge stringa={"Tutto un Click!"} colore={"secondary"}/>
    <MyBadge stringa={"Benvenuti"} colore={"primary"}/>
    <Mycarousel/>
    <BookList/>
    <Myfooter/>
    <Last/>
    </>
  )
}

export default Home