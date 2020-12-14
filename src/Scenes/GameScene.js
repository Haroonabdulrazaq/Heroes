import 'phaser';
 
export default class GameScene extends Phaser.Scene {
  constructor () {
    super('GameScene');
  }
  
  preload () {
    // load images
    this.load.image('logo', 'assets/logo.png');
  }
 
  create () {
    this.add.image(400, 300, 'logo');
  }
};