'use strict';

(function () {
  var WIZARD_NUMBER = 4;
  var similarListElement = document.querySelector('.setup-similar-list');

  var getWizards = function () {
    var wizards = [];
    var newWizard = window.getWizard.getWizard;

    for (var i = 0; i < WIZARD_NUMBER; i++) {
      wizards.push(newWizard);
    }
    return wizards;
  };

  var renderWizards = function () {
    var fragment = document.createDocumentFragment();
    var wizards = getWizards();

    for (var i = 0; i < wizards.length; i++) {
      fragment.appendChild(window.getWizard.getWizard(wizards[i]));
    }
    return fragment;
  };

  var drawWizards = function () {
    similarListElement.appendChild(renderWizards());
  };

  drawWizards();
})();
