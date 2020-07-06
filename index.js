let openPopupButton = document.querySelector(".profile__edit-button");
let closePopupButton = document.querySelector(".popup__close-button");
let submitPopupButton=document.querySelector(".popup__submit-button");

let popup = document.querySelector(".popup");
let popupContainer = document.querySelector(".popup__container");
let inputName = document.querySelector(".popup__text_field_name");
let inputProfession = document.querySelector(".popup__text_field_profession");
let profileName = document.querySelector(".profile__name");
let profileSubscription = document.querySelector(".profile__subscription");

function PopupOpen(){
    popup.classList.add("popup_opened");
    inputName.value=profileName.textContent;
    inputProfession.value=profileSubscription.textContent;
}

function PopupClose(){
    popup.classList.remove("popup_opened");
}

function PopupSubmit(){
    profileName.textContent = inputName.value;
     profileSubscription.textContent = inputProfession.value;
     event.preventDefault();
     PopupClose();
}

openPopupButton.addEventListener("click", PopupOpen);
closePopupButton.addEventListener("click", PopupClose);

submitPopupButton.addEventListener("click",PopupSubmit);
/*
popupContainer.addEventListener("submit", function(event){  
    {
     profileName.textContent = inputName.value;
     profileSubscription.textContent = inputProfession.value;
     event.preventDefault();
     PopupClose();
    }
}
)
*/
