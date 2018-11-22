'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATS_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_NUMBERS = 4;
var userDialog = document.querySelector('.setup');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var similarListElement = userDialog.querySelector('.setup-similar-list');

var getRandomValue = function (arr) {
  var rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
};

var getWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizard = {
    name: getRandomValue(WIZARD_NAMES) + '\n' + getRandomValue(WIZARD_SURNAMES),
    coatColor: getRandomValue(WIZARD_COATS_COLOR),
    eyesColor: getRandomValue(WIZARD_EYES_COLOR)
  };

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var getWizards = function () {
  var wizards = [];
  var newWizard = getWizard();

  for (var i = 0; i < WIZARD_NUMBERS; i++) {
    wizards.push(newWizard);
  }
  return wizards;
};

var renderWizards = function () {
  var fragment = document.createDocumentFragment();
  var wizards = getWizards();

  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(getWizard(wizards[i]));
  }
  return fragment;
};

var drawWizards = function () {
  similarListElement.appendChild(renderWizards());
  return drawWizards;
};

userDialog.classList.remove('hidden');
userDialog.querySelector('.setup-similar').classList.remove('hidden');
drawWizards();
