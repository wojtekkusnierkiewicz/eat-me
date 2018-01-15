import React, {Component} from 'react';

const SingleRecipe = (props) => {
  const clickAdd = () => {
    if (typeof props.onAdd === 'function') {
      props.onAdd(props.data);
    }
  }
  const data = props.data;
  const image = props.data.thumbnail;
  (data.title.length > 30)
    ? (data.title = data.title.substring(0, 30) + '...')
    : (data.title = data.title);
  (data.ingredients.length > 90)
    ? (data.ingredients = data.ingredients.substring(0,90) + '...')
    : (data.ingredients = data.ingredients)
  return (
    <li>
      <img src={(
          image !== '')
          ? image
          : `./images/default-meal.jpeg`} alt='meal-photo'/>
      <a href={data.href} target='_blank'>{data.title}</a>
      <p>
        Products to use: {data.ingredients}
      </p>
      <button className='buttons' onClick={clickAdd}>Add</button>
    </li>
  )
}
export default SingleRecipe;
