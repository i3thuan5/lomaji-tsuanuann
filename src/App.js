import React from 'react';
import axios from 'axios';
import 查詢 from './元件/查詢';
import 顯示結果 from './元件/顯示結果';
import { MainSection } from 'demo-ui';
import './App.css';

let 音標服務 = "https://服務.意傳.台灣/標漢字音標"

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      句子: '大家共下來',
      多元書寫: null
    };
    this.查 = this.查.bind(this);
  }

  查(句子) {
    axios.get(音標服務, {
      params: {
        查詢腔口: "閩南語",
        查詢語句: 句子,
      }
    })
    .then(function (response) {
      if(response.data.hasOwnProperty('多元書寫')
        && response.data.length !== 0){
        this.setState({多元書寫: response.data.多元書寫});
      }
    }.bind(this))
    .catch(function (error) {
      console.log('error', error);
    });
  }

  render() {
    return (
      <MainSection>
        <查詢 
          預設句子={this.state.句子}
          handleClick={this.查}/>
        {
          this.state.多元書寫 ?
          <顯示結果 多元書寫={this.state.多元書寫}/>
          : null
        }
      </MainSection>
    );
  }
}

export default App;
