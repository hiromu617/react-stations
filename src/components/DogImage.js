import React from 'react';

const DogImage = ({dogUrl}) => {
  return (
    <img
          height="400px"
          width="400px"
          src={dogUrl}
          style={{ objectFit: 'cover' }}
    />
  )
}
DogImage.propTypes = {
  dogUrl: String
}
export default DogImage
