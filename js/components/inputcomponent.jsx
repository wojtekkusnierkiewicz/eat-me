import React, {Component} from 'react'

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text
    };
  }

  //getting value from input and sending it to App component in callback
  textChange = (event) => {
    this.setState({
      text: event.target.value
    }, () => {
      this.props.send(this.state.text)
    });
  }

  // init api search on btn
  request = (event) => {
    event.preventDefault();
    this.props.request();
  }

  render() {
    return (
      <div>
        <form>
          <input type='text' id='searchInput' placeholder='just type and search' value={this.state.text} onChange={this.textChange}/>
          <button onClick={this.request}>Search</button>
        </form>
      </div>
    )
  }
}

export default Input;
