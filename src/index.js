import 'phaser';
import config from './Config/config';
import PreloaderScene from './Scenes/PreloaderScene';
import SimpleScene from './Scenes/simple-scene';
import OptionScene from './Scenes/OptionScene';
import BootScene from './Scenes/BootScene';
import GameScene from './Scenes/GameScene';
import CreditScene from './Scenes/CreditScene';
import TitleScene from './Scenes/TitleScene';

 
class Game extends Phaser.Game {
  constructor () {
    super(config); 
    this.scene.add('Boot', BootScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('Option', OptionScene);
    this.scene.add('Credit', CreditScene);
    this.scene.add('Game', GameScene);
    this.scene.start('Option');
  }
}
 
window.game = new Game();