// DO NOT DELETE

import * as React from 'react'
import {useState} from 'react'
import './App.css'

/**
 *
 * @type {React.FC}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/dachshund/dachshund-6.jpg")
  return (
    <div style={{padding: "10px"}}>
      <header>
        <h1>Dog Application</h1>
      </header>
      <p>犬の画像を表示するサイトです</p>
      <img
        width="400px"
        src={dogUrl}
      />
      <button onClick={() => setDogUrl('https://images.dog.ceo/breeds/spaniel-sussex/n02102480_4640.jpg')}>更新</button>
    </div>
  )
}
