import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      isClicked: false //isClicked 
    };
    this.handleClick = this.handleClick.bind(this); //bind
  }

  //handler goes here
  handleClick() {
    this.setState(prevState => ({ 
      isClicked: !prevState.isClicked 
    }));
  }

  render() {
    return (
      <div>
        <p>Greetings!</p>
        <p>Button goes here</p>
        <button onClick={() => this.handleClick()}> 
          {this.state.isClicked?"thanks":"click me"} 
        </button>
      </div>
    );
  }
}