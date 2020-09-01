function check(){
    let name = document.getElementById('name').value;
    let pwd = document.getElementById('pwd').value;
    if (name == 'Admin'){
        if (pwd == 'TheMaster'){
            alert('Welcome.');
        }
        else if (pwd == 'null'){
            alert('Canceled.');
        }
        else{
            alert('Wrong password.');
        }
    }
    else if (name == 'null'){
        alert('Canceled.');
    }
    else{
        alert('I dont know you.');
    }
}
