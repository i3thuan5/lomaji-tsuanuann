import React from 'react';
import { CopyButton } from 'demo-ui';

const 顯示一句羅馬 = ({類型, 羅馬}) => 
  <li>{類型}：{羅馬}<CopyButton 複製內容={羅馬} 按鈕名={類型}/></li>

export default 顯示一句羅馬;