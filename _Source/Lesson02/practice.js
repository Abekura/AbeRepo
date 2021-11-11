function practice01(){
    document.getElementById('pra1').innerHTML = '出来ました';
}

function practice02(){
    document.getElementById('pra2').setAttribute('src', './img/dog.jpg');
}

function practice03(){
    document.getElementById('pra3').setAttribute('style', "color:blue;");
}

function ouyou01(){
    document.getElementById('OY1').setAttribute('src', './img/cat.jpg');
    document.getElementById('OY3').setAttribute('src', './img/cat.jpg');
}

function ouyou02(){
    document.getElementById('OY2').setAttribute('src', './img/dog.jpg');
    document.getElementById('OY4').setAttribute('src', './img/dog.jpg');

    document.getElementById('OY2').style.width = "80%";
    document.getElementById('OY2').style.height = "80%";
    document.getElementById('OY4').style.width = "80%";
    document.getElementById('OY4').style.height = "80%";
}