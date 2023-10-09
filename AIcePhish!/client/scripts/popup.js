//AIか人間か出力
function show_AI_or_HUMAN(is_AI){
    var output_ID = document.getElementById('output');
    document.getElementById("output").style.color = "white";
    var output_string = ""
    if(is_AI == "True"){
        output_ID.style.backgroundColor = 'red';
        output_string = "<p>This is AI</p>"
    }
    else {
        output_ID.style.backgroundColor = 'green';
        output_string = "<p>This is HUMAN</p>"
    }
    output_ID.innerHTML = output_string;
}

//エラー出力
function error(error_string){
    var output_ID = document.getElementById('output');
    output_ID.innerHTML += "<p>ERROR:"+ error_string +"</p>";
}