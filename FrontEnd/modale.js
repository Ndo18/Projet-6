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
closeBtn.appendChild(closeCross)
modale.appendChild(modaleTitle)
modale.appendChild(galleryModale)
modale.appendChild(btnAjouter)

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


