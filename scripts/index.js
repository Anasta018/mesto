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

//карточки
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



const elements = document.querySelector('.elements');
const cardsTemplate = document.querySelector('#cards_template').content;

function createCard(item) {
    const cards = cardsTemplate.querySelector('.cards').cloneNode(true);
    /*const btnLike = cards.querySelector('.cards__btn-like');
    const btnDelete = cards.querySelector('.cards__delete-btn');*/
    const cardsPhoto = cards.querySelector('.cards__photo');
    const cardsCaption = cards.querySelector('.cards__caption');
    cardsPhoto.alt = item.name;
    cardsPhoto.src = item.link;
    cardsCaption.textContent = item.name;
    /*btnLike.addEventListener('click', activateLike);
    btnDelete.addEventListener('click', deleteCard);*/
    cardsPhoto.addEventListener('click', ()=>{openPreviewImage(item)});
    return cards;
  };

  initialCards.forEach(function (item) {
      const renderCards = createCard(item);
      elements.prepend(renderCards);
  });