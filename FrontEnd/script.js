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
}}
genererProjets()

async function filtreProjet (){
    const reponse = await fetch("http://localhost:5678/api/categories")
    const tabCategories = await reponse.json()
    const resp = await fetch("http://localhost:5678/api/works")
    const tabProjets = await resp.json()

        /* BOUTON TOUS */
        const btnTous = document.querySelector(".btn-tous")
        /* BOUTON OBJETS */
        const btnObj = document.querySelector(".btn-obj")
        /* BOUTON APPARTEMENTS */
        const btnAppt = document.querySelector(".btn-appt")
        /* BOUTON HÔTELS & RESTAURANTS */
        const btnHtlresto = document.querySelector(".btn-htlresto")

        btnTous.addEventListener("click", () => {
            document.querySelector(".gallery").innerHTML=""
            genererProjets()
        })

        btnObj.addEventListener("click", () => {
            document.querySelector(".gallery").innerHTML=""
            const objFiltre = tabCategories.filter(tabCategories => tabCategories.category.id === 1)
           
            console.log(objFiltre)
            // objFiltre.innerHTML = genererProjets() + objFiltre
            // console.log(btnObj);
            /* afficher les éléments qui n'ont que l'id 1*/
            // if (tabProjets.category === tabCategories){

            // }

    
        })
        genererProjets(objFiltre)
    }

filtreProjet()


        // btnObj.addEventListener("click", () => {
        //     const triObj = tabProjets.category[i]
        //     console.log(triObj)
        // for (let i = 0; i < tabProjets.length; i++){

        //     const triObj = tabProjets[i].category[i,1]
        //     // if(triObj )
    
        // }
        // console.log(tabProjets.id)
        
        // })
    
