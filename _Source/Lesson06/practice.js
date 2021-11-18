function pra1(){
    var text = document.getElementById("pra1Text").value
    alert(text);
};

function pra2(){
    var selectedVal = document.getElementById("selectBox01").value
    if(selectedVal == "○"){
        alert("OK");
    } else {
        //elseの場合は処理無し。
    }
};

function pra3(){
    var pra3Val1 = document.getElementById("pra3Tag1").value
    var pra3Val2 = document.getElementById("pra3Tag2").value
    var pra3Val3 = document.getElementById("pra3Tag3").value
    if(pra3Val1 == "×" && pra3Val2 == "×" && pra3Val3 == "×"){
        alert("OK");
    } else {
        //elseの場合は処理無し。
    }
};

function pra4(){
    var pra4Val1 = document.getElementById("pra4Tag1").value
    var pra4Val2 = document.getElementById("pra4Tag2").value
    var pra4Val3 = document.getElementById("pra4Tag3").value
    var pra4Val4 = document.getElementById("pra4Tag4").value
    if((pra4Val1 == "○" && pra4Val4 == "○") || (pra4Val2 == "○" && pra4Val3 == "○")){
        alert("OK");
    } else {
        
    }

};