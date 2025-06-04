import React from 'react'

function SearchResultsBackground() {
  return (
    <div id='background-container'>
      <img
        src={process.env.PUBLIC_URL + "/Images/Search Background.jpg"}
        alt="" 
        aria-hidden="true"
        id='SearchBG-image'
      />
    </div>
  )
}

export default SearchResultsBackground
