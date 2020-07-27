const initialCards = [
    {
        name: "Архыз",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
    {
        name: "Челябинская область",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    },
    {
        name: "Иваново",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    },
    {
        name: "Камчатка",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    },
    {
        name: "Холмогорский район",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    },
    {
        name: "Байкал",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    },
];

const elementTemplate = document.querySelector("#element__template").content;
const elements = document.querySelector(".elements");

document.addEventListener("DOMContentLoaded", ready);

function addRemoveLike(likeButton) {
    likeButton.classList.toggle("elements__vector_active");
}

function deleteCard(trashBinButton) {
    trashBinButton.closest(".element").remove();
}

//общие функции
function popupToggle(popup) {
    popup.classList.toggle("popup_opened");
}

const popupImage = document.querySelector(".popup__image");
const popupBigImage = document.querySelector(".popup_type_image-open");
const popupSubscription = popupBigImage.querySelector(".popup__subscription");

function popupBigImageOpen(name, link) {
    popupImage.src = link;
    popupSubscription.textContent = name;
    popupToggle(popupBigImage);
}

function newCard(name, link) {
    const element = elementTemplate.cloneNode(true);
    const elementsImage = element.querySelector(".elements__image");
    const elementsText = element.querySelector(".elements__text");
    elementsImage.src = link;
    elementsText.textContent = name;
    const likeButton = element.querySelector(".elements__vector");
    likeButton.addEventListener("click", () => addRemoveLike(likeButton));
    const trashBinButton = element.querySelector(".element__trashbin");
    trashBinButton.addEventListener("click", () => deleteCard(trashBinButton));
    const elementImage = element.querySelector(".elements__image");
    elementImage.addEventListener("click", () => popupBigImageOpen(name, link));
    return element;
}

function ready() {
    for (let i = 0; i < initialCards.length; i++) {
        elements.append(newCard(initialCards[i].name, initialCards[i].link));
    }
}

const editButton = document.querySelector(".profile__edit-button");
const popupEdit = document.querySelector(".popup_type_edit");
const popupEditCloseButton = popupEdit.querySelector(".popup__close-button");
const popupEditSubmitButton = popupEdit.querySelector(".popup__submit-button");

editButton.addEventListener("click", () => popupToggle(popupEdit));

popupEditCloseButton.addEventListener("click", () => popupToggle(popupEdit));

function submitPopupEdit() {
    profileName.textContent = inputName.value;
    profileSubscription.textContent = inputProfession.value;
    event.preventDefault();
    popupToggle(popupEdit);
}

popupEditSubmitButton.addEventListener("click", submitPopupEdit);

const profileName = document.querySelector(".profile__name");
const profileSubscription = document.querySelector(".profile__subscription");
const inputName = popupEdit.querySelector(".popup__text_field_name");
const inputProfession = popupEdit.querySelector(".popup__text_field_profession");
inputName.value = profileName.textContent;
inputProfession.value = profileSubscription.textContent;

//автоматизируем кнопку добавления кантинки
const addButton = document.querySelector(".profile__add-button");
const popupNewCard = document.querySelector(".popup_type_new-card");
const popupNewCardCloseButton = popupNewCard.querySelector(".popup__close-button");
const popupNewCardSubmitButton = popupNewCard.querySelector(".popup__submit-button");
const popupBIgImageClosedButton = popupBigImage.querySelector(".popup__close-button");

popupBIgImageClosedButton.addEventListener("click", () => popupToggle(popupBigImage));
addButton.addEventListener("click", () => popupToggle(popupNewCard));
popupNewCardCloseButton.addEventListener("click", () => popupToggle(popupNewCard));

function submitNewCard(popup) {
    //добавляем новую карточку в начало
    const name = popupNewCard.querySelector(".popup__text_field_place-name");
    const link = popupNewCard.querySelector(".popup__text_field_link");
    elements.prepend(newCard(name.value, link.value));
    event.preventDefault();
    popupToggle(popupNewCard);
}

popupNewCardSubmitButton.addEventListener("click", submitNewCard);




