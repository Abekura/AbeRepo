// Copyright 2021 Google LLC
//
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file or at
// https://developers.google.com/open-source/licenses/bsd
document.getElementById('viewButton').addEventListener('click', viewHistory);
document.getElementById('deleteButton').addEventListener('click', deleteHistory);
function viewHistory(){
   let searchItem = {
      text:""
   }
   chrome.history.search(searchItem,function (historyItems) {
      //----------やってみよう----------
      //13行目にあるhistoryItemsはchromeの履歴がつまった配列です。
      //↓のfor文を完成させて、配列の数だけループさせよう。
      //【ヒント】length
      for(var i = 0 ; i < historyItems.length ; i++){
         //---------やってみよう2----------
         //ブラウザのコンソールに表示されたデータを見て、
         //サイトタイトルをHTMLのidが「historyList」の要素にタイトルを表示させよう。
         var record = historyItems[i].title + ":" + historyItems[i].visitCount + "回アクセスしました。<br>"
         var totalRecord = totalRecord + record;
      }
      document.getElementById("historyList").innerHTML = totalRecord;
      console.log(historyItems);
   });
}

///ここから↓に削除処理を書いてみよう///
function deleteHistory(){
   chrome.history.deleteAll(function(){
      alert("消しました");
   });
}