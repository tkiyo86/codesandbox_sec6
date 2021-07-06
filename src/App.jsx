import React, { useState } from 'react';
import ColorfulMessage from './components/ColorfulMessage';
import ColorfulMessage2 from './components/ColorfulMessage2';

// コンポーネント化する、拡張子はJSXがよい

/** 45
  usestate; コンポーネントの状態
  引数に１，変数名、２，関数名（set***）
  usestate(初期値)
  ボタンを押すことでnumをsetNumで動的に更新したい
 */
const App = () => {
  const onClickCountup = () => {
    setNum(num+1);
  };
  const [num, setNum] = useState(0);  
  return (
    <>
      <h1 style={{color: 'red'}}>こんにちわ</h1>
      <ColorfulMessage2 color="blue">お元気ですか？</ColorfulMessage2>
      <ColorfulMessage color="green" message="元気です"/>
      <button onClick={onClickCountup}>カウントアップ</button>
      <p>{num}</p>
    </>
  );
};

// 他で利用する
export default App;