import 'phaser';
 
export default class GameScene extends Phaser.Scene {
  constructor () {
    super('GameScene');
  }
  
  preload () {
    // load images
    this.load.image('bg', 'assets/sky-background.png');
  }
 
  create () {
    this.add.image(400, 300, 'bg').setScale(2.5);
  }
};