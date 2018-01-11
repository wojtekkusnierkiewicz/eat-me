import React, {Component} from 'react';

const Favourite = (props) => {
  const clickDelete = () => {
    if (typeof props.onDelete === 'function') {
      props.onDelete(props.data);
    }
  }
  return (
    <li>
      <div className='favouriteRecipe'>
        <img src={(
            props.data.thumbnail !== '')
            ? props.data.thumbnail
            : `./images/default-meal.jpeg`} alt='meal-photo'/>
        <h2>{props.data.title}</h2>
        <h3>
          <a href={props.data.href} target='_blank'>
            Check this recipe
          </a>
        </h3>
        <h4>
          {props.data.ingredients}
        </h4>
        <button className='buttons' onClick={clickDelete}>del</button>
      </div>
    </li>
  )
}

export default Favourite;
