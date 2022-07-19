const openModal = document.querySelector('.hero__cta');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.hero__cta--modal');
openModal.addEventListener('click', (e)=>{
  e.preventDefault();
  modal.classList.add('modal--show');
});

closeModal.addEventListener('click', (e)=>{
  e.preventDefault();
  modal.classList.remove('modal--show');
});