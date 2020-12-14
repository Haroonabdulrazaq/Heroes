import 'phaser';
import { AUTO } from 'phaser';

import SimpleScene from './scenes/simple-scene';

let config = {
  type: Phaser.AUTO,
  backgroundColor: '#022478',
  width: 750,
  height: 600,
  scene: [SimpleScene]
};

new Phaser.Game(config);