import React, {Component} from 'react';
import SingleRecipe from './singlerecipe.jsx';

class RecipesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.list
    };
  }

  goToPrev = () => {
    if (typeof this.props.prev === 'function') {
      this.props.prev();
    }
  }

  goToNext = () => {
    if (typeof this.props.next === 'function') {
      this.props.next();
    }
  }
  getState = (list) => {
    this.setState({
      list: list
    }, this.props.send(this.state.list))
  }

  onAdd = (item) => {
    let listCopy=this.props.list
    if (listCopy.length<3) {
      listCopy.push(item);
    }
    // listCopy.push(item);
    this.setState({
      list: listCopy
    }, () => {
      this.props.send(this.state.list)
    })
  }

  onDelete = (single) => {
    let listCopy = this.props.list.filter(item => item !== single)
    this.setState({
      list: listCopy
    }, () => {
      this.props.send(this.state.list)
    });
  };

  render() {
    const prevBtn = this.props.page > 1 && <button className='buttons' onClick={this.goToPrev}>prev</button>
    const nextBtn = this.props.page <= 100 && <button className='buttons' onClick={this.goToNext}>next</button>
    return (
      <div className='recipeContainer'>
        <div className='recipesBtns'>
          {prevBtn}
          <span>Page: {this.props.page}</span>
          {nextBtn}
        </div>
        <ul className='recipeList'>
          {
            this.props.data.map((value, index) => {
              return (
                <SingleRecipe
                  data={value}
                  key={value.href}
                  index={value.index}
                  list={this.state.list}
                  send={this.getState}
                  onAdd={this.onAdd}/>
                )
            })
          }
        </ul>
        <div className='recipesBtns'>
          {prevBtn}
          <span>Page: {this.props.page}</span>
          {nextBtn}
        </div>
      </div>
    )
  }
}

export default RecipesList;
