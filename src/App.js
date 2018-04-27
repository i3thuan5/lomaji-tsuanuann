import React from 'react';
import axios from 'axios';
import { MainSection } from 'demo-ui';
import { 音標服務 } from './後端網址';
import 查詢 from './元件/查詢';
import 顯示結果 from './元件/顯示結果';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      句子: '大家共下來',
      正在查詢: false,
      多元書寫: null,
      非成功狀況: null,
    };
    this.查 = this.查.bind(this);
  }

  查(句子) {
    this.setState({
      正在查詢: true,
      非成功狀況: null,
    });

    axios.get(音標服務, {
      params: {
        查詢腔口: "閩南語",
        查詢語句: 句子,
      }
    })
    .then(function (response) {
      if(response.data.hasOwnProperty('多元書寫')
        && response.data.length !== 0){
        // success
        this.setState({
          多元書寫: response.data.多元書寫,
          正在查詢: false
        });
      }else{
        // API version error
        this.setState({
          非成功狀況: '回傳資料不存在多元書寫',
          正在查詢: false
        });
      }
    }.bind(this))
    .catch(function (error) {
      // ajax error
      this.setState({
        非成功狀況: 'ajax error',
        正在查詢: false,
      });
    }.bind(this));
  }

  render() {
    let {句子, 正在查詢, 多元書寫} = this.state;
    return (
      <MainSection>
        <查詢 
          預設句子={句子}
          正在查詢={正在查詢}
          handleClick={this.查}/>
        {
          this.state.多元書寫 ?
          <顯示結果 多元書寫={多元書寫}/>
          : null
        }
        {
          this.state.非成功狀況 ?
          this.state.非成功狀況
          : null
        }
      </MainSection>
    );
  }
}

export default App;
