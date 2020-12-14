import 'phaser';
import config from './Config/config';
import PreloaderScene from './Scenes/PreloaderScene';
import SimpleScene from './Scenes/simple-scene';
import OptionScene from './Scenes/OptionScene';
import BootScene from './Scenes/BootScene';
import GameScene from './Scenes/GameScene';
import TitleScene from './Scenes/TitleScene';

 
class Game extends Phaser.Game {
  constructor () {
    super(config); 
    this.scene.add('SimpleScene', SimpleScene);
    this.scene.start('SimpleScene');
  }
}
 
window.game = new Game();