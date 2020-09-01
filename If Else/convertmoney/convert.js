function convert(){
    var money = +document.getElementById('amount').value;
    var country1 = document.getElementById('country1').value;
    var country2 = document.getElementById('country2').value;
    var converts;
    if (country1=='vnd' && country2=='usa'){
        converts = money/23000;
        document.write(converts + ' USA');
    }
    else if (country2=='vnd' && country1=='usa'){
        converts = money*23000;
        document.write(converts + ' VNĐ');
    }
    else{
        converts = money;
        document.write(converts);
    }
}