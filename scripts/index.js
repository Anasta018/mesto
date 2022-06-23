const buttonEdit = document.querySelector('.profile__edit-btn');
/*const popup = document.querySelector('.popup');*/
const popupCloseButtonList = document.querySelectorAll('.popup__close-btn');

const popupEditForm = document.querySelector('.popup_type_edit-form');
const popupAddForm = document.querySelector('.popup_type_add-form');
const popupPhotoOpen = document.querySelector('.popup_type_photo-open');

// Находим поля формы в DOM
const formEdit = document.querySelector('.popup__form_type_edit');
const formAdd = document.querySelector('.popup__form_type_add');

const inputName = document.querySelector('.popup__input_type_name');
const inputAbout = document.querySelector('.popup__input_type_about');
const nameUser = document.querySelector('.profile__name');
const aboutUser = document.querySelector('.profile__about-user');

const inputPlaceName = document.querySelector('.popup__input_type_place-name');
const inputLink = document.querySelector('.popup__input_type_link');
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

//открытие и закрытие формы редактирования профиля
//закрытие клавишей Q
/*function closePopupOnQ(e) {
    if (e.code === 'KeyQ') {
        closePopup();
    }
}*/

/*function openPopup() {
  popup.classList.add('popup_opened');*/
    /*document.addEventListener('keypress', closePopupOnQ);*/
    /*inputName.value = nameUser.textContent;
    inputAbout.value = aboutUser.textContent;
}

function closePopup() {
  popup.classList.remove('popup_opened');*/
    /*document.removeEventListener('keypress', closePopupOnQ);*/
/*}

buttonEdit.addEventListener('click', openPopup);
popupCloseButtonList.addEventListener('click', closePopup);*/

/*popup.addEventListener('click', function(e) {
    if (e.target === e.currentTarget) {
        closePopup();
    }
});*/

function createCard(item) {
    const newCard = cardsTemplate.querySelector('.cards').cloneNode(true);
    const btnLike = newCard.querySelector('.cards__btn-like');
    const btnDelete = newCard.querySelector('.cards__delete-btn');
    const cardsPhoto = newCard.querySelector('.cards__photo');
    const cardsCaption = newCard.querySelector('.cards__caption');
    cardsPhoto.alt = item.name;
    cardsPhoto.src = item.link;
    cardsCaption.textContent = item.name;
    btnLike.addEventListener('click', () => {
      btnLike.classList.toggle('cards__btn-like_active');
    });
    btnDelete.addEventListener('click', () => {
      newCard.remove();
    });
    cardsPhoto.addEventListener('click', () => openCard(item));
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

function openPopup(popup) {
  popup.classList.add('popup_opened');
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
};

function openFormEdit(popup) {
  inputName.value = nameUser.textContent;
  inputAbout.value = aboutUser.textContent;
  openPopup(popup);
};

function openPopupAddForm() {
  openPopup(popupAddForm);
};

function formAddHandler (evt) {
  evt.preventDefault();
  const item ={
    place: inputPlaceName.value,
    link: inputLink.value
  };
  const card = createCard(item);
  cardsContainer.prepend(card);
  evt.target.reset();
  closePopup(popupAddForm);
};

function formSubmitHandler (evt) {
  evt.preventDefault();
  nameUser.textContent = inputName.value;
  aboutUser.textContent = inputAbout.value;
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

popupCloseButtonList.forEach(function(item) {
  item.addEventListener('click', function(evt) {        
      const popupClose = evt.target.closest('.popup');
      closePopup(popupClose);
  });
});





