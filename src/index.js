import 'phaser';
import config from './Config/config';
import Preloader from './Scenes/PreloaderScene';
import Simple from './Scenes/simple-scene';
import Option from './Scenes/OptionScene';
import Boot from './Scenes/BootScene';
import Game from './Scenes/GameScene';
import Credit from './Scenes/CreditScene';
import Title from './Scenes/TitleScene';

 
class Game extends Phaser.Game {
  constructor () {
    super(config); 
    this.scene.add('Boot', Boot);
    this.scene.add('Preloader', Preloader);
    this.scene.add('Title', Title);
    this.scene.add('Option', Option);
    this.scene.add('Credit', Credit);
    this.scene.add('Game', Game);
    this.scene.start('Game');
  }
}
 
window.game = new Game();