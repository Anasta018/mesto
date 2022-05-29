//открытие и закрытие формы редактирования профиля

const button = document.querySelector('.profile__edit-btn');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close-btn');

function openPopup() {
    popup.classList.remove('popup_hidden_form');

}

function closePopup() {
    popup.classList.add('popup_hidden_form');
    /*document.removeEventListener('keypress', closePopupOnQ);*/
}

button.addEventListener('click', function() {
    openPopup();
});

popupCloseButton.addEventListener('click', function() {
    closePopup();
});

popup.addEventListener('click', function(e) {
    if (e.target === e.currentTarget) {
        
    }
});

document.addEventListener('keypress', function(e) {
    if (e.code === 'KeyQ') {
        closePopup();
    }
})
