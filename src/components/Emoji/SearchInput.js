import React from "react"
import PropTypes from "prop-types"
import "./styles/SearchInput.css"

const SearchInput = ({ textChange }) => {
  const handleChange = (event) => {
    textChange(event)
  }

  return (
    <div className='component-search-input'>
      <div>
        <input onChange={handleChange} />
      </div>
    </div>
  )
}

SearchInput.propTypes = {
  textChange: PropTypes.func.isRequired,
}

export default SearchInput
