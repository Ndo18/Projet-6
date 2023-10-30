function connexion() {

    const form = document.querySelector("form")
    
    form.addEventListener("submit", (event) =>{
        event.preventDefault()
        // fetch("http://localhost:5678/api/users/login", {
        //     method : "POST",
        //     headers : {"Content-Type": "application/json"},
        //     body 
        // })
        
        const email = document.getElementById("email")
        const password = document.getElementById("pass")
    
        if(email === "" || password === ""){
            console.log("le champs est vide");
        } else {
            console.log(email.value)
            console.log(password.value);
        }
    })
}

connexion()