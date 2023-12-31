//OUVERTURE MODALE
const btnModif = document.querySelector(".btnmodifier")

if(stockToken){
    btnModif.addEventListener("click", () =>{
        const modalContainer = document.querySelector(".modale-container")
        modalContainer.classList.add("modalepop")
    })
}

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
    
}
ouvertureModale()

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
    const modalContainer = document.querySelector(".modale-container")
    const modale2 = document.createElement("div")
    modale2.classList.add("modale2")
    
    const previousBtn = document.getElementById("previousbtn")
    previousBtn.classList.remove("previous-hide")
    previousBtn.classList.add("previous-btn")
    
    // //PRECEDENT
    previousBtn.addEventListener("click", () => {
        modale2.classList.remove("modale2")
        modale2.classList.add("modaleclose")
    })
    
    //TITRE MODALE AJOUT PROJET
    const modaleTitle = document.createElement("h3")
    modaleTitle.innerText = "Ajout photo"
    
    //FORMULAIRE
    const formulaireContent = document.createElement("section")
    formulaireContent.id = "formulairecontent"
    const form = document.createElement("form")
    form.method = "POST"
    form.action = "http://localhost:5678/api/works"
    
    //AJOUTER UN FICHIER
    const titreajoutFichier = document.createElement("label")
    titreajoutFichier.setAttribute("for", "ajoutfichier")
    const iconeLabel = document.createElement("i")
    iconeLabel.classList.add("fa-regular", "fa-image")
    const labelText = document.createElement("p")
    labelText.innerText = "+ Ajouter photo"
    const ajouterFichier = document.createElement("input")
    ajouterFichier.type = "file"
    ajouterFichier.id = "ajoutfichier"
    ajouterFichier.name = "ajoutfichier"
    //APERCU IMG
    const ImgPreview = document.createElement("img")
    ImgPreview.classList.add("imgpreview")
    ajouterFichier.addEventListener("change", () => {
        const file = ajouterFichier.files[0]
        if(file){
            iconeLabel.remove()
            labelText.classList.add("hideall")
            imageURl = URL.createObjectURL(file)
            ImgPreview.src = imageURl
            ImgPreview.classList.remove("imgpreview")
            ImgPreview.classList.add("imgpreviewappear")
            
        } else {
            ImgPreview.src = ""
        }
    })
    //TITRE
    const ajoutphotoLabel = document.createElement("label")
    ajoutphotoLabel.setAttribute("for", "titleprojet")
    ajoutphotoLabel.innerText = "Titre"
    const ajoutphotoTitle = document.createElement("input")
    ajoutphotoTitle.type = "text"
    ajoutphotoTitle.name = "title"
    ajoutphotoTitle.id = "titleprojet"
    //LISTE DEROULANTE
    const r = await fetch("http://localhost:5678/api/categories")
    const listCategory = await r.json()
    const labelSelect = document.createElement("label")
    labelSelect.for = "category"
    labelSelect.innerText = "Catégorie"
    const select = document.createElement("select")
    select.id = "catprojet"
    select.name = "category"
    
    const optionVide = document.createElement("option")
    optionVide.text = ""
    optionVide.value = ""
    
    select.appendChild(optionVide)
    
    for (let i = 0; i < listCategory.length; i++){
        const listderoulante = document.createElement("option")
        listderoulante.text = listCategory[i].name
        listderoulante.value = listCategory[i].id
        
        select.appendChild(listderoulante)
    }
    
    //BOUTON SUBMIT API
    const btnValider = document.createElement("input")
    btnValider.type = "submit"
    btnValider.value = "Valider"
    btnValider.id = "btnValider"
    btnValider.disabled = "disabled"
    btnValider.classList.add("disabled")


    //BOUTON DISABLED
ajoutphotoTitle.addEventListener("change", () => {
    
    if (ajouterFichier.files === null || ajoutphotoTitle.value === "" || select.value === "") {
        console.log("disabled");
        btnValider.disabled = "disabled"
        btnValider.classList.add("disabled")
    } else {
        btnValider.classList.remove("disabled")
        btnValider.disabled = ""
    }
})

ajouterFichier.addEventListener("change", () => {
    
    if (ajouterFichier.files[0] === null || ajoutphotoTitle.value === "" || select.value === "") {
        console.log("disabled");
        btnValider.disabled = "disabled"
        btnValider.classList.add("disabled")
    } else {
        btnValider.disabled = ""
        btnValider.classList.remove("disabled")
    }
})   

select.addEventListener("change", () => {
    
    if (ajouterFichier.files === null || ajoutphotoTitle.value === "" || select.value === "") {
        console.log("disabled");
        btnValider.disabled = "disabled"
        btnValider.classList.add("disabled")
    } else {
        btnValider.classList.remove("disabled")
        btnValider.disabled = ""
    }
})   
    
    //ENVOI PROJET API
    formulaireContent.addEventListener("submit", async (event) => {
        event.preventDefault()
        
        const imgUpload = document.querySelector("#ajoutfichier")
        const titreUpload = document.getElementById("titleprojet").value
        const categoryUpload = document.getElementById("catprojet").value
        const stockToken = window.localStorage.getItem("token")
        console.log(imgUpload);
        console.log(titreUpload);
        console.log(categoryUpload);
        
        if( imgUpload === "" || titreUpload === "" || categoryUpload === ""){
            console.log("Erreur champ(s) manquant(s)");
        } else{
            window.localStorage.getItem("token")
            const body = new FormData()
            body.append("title", titreUpload)
            body.append("image", imgUpload.files[0])
            body.append("category", categoryUpload)
            
            const reponse = await fetch("http://localhost:5678/api/works", {
            method : "POST",
            headers : {"Authorization": "Bearer " + stockToken},
            body : body
        })
        try {
            const r = await reponse.json()
            console.log(r);
        } catch(error){
            console.error("Erreur", error)
        }
    }
    // window.location.reload()
})


//ELEMENTS MODALE
modalContainer.appendChild(modale2)
modale2.appendChild(modaleTitle)
modale2.appendChild(previousBtn)
modale2.appendChild(formulaireContent)
//FORMULAIRE SECTION
formulaireContent.appendChild(form)
//ELEMENTS FORMULAIRE
titreajoutFichier.prepend(labelText)
titreajoutFichier.prepend(iconeLabel)
titreajoutFichier.prepend(ImgPreview)
form.appendChild(titreajoutFichier)
form.appendChild(ajouterFichier)
form.appendChild(ajoutphotoLabel)
form.appendChild(ajoutphotoTitle)
form.appendChild(labelSelect)
form.appendChild(select)  
form.appendChild(btnValider)  
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
        figure.classList.add("figuremodale")
        
        /* CRÉATION DE L'ÉLÉMENT IMAGE */
        const imageElement = document.createElement("img")
        imageElement.src = tabProjets[i].imageUrl
        
        //CREATION ICONE SUPPRESSION
        const iconeSupprContent = document.createElement("div")
        iconeSupprContent.classList.add("iconesupp")
        const iconeSuppr = document.createElement("i")
        iconeSuppr.setAttribute("data-id", tabProjets[i].id)
        iconeSuppr.classList.add("fa-solid", "fa-trash-can")
        //SUPPRESSION PROJETS
        iconeSuppr.addEventListener("click", (event) => {
            const id = event.target.getAttribute("data-id")
            fetch(`http://localhost:5678/api/works/${id}`, {
            method : "DELETE",
            headers : {"Authorization": `Bearer ${stockToken}`}
        })
    })
    
    /* AJOUT DES ÉLÉMENTS À LA STRUCTURE HTML */
    galleryModale.appendChild(figure)
    figure.appendChild(iconeSupprContent)
    figure.appendChild(imageElement)
    iconeSupprContent.prepend(iconeSuppr)
}
}
genererImgProjets()


