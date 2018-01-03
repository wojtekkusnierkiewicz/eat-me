import React from 'react';
import ReactDOM from 'react-dom';

import Input from './components/inputcomponent.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isData: false,
      data: [],
      text: '',
      page: 1
    };
    this.getData();
  }
  //fetch api
  getData(){
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

  request = () => {
    this.getData()
  }

  //callback get
  getState = (text) => {
    this.setState({ text: text })
  }

  render() {
    console.log(this.state.text);
    console.log(this.state.data);
    return this.state.isData ? (
      <div>
        <Input
          text={this.state.text}
          send={this.getState}
          request={this.request}/>
      </div>
    ) : (
      <div>
        <img src='./images/source.gif' alt='prosze czekac'/>
      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
