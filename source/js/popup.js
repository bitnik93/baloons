const popup = document.querySelector('.popup-container');
const popupButton = document.querySelector('.popup__button');
const purchaseButton = document.querySelector('.total-container__button');

const onClosePopup = () => {
  popup.classList.remove('visually-hidden');
}

const onOpenPopup = () => {
  popup.classList.add('visually-hidden');
}

const isPopupTotal = () => {
  if (purchaseButton && popupButton) {
    purchaseButton.addEventListener('click', onClosePopup)
    popupButton.addEventListener('click', onOpenPopup)
  }
}

isPopupTotal();

