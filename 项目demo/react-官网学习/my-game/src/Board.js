import React, { Component } from 'react';

class Board extends Component {
  state = {  }
  renderSquire(i) { 
    return <square value={i} />
  }
}
 
export default Board;