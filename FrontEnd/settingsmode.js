const stockToken = localStorage.getItem("token")

if(stockToken == ""){
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
    // console.log(iconeModif);

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
    // console.log(titreProjets);

    //RETRAIT FILTRES

    const mesFiltres = document.querySelector(".filtres")
    mesFiltres.remove()

    // console.log(mesFiltres);

    //MODIFIER BOUTON LOGIN LOGOUT

    const logoutBtn = document.getElementById("textlogout")
    logoutBtn.innerText = "logout"

    // logoutBtn.addEventListener("click", () => {
    //     window.localStorage.removeItem("token", body.token)
    //     console.log("je logoff");
    // })  
    // console.log(logoutBtn);

}
