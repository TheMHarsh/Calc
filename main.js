function calc(x){
    let text =  document.getElementById("textarea").value;
    if(x === 'C'){
        document.getElementById("textarea").value = '';
    }
    else if(x === '='){
        document.getElementById("textarea").value = eval(text);
    }
    else{
        document.getElementById("textarea").value = text + x;
    }
}
