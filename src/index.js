import 'phaser';
import config from './Config/config';
import SimpleScene from './Scenes/simple-scene';
import BootScene from './Scenes/BootScene';
import GameScene from './Scenes/GameScene';

 
class Game extends Phaser.Game {
  constructor () {
    super(config); 
    this.scene.add('SimpleScene', SimpleScene);
    this.scene.start('SimpleScene');
  }
}
 
window.game = new Game();