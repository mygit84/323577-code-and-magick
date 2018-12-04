'use strict';

(function () {
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var setupPlayer = document.querySelector('.setup-player');
  var wizarEyes = setupPlayer.querySelector('.wizard-eyes');


  setupPlayer.querySelector('.wizard-coat').addEventListener('click', function () {
    var coatColor = setupPlayer.querySelector('[name = "coat-color"]').value = window.utils.randomValue(window.getWizard.WIZARD_COAT_COLORS);
    setupPlayer.querySelector('.wizard-coat').style.fill = coatColor;
  });

var newFunc = function (color) {
    var randomColor = color;
    return function () {
      console.log(color);
      var eyesColor = setupPlayer.querySelector('[name = "eyes-color"]');
      eyesColor.value = randomColor;

      wizarEyes.style.fill = randomColor;
    }
};

var secondFun = function (color) {
    wizarEyes.addEventListener('click', newFunc(color));
  }

  setupPlayer.querySelector('.setup-fireball-wrap').addEventListener('click', function () {
    var fireballColor = setupPlayer.querySelector('[name = "fireball-color"]').value = window.utils.randomValue(FIREBALL_COLORS);
    setupPlayer.querySelector('.setup-fireball').style.backgroundColor = fireballColor;
  });

  window.wizardSetting = {
  onClick: secondFun
};
})();
