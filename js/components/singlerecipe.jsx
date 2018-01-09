import React, { Component } from 'react';



class SingleRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.list,
      oneItem: ''
    };
  }
  // onAdd = (item) => {
  //   let listCopy = this.props.list;
  //   listCopy.push(item);
  //   this.setState({
  //     list: listCopy
  //   }, () => {
  //     this.props.send(this.state.list)
  //   })
  // }

  changeNothing = () => {
    this.setState({
      oneItem:this.props.data
    }, () => {
      this.props.send(this.state.oneItem)
    })
    changeNothing();
  }

  clicker = () => {
    console.log(this.props.data)
      this.props.onAdd(this.props.data)
  }
 //  onDelete = (single) => {
 //    console.log(single);
 //    let listCopy = this.props.list.filter(item => item !== single)
 //    this.setState({
 //     list: listCopy
 //   }, () => {
 //     this.props.send(this.state.list)
 //   });
 // };
 clicker2 = () => {
   if(typeof this.props.onDelete === 'function') {
     this.props.onDelete(this.props.data)
   }
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
        <button onClick={this.clicker2}>usun</button>
      </li>
    )
  }
}

export default SingleRecipe;
