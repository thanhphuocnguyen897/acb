function check(){
    let browser = document.getElementById('browser').value;
    //const Edge = 1, Chrome = 2, Firefox = 3, Safari = 4, Opera = 5;
    switch(browser){
        case "Edge": 
            alert("You've got the Edge!"); break;
        case "Chrome":
        case "Firefox":
        case "Safari":
        case "Opera":
            alert("Okay we support these browsers too!"); break;
        default: alert("We hope that this page looks ok!");
    }
}
