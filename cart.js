import {navbar,footer} from "/data/data.js"

document.getElementById("header").innerHTML = navbar()
document.getElementById("footer").innerHTML = footer()

let a = JSON.parse(localStorage.getItem("cart")) || []

//document.getElementById("count").innerText = a.length

document.getElementById("c").innerText = a.length+" "+"Items In Cart"
let container = document.getElementById("products");

function showData(a){
    container.innerHTML = null;
a.forEach((el,index)=>{
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = el.image;
    let name = document.createElement("h3");
    name.innerText = el.name;
    let price = document.createElement("h3");
    price.innerText = "₹"+" "+el.price;
    
    // let btn1 = document.createElement("button");
    // btn1.innerText = "+"

    // let btn2 = document.createElement("button")
    // btn2.innerText = "-"

    let removeBtn = document.createElement("button");
    removeBtn.innerText = "Remove";
    removeBtn.id="remove";
    removeBtn.addEventListener("click",function test(){
        removeElement(el,index);
        
    })

    div.append(img,name,price,removeBtn);

    container.append(div);

})
}

showData(a)

function removeElement(el,index){
    a.splice(index,1)
    localStorage.setItem("cart",JSON.stringify(a));
    showData(a)
    document.getElementById("count").innerText = a.length
    document.getElementById("c").innerText = a.length+" "+"Items In Cart"
    window.location.reload();
}

let x = JSON.parse(localStorage.getItem("cart"))

let c = document.getElementById("charge")
let t = document.getElementById("total")
let ortotal = document.getElementById("ordertotal")
let total = 0;
let flag= false;
let y = 50
localStorage.setItem("charge",y)
x.forEach(el=>{
    
    total = total + Number(el.price);
})

let showValue = document.createElement("p")
showValue.innerText =+ total.toFixed(2);
t.append(showValue)

if(total<500)
{
    let s =+ localStorage.getItem("charge")
    let charge = document.createElement("p")
    charge.id = "u"
    charge.innerText = s;
    c.append(charge);
    let order = total + s;

    let o = document.createElement("p")
    o.innerText =+ order.toFixed(2);
    o.id = "d"
    ortotal.append(o);
}
else if(total=>500)
{
    let w = document.createElement("p")
    w.innerText = 0;
    c.append(w);
    let o = document.createElement("p")
    o.innerText =+ total.toFixed(2);
    o.id = "d"
    ortotal.append(o);
}

if(x.length===0)
{
    document.getElementById("u").remove();
    let h = document.createElement("p")
    h.innerText = 0
    c.append(h);
    document.getElementById("d").remove();
    let o = document.createElement("p")
    o.innerText = 0;
    ortotal.append(o);
}

let coup = document.getElementById("coup");

coup.addEventListener("click",function test(){

    alert("Masai20 Coupon Applied. Check Amount To Be Paid")

    let a =+ document.getElementById("d").innerText; 
    
    let discount = Math.round((20/100)*a);

    let topay = a - discount;

    document.getElementById("d").innerText = topay.toFixed(2);
    
})

let add = document.getElementById("add");

let details = JSON.parse(localStorage.getItem("details"))

add.addEventListener("click",function test1(){
    
    details.forEach(el=>{

        let div = document.createElement("div")
        div.id = "addressdiv";
        let div1 = document.createElement("div");
        div1.id = "go"
        let address = document.createElement("p")
        address.innerText = el.address;
        address.onclick = function(){
            
            div1.onclick = function(){
            window.location.href = "checkout.html";
            }
            let go = document.createElement("p")
            go.innerText = "Checkout"+" "+">"
            div1.append(go)
        }
        div.append(address);
        document.getElementById("address").append(div,div1);
    })
})

let random= document.getElementById("d").innerText
localStorage.setItem("amount",random)

