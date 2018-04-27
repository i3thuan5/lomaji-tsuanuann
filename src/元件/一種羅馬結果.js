import React from 'react';
import { Block, CopyButton } from 'demo-ui';
import 'semantic-ui-css/components/segment.min.css';
import 'semantic-ui-css/components/label.min.css';

const 一種羅馬結果 = ({類型, 羅馬陣列}) => {
  const reducer = (accumulator, currentValue) => accumulator + ' ' + currentValue;
  let 整段羅馬 = 羅馬陣列.reduce(reducer, '')
  return (
    <Block>
      <div className="ui segment">
      <a className="ui blue ribbon label">{類型}</a>
      {
          羅馬陣列.map((一句結果, key) => {
            return (<p key={key}>{一句結果}</p>);
          })
        }
        <CopyButton 複製內容={整段羅馬} 按鈕名="Khok"/>   
      </div>
    </Block>
  );
};

export default 一種羅馬結果;