//store the products array in localstorage as "products"
let prodAdd = function(t,d,p,i){  //constructor function
this.type = t,
this.desc = d,
this.price = p,
this.image = i
};


let prodArr =JSON.parse(localStorage.getItem("products")) || [];

function addProduct(){
    event.preventDefault();
    let form = document.getElementById("products");
    let type = form.type.value;
    // console.log('type:', type)
    let desc = form.desc.value;
    // console.log('desc:', desc)
    let price = form.price.value;
    // console.log('price :', price )
    let image = form.image.value;
    // console.log('image:', image)
  let p1 = new prodAdd(type,desc,price,image)
//   console.log('p1:', p1)
prodArr.push(p1);
localStorage.setItem("products",JSON.stringify(prodArr));
document.getElementById("products").value = null;
  window.location.reload()

}
