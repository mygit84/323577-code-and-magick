'use strict';

(function () {
  var COORDS = {
    LEFT: 50,
    TOP: 80
  };
  var userDialog = document.querySelector('.setup');
  var userName = userDialog.querySelector('.setup-user-name');
  var form = userDialog.querySelector('.setup-wizard-form');

  var openPopup = function () {
    userDialog.classList.remove('hidden');
    userDialog.style.left = COORDS.LEFT + '%';
    userDialog.style.top = COORDS.TOP + 'px';

    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    userDialog.classList.add('hidden');

    document.removeEventListener('keydown', onPopupEscPress);
  };

  var getActiveElement = function (evt) {
    if (userName === document.activeElement) {
      return evt;
    } else {
      closePopup();
    }
    return evt;
  };

  var onPopupEscPress = function (evt) {
    if (window.setup.isEscEvent(evt)) {
      getActiveElement();
    }
  };

  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), closePopup, window.error.onError);
    evt.preventDefault();
  });

  var setWizardsHandler = function () {
    window.wizards.wizardObj.coat.addEventListener('click', function () {
      window.debounce(window.wizards.coatColorValue());
    });

    window.wizards.wizardObj.eyes.addEventListener('click', function () {
      window.debounce(window.wizards.eyesColorValue());
    });

    window.wizards.wizardObj.fireball.addEventListener('click', function () {
      window.wizards.fireballColorValue();
    });
  };

  window.setup.setOpen(openPopup);
  window.setup.setClose(closePopup);
  window.backend.load(window.wizards.show, window.error.onError);
  setWizardsHandler();
})();
