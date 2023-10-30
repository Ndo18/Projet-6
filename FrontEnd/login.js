function connexion() {

    const form = document.querySelector("form")
    
    form.addEventListener("submit", (event) =>{
        event.preventDefault()
        // fetch("http://localhost:5678/api/users/login", {
        //     method : "POST",
        //     headers : {"Content-Type": "application/json"},
        //     body 
        // })

        /*TOKEN LOCALSTORAGE*/
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1MTg3NDkzOSwiZXhwIjoxNjUxOTYxMzM5fQ.JGN1p8YIfR-M-5eQ-Ypy6Ima5cKA4VbfL2xMr2MgHm4"
        const valeurToken = JSON.stringify(token)
        window.localStorage.setItem("token", valeurToken)
        
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