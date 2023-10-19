async function genererProjets(){

const reponse = await fetch("http://localhost:5678/api/works")
const tabProjets = await reponse.json()

for (let i = 0; i < tabProjets.length; i++) {

    /* CRÉATION DE LA CLASSE GALLERY */
    const gallery = document.querySelector(".gallery")

    /* CRÉATION DE LA BALISE FIGURE */
    const figure = document.createElement("figure")

    /* CRÉATION DE L'ÉLÉMENT IMAGE */
    const imageElement = document.createElement("img")
    imageElement.src = tabProjets[i].imageUrl

    /* CRÉATION DE LA BALISE FIGCAPTION */
    const figcaption = document.createElement("figcaption")
    figcaption.innerText = tabProjets[i].title

    /* AJOUT DES ÉLÉMENTS À LA STRUCTURE HTML */
    figure.appendChild(imageElement)
    figure.appendChild(figcaption)
    gallery.appendChild(figure)
}


}
genererProjets()

const btnObj = document.querySelector(".btn-obj")

        btnObj.addEventListener("click", () => {
        //     const triObj = tabProjets.category[i]
        //     console.log(triObj)
        // // for (let i = 0; i < tabProjets.length; i++){

        // //     const triObj = tabProjets[i].category[i,1]
        // //     // if(triObj )
    
        // }
        console.log(tabProjets.id)
        
        })
    
