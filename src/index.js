import React from "react";
import ReactDom from "react-dom";
import App from "./App";

// コンポーネント化したAPPを利用するので
// 前回書き下したコードは削除

// App関数を画面に反映する
// 引数１；Appを要素として、引数２としてどこに？反映する
ReactDom.render(<App />, document.getElementById("root"));
