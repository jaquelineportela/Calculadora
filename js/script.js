
function insert(value){
    var numero = document.getElementById('screen').innerHTML;
    document.getElementById('screen').innerHTML = numero + value;
}
function del(){
    var result = document.getElementById('screen').innerHTML;
    document.getElementById('screen').innerHTML = result.substring(0, result.length -1);
}
function equal(){
    var result = document.getElementById('screen').innerHTML;
    if(result){
        document.getElementById('screen').innerHTML = eval(result);
    }
    else{
        document.getElementById('screen').innerHTML = "0";
    }
}
function clean(){
    document.getElementById('screen').innerHTML = "";
}
function exponential(){
    var exp = document.getElementById('screen').innerHTML;
    document.getElementById('screen').innerHTML = Math.pow(exp, 2);
}
function radiciation(){
    var rad = document.getElementById('screen').innerHTML;
    document.getElementById('screen').innerHTML = Math.sqrt(rad, 2);   
}
function trunc(){
    var truncamento = document.getElementById('screen').innerHTML;
    document.getElementById('screen').innerHTML = Math.trunc(truncamento);
}