import React, { Component } from 'react';

class square extends Component {
  state = {  }
  render() {
    return (
      <button className="square" style={{margin: '20px'}}>123{this.props.value}</button>
    );
  }
}

export default square;
