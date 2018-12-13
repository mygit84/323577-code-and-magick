'use strict';

(function () {
  var WIZARD_NUMBER = 4;
  var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

  var getRandomValue = function (arr) {
    var rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
  };

  var getEyesColor = function () {
    return getRandomValue(WIZARD_EYES_COLORS);
  };

  var getCoatColor = function () {
    return getRandomValue(WIZARD_COAT_COLORS);
  };

  var getFireballColor = function () {
    return getRandomValue(FIREBALL_COLORS);
  };

  var getArrayParamEyes = function () {
    var eyes = [];
    for (var i = 0; i < WIZARD_NUMBER; i++) {
      eyes.push(getEyesColor());
    }
    return eyes;
  };

  var getArrayParamCoats = function () {
    var coats = [];
    for (var i = 0; i < WIZARD_NUMBER; i++) {
      coats.push(getCoatColor());
    }
    return coats;
  };

  window.randomParam = {
    eyesColor: getEyesColor,
    coatColor: getCoatColor,
    getEyesColor: getArrayParamEyes,
    getCoatColor: getArrayParamCoats,
    fireballColor: getFireballColor
  };
})();
