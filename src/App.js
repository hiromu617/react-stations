// DO NOT DELETE

import * as React from 'react'
import './App.css'

/**
 *
 * @type {React.FC}
 */
export const App = () => {
  return (
    <div style={{padding: "10px"}}>
      <header>
        <h1>Dog Application</h1>
      </header>
      <p>犬の画像を表示するサイトです</p>
      <img
        width="400px"
        src="https://images.dog.ceo/breeds/dachshund/dachshund-6.jpg"
      />
    </div>
  )
}
