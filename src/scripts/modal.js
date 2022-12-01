
const buttonToggleModal = document.querySelectorAll("[data-modal-control]")

for(i=0; i<buttonToggleModal.length; i++){
    let button=buttonToggleModal[i]
    button.addEventListener("click", function(){
       let valueDataModalControl = button.getAttribute("data-modal-control")
       document.getElementById(valueDataModalControl).classList.toggle("show-modal")
    
    })
}