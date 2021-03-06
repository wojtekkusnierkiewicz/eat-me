import React, {Component} from 'react'

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text,
      page:''
    };
  }

  //getting value from input and sending it to App component in callback
  textChange = (event) => {
    this.setState({
      text: event.target.value,
      page: 1,
    }, () => {
      this.props.send(this.state.text, this.state.page)
    });
  }

  // init api search on btn and clear favourite list
  request = (event) => {
    event.preventDefault();
    this.props.request();
    this.setState({text:''})
  }

  render() {
    return (
      <div className='inputComponent'>
        <form>
          <input type='text' id='searchInput' placeholder='just type and search' value={this.state.text} onChange={this.textChange}/>
          <button  className='buttons' onClick={this.request}>Search</button>
        </form>
      </div>
    )
  }
}

export default Input;
