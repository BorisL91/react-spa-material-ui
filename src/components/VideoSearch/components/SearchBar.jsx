import React, { useState } from "react"
import "semantic-ui-css/semantic.min.css"

const SearchBar = ({ onFormSubmit }) => {
  const [search, setSearch] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    onFormSubmit(search)
    setSearch("")
    console.log("Form submitted")
  }

  return (
    <div className='search-bar ui segment' style={{ width: "100%" }}>
      <form className='ui form' onSubmit={handleSubmit}>
        <div className='field'>
          <label>Video Search</label>
          <input
            type='text'
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </div>
        <button type='submit' onClick={handleSubmit}>
          Search
        </button>
      </form>
    </div>
  )
}

export default SearchBar
