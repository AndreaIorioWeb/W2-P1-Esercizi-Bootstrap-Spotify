
function clickBottone() {
    for (let section of document.querySelectorAll('section')) {
        section.children[0].classList.add('collapse');
        section.children[0].classList.add('show');
        section.innerHTML = `
        <button class="bottone btn btn-outline-light toggle-btn" data-bs-target="#${section.id} > div" data-bs-toggle="collapse">Mostara e nascondiv</button>` + section.innerHTML
        
    }
}

function footer() {
    // 
    let numeriAlbum = document.querySelectorAll('img').length -2
    let span = document.createElement('span')
    span.classList.add('text-center')
    span.innerHTML = "Quetsa pagina contiene " + numeriAlbum + " Album";
    document.getElementById('frase').appendChild(span)
}



function eliminaRiga() {
    
    let elimina = document.querySelector('.elimina-riga');
        let riga = elimina.parentNode.parentNode
        riga.remove()
}
// let deleteButtons = document.querySelectorAll(".elimina-riga");

// for (let i = 0; i < deleteButtons.length; i++) {
//   deleteButtons[i].addEventListener("click", function(event) {
//     let row = event.target.parentNode.parentNode;
//     row.remove();
//   });
// }





window.onload = function() {
    footer()
    clickBottone() 

}
