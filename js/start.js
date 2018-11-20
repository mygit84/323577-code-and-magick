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
var BAR_START = PADDIHG_LEFT + GAP * 3.5;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElements = arr[0];

  for (var i = 0; i < arr.length; i++) {

    if (arr[i] >= 0) {
      if (arr[i] > maxElements) {
        maxElements = arr[i];
      }
    } else {
      return 0;
    }
  }
  return maxElements;
};

var getColor = function (ctx, playerName) {
  var yourName = 'Вы';

  if (playerName === yourName) {
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  } else {
    ctx.fillStyle = 'hsl(240, ' + Math.floor(Math.random() * 100) + '%, 50%)';
  }
};

var renderColumn = function (ctx, x, time, maxTime) {
  var columnHeihtg = BAR_HEIGHT * time / maxTime;

  ctx.fillRect(x, BASELINE, BAR_WIDTH, -columnHeihtg);
  ctx.fillStyle = '#000';
  ctx.fillText(Math.floor(time), x, (BASELINE - columnHeihtg - GAP * 2));
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
    var coordinateX = BAR_START + (BAR_WIDTH + BAR_GAP) * i;

    ctx.fillStyle = '#000';
    ctx.fillText(names[i], coordinateX, BASELINE + GAP);

    getColor(ctx, names[i]);
    renderColumn(ctx, coordinateX, times[i], maxTime);
  }
};
