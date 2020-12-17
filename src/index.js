import 'phaser';
import config from './Config/config';
import PreloaderScene from './Scenes/PreloaderScene';
import SimpleScene from './Scenes/simple-scene';
import OptionScene from './Scenes/OptionScene';
import BootScene from './Scenes/BootScene';
import GameScene from './Scenes/GameScene';
import CreditScene from './Scenes/CreditScene';
import TitleScene from './Scenes/TitleScene';
import UIScene from './Scenes/UIScene';
import BattleScene from './Scenes/BattleScene';

 
class Game extends Phaser.Game {
  constructor () {
    super(config); 
    this.scene.add('Boot', BootScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('Option', OptionScene);
    this.scene.add('Credit', CreditScene);
    this.scene.add('Game', GameScene);
    this.scene.add('BattleScene', BattleScene);
    this.scene.add('UIScene', UIScene);
    this.scene.start('BattleScene');
  }
}
 
window.game = new Game();
