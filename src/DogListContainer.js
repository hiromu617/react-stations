import React, { useEffect, useState } from 'react'

const END_POINT = 'https://dog.ceo/api/breeds/list/all'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState(null)
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
  return <ul>{breeds && breeds.map((breed, i) => <li key={i}>{breed}</li>)}</ul>
}
