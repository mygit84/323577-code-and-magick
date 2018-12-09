'use strict';

(function () {
  var setupPlayer = document.querySelector('.setup-player');
  var wizardCoatElement = setupPlayer.querySelector('.wizard-coat');
  var wizardEyeaElement = setupPlayer.querySelector('.wizard-eyes');
  var wizardFireballElement = setupPlayer.querySelector('.setup-fireball-wrap');

  var getCoatColorValue = function (callback) {
    return function () {
      var col = callback();
      var inputCoatColor = setupPlayer.querySelector('[name = "coat-color"]');

      inputCoatColor.value = col;
      wizardCoatElement.style.fill = col;
    };
  };

  var getCoatElementHandler = function (callback) {
    wizardCoatElement.addEventListener('click', getCoatColorValue(callback));
  };

  var getEyesColorValue = function (callback) {
    return function () {
      var col = callback();
      var inputEyesColor = setupPlayer.querySelector('[name = "eyes-color"]');

      inputEyesColor.value = col;
      wizardEyeaElement.style.fill = col;
    };
  };

  var getEyesElementHandler = function (callback) {
    wizardEyeaElement.addEventListener('click', getEyesColorValue(callback));
  };

  var getFireballColorValue = function (callback) {
    return function () {
      var col = callback();
      var inputFireballColor = setupPlayer.querySelector('[name = "fireball-color"]');

      inputFireballColor.value = col;
      wizardFireballElement.style.backgroundColor = col;
    };
  };

  var getFireballElementHandler = function (callback) {
    wizardFireballElement.addEventListener('click', getFireballColorValue(callback));
  };

  window.wizardSetting = {
    onClickCoat: getCoatElementHandler,
    onClickEyes: getEyesElementHandler,
    onClickFireball: getFireballElementHandler
  };
})();
