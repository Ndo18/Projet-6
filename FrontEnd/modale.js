function ouvertureModale(){
    //CREATION MODALE
    
    //MODALE CONTAINER
    const modalContainer = document.querySelector(".modale-container")
    
    //OVERLAY
    const overlay = document.createElement("div")
    overlay.classList.add("overlay")
    
    //MODALE
    const modale = document.createElement("div")
    modale.classList.add("modale")
    
    //BOUTON DE FERMETURE
    const closeBtn = document.createElement("button")
    closeBtn.classList.add("close-btn")
    const closeCross = document.createElement("i")
    closeCross.classList.add("fa-solid", "fa-xmark")
    
    //BOUTON PRECEDENT
    const previousBtn = document.createElement("button")
    previousBtn.id = "previousbtn"
    previousBtn.classList.add("previous-hide")
    const previousArrow = document.createElement("i")
    previousArrow.classList.add("fa-solid", "fa-arrow-left")
    
    //TITRE MODALE
    const modaleTitle = document.createElement("h3")
    modaleTitle.innerText = "Galerie photo"
    
    //GALLERIE PROJETS
    const galleryModale = document.createElement("div")
    galleryModale.classList.add("gallerymodale")
    
    //BOUTON D'AJOUT DE PROJETS
    const btnAjouter = document.createElement("input")
    btnAjouter.type = "submit"
    btnAjouter.value = "Ajouter une photo"
    btnAjouter.id = "btnAjouter"
    
    //INSERTION HTML
    modalContainer.appendChild(overlay)
    modalContainer.appendChild(modale)
    modale.appendChild(closeBtn)
    closeBtn.prepend(closeCross)
    modale.appendChild(modaleTitle)
    modale.appendChild(galleryModale)
    modale.appendChild(btnAjouter)
    modale.appendChild(previousBtn)
    previousBtn.appendChild(previousArrow)

    // previousBtn.addEventListener("click", () => {
    //     ouvertureModale()
    //     genererImgProjets()
    // })
}
ouvertureModale()

//OUVERTURE MODALE
const btnModif = document.querySelector(".btnmodifier")

btnModif.addEventListener("click", () =>{
    const modalContainer = document.querySelector(".modale-container")
    modalContainer.classList.add("modalepop")
})

//FERMETURE MODALE
const btnCloseModale = document.querySelector(".close-btn")
const overlayClose = document.querySelector(".overlay")

btnCloseModale.addEventListener("click", () => {
    const modalContainer = document.querySelector(".modale-container")
    modalContainer.classList.remove("modalepop")
})

overlayClose.addEventListener("click", () => {
    const modalContainer = document.querySelector(".modale-container")
    modalContainer.classList.remove("modalepop")
})



//PAGE AJOUT PROJETS
btnAjouter.addEventListener("click", () => {
    ajoutProjets()
})

async function ajoutProjets(){

    const modale = document.querySelector(".modale")
    const galleryModale = document.querySelector(".gallerymodale")
    galleryModale.remove()
    const btnAjouter = document.getElementById("btnAjouter")
    btnAjouter.remove()

    const previousBtn = document.getElementById("previousbtn")
    previousBtn.classList.remove("previous-hide")
    previousBtn.classList.add("previous-btn")
    
    
    //TITRE MODALE
    const modaleTitle = document.querySelector("h3")
    modaleTitle.innerText = "Ajout photo"
    
    //FORMULAIRE
    const formulaireContent = document.createElement("section")
    formulaireContent.id = "formulairecontent"
    const form = document.createElement("form")
    form.method = "POST"
    const titreajoutFichier = document.createElement("label")
    titreajoutFichier.for = "ajoutfichier"
    titreajoutFichier.innerText = "Ajouter un fichier"

    const ajouterFichier = document.createElement("input")
    ajouterFichier.type = "file"
    ajouterFichier.id = "ajoutfichier"
    ajouterFichier.name = "ajoutfichier"
    
    modale.appendChild(modaleTitle)
    modale.appendChild(closeBtn)
    modale.appendChild(previousBtn)
    previousBtn.prepend(previousArrow)
    modale.appendChild(formulaireContent)
    formulaireContent.appendChild(form)
    form.appendChild(titreajoutFichier)
    form.appendChild(ajouterFichier)

    console.log(formulaireContent);

    
}

//AFFICHER PROJETS DANS LA MODALE
async function genererImgProjets(){
    
    const reponse = await fetch("http://localhost:5678/api/works")
    const tabProjets = await reponse.json()
    
    for (let i = 0; i < tabProjets.length; i++) {
        
        // const modale = document.querySelector(".modale")
        const galleryModale = document.querySelector(".gallerymodale")        
        
        /* CRÉATION DE LA BALISE FIGURE */
        const figure = document.createElement("figure")
        
        /* CRÉATION DE L'ÉLÉMENT IMAGE */
        const imageElement = document.createElement("img")
        imageElement.src = tabProjets[i].imageUrl
        
        /* AJOUT DES ÉLÉMENTS À LA STRUCTURE HTML */
        galleryModale.appendChild(figure)
        figure.appendChild(imageElement)
    }}
    genererImgProjets()
    
    //AFFICHER UN BOUTON ICONE CORBEILLE FOR EACH PROJETS
    
    
    
    
