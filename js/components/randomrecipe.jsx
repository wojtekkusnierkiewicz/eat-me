import React, { Component } from 'react';

const RandomRecipe = (props) => {
  const data = props.state.data[props.state.index];
  const image = props.state.data[props.state.index].thumbnail;
  return (
    <div>
      <img
        src={(image !== '') ? image : `./images/default-meal.jpeg`}
        alt='meal-photo'/>
      <h2>{data.title}</h2>
      <p>
        <a href={data.href} target='_blank'> Check this recipe </a>
        <br/>
        to prepare you have to use:
        <br/>
        {data.ingredients.split(',')[1]} and {data.ingredients.split(',')[3]}
        <br/>
        so if u're alergic to it, try another query
      </p>
      <button onClick={props.luckySearch}>Search again</button>
    </div>
  )
}

export default RandomRecipe;
