import {arr,navbar,footer} from "/data/data.js"

document.getElementById("header").innerHTML = navbar();
document.getElementById("f").innerHTML = footer();

//console.log(arr)
let cont = document.getElementById("products");


function normal(){
    cont.innerHTML=null
arr.forEach(el=>{   
    let div = document.createElement("div");

    let image = document.createElement("img");
    image.src = el.image;
    image.id = "img";

    let name = document.createElement("p");
    name.innerText = el.name;
    name.id = "name";

    let price = document.createElement("p");
    price.innerText = "₹"+el.price;

    let btn = document.createElement("button")
    btn.innerText = "Add to Cart";
    btn.id = "btn";
    btn.addEventListener("click",function test(c){
    let name = el.name;
    let image = el.image;
    let price = el.price;
    let arr = JSON.parse(localStorage.getItem("cart")) || []
    let obj = 
    {
        name : name,
        image : image,
        price : price
    }
    arr.push(obj)
    document.getElementById("count").innerText = arr.length+" "+"items";
    localStorage.setItem("cart",JSON.stringify(arr))
    })
    let a = JSON.parse(localStorage.getItem("cart")) || []
    document.getElementById("count").innerText = a.length+" "+"items";

    div.append(image,name,price,btn);
    cont.append(div);
 })
}
normal()

function po(){
cont.innerHTML = null
 arr.forEach(el=>{   
    let div = document.createElement("div");

    let image = document.createElement("img");
    image.src = el.image;
    image.id = "img";

    let name = document.createElement("p");
    name.innerText = el.name;
    name.id = "name";

    let price = document.createElement("p");
    price.innerText = "₹"+el.price;

    let btn = document.createElement("button")
    btn.innerText = "Add to Cart";
    btn.id = "btn";

    div.append(image,name,price,btn);
    cont.append(div);
 })
 
}

document.getElementById("sort").addEventListener("change",
 function test(){

    
    if(this.value === "ltoh")
    {
        lowtohigh()
        
    }
    if(this.value === "htol")
    {
        hightolow()
        
    }
    else
    {
        po()
    }
    
     
})

//SORT LOW TO HIGH


function lowtohigh(){
    a.checked = false;
    b.checked = false;
    c.checked = false;
    d.checked = false;
    u.checked = false;
    let x = arr.sort((a,b)=>{
    return a.price - b.price
})
    cont.innerHTML = null;
    x.forEach(el=>{

    let div = document.createElement("div");

    let image = document.createElement("img");
    image.src = el.image;
    image.id = "img";

    let name = document.createElement("p");
    name.innerText = el.name;
    name.id = "name";

    let price = document.createElement("p");
    price.innerText = "₹"+el.price;

    let btn = document.createElement("button")
    btn.innerText = "Add to Cart";
    btn.id = "btn";
    btn.addEventListener("click",function test(c){
    let name = el.name;
    let image = el.image;
    let price = el.price;
    let arr = JSON.parse(localStorage.getItem("cart")) || []
    let obj = 
    {
        name : name,
        image : image,
        price : price
    }
    arr.push(obj)
    document.getElementById("count").innerText = arr.length+" "+"items";
    localStorage.setItem("cart",JSON.stringify(arr))
    })
    let a = JSON.parse(localStorage.getItem("cart")) || []
    document.getElementById("count").innerText = a.length+" "+"items";

    div.append(image,name,price,btn);

    cont.append(div);
    })
    

}


//SORT HIGH TO LOW



function hightolow(){
    a.checked = false;
    b.checked = false;
    c.checked = false;
    d.checked = false;
    u.checked = false;

    let y = arr.sort((a,b)=>{
    return b.price - a.price
})
console.log(y)

    cont.innerHTML = null;
    y.forEach(el=>{

    let div = document.createElement("div");

    let image = document.createElement("img");
    image.src = el.image;
    image.id = "img";

    let name = document.createElement("p");
    name.innerText = el.name;
    name.id = "name";

    let price = document.createElement("p");
    price.innerText = "₹"+el.price;

    let btn = document.createElement("button")
    btn.innerText = "Add to Cart";
    btn.id = "btn";
    btn.addEventListener("click",function test(c){
    let name = el.name;
    let image = el.image;
    let price = el.price;
    let arr = JSON.parse(localStorage.getItem("cart")) || []
    let obj = 
    {
        name : name,
        image : image,
        price : price
    }
    arr.push(obj)
    document.getElementById("count").innerText = arr.length+" "+"items";
    localStorage.setItem("cart",JSON.stringify(arr))
    })
    let a = JSON.parse(localStorage.getItem("cart")) || []
    document.getElementById("count").innerText = a.length+" "+"items";

    div.append(image,name,price,btn);

    cont.append(div);
    })
    
}

//BELOW 99

let a = document.getElementById("below99")

a.addEventListener("change",function(e){
    b.checked = false;
    c.checked = false;
    d.checked = false;
    u.checked = false;
    cont.innerHTML = null;
    console.log(1);
    arr.forEach(el=>{
        if(el.price<=99)
        {
            let div = document.createElement("div");

    let image = document.createElement("img");
    image.src = el.image;
    image.id = "img";

    let name = document.createElement("p");
    name.innerText = el.name;
    name.id = "name";

    let price = document.createElement("p");
    price.innerText = "₹"+el.price;

    let btn = document.createElement("button")
    btn.innerText = "Add to Cart";
    btn.id = "btn";
    btn.addEventListener("click",function test(c){
    let name = el.name;
    let image = el.image;
    let price = el.price;
    let arr = JSON.parse(localStorage.getItem("cart")) || []
    let obj = 
    {
        name : name,
        image : image,
        price : price
    }
    arr.push(obj)
    document.getElementById("count").innerText = arr.length+" "+"items";
    localStorage.setItem("cart",JSON.stringify(arr))
    })
    let a = JSON.parse(localStorage.getItem("cart")) || []
    document.getElementById("count").innerText = a.length+" "+"items";

    div.append(image,name,price,btn);

    cont.append(div);

        }
    })
    
})


//BETWEEN 100-199

let b = document.getElementById("b100to199");

b.addEventListener("change",function(e){
    a.checked = false
    c.checked = false
    d.checked = false;
    u.checked = false
    cont.innerHTML = null;
    console.log(2);
    arr.forEach(el=>{
        if(el.price>=100 && el.price<=199)
        {
            let div = document.createElement("div");

    let image = document.createElement("img");
    image.src = el.image;
    image.id = "img";

    let name = document.createElement("p");
    name.innerText = el.name;
    name.id = "name";

    let price = document.createElement("p");
    price.innerText = "₹"+el.price;

    let btn = document.createElement("button")
    btn.innerText = "Add to Cart";
    btn.id = "btn";
    btn.addEventListener("click",function test(c){
    let name = el.name;
    let image = el.image;
    let price = el.price;
    let arr = JSON.parse(localStorage.getItem("cart")) || []
    let obj = 
    {
        name : name,
        image : image,
        price : price
    }
    arr.push(obj)
    document.getElementById("count").innerText = arr.length+" "+"items";
    localStorage.setItem("cart",JSON.stringify(arr))
    })
    let a = JSON.parse(localStorage.getItem("cart")) || []
    document.getElementById("count").innerText = a.length+" "+"items";

    div.append(image,name,price,btn);

    cont.append(div);

        }
    })
    
})

//BETWEEN 200-299

let c = document.getElementById("b200to299");

c.addEventListener("change",function(e){
    a.checked = false;
    b.checked = false;
    d.checked = false;
    u.checked = false
    cont.innerHTML = null;
    console.log(3);
    arr.forEach(el=>{
        if(el.price>=200 && el.price<=299)
        {
            let div = document.createElement("div");

    let image = document.createElement("img");
    image.src = el.image;
    image.id = "img";

    let name = document.createElement("p");
    name.innerText = el.name;
    name.id = "name";

    let price = document.createElement("p");
    price.innerText = "₹"+el.price;

    let btn = document.createElement("button")
    btn.innerText = "Add to Cart";
    btn.id = "btn";
    btn.addEventListener("click",function test(c){
    let name = el.name;
    let image = el.image;
    let price = el.price;
    let arr = JSON.parse(localStorage.getItem("cart")) || []
    let obj = 
    {
        name : name,
        image : image,
        price : price
    }
    arr.push(obj)
    document.getElementById("count").innerText = arr.length+" "+"items";
    localStorage.setItem("cart",JSON.stringify(arr))
    })
    let a = JSON.parse(localStorage.getItem("cart")) || []
    document.getElementById("count").innerText = a.length+" "+"items";

    div.append(image,name,price,btn);

    cont.append(div);

        }
    })
    
})

//BETWEEN 300 TO 399

let d = document.getElementById("b300to399")

d.addEventListener("change",function(e){
    a.checked = false
    b.checked = false
    c.checked = false
    u.checked = false
    cont.innerHTML = null;
    console.log(4);
    arr.forEach(el=>{
        if(el.price>=300 && el.price<=399)
        {
            let div = document.createElement("div");

    let image = document.createElement("img");
    image.src = el.image;
    image.id = "img";

    let name = document.createElement("p");
    name.innerText = el.name;
    name.id = "name";

    let price = document.createElement("p");
    price.innerText = "₹"+el.price;

    let btn = document.createElement("button")
    btn.innerText = "Add to Cart";
    btn.id = "btn";
    btn.addEventListener("click",function test(c){
    let name = el.name;
    let image = el.image;
    let price = el.price;
    let arr = JSON.parse(localStorage.getItem("cart")) || []
    let obj = 
    {
        name : name,
        image : image,
        price : price
    }
    arr.push(obj)
    document.getElementById("count").innerText = arr.length+" "+"items";
    localStorage.setItem("cart",JSON.stringify(arr))
    })
    let a = JSON.parse(localStorage.getItem("cart")) || []
    document.getElementById("count").innerText = a.length+" "+"items";

    div.append(image,name,price,btn);

    cont.append(div);

        }
    })
    
})

//BETWEEN 400 TO 499

let u = document.getElementById("b400to499");

u.addEventListener("change",function(e){
    a.checked = false
    b.checked = false
    c.checked = false
    d.checked = false
    cont.innerHTML = null;
    console.log(4);
    arr.forEach(el=>{
        if(el.price>=400 && el.price<=499)
        {
            let div = document.createElement("div");

    let image = document.createElement("img");
    image.src = el.image;
    image.id = "img";

    let name = document.createElement("p");
    name.innerText = el.name;
    name.id = "name";

    let price = document.createElement("p");
    price.innerText = "₹"+el.price;

    let btn = document.createElement("button")
    btn.innerText = "Add to Cart";
    btn.id = "btn";
    btn.addEventListener("click",function test(c){
    let name = el.name;
    let image = el.image;
    let price = el.price;
    let arr = JSON.parse(localStorage.getItem("cart")) || []
    let obj = 
    {
        name : name,
        image : image,
        price : price
    }
    arr.push(obj)
    document.getElementById("count").innerText = arr.length+" "+"items";
    localStorage.setItem("cart",JSON.stringify(arr))
    })
    let a = JSON.parse(localStorage.getItem("cart")) || []
    document.getElementById("count").innerText = a.length+" "+"items";

    div.append(image,name,price,btn);

    cont.append(div);

        }
    })
    
})
