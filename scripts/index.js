//открытие и закрытие формы редактирования профиля

const editButton = document.querySelector('.profile__edit-btn');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close-btn');

// редактирование профиля

// Находим форму в DOM
let popupContainer = document.querySelector('.popup__container');
// Находим поля формы в DOM
let inputName = document.querySelector('.popup__input_type_name');
let inputAbout = document.querySelector('.popup__input_type_about');
let nameUser = document.querySelector('.profile__name');
let aboutUser = document.querySelector('.profile__about-user');

//открытие и закрытие формы редактирования профиля
//закрытие клавишей Q
/*function closePopupOnQ(e) {
    if (e.code === 'KeyQ') {
        closePopup();
    }
}*/

function openPopup() {
    popup.classList.remove('popup_hidden_form');
    /*document.addEventListener('keypress', closePopupOnQ);*/
    inputName.value = nameUser.textContent;
    inputAbout.value = aboutUser.textContent;
}

function closePopup() {
    popup.classList.add('popup_hidden_form');
    /*document.removeEventListener('keypress', closePopupOnQ);*/
}

editButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);

/*editButton.addEventListener('click', function() {
    openPopup();
});

popupCloseButton.addEventListener('click', function() {
    closePopup();
});*/

popup.addEventListener('click', function(e) {
    if (e.target === e.currentTarget) {
        closePopup();
    }
});

// редактирование профиля
// Обработчик «отправки» формы
function formSubmitHandler (evt) {
    evt.preventDefault();
    nameUser.textContent = inputName.value;
    aboutUser.textContent = inputAbout.value;
    closePopup();
}
// Прикрепляем обработчик к форме:
popupContainer.addEventListener('submit', formSubmitHandler);