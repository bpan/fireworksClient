'use strict';

var stage;
function init() {
  stage = new createjs.Stage("gameTable");

  var hints = {
    icon: new createjs.Bitmap("images/hints.png").set({
      scaleX: 0.5,
      scaleY: 0.5
    }),
    text: new createjs.Text(7, "16px Arial").set({
      x: 55,
      y: 16
    }),
    container: new createjs.Container().set({ x: 10, y: 10 }),
    init: function () {
      this.container.addChild(this.icon, this.text);
      stage.addChild(this.container)
    },
    addHint: function () {
      if (this.text.text < 8) {
        this.text.text += 1;
      }
      stage.update();
      return this.text.text;
    },
    loseHint: function () {
      if (this.text.text > 0) {
        this.text.text -= 1;
      }
      stage.update();
      return this.text.text;
    }
  };

  var bombs = {
    icon: new createjs.Bitmap("images/bombs.png").set({
      scaleX: 0.5,
      scaleY: 0.5
    }),
    text: new createjs.Text(4, "16px Arial").set({
      x: 55,
      y: 16
    }),
    container: new createjs.Container().set({ x: 10, y: 60 }),
    init: function () {
      this.container.addChild(this.icon, this.text);
      stage.addChild(this.container)
    },
    loseBomb: function () {
      if (this.text.text > 0) {
        this.text.text -= 1;
      }
      stage.update();
      return this.text.text;
    }
  };

  var seats = [
    new createjs.Bitmap("images/napoleon-dynamo.png").set({
      x: 100,
      y: 40,
      scaleX: 0.5,
      scaleY: 0.5
    }),
    new createjs.Bitmap("images/rhyme-style.png").set({
      x: 100,
      y: 350,
      scaleX: 0.5,
      scaleY: 0.5
    }),
    new createjs.Bitmap("images/napoleon-dynamo.png").set({
      x: 100,
      y: 40,
      scaleX: 0.5,
      scaleY: 0.5
    }),
    new createjs.Bitmap("images/james-kirk.png").set({
      x: 700,
      y: 40,
      scaleX: 0.5,
      scaleY: 0.5
    }),
    new createjs.Bitmap("images/maki-senpai.png").set({
      x: 700,
      y: 350,
      scaleX: 0.5,
      scaleY: 0.5
    }),
    new createjs.Bitmap("images/hana-bee.png").set({
      x: 400,
      y: 500,
      scaleX: 0.5,
      scaleY: 0.5
    })
  ];

  hints.init();
  bombs.init();
  seats.forEach(function (player) {
    stage.addChild(player);
  });
  setTimeout(function () { stage.update(); }, 500);
  setTimeout(function () { hints.addHint(); }, 1500);
  setTimeout(function () { bombs.loseBomb(); }, 2000);
}