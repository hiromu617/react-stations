import React from 'react'

export const BreedsSelect = ({breeds, selectedBreed, setSelectedBreed}) => {

  return (
    <select
      value={selectedBreed}
      onChange={(e) => setSelectedBreed(e.target.value)}
    >
      {breeds &&
        breeds.map((breed, i) => (
          <option key={i} value={breed}>
            {breed}
          </option>
        ))}
    </select>
  )
}
BreedsSelect.propTypes = {
  breeds: Array,
  selectedBreed: String,
  setSelectedBreed: Function,
}
