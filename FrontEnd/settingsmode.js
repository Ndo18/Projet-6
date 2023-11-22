const stockToken = localStorage.getItem("token")

if(stockToken === null){
    console.log("vous n'êtes pas connecté");
} else {
    //BARRE MODE EDITION
    const bandEdition = document.getElementById("band")
    bandEdition.classList.add("editionmode")
    //ÎCONE
    const iconeModif = document.createElement("i")
    iconeModif.classList.add("fa-regular", "fa-pen-to-square")
    //TEXT
    const textEdition = document.createElement("p")
    textEdition.innerText = " Mode édition"
    
    textEdition.prepend(iconeModif)
    bandEdition.appendChild(textEdition)
    
    console.log("vous êtes connecté");
    
    //MES PROJETS
    const titreProjets = document.querySelector(".titreprojets")
    const textEditionProjets = document.createElement("button")
    textEditionProjets.innerText = " Modifier"
    textEditionProjets.classList.add("btnmodifier")
    const iconeModif2 = document.createElement("i")
    iconeModif2.classList.add("fa-regular", "fa-pen-to-square")
    
    textEditionProjets.prepend(iconeModif2)
    titreProjets.appendChild(textEditionProjets)
    
    //RETRAIT FILTRES
    const mesFiltres = document.querySelector(".filtres")
    mesFiltres.remove()
    
    //MODIFIER BOUTON LOGIN LOGOUT
    
    const logoutBtn = document.getElementById("textlogout")
    logoutBtn.classList.add("logoutbtn")
    logoutBtn.innerText = "logout"
    
    //DECONNECTION
    
    logoutBtn.addEventListener("click", () => {
        window.localStorage.clear()
        window.location.href = "./"
    }) 
}
