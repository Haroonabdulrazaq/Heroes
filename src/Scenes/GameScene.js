import 'phaser';
 
export default class GameScene extends Phaser.Scene {
  constructor () {
    super('Game');
  }
  
  preload () {
    // load images
    this.load.image('bg', 'assets/background.png');
    this.load.image('platform', '../assets/platform.png');
  }
 
  create () {
    this.add.image(500, 300, 'bg').setScale(2)
   gameState.platform = this.add.image(250, 550, 'platform')

    // this.add.sprite(200, 200, 'hero-spine')
    // this.add.text(100,200, "Hello phaser!")
  }

};