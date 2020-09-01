function insert(num){
    document.screen.screen.value += num; //document.screen.screen.value + num;
}
function equal(){
    var giatri = document.screen.screen.value;
    if (giatri){
        document.screen.screen.value = eval(giatri);
    }
}
function del(){
    document.screen.screen.value = "";
}