import React from 'react';
import ReactDOM from 'react-dom';

import Input from './components/inputcomponent.jsx';
import RecipesList from './components/allrecipes.jsx';
import RandomRecipeMethod from './components/randomrecipemethod.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isData: false,
      data: [],
      text: '',
      page: 1
    };
    // this.getData();
  }
  //fetch api
  getData = () => {
    fetch(`http://www.recipepuppy.com/api/?p=${this.state.page}&q=${this.state.text}`).then(response=>{
      if(response&&response.ok){
        return response.json();
      } else {
        console.log('err');
      }
    }).then(data=>{
      console.log(data.results);
      this.setState({
        isData: true,
        data: data.results
      })
    })
  }


  //callback get
  getState = (text, page) => {
    this.setState({
      text: text,
      page: page
     })
  }

  //next and prev page

  nextPage = () => {
    this.setState( {page: this.state.page + 1},
    () => {
      this.getData();
    })
  }
  prevPage = () => {
    this.setState( {page: this.state.page - 1},
    () => {
      this.getData();
    })
  }
  // hideMethod = () => {
  //   this.setState({display:block})
  // }
  render() {
    console.log(this.state.text);
    console.log(this.state.data);
    if (this.state.isData === true && this.state.data.length>=1) {
    return (

      <div className='appContainer'>
        <Input
          text={this.state.text}
          send={this.getState}
          request={this.getData}/>
        <div className='mainSection'>
          <RecipesList
            data={this.state.data}
            prev={this.prevPage}
            page={this.state.page}
            next={this.nextPage}/>
        </div>
        <div className='randomSection'>
          <RandomRecipeMethod/>
        </div>
      </div>
    )
  } else if (this.state.isData === true && this.state.data.length===0){
    return (
      <div className='appContainer'>
        <Input
          text={this.state.text}
          send={this.getState}
          request={this.getData}
        />
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
        <Input
          text={this.state.text}
          send={this.getState}
          request={this.getData}/>
        <div className='mainSection about'>
          <h4>App created in <span>React</span> using free API by<br/>  <span>Wojtek Kuśnierkiewicz</span></h4>
          <div>
            <ul>
              <li> <img src="./images/git.svg"/><a href='https://github.com/wojtekkusnierkiewicz/' target='_blank'>GITHUB</a> </li>
              <li> <img src="./images/gmail.png"/><a href='#'>wojtek.kusnierkiewicz@gmail.com</a> </li>
              <li> <img src="./images/ln.png"/><a href='#'>LINKEDIN</a> </li>
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

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
