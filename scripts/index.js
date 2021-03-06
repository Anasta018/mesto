const buttonEdit = document.querySelector('.profile__edit-btn');
const popupCloseButtonList = document.querySelectorAll('.popup');

const popupEditForm = document.querySelector('.popup_type_edit-form');
const popupAddForm = document.querySelector('.popup_type_add-form');
const popupPhotoOpen = document.querySelector('.popup_type_photo-open');

// Находим поля формы в DOM
const formEdit = document.querySelector('.popup__form_type_edit');
const formAdd = document.querySelector('.popup__form_type_add');

const nameInput = document.querySelector('.popup__input_type_name');
const aboutInput = document.querySelector('.popup__input_type_about');
const nameUser = document.querySelector('.profile__name');
const aboutUser = document.querySelector('.profile__about-user');

const placeNameinput = document.querySelector('.popup__input_type_place-name');
const linkInput = document.querySelector('.popup__input_type_link');
const buttonAdd = document.querySelector('.profile__add-btn');
const popupFormAdd = document.querySelector('.popup__form_type_add');

const photoOpen = document.querySelector('.popup__photo-open');
const figcaption = document.querySelector('.popup__figcaption');
const btnClsPhoto = document.querySelector('.popup__close-btn_type_photo');

//карточки

const cardsContainer = document.querySelector('.elements');
const cardsTemplate = document.querySelector('#cards_template').content;
const initialCards = [
    {
      name: 'Китайская опера',
      link: 'https://images.unsplash.com/photo-1653356572769-8a8d4048c91b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2075&q=80'
    },
    {
      name: 'Гонг Конг',
      link: 'https://images.unsplash.com/photo-1626067207555-5ee0e1ce04e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=437&q=80'
    },
    {
      name: 'Киото',
      link: 'https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1142&q=80'
    },
    {
      name: 'Синдзюку',
      link: 'https://images.unsplash.com/photo-1508504509543-5ca56440e013?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    },
    {
      name: 'Каппадокия',
      link: 'https://images.unsplash.com/photo-1632816049279-3ee6c809e629?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'
    },
    {
      name: 'Пагода',
      link: 'https://images.unsplash.com/photo-1571894793616-af0c7df4a68b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'
    }
  ];

function createCard(item) {
    const newCard = cardsTemplate.querySelector('.cards').cloneNode(true);
    const btnLike = newCard.querySelector('.cards__btn-like');
    const btnDelete = newCard.querySelector('.cards__delete-btn');
    const newCardPhoto = newCard.querySelector('.cards__photo');
    const newCardCaption = newCard.querySelector('.cards__caption');
    newCardPhoto.alt = item.name;
    newCardPhoto.src = item.link;
    newCardCaption.textContent = item.name;
    btnLike.addEventListener('click', () => {
      btnLike.classList.toggle('cards__btn-like_active');
    });
    btnDelete.addEventListener('click', () => {
      newCard.remove();
    });
    newCardPhoto.addEventListener('click', () => openCard(item));
    return newCard;
  };

  function openCard(item) {
    photoOpen.alt = item.name;
    photoOpen.src = item.link;
    figcaption.textContent = item.name;
    openPopup(popupPhotoOpen);
  };

  initialCards.forEach(function (item) {
      const rCards = createCard(item);
      cardsContainer.prepend(rCards);
  });

//Ф-я закрытия клавишей Esc
function closePopupOnEsc(evt) {
  if (evt.key === 'Escape') {
      const popupOpened = document.querySelector('.popup_opened');
      closePopup(popupOpened);
  }
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupOnEsc);
};


function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupOnEsc);
};

function openFormEdit(popup) {
  nameInput.value = nameUser.textContent;
  aboutInput.value = aboutUser.textContent;
  openPopup(popup);
};

function openPopupAddForm() {
  openPopup(popupAddForm);
};

function formAddHandler (evt) {
  evt.preventDefault();
  const item ={
    name: placeNameinput.value,
    link: linkInput.value
  };
  const card = createCard(item);
  cardsContainer.prepend(card);
  evt.target.reset();
  closePopup(popupAddForm);
};

function formSubmitHandler (evt) {
  evt.preventDefault();
  nameUser.textContent = nameInput.value;
  aboutUser.textContent = aboutInput.value;
  closePopup(popupEditForm);
};

// Прикрепляем обработчик к форме:
formEdit.addEventListener('submit', formSubmitHandler);
formAdd.addEventListener('submit', formAddHandler);

buttonEdit.addEventListener('click', function() {
  openFormEdit(popupEditForm);
});

buttonAdd.addEventListener('click', function() {
  openPopup(popupAddForm);
});

popupCloseButtonList.forEach((item) => {
  item.addEventListener('mousedown', (evt) => {        
      const popupClose = evt.target.classList;
      if ((popupClose.contains('popup_opened')) || 
      (popupClose.contains('popup__close-btn'))) {
        closePopup(item);
      }
  });
});





