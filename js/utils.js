'use strict';

(function () {
  var ENTER_KEYCODE = 13;
  var ESC_KEYCODE = 27;

  var getRandomValue = function (arr) {
    var rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
  };

  var isEscEvent = function (evt) {
    return evt. keyCode === ESC_KEYCODE;
  };

  var isEnterEvent = function (evt) {
    return evt.keyCode === ENTER_KEYCODE;
  };

  window.utils = {
    randomValue: getRandomValue,
    isEscEvent: isEscEvent,
    isEnterEvent: isEnterEvent
  };
})();
