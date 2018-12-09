'use strict';

(function () {
  var WIZARD_NUMBER = 4;
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');


  var getWizard = function (eyesColor, coatColor, name) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = name;
    wizardElement.querySelector('.wizard-coat').style.fill = coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = eyesColor;

    return wizardElement;
  };

  var getWizards = function (eyes, coat, name) {
    var wizards = [];

    for (var i = 0; i < WIZARD_NUMBER; i++) {
      var newWizard = getWizard(eyes[i], coat[i], name[i]);
      wizards.push(newWizard);
    }
    return wizards;
  };

  var renderWizards = function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < wizards.length; i++) {
      fragment.appendChild(wizards[i]);
    }
    return fragment;
  };

  var drawWizards = function (wizards) {
    similarListElement.appendChild(renderWizards(wizards));
  };

  window.wizards = {
    drawWizards: drawWizards,
    getWizards: getWizards
  };
})();
