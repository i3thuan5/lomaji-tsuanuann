import React from 'react';
import Tsit8Kiat4Ko2 from './一種羅馬結果';

const 顯示結果 = ({多元書寫}) => {
  let 臺羅陣列 = [];
  let 白話字陣列 = [];
  if (多元書寫) {
      多元書寫.forEach(ele => {
        臺羅陣列.push(ele.臺羅);
        白話字陣列.push(ele.白話字);
      }); 
  }
  return (
  <div>
    <Tsit8Kiat4Ko2 類型="臺羅" 羅馬陣列={臺羅陣列}/>
    <Tsit8Kiat4Ko2 類型="白話字" 羅馬陣列={白話字陣列}/>
  </div>
  );
}
export default 顯示結果;
