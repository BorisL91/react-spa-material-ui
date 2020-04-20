import React, { useState, useEffect } from "react"
import Recipe from "./Recipe"
import "./Recipe.css"

const Recipes = () => {
  const APP_ID = "9af9f94c"
  const APP_KEY = "0c9148e2c218837a35f10b0bf4c902a5"

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState("banana")

  useEffect(() => {
    getRecipes()
  }, [query])

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
    const data = await response.json()
    setRecipes(data.hits)
  }

  const handleInputChange = (e) => {
    setSearch(e.target.value)
  }

  const getSearch = (e) => {
    e.preventDefault()
    setQuery(search)
    setSearch("")
  }

  return (
    <div className='App'>
      <form onSubmit={getSearch} className='search-form'>
        <input
          type='text'
          className='search-bar'
          value={search}
          onChange={handleInputChange}
          placeholder='Enter you favorite food or ingredient to find some cool recipes e.g Mango'
        />
        <button type='submit' className='search-button'>
          Search
        </button>
      </form>
      {recipes.map((recipe, i) => {
        return (
          <Recipe
            key={i}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        )
      })}
    </div>
  )
}

export default Recipes
