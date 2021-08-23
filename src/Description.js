import React from 'react';
import {DogImage} from './DogImage'

export const Description = ({dogUrl, setRandomUrl, loading}) => {
  return (
    <>
      <div className="container">
        <p>犬の画像を表示するサイトです</p>
        <DogImage url={dogUrl}/>
      </div>
      <div className="btn-wrap">
        <button
          onClick={() => setRandomUrl()}
          className="btn"
          disabled={loading}
        >
          {loading ? '更新中...' : '更新'}
        </button>
      </div>
    </>
  )
}
Description.propTypes = String
