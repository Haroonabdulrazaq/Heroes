import 'phaser';

import { SimpleScene } from './scenes/simple-scene';

let config = {
  width: 680,
  height: 400,
  scene: [SimpleScene]
};

new Phaser.Game(config);