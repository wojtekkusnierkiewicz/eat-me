import React, { Component } from 'react';
import SingleRecipe from './singlerecipe.jsx';

const RecipesList = (props) => {

  const goToPrev = () => {
    if (typeof props.prev === 'function') {
      props.prev();
    }
  }

  const goToNext = () => {
    if (typeof props.next === 'function') {
      props.next();
    }
  }

  const prevBtn = props.page > 1 && <button onClick={goToPrev}>prev</button>
  const nextBtn = props.page <= 100 && <button onClick={goToNext}>next</button>

  return (
    <div className='recipeContainer'>
      <div className='recipesBtns'>
        {prevBtn} <span>Page:{props.page}</span> {nextBtn}
      </div>
      <ul className='recipeList'>
        {
          props.data.map( (value, index) => {
            return (
              <SingleRecipe
                data={value}
                key={value.href}
                index={value.index}/>
            )
          })
        }
      </ul>
      <div className='recipesBtns'>
        {prevBtn} <span>Page:{props.page}</span> {nextBtn}
      </div>
    </div>
  )
}

export default RecipesList;
