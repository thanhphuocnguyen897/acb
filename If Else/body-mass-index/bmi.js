function cal(){
    let h = +document.getElementById('height2').value; 
    let w = +document.getElementById('weight').value; 
    let bmi = w/(h*h);
    if (bmi <18.5){
        document.getElementById('result').innerHTML = bmi + " Underweight!!";
    }
    else if (bmi < 25.0){
        document.getElementById('result').innerHTML = bmi + " Normal!";
    }
    else if (bmi < 30.0){
        document.getElementById('result').innerHTML = bmi + " Overweight!";
    }
    else{
        document.getElementById('result').innerHTML = bmi + " Obese!";
    }
}