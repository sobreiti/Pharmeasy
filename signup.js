import {navbar,footer} from "/data/data.js"
document.getElementById("header").innerHTML = navbar();
document.getElementById("footer").innerHTML = footer()
let i = document.getElementById("in")

document.getElementById("continue").addEventListener("click",
function test(){
    let n = String(document.getElementById("num").value);
    console.log(n)
    if(n.length == 10)
    {
        let div = document.createElement("div");
        div.id = "otpbox"
        let cdiv = document.createElement("div");
        cdiv.id = "cdiv"
        let div1 = document.createElement("input");
        let div2 = document.createElement("input");
        let div3 = document.createElement("input");
        let div4 = document.createElement("input");
        let btn = document.createElement("button")
        btn.innerText = "Submit"
        btn.id = "Submit"
        
        btn.addEventListener("click",function test(){
            if(div1.value === '1' && div2.value==='2'&&div3.value==='3'&&div4.value==='4'){
            window.location.href = "index.html"
            localStorage.setItem("confirm",1)
            }
            else{
                alert("Enter Valid OTP")
            }
        })
        
        let p = document.createElement("p")
        p.innerText = "OTP sent to"+" "+n
        p.id="p"
        cdiv.append(div1,div2,div3,div4)
        div.append(p,cdiv,btn)
        i.append(div);
        document.getElementById("num").remove()
        document.getElementById("continue").remove()
        document.getElementById("quick").remove()
        
    }
    else{
        alert("Enter Valid 10 Digit Number")
    }

})

