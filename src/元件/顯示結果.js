import React from 'react';
import Tsit8Kiat4Ko2 from './一種羅馬結果';

const 顯示結果 = ({查詢結果}) => {
  let 臺羅陣列 = [];
  let 白話字陣列 = [];
  if (查詢結果) {
    if (查詢結果.hasOwnProperty('臺羅')) {
      臺羅陣列 = 查詢結果.臺羅.split('\n');
    }
    if (查詢結果.hasOwnProperty('白話字')) {
      白話字陣列 = 查詢結果.白話字.split('\n');
    }
  }
  return (
  <div>
    <Tsit8Kiat4Ko2 類型="臺羅" 羅馬陣列={臺羅陣列}/>
    <Tsit8Kiat4Ko2 類型="白話字" 羅馬陣列={白話字陣列}/>
  </div>
  );
}
export default 顯示結果;
