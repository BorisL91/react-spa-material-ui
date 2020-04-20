import React from "react"

const Recipe = ({ title, image, calories, ingredients }) => {
  return (
    <div className='wrapper'>
      <div className='card'>
        <h2>{title}</h2>
        <p>{Math.round(calories)} kcal</p>
        <ol>
          {ingredients.map((ingredient) => (
            <li>{ingredient.text}</li>
          ))}
        </ol>
        <img alt='food' src={image} />
      </div>
    </div>
  )
}
export default Recipe
