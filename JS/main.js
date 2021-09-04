var producrNameInput=document.getElementById('productName');
var productIdInput=document.getElementById('productID');
var productPriceInput=document.getElementById('productPrice');
var productCateInput=document.getElementById('productCate');
var productDescInput=document.getElementById('productDesc');

if(localStorage.getItem("products") != null)
{

   var ProductContainer=JSON.parse(localStorage.getItem("products"));
      displayProducts() ;
}
else
{
    var ProductContainer = [];
}

function addProduct()
{
  product={
      Name:producrNameInput.value,
      Id:productIdInput.value,
      price:productPriceInput.value,
      category:productCateInput.value,
      description:productDescInput.value
  }
  ProductContainer.push(product) ;
  localStorage.setItem('products',JSON.stringify(ProductContainer));
  displayProducts() ;
  clearForm();
  console.log(ProductContainer);
}

function clearForm()
{

    producrNameInput.value="";
    productIdInput.value="";
    productPriceInput.value="";
    productCateInput.value="";
    productDescInput.value="";
}


function displayProducts()
{
 var container="";
 for(var i=0;i<ProductContainer.length;i++)
 {
 
    container+=`   <tr>
    <td>${i}</td>
    <td>${ProductContainer[i].Name}</td>
    <td>${ProductContainer[i].Id}</td>
    <td>${ProductContainer[i].price}</td>
    <td>${ProductContainer[i].category}</td>
    <td>${ProductContainer[i].description}</td>
    <td> <button id="updateBtn" class="btn btn-primary ">Update</button></td>
    <td> <button  onclick="deleteProduct(${i})" id="deleteBtn" class="btn btn-danger">Delete</button></td>
   
</tr>`
 }
document.getElementById('tableData').innerHTML=container;
}

function deleteProduct(index)
{
 
    ProductContainer.splice('index',1);
    displayProducts();
    localStorage.setItem('products',JSON.stringify(ProductContainer));
    console.log(index)

}
// function searchProduct(term)
 
// {
//     var container="";
//     for (var i=0 ; i<ProductContainer.length;i++)
// {
    
//     if(ProductContainer[i].Name.toLowerCase().includes(term.toLowerCase())==true)

//     {

//         container+=`   <tr>
//         <td>${i}</td>
//         <td>${ProductContainer[i].Name}</td>
//         <td>${ProductContainer[i].Id}</td>
//         <td>${ProductContainer[i].price}</td>
//         <td>${ProductContainer[i].category}</td>
//         <td>${ProductContainer[i].description}</td>
//         <td> <button id="updateBtn" class="btn btn-primary ">Update</button></td>
//         <td> <button  onclick="deleteProduct(${i})" id="deleteBtn" class="btn btn-danger">Delete</button></td>
       
//     </tr>`

//     }
// }
// document.getElementById('tableData').innerHTML=container;
// }



// <td class="text-center" id="update"><i class="far fa-edit text-warning"></i></td>
    // <td class="text-center" id="delete"><i class="far fa-trash-alt text-danger"></i></td>