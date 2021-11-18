function otameshi() {
    //idがtext00の要素に入力された値を取得
    //inputタグに入力された値を取得するためにはvalueを使う。
    var text = document.getElementById("text00").value
    alert(text);
};

function otameshi2() {
    //otameshi1と同様に、valueを使って選択された内容の取得を行う。
    var selectedVal = document.getElementById("selectBox00").value
    alert(selectedVal);
};

function otameshi3() {
    var text = document.getElementById("text01").value
    if(text == "OK"){
        alert("OKが入力されました");
    } else {
        //elseの場合は処理無し。
    }
};

function otameshi4(){
    //querySelectorを使ってid指定で値を取得するためには「#id名」
    var divIdValue = document.querySelector("#divId").innerHTML;

    //querySelectorを使ってid指定で値を取得するためには「#id名」
    var divClassValue = document.querySelector(".divClass").innerHTML;

    //querySelectorを使ってname指定で値を取得するためには「 タグ名[name=設定したname] 」
    var divNameValue = document.querySelector("div[name='divName']").innerHTML;

    alert(divIdValue);
    alert(divClassValue);
    alert(divNameValue);
}