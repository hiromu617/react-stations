import React, { useEffect, useState, useCallback } from 'react'
import { BreedsSelect } from './BreedsSelect'

const BASE_URL = 'https://dog.ceo/'
const IMAGES_NUM = 12

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState(null)
  const [selectedBreed, setSelectedBreed] = useState(null)
  const [dogUrlList, setDogUrlList] = useState([])
  const [loading, setLoading] = useState(false)

  // 選択された犬種の画像を取得
  const fetchUrlList = useCallback(async () => {
    if (!selectedBreed) {
      alert('選択してください')
      return
    }
    setLoading(true)
    try {
      const res = await fetch(
        `${BASE_URL}api/breed/${selectedBreed}/images/random/${IMAGES_NUM}`,
      )
      const result = await res.json()
      if (result.status === 'success') setDogUrlList(result.message)
      else alert('An error occured')
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false)
    }
  }, [selectedBreed])

  // マウント時に犬種のリストを取得
  useEffect(() => {
    const fetchBreedsList = async () => {
      try {
        const res = await fetch(BASE_URL + 'api/breeds/list/all')
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
      <div
        style={{ display: 'flex', justifyContent: 'center', marginBottom: 30 }}
      >
        <BreedsSelect
          breeds={breeds}
          selectedBreed={selectedBreed}
          setSelectedBreed={setSelectedBreed}
        />
        <button
          onClick={() => fetchUrlList()}
          className="btn"
          disabled={loading}
          style={{ marginLeft: 30 }}
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
