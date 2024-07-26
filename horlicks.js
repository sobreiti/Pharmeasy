import {navbar,footer,horlicksarr} from "/data/data.js"

document.getElementById("header").innerHTML = navbar();
document.getElementById("footer").innerHTML = footer();
let cont = document.getElementById("productsdiv");
let a = horlicksarr;
console.log(a);
a.forEach(el=>{

    let div = document.createElement("div");
    div.id = "div"
    let name = document.createElement("p")
    name.id = "name"
    name.innerText = el.name;

    let image = document.createElement("img");
    image.src = el.image;

    let price = document.createElement("p")
    price.id = "price"
    price.innerText = "₹"+" "+el.price;

    let btn = document.createElement("button")
    btn.id = "btn"
    btn.innerText = "Add To Cart"
    btn.addEventListener("click",function(){
        let name = el.name;
        let image = el.image;
        let price = el.price;

        let arr = JSON.parse(localStorage.getItem("cart")) || [];
        let obj = {
            name:name,
            image:image,
            price:price
        }
        arr.push(obj);
        document.getElementById("count").innerText = arr.length+" "+"items";
        localStorage.setItem("cart",JSON.stringify(arr));
    })
    let a = JSON.parse(localStorage.getItem("cart")) || []
    document.getElementById("count").innerText = a.length+" "+"items";

    div.append(image,name,price,btn);

    productsdiv.append(div)
})
