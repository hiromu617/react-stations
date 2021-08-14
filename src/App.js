// DO NOT DELETE

import * as React from 'react'
import { useState } from 'react'
import './App.css'

/**
 *
 * @type {React.FC}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/dachshund/dachshund-6.jpg',
  )
  const END_POINT = 'https://dog.ceo/api/breeds/image/random'
  const setRandomUrl = () => {
    fetch(END_POINT)
      .then(res => res.json())
      .then(result => {
        if (result.status === 'success') setDogUrl(result.message)
        else alert('An error occured')
      })
  }

  return (
    <div style={{ padding: '10px' }}>
      <header>
        <h1>Dog Application</h1>
      </header>
      <p>犬の画像を表示するサイトです</p>
      <img width="400px" src={dogUrl} />
      <button onClick={() => setRandomUrl()} style={{ display: 'block' }}>
        更新
      </button>
    </div>
  )
}
