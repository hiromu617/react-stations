// DO NOT DELETE
import * as React from 'react'
import { useState } from 'react'
import './App.css'

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
    await fetch(END_POINT)
      .then(res => res.json())
      .then(result => {
        if (result.status === 'success') setDogUrl(result.message)
        else alert('An error occured')
      })
    setLoading(false)
  }

  return (
    <div>
      <header>
        <h1>Dog Application</h1>
      </header>
      <div className="container">
        <p>犬の画像を表示するサイトです</p>
        <img height="400px" src={dogUrl} />
      </div>
      <div className="btn-wrap">
        <button onClick={() => setRandomUrl()} className="btn" disabled={loading}>
          {loading ? "更新中...": "更新"}
        </button>
      </div>
    </div>
  )
}
