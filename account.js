import {navbar,footer} from "/data/data.js"

    document.getElementById("header").innerHTML = navbar();
    document.getElementById("footer").innerHTML = footer();

    document.getElementById("save").onclick = function test(e){
        e.preventDefault();

        let name = document.getElementById("name").value;
        let mobile = document.getElementById("number").value;
        let email = document.getElementById("email").value;
        let address = document.getElementById("address").value;

        if(name!==""&&mobile!==""&&email!==""&&address!==""){

        let arr = [
            {
                name : name,
                mobile : mobile,
                email : email,
                address : address
            }
        ]
        console.log(arr);

        localStorage.setItem("details",JSON.stringify(arr))
        alert("Details Successfully Saved");
        window.location.href = "index.html";
        }
        else
        {
            alert("Please Fill In All The Details");
        }
    }