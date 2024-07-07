const openPopUp = document.querySelector('.event_button');
const closePopUp = document.querySelector('.pop_up__close');
const popUp = document.querySelector('.pop_up');


openPopUp.addEventListener('click' , () =>{
    popUp.classList.add('active');
});

closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active');
});