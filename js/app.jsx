import React from 'react';
import ReactDOM from 'react-dom';

import Input from './components/inputcomponent.jsx';
import RecipesList from './components/allrecipes.jsx';
import RandomRecipeMethod from './components/randomrecipemethod.jsx';
import Favourite from './components/favourite.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isData: false,
      data: [],
      list: [],
      text: '',
      page: 1
    };
  }
  //fetch api
  getData = () => {
    fetch(`http://www.recipepuppy.com/api/?p=${this.state.page}&q=${this.state.text}`).then(response => {
      if (response && response.ok) {
        return response.json();
      } else {
        console.log('err');
      }
    }).then(data => {
      console.log(data.results);
      this.setState({isData: true, data: data.results})
    })
  }

  //callback get from input
  getState = (text, page) => {
    this.setState({text: text, page: page})
  }

  //callback get from list
  favourite = (list) => {
    this.setState({list: list})
  }

  //next and prev page
  nextPage = () => {
    this.setState({
      page: this.state.page + 1
    }, () => {
      this.getData();
    })
  }
  prevPage = () => {
    this.setState({
      page: this.state.page - 1
    }, () => {
      this.getData();
    })
  }

  onDelete = (single) => {
    let listCopy = this.state.list.filter(item => item !== single)
    this.setState({list: listCopy})
  };

  render() {
    const input = <Input
      text={this.state.text}
      send={this.getState}
      request={this.getData}/>

    if (this.state.isData === true && this.state.data.length >= 1) {
      return (
        <div className='appContainer'>
          {input}
          <div className='mainSection'>
            <RecipesList
              data={this.state.data}
              page={this.state.page}
              list={this.state.list}
              prev={this.prevPage}
              next={this.nextPage}
              send={this.favourite} />
          </div>
          <div className='randomSection'>
            <RandomRecipeMethod/>
          </div>
          <div className='favouriteSection'>
            <h3>favourite</h3>
            <ul>
              {
                this.state.list.map(value => {
                  return (
                    <Favourite
                      data={value}
                      key={value.href}
                      send={this.favourite}
                      onDelete={this.onDelete}/>
                    )
                })
              }
            </ul>
          </div>
        </div>
      )
    } else if (this.state.isData === true && this.state.data.length === 0) {
      return (
        <div className='appContainer'>
          {input}
          <div className='mainSection error'>
            <h3>this is not a proper query, try again</h3>
          </div>
          <div className='randomSection'>
            <RandomRecipeMethod/>
          </div>
        </div>
      )
    } else {
      return (
        <div className='appContainer'>
          {input}
          <div className='mainSection about'>
            <h4>App created in
              <span>React</span>
              using free API by<br/>
              <span>Wojtek Kuśnierkiewicz</span>
            </h4>
            <div>
              <ul>
                <li>
                  <img src="./images/git.svg"/>
                  <a href='https://github.com/wojtekkusnierkiewicz/' target='_blank'>GITHUB</a>
                </li>
                <li>
                  <img src="./images/gmail.png"/>
                  <a href='#'>wojtek.kusnierkiewicz@gmail.com</a>
                </li>
                <li>
                  <img src="./images/ln.png"/>
                  <a href='#'>LINKEDIN</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='randomSection'>
            <RandomRecipeMethod/>
          </div>
        </div>
      )
    }
  }
}

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(<App/>, document.getElementById('app'));
});
