async function connexion() {
    
    const form = document.querySelector("form")
    
    form.addEventListener("submit", async (event) =>{
        event.preventDefault()
        
        const email = document.getElementById("email").value
        const password = document.getElementById("pass").value
        
        if(email === "" || password === ""){
            console.log("le champs est vide");
        } else {
            console.log(email)
            console.log(password);
            const reponse = await fetch("http://localhost:5678/api/users/login", {
                method : "POST",
                body : JSON.stringify({
                    "email" : email,
                    "password" : password,
                }),
                headers : {"Content-Type": "application/json"},
            })
            const body = await reponse.json()
            console.log(body);
            window.localStorage.setItem("token", body.token)
            window.location.href="./"
        }
    })
}

connexion()