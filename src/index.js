import React from "react";
import ReactDom from "react-dom";

const App = () => {
  return (
    // JSX技法でreturnするHTMLはタグで囲む
    // 空カッコ<>でも同じ意味
    <React.Fragment>
      <h1>こんにちわ</h1>
      <p>おげんきですか</p>
    </React.Fragment>
  );
};
// App関数を画面に反映する
// 引数１；Appを要素として、引数２としてどこに？反映する
ReactDom.render(<App />, document.getElementById("root"));
