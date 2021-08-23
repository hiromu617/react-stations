import React from 'react';

export const DogImage = ({url}) => {
  return (
    <img
          height="400px"
          width="400px"
          src={url}
          style={{ objectFit: 'cover' }}
    />
  )
}
DogImage.propTypes = {
  url: String
}
