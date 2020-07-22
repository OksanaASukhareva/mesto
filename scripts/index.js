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

const numberCard = 6;
let elementTemplate = document.querySelector("#element__template").content;
let elements = document.querySelector(".elements");

document.addEventListener("DOMContentLoaded", ready);
function ready() {
    for (let i = 0; i < initialCards.length; i++) {
        elements.append(newCard(initialCards[i].name, initialCards[i].link));
    }
}

function newCard(name, link) {
    let Element = elementTemplate.cloneNode(true);
    Element.querySelector(".elements__image").src = link;
    Element.querySelector(".elements__text").textContent = name;
    let likeButton = Element.querySelector(".elements__vector");
    likeButton.addEventListener("click", () => addLike(likeButton));
    let trashBinButton = Element.querySelector(".element__trashbin");
    trashBinButton.addEventListener("click", () => deleteCard(trashBinButton));
    let elementImage = Element.querySelector(".elements__image");
    elementImage.addEventListener("click", () => popupBigImageOpen(name, link));
    return Element;
}

function addLike(likeButton) {
    likeButton.classList.toggle("elements__vector_active");
}

function deleteCard(trashBinButton) {
    trashBinButton.closest(".element").remove();
}

function popupBigImageOpen(name, link) {
    popupImage.src = link;
    popupBigImage.querySelector(".popup__subscription").textContent = name;
    popupOpen(popupBigImage);
}

let EditButton = document.querySelector(".profile__edit-button");
let popupEdit = document.querySelector(".popup_type_edit");
let popupEditCloseButton = popupEdit.querySelector(".popup__close-button");
let popupEditSubmitButton = popupEdit.querySelector(".popup__submit-button");

EditButton.addEventListener("click", () => popupOpen(popupEdit));

popupEditCloseButton.addEventListener("click", () => popupClose(popupEdit));
popupEditSubmitButton.addEventListener("click", submitPopupEdit);

let profileName = document.querySelector(".profile__name");
let profileSubscription = document.querySelector(".profile__subscription");
let inputName = popupEdit.querySelector(".popup__text_field_name");
let inputProfession = popupEdit.querySelector(".popup__text_field_profession");
inputName.value = profileName.textContent;
inputProfession.value = profileSubscription.textContent;

function submitPopupEdit() {
    profileName.textContent = inputName.value;
    profileSubscription.textContent = inputProfession.value;
    event.preventDefault();
    popupClose(popupEdit);
}

//автоматизируем кнопку добавления кантинки
let AddButton = document.querySelector(".profile__add-button");
let popupNewCard = document.querySelector(".popup_type_new-card");
let popupNewCardCloseButton = popupNewCard.querySelector(".popup__close-button");
let popupNewCardSubmitButton = popupNewCard.querySelector(".popup__submit-button");
let popupBigImage = document.querySelector(".popup_type_image-open");
let popupBIgImageClosedButton = popupBigImage.querySelector(".popup__close-button");
popupBIgImageClosedButton.addEventListener("click", () => popupClose(popupBigImage));

let popupImage = document.querySelector(".popup__image");
AddButton.addEventListener("click", () => popupOpen(popupNewCard));
popupNewCardCloseButton.addEventListener("click", () => popupClose(popupNewCard));
popupNewCardSubmitButton.addEventListener("click", submitNewCard);

function submitNewCard(popup) {
    //добавляем новую карточку в начало
    let name = popupNewCard.querySelector(".popup__text_field_place-name");
    let link = popupNewCard.querySelector(".popup__text_field_link");
    elements.prepend(newCard(name.value, link.value));
    event.preventDefault();
    //удаляем последний элемент
    let elementsList = elements.querySelectorAll(".element");
    if (elementsList.length > numberCard) {
        elementsList[elementsList.length - 1].remove();
        event.preventDefault();
    }

    popupClose(popupNewCard);
}

//общие функции
function popupOpen(popup) {
    popup.classList.add("popup_opened");
}
function popupClose(popup) {
    popup.classList.remove("popup_opened");
}
