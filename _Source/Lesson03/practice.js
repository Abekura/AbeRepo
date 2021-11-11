function mondai01(){
    document.getElementById('pra1').innerHTML = '出来ました';
}

function mondai02(){
    document.getElementById('image1').src = './img/dog.jpg';
}

function mondai03(){
    document.getElementById('redmoji').style = 'color:blue;';
}

function dekai(){
    document.getElementById('image2').style.width = '150px';
}

function tiisai(){
    document.getElementById('image2').style.width = '75px';
}

function syakyou(){
    var color = document.getElementById('syakyouZone').style.color;
    if(color == "red"){
        document.getElementById('syakyouZone').style.color = 'lightgreen';
    }else{
        document.getElementById('syakyouZone').style.color = 'red';
    }
}

function whoishe(){
    var name = document.getElementById('who').name;
    for(var i = 0; i < 100; i++){
        if(i == 50){
            alert('50回変わりました');
        }
        if(name == "gihun"){
            document.getElementById('who').src = './img/you.jpg';
            document.getElementById('who').name = 'who1';
        }else{
            document.getElementById('who').src = './img/gihun.jpg';
            document.getElementById('who').name = 'gihun';
        }
        
    }
}