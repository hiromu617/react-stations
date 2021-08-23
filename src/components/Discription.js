import React from 'react';
import DogImage from './DogImage'

const Discription = ({dogUrl, setRandomUrl, loading}) => {
  return (
    <>
      <div className="container">
        <p>犬の画像を表示するサイトです</p>
        <DogImage dogUrl={dogUrl}/>
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
Discription.propTypes = String
export default Discription
