import React, { Component } from 'react';
import SingleRecipe from './singlerecipe.jsx';

class Favourite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.list
    };
  }
  delete = () => {
    console.log(this.props.data);
   if(typeof this.props.onDelete === 'function') {
     this.props.onDelete(this.props.data)
   }
 }
  render() {
    return (
      <ul>
        {
          this.props.list.map((item, index) =>{
            return (
              <div className = 'favouriteRecipe' key={item.href}>
                <img
                  src={(item.thumbnail !== '') ? item.thumbnail : `./images/default-meal.jpeg`}
                  alt='meal-photo'/>
                <h2>{item.title}</h2>
                <p>
                  <a href={item.href} target='_blank'> Check this recipe </a>
                  <br/>
                  to prepare you have to use:
                  <br/>
                  {item.ingredients.split(',')[1]} and {item.ingredients.split(',')[3]}
                  <br/>
                  so if u're alergic to it, try another query
                </p>
                {console.log(this.state.list)}
                <button  className='buttons' onClick={this.delete}>Delete</button>
              </div>
            )
          })
        }
      </ul>
    )
  }
}

export default Favourite;
