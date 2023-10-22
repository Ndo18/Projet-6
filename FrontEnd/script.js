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
    
    /* FONCTION GENERER BOUTONS FILTRES */    
    async function genererBtn () {
        const reponse = await fetch("http://localhost:5678/api/categories")
        const cat = await reponse.json()
        const divFiltres = document.querySelector(".filtres")

        /* BOUTON TOUS */
        const btnTous = document.createElement("button")
        btnTous.innerText = "Tous"
        btnTous.classList.add("btn-tous")

        divFiltres.appendChild(btnTous)

        /*3 BOUTONS FILTRES*/
        for(let i = 0; i < cat.length; i++){
            const btnFiltres = document.createElement("button")
            btnFiltres.innerText = cat[i].name
            
            divFiltres.appendChild(btnFiltres) 
        }   
    }
    genererBtn()

    /* IL FAUT RECREER LES BALISES A AFFICHER LORS DU CLICK */