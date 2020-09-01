var products = ["Sony Xperia", "Samsung Galaxy", "Nokia 6", "Xiaomi Redmi Note 4",
"Apple Iphone 6S", "Xiaomi Mi 5S Plus", "Apple iPhone 8 Plus", "Fujisu F-04E", "Oppo A71"];
var currentIndex = null;
function displayProduct(){
    let bang = "<table>"
    for(let i = 0; i<products.length; i++){
        if(i%2==0){
            bang += `<tr style="background-color: rgb(240, 240, 240)">
            <td><button class="products" style="background-color: rgb(240, 240, 240)
            " type="button" onclick="uploadProduct('${products[i]}',${i})">${products[i]}</button></td>
            <td><button class="button" id="button" onclick="editProduct(${i})">Sửa</button></td>                    
            <td><button class="button" id="button" type="button" onclick="deleteProduct(${i})">Xoá</button></td>
        </tr>`
        }
        else{
            bang += `<tr style="background-color: white">
            <td><button class="products" style="background-color: white" type="button" 
            onclick="uploadProduct('${products[i]}',${i})">${products[i]}</button>
            </td>
            <td><button class="button" id="button" onclick="editProduct(${i})">Sửa</button></td>                    
            <td><button class="button" id="button" type="button" onclick="deleteProduct(${i})">Xoá</button></td>
        </tr>`
        }

    }
    bang +="</table>"
    document.getElementById('bang').innerHTML = bang;
    document.getElementById('i').innerHTML = products.length;
}
function addProduct(name){
    products.push(name);
    displayProduct();
    console.log(`bạn đã thêm ${name}`);
}
function uploadProduct(curName, index){
    console.log(curName);
    document.getElementById('edit').value = curName ;
    currentIndex = index;
    console.log(currentIndex);
    displayProduct();

}
function deleteProduct(index){
    products.splice(index,1);
    console.log(`bạn đã xoá ${products[index]}`);
    displayProduct();
}
function editProduct(index){
    console.log("called updated");
    products[index] =  document.getElementById('edit').value;
    currentIndex = null;
    displayProduct();
}
displayProduct();
