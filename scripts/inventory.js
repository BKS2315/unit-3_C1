let prodArr =JSON.parse(localStorage.getItem("products"));
console.log('prodArr:', prodArr)

function append(){
    let maindiv = document.getElementById("all_products");

prodArr.map(function(ele,index){
    let div =   document.createElement("div");
    let image = document.createElement("img");
    let type =  document.createElement("p");
    let desc =  document.createElement("p");
    let price = document.createElement("p");
    let rmv = document.createElement("button");
    rmv.innerText = "Remove product";
    rmv.addEventListener("click",function(){
    removeProd(ele,index);
    })

    image.src = ele.image;
    type.innerText = ele.type;
    desc.innerText = ele.desc;
    price.innerText = ele.price;

    div.append(image,type,desc,price,rmv);
    maindiv.append(div);   //appended data to div with id all_products

})

}
append();

function removeProd(ele,index){  //remove function
    // console.log(ele,index)
    prodArr.splice(index,1);
    console.log('prodArr:', prodArr)
    localStorage.setItem("products",JSON.stringify(prodArr));
    window.location.reload();
}
