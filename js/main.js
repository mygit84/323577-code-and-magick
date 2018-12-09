'use strict';

(function () {
  var COORDS = {
    LEFT: 50,
    TOP: 80
  };
  var userDialog = document.querySelector('.setup');
  var userName = userDialog.querySelector('.setup-user-name');

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

  var onPopupEscPress = function (evt) {
    if (window.setup.isEscEvent(evt)) {
      if (userName === document.activeElement) {
        return evt;
      } else {
        closePopup();
      }
    }
    return evt;
  };

  window.setup.setOpen(openPopup);
  window.setup.setClose(closePopup);

  var initWizards = window.wizards.getWizards(window.randomParam.getEyesColor(),
      window.randomParam.getCoatColor(),
      window.randomParam.fullName());
  window.wizards.drawWizards(initWizards);

  window.wizardSetting.onClickCoat(window.randomParam.coatColor);
  window.wizardSetting.onClickEyes(window.randomParam.eyesColor);
  window.wizardSetting.onClickFireball(window.randomParam.fireballColor);
})();
