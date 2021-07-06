import React from 'react';

// コンポーネント化する、拡張子はJSXがよい

/** 43
1, button : {}で囲むとJSとして認識する
2, sytle cssを書く
　　style={{}}　　　一つ目の｛｝はＪＳを書く宣言
　　　2つ目の｛｝はオブジェクトの｛｝
 */
const App = () => {
  const onClickButton = () => alert(); 
  const contentStyle = {
    color: 'blue',
    fontSize: '18px',
  };
  return (
    <>
      <h1 style={{color: 'red'}}>こんにちわ</h1>
      <p style={contentStyle}>おげんきですか</p>
      <button onClick={onClickButton}>押す</button>
    </>
  );
};

// 他で利用する
export default App;