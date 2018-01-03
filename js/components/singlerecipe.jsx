import React, { Component } from 'react';



const SingleRecipe = (props) => {
  const data = props.data;
  const image = props.data.thumbnail;
  return (
    <li>
      <img
        src={(image !== '') ? image : `./images/default-meal.jpeg`}
        alt='meal-photo'/>
      <p>
        <a href={data.href} target='_blank'>{data.title}</a>
        <br/>
        Products to use: {data.ingredients}
      </p>
    </li>
  )
}

export default SingleRecipe;
