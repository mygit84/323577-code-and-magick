'use strict';

(function () {
  var WIZARD_NUMBER = 4;
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var getWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  var renderWizards = function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < WIZARD_NUMBER; i++) {
      fragment.appendChild(getWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);
  };

  var onLoad = function (wizards) {
    renderWizards(wizards);
  };

  window.wizards = {
    onLoad: onLoad
  };
})();
