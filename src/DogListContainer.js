import React, { useEffect, useState } from 'react'
import { BreedsSelect } from './BreedsSelect'
import { DogImage } from './DogImage'
const END_POINT = 'https://dog.ceo/api/breeds/list/all'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState(null)
  const [selectedBreed, setSelectedBreed] = useState(null)
  const [dogUrlList, setDogUrlList] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchUrlList = async () => {
    if (!selectedBreed) {
      alert('選択してください')
      return
    }
    setLoading(true)
    try {
      const res = await fetch(
        `https://dog.ceo/api/breed/${selectedBreed}/images/random/12`,
      )
      const result = await res.json()
      console.log(result)
      if (result.status === 'success') setDogUrlList(result.message)
      else alert('An error occured')
    } catch (e) {
      console.log(e)
    }
    setLoading(false)
  }

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
    <div style={{ textAlign: 'center', marginTop: 30 }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 30}}>
        <BreedsSelect
          breeds={breeds}
          selectedBreed={selectedBreed}
          setSelectedBreed={setSelectedBreed}
        />
        <button
          onClick={() => fetchUrlList()}
          className="btn"
          disabled={loading}
          style={{marginLeft: 30}}
        >
          {loading ? '更新中...' : '表示'}
        </button>
      </div>
      <div>
        {dogUrlList.map((url, i) => (
          <img
            key={i}
            height="200px"
            width="200px"
            src={url}
            style={{ objectFit: 'cover' }}
          />
        ))}
      </div>
    </div>
  )
}
