import React, { Component } from 'react';
import RandomRecipe from './randomrecipe.jsx';

class RandomRecipeMethod extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isData: false,
      data: [],
      page: Number(Math.floor(Math.random()*(100-1+1)+1)),
      index: Number(Math.floor(Math.random()*(9-1+1)+1))
    };
  }

  //fetch api
  getData = () => {
    fetch(`http://www.recipepuppy.com/api/?p=${this.state.page}`).then(response => {
      if (response&&response.ok){
        return response.json();
      } else {
        console.log('err');
      }
    }).then(data => {
      this.setState({
        isData: true,
        data: data.results
      })
    })
  }

  luckySearch = () => {
    this.setState({
      page: Number(Math.floor(Math.random()*(100-1+1)+1)),
      index: Number(Math.floor(Math.random()*(9-1+1)+1))
    });
    this.getData();
  }

  render() {
    console.log(this.state.index);
    console.log(this.state.page);
    return this.state.isData ? (
      <RandomRecipe
        state={this.state}
        luckySearch={this.luckySearch}/>
    ) : (
      <div>
        <button onClick={this.luckySearch}>lucky</button>
      </div>
    )
  }
}

export default RandomRecipeMethod;
