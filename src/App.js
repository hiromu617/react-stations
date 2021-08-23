// DO NOT DELETE
import * as React from 'react'
import { useState } from 'react'
import './App.css'
import Description  from './Description'
import Header from './Header'
/**
 *
 * @type {React.FC}
 */
const INITIAL_URL = 'https://images.dog.ceo/breeds/dachshund/dachshund-6.jpg'
const END_POINT = 'https://dog.ceo/api/breeds/image/random'

export const App = () => {
  const [dogUrl, setDogUrl] = useState(INITIAL_URL)
  const [loading, setLoading] = useState(false)
  const setRandomUrl = async () => {
    setLoading(true)
    try{

      const res = await fetch(END_POINT)
      const result = await res.json()
      if (result.status === 'success') setDogUrl(result.message)
      else alert('An error occured')
    } catch(e) {
      console.log(e)
    }
    setLoading(false)
  }

  return (
    <>
      <Header />
      <Description  dogUrl={dogUrl} setRandomUrl={setRandomUrl} loading={loading}/>
    </>
  )
}
