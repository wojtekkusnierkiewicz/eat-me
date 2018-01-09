import React, { Component } from 'react';



class SingleRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.list
    };
  }
  onAdd = (item) => {
    let listCopy = this.state.list;
    listCopy.push(item);
    this.setState({
      list: listCopy
    }, () => {
      this.props.send(this.state.list)
    })
  }
  clicker = () => {
      this.onAdd(this.props.data)
  }
  render() {
    const data = this.props.data;
    const image = this.props.data.thumbnail;
    if (data.title.length>30){data.title=data.title.substring(0,30)+'...'} else {data.title=data.title};
    return (
      <li>
        <img
          src={(image !== '') ? image : `./images/default-meal.jpeg`}
          alt='meal-photo'/>
        <a href={data.href} target='_blank'>{data.title}</a>
        <p>
          Products to use: {data.ingredients}
        </p>
        <button onClick={this.clicker}>dodaj</button>
      </li>
    )
  }
}

export default SingleRecipe;
