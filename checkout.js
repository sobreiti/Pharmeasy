import {navbar,footer} from "/data/data.js"

document.getElementById("header").innerHTML = navbar();
document.getElementById("footer").innerHTML = footer();


let a = localStorage.getItem("amount")

let b = document.getElementById("amount");

let c = document.createElement("p")
c.innerText =  "Amount To Be Paid"+" "+a;
b.append(c)

let upi = document.getElementById("upi");

upi.addEventListener("click",function(){
    let text;
    let info = prompt("Plase enter UPI ID:");
    if(info===null||info==="")
    {
        alert("Please enter valid UPI ID")
    }
    else{
        window.location.href = "success.html";
    }
})

let cash = document.getElementById("cash")
cash.addEventListener("click",function(){
    window.location.href = "success.html";
})

