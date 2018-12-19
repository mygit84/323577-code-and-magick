'use strict';

(function () {
  var WIZARD_NUMBER = 4;
  var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var setupPlayer = document.querySelector('.setup-player');
  var wizardObj = {
    coat: setupPlayer.querySelector('.wizard-coat'),
    inputCoat: setupPlayer.querySelector('[name = "coat-color"]'),
    eyes: setupPlayer.querySelector('.wizard-eyes'),
    inputEyes: setupPlayer.querySelector('[name = "eyes-color"]'),
    fireball: setupPlayer.querySelector('.setup-fireball-wrap'),
    inputFireball: setupPlayer.querySelector('[name = "fireball-color"]')
  };
  var wizards = [];
  var coatColor;
  var eyesColor;

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

  var changeFireballColorValue = function () {
    var newFireballColor = getFireballColor();

    wizardObj.inputFireball.value = newFireballColor;
    wizardObj.fireball.style.backgroundColor = newFireballColor;
  };

  var changeCoatColorValue = function () {
    var newCoatColor = getCoatColor();

    coatColor = newCoatColor;
    wizardObj.inputCoat.value = coatColor;
    wizardObj.coat.style.fill = coatColor;
    getSimilarWizards();
  };

  var changeEyesColorValue = function () {
    var newEyesColor = getEyesColor();

    eyesColor = newEyesColor;
    wizardObj.inputEyes.value = eyesColor;
    wizardObj.eyes.style.fill = eyesColor;
    getSimilarWizards();
  };

  var getWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  var renderWizards = function (wizardsArr) {
    var fragment = document.createDocumentFragment();
    var numberSimilarWizards = wizardsArr.length > WIZARD_NUMBER ? WIZARD_NUMBER : wizardsArr.length;

    similarListElement.innerHTML = '';

    for (var i = 0; i < numberSimilarWizards; i++) {
      fragment.appendChild(getWizard(wizardsArr[i]));
    }
    similarListElement.appendChild(fragment);
  };

  var getRank = function (wizard) {
    var rank = 0;
    var rankSimilarCoat = 2;
    var rankSimilarEyers = 1;

    if (wizard.colorCoat === coatColor) {
      rank += rankSimilarCoat;
    }

    if (wizard.colorEyes === eyesColor) {
      rank += rankSimilarEyers;
    }
    return rank;
  };

  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  var getUniqueWizards = function () {
    var sameCoatAndEyesWizards = wizards.filter(function (it) {
      return it.colorCoat === coatColor &&
      it.colorEyes === eyesColor;
    });

    var sameCoatWizards = wizards.filter(function (it) {
      return it.colorCoat === coatColor;
    });

    var sameEyesWizards = wizards.filter(function (it) {
      return it.colorEyes === eyesColor;
    });

    var filteredWizards = sameCoatAndEyesWizards;
    filteredWizards = filteredWizards.concat(sameCoatWizards);
    filteredWizards = filteredWizards.concat(sameEyesWizards);
    filteredWizards = filteredWizards.concat(wizards);

    var uniqueWizards = filteredWizards.filter(function (it, i) {
      return filteredWizards.indexOf(it) === i;
    });

    return uniqueWizards;
  };

  var getSortedWizards = function (wizardsArr) {
    wizardsArr.slice().sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);

      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    });
    return wizardsArr;
  };

  var showWizards = function (wizardsArr) {
    wizards = wizardsArr;
    coatColor = wizardObj.inputCoat.value;
    eyesColor = wizardObj.inputEyes.value;
    renderWizards(wizards);
  };

  var getSimilarWizards = function () {
    var uniqueWizards = getUniqueWizards();
    var sortedWizards = getSortedWizards(uniqueWizards);
    showWizards(sortedWizards);
  };

  window.wizards = {
    show: showWizards,
    eyesColorValue: changeEyesColorValue,
    coatColorValue: changeCoatColorValue,
    fireballColorValue: changeFireballColorValue,
    wizardObj: wizardObj
  };
})();
