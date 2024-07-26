
import {navbar,footer} from "/data/data.js"

document.getElementById("n").innerHTML = navbar()
document.getElementById("f").innerHTML = footer()


let img1 = "https://cms-contents.pharmeasy.in/banner/1fb73c6b889-MEDI40_M0_Dweb.jpg?dim=360x0&dpr=1&q=100"

    let img2 = "https://cms-contents.pharmeasy.in/banner/3dcf83f1f98-Entry_Dweb.jpg?dim=360x0&dpr=1&q=100"

    let img3 = "https://cms-contents.pharmeasy.in/banner/b9b34dbc96d-GETCSH_DWEB.jpg?dim=360x0&dpr=1&q=100"

    let img4 = "https://cms-contents.pharmeasy.in/banner/85955054ec0-Surgicare_Dweb_1.jpg?dim=360x0&dpr=1&q=100"

    let slideshow = document.getElementById("slideshow");

    let slidearr = {}

    let slideobj = [{

        img : img1
        

    },
    {
        img : img2
        
    },
    {
        img : img3
        
    },
    {
        img : img4
    }
]

    slidearr.search = slideobj;
    console.log(slidearr)

    let i=0;
    let id;

    let data = slidearr;


    function appendSlide(){
        
        id=setInterval(function(){

        if(i===data.search.length)
        {
            i=0;
        }
            
            slideshow.innerHTML = null;
            let div = document.createElement("div")
            
            let img = document.createElement("img")
            img.src = data.search[i].img;
            div.append(img)
            

            slideshow.append(div)
            i++;
    },3500)    
    }
    appendSlide()

document.getElementById("personal").onclick = function(){
    window.location.href = "personal.html"
}

let a = JSON.parse(localStorage.getItem("details"))
let user = document.getElementById("iiiistdiv")

let x =+ localStorage.getItem("confirm")
if(x ===1)
{
    let div = document.createElement("div")
    let p = document.createElement("p")
    p.innerText = "Hello"+" "+"User"
    div.id = "user"
    p.onclick = function test(){
        window.location.href = "account.html"
    }
    div.append(p)
    user.append(div)

}
localStorage.removeItem("confirm");

a.forEach(el=>{
    let div = document.createElement("div")
    let p = document.createElement("p")
    p.innerText = "Hello"+" "+el.name
    div.id = "user"
    p.onclick = function test(){
        window.location.href = "account.html"
    }
    div.append(p)
    user.append(div)   
})

document.getElementById("horlicks").onclick = function(){
    window.location.href = "horlicks.html"
}

    
