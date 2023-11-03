// CREATION DE MODALE AVEC UN OVERLAY

//METTRE UN EVENTLISTENER SUR LE BUTTON MODIF AVEC AJOUT DE CLASSE QUI VA AFFICHER LA MODAL

const modalContainer = document.querySelector(".modale-container")
const overlay = document.createElement("div")
overlay.classList.add("overlay")
const modale = document.createElement("div")
modale.classList.add("modale")
const closeBtn = document.createElement("button")
closeBtn.classList.add("close-btn")
const closeCross = document.createElement("i")
closeCross.classList.add("fa-solid", "fa-xmark")


modalContainer.appendChild(overlay)
modalContainer.appendChild(modale)
modale.appendChild(closeBtn)
closeBtn.appendChild(closeCross)

