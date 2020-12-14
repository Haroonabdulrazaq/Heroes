import 'phaser';
 
export default class GameScene extends Phaser.Scene {
  constructor () {
    super('Game');
  }
  
  preload () {
    // load images
    this.load.image('bg', 'assets/background.png');
  }
 
  create () {
    this.add.image(500, 300, 'bg').setScale(2)
    // this.add.text(100,200, "Hello phaser!")
  }
};