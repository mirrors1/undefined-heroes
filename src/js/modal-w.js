const modal = document.getElementById('modalBackdrop');
const button = document.getElementById('closeModal');

 
 button.addEventListener('click', closeModal);

 function closeModal() {
    modal.classList.remove('is-open');
}
 
 modal.addEventListener('click', function(event) {
     if (event.target === modal) {
         closeModal();
     }
 });

    window.onkeydown = function(event) {
        if (event.key === "Escape") {
            closeModal()
        }
    }
 

