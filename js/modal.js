(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
  }
})();


const formRef = document.querySelector(".modal__form");
const backdrop = document.querySelector(".backdrop");


formRef.addEventListener("submit", onFormSubmit);
backdrop.addEventListener("click", onBackdropClick);
window.addEventListener("keydown", onEscClick)


function onFormSubmit (evt){
  evt.preventDefault()

  const formData = new FormData(evt.currentTarget);
  formData.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });
  
}

function onBackdropClick (evt){
  if(evt.target === evt.currentTarget){
    backdrop.classList.toggle("is-hidden");
  }
}


function onEscClick (evt){
  if((evt.key = "Escape")){
    backdrop.classList.toggle("is-hidden");
  };
    
}