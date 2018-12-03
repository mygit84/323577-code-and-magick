'use strict';

(function () {
  var userDialog = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = userDialog.querySelector('.setup-close');
  var userName = userDialog.querySelector('.setup-user-name');


  var onPopupEscPress = function (evt) {
    if (window.utils.isEscEvent(evt)) {
      if (userName === document.activeElement) {
        return evt;
      } else {
        closePopup();
      }
    }
    return evt;
  };

  var openPopup = function () {
    userDialog.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    userDialog.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (window.utils.isEnterEvent(evt)) {
      openPopup();
    }
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (window.utils.isEnterEvent(evt)) {
      closePopup();
    }
  });

  userDialog.querySelector('.setup-similar').classList.remove('hidden');
})();
