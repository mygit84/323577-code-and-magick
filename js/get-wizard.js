'use strict';

(function () {
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var coatColor1;

  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var getWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizard = {
      name: window.utils.randomValue(WIZARD_NAMES) + '\n' + window.utils.randomValue(WIZARD_SURNAMES),
      coatColor: window.utils.randomValue(WIZARD_COAT_COLORS),
      eyesColor: undefined
    };

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };
var getColor = function (callback) {

  wizard.eyesColor = callback;


};


  window.getWizard = {
    WIZARD_COAT_COLORS: WIZARD_COAT_COLORS,
    getWizard: getWizard,
    getColor: getColor
  };
})();
