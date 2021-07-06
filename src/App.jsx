import React from 'react';
import ColorfulMessage from './components/ColorfulMessage';
import ColorfulMessage2 from './components/ColorfulMessage2';

// コンポーネント化する、拡張子はJSXがよい

/** 44
  コンポーネント＋Propsで再利用しやすい形に
  ColorfulMessage で色と文章を引数にする
 */
const App = () => {
  const onClickButton = () => alert();  
  return (
    <>
      <h1 style={{color: 'red'}}>こんにちわ</h1>
      <ColorfulMessage2 color="blue">お元気ですか？</ColorfulMessage2>
      <ColorfulMessage color="green" message="元気です"/>
      <button onClick={onClickButton}>押す</button>
    </>
  );
};

// 他で利用する
export default App;