import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
  render() {
    return <h1> test </h1>
  }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
