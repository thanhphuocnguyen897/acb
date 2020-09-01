function test(){
    let nam = document.getElementById('nam').value;
    if(nam % 4 == 0){
        if(nam % 100 != 0){
            document.getElementById('result').innerHTML = 'Năm nhuận';
        }
        else if (nam % 400 !=0){
            document.getElementById('result').innerHTML = 'Không phải năm nhuận';
        }
        else {
            document.getElementById('result').innerHTML = 'Năm nhuận';
        }
    }
    else {
        document.getElementById('result').innerHTML = 'Không phải năm nhuận';
    }
}