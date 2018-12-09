'use strict';
(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = document.querySelector('.setup-close');
  var wizardsList = document.querySelector('.setup-similar');

  var isEscEvent = function (evt) {
    return evt.keyCode === ESC_KEYCODE;
  };

  var isEnterEvent = function (evt) {
    return evt.keyCode === ENTER_KEYCODE;
  };

  var setOpen = function (callback) {
    setupOpen.addEventListener('click', callback);

    setupOpen.addEventListener('keydown', function (evt) {
      if (isEnterEvent(evt)) {
        callback();
      }
    });
  };

  var setClose = function (callback) {
    setupClose.addEventListener('click', callback);

    setupClose.addEventListener('keydown', function (evt) {
      if (isEnterEvent(evt)) {
        callback();
      }
    });
  };

  wizardsList.classList.remove('hidden');

  window.setup = {
    isEscEvent: isEscEvent,
    setOpen: setOpen,
    setClose: setClose
  };
})();
