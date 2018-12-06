import React from 'react';
import { Block, CopyButton } from 'demo-ui';
import 'semantic-ui-css/components/segment.min.css';
import 'semantic-ui-css/components/label.min.css';

const Tsit8Kiat4Ko2 = ({類型, 按鈕名, 羅馬陣列, 整段羅馬}) => {
  return (
    <Block>
      <div className="ui segment">
      <a className="ui blue ribbon label">{類型}</a>
      {
          羅馬陣列.map((一句結果, key) => {
            return (<p key={key}>{一句結果}</p>);
          })
      }
      {
        整段羅馬 ?
        <div id={類型}>
          <CopyButton 複製內容={整段羅馬} 按鈕名={按鈕名}/>
        </div>
        : <span className="App-hint-text">無內容</span>
      }
      </div>
    </Block>
  );
};

export default Tsit8Kiat4Ko2;