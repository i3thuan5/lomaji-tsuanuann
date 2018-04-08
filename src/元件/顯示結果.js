import React from 'react';
// import 顯示一句羅馬 from './顯示一句羅馬';

const 顯示結果 = ({多元書寫}) => {
  return (
  <div>
  {
    多元書寫.map((一句結果, key) => {
      return (
        <ul key={key}>
          <li>臺羅:{一句結果.臺羅}</li>
          <li>臺羅數字調: {一句結果.臺羅數字調}</li>
          <li>通用數字調: {一句結果.通用數字調}</li>
        </ul>
      );
    })
  }
  </div>
  );
}
export default 顯示結果;
