const openPopupButton = document.querySelector(".profile__edit-button");
const closePopupButton = document.querySelector(".popup__close-button");
const popup = document.querySelector(".popup");
const popupContainer = document.querySelector(".popup__container");
const inputName = document.querySelector(".popup__text_field_name");
const inputProfession = document.querySelector(".popup__text_field_profession");
const profileName = document.querySelector(".profile__name");
const profileSubscription = document.querySelector(".profile__subscription");

function PopupOpen(){
    popup.classList.add("popup_opened");
    inputName.value=profileName.textContent;
    inputProfession.value=profileSubscription.textContent;
}

function PopupClose(){
    popup.classList.remove("popup_opened");
}

openPopupButton.addEventListener("click", PopupOpen);
closePopupButton.addEventListener("click", PopupClose);


popupContainer.addEventListener("submit", function(event){  
    profileName.textContent = inputName.value;
    profileSubscription.textContent = inputProfession.value;
    event.preventDefault();
    PopupClose();
}
)

