import React, { Component } from 'react';



const SingleRecipe = (props) => {
  const data = props.data;
  const image = props.data.thumbnail;
  if (data.title.length>30){data.title=data.title.substring(0,30)+'...'}else{data.title=data.title}
  return (
    <li>
      <img
        src={(image !== '') ? image : `./images/default-meal.jpeg`}
        alt='meal-photo'/>
      <a href={data.href} target='_blank'>{data.title}</a>
      <p>
        Products to use: {data.ingredients}
      </p>
    </li>
  )
}

export default SingleRecipe;
