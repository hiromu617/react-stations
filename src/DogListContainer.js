import React, { useEffect, useState } from 'react'
import {BreedsSelect} from "./BreedsSelect"
const END_POINT = 'https://dog.ceo/api/breeds/list/all'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState(null)
  const [selectedBreed, setSelectedBreed] = useState(null)

  useEffect(() => {
    const fetchBreedsList = async () => {
      try {
        const res = await fetch(END_POINT)
        const result = await res.json()
        if (result.status === 'success') {
          setBreeds(Object.keys(result.message))
        } else alert('An error occured')
      } catch (e) {
        console.log(e)
      }
    }
    fetchBreedsList()
  }, [])

  return (
    <div style={{textAlign: 'center'}}>
    <p>{selectedBreed}</p>
      <BreedsSelect breeds={breeds} selectedBreed={selectedBreed} setSelectedBreed={setSelectedBreed}/>
    </div>
  )
}
