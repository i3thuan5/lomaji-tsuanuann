import React from 'react';
import 查詢 from './元件/查詢';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      句子: 'abc',
      綜合標音: null
    };
  }

  查(句子) {
    console.log(句子);
    // ajax.get('/...').query('句子')
  }

  render() {
    return (
      <div className="App">
        <查詢 
          預設句子={this.state.句子}
          handleClick={this.查.bind(this)}
        />
      </div>
    );
  }
}

export default App;
