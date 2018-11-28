'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var WIZARD_NUMBER = 4;
var ENTER_KEYCODE = 13;
var ESC_KEYCODE = 27;
var userDialog = document.querySelector('.setup');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var similarListElement = userDialog.querySelector('.setup-similar-list');
var setupOpen = document.querySelector('.setup-open');
var setupClose = userDialog.querySelector('.setup-close');
var userName = userDialog.querySelector('.setup-user-name');
var setupPlayer = userDialog.querySelector('.setup-player');

var getRandomValue = function (arr) {
  var rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
};

var getWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizard = {
    name: getRandomValue(WIZARD_NAMES) + '\n' + getRandomValue(WIZARD_SURNAMES),
    coatColor: getRandomValue(WIZARD_COAT_COLORS),
    eyesColor: getRandomValue(WIZARD_EYES_COLORS)
  };

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var getWizards = function () {
  var wizards = [];
  var newWizard = getWizard();

  for (var i = 0; i < WIZARD_NUMBER; i++) {
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
};

var onPopupEscPress = function (evt) {
  if (evt. keyCode === ESC_KEYCODE) {
    if (userName === document.activeElement) {
      return evt;
    } else {
      closePopup();
    }
  }
  return evt;
};

var openPopup = function () {
  userDialog.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  userDialog.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

setupPlayer.querySelector('.wizard-coat').addEventListener('click', function () {
  var coatColor = setupPlayer.querySelector('[name = "coat-color"]').value = getRandomValue(WIZARD_COAT_COLORS);
  setupPlayer.querySelector('.wizard-coat').style.fill = coatColor;
});

setupPlayer.querySelector('.wizard-eyes').addEventListener('click', function () {
  var eyesColor = setupPlayer.querySelector('[name = "eyes-color"]').value = getRandomValue(WIZARD_EYES_COLORS);
  setupPlayer.querySelector('.wizard-eyes').style.fill = eyesColor;
});

setupPlayer.querySelector('.setup-fireball-wrap').addEventListener('click', function () {
  var fireballColor = setupPlayer.querySelector('[name = "fireball-color"]').value = getRandomValue(FIREBALL_COLORS);
  setupPlayer.querySelector('.setup-fireball').style.backgroundColor = fireballColor;
});

userDialog.querySelector('.setup-similar').classList.remove('hidden');
drawWizards();
