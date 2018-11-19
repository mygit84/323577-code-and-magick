'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var PADDIHG_LEFT = 120;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var BAR_GAP = 50;
var BASELINE = 240;
var BAR_START = PADDIHG_LEFT + GAP * 3;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }

    if (arr[i] === false) {
      return 0;
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', PADDIHG_LEFT, 30);
  ctx.fillText('Список результатов:', PADDIHG_LEFT, 50);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {

    ctx.fillStyle = '#000';
    ctx.fillText(names[i], BAR_START + (BAR_WIDTH + BAR_GAP) * i, BASELINE + GAP);

    var yourName = 'Вы';
    var randomOpacity = Math.random();
    if (names[i] === yourName) {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255,' + randomOpacity;
    }

    ctx.fillRect(BAR_START + (BAR_WIDTH + BAR_GAP) * i, BASELINE, BAR_WIDTH, -((BAR_HEIGHT * times[i]) / maxTime));
    ctx.fillStyle = '#000';
    ctx.fillText(Math.floor(times[i]), BAR_START + (BAR_WIDTH + BAR_GAP) * i, (BASELINE - (BAR_HEIGHT * times[i]) / maxTime) - GAP * 2);
  }
};
