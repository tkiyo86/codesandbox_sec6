import React, { useState, useEffect } from 'react';
import ColorfulMessage from './components/ColorfulMessage';
import ColorfulMessage2 from './components/ColorfulMessage2';

// コンポーネント化する、拡張子はJSXがよい

/** 46
 再レンダリング
 再レンダリングの指示をしてないのにreactではStateが更新
 ＝画面がこうしんされている
 これはreact自身がコンポーネント内部で変更があれば再レンダリングしているから

 再レンダリングする条件は
 １，Stateを変更したとき
 ２，Propsの中身が変わったとき
 ３，親コンポが再レンダされると子コンポも再レンダリングされる
 */
const App = () => {
  console.log("コンポ―ネントのはじまり");
  const [num, setNum] = useState(0);  
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  const onClickCountup = () => {
    setNum(num+1);
  };

  // !でnot True/Falseを切り替えている
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

/**
カウントアップして3の倍数の時だけ
表示するようにしたい

単純なIF文で対処するとレンダリング回数が多すぎてエラー
Error
Too many re-renders. 
React limits the number of renders to prevent an infinite loop.
 
  if (num%3 === 0) {
    setFaceShowFlag(true);
  } else {
    setFaceShowFlag(false);
  };
  */

// useEffect 第二引数で空の配列　＝　はじめの一回だけread
// [num] とするとnumの値が変わった時だけ実行される
// ボタンON/OFFを変更しても影響はない、numだけを見て実行される
  useEffect(() => {
    if (num > 0) {
      if (num%3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    //console.log("useEffect!",{num})
  }, [num]);


  // 画面のレンダリング
  return (
    <>
      <h1 style={{color: 'red'}}>こんにちわ</h1>
      <ColorfulMessage2 color="blue">お元気ですか？</ColorfulMessage2>
      <ColorfulMessage color="green" message="元気です"/>
      <button onClick={onClickCountup}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>46再レンダリング</p>}
    </>
  );
};

// 他で利用する
export default App;