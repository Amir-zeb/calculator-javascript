function getresult(num){
    var result=document.getElementById("result");
    result.value +=num;
}

function clresult(){
    var result=document.getElementById("result");
    result.value="";
}

function setresult(){
    var result=document.getElementById("result");
    result.value=eval(result.value);
}