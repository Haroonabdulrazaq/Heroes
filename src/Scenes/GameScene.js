import 'phaser';
let gameState ={}
 
export default class GameScene extends Phaser.Scene {
  constructor () {
    super('Game');
  }
  
  preload () {
    // load images
    this.load.image('bg', 'assets/background.png');
    this.load.image('platform1', '../assets/platform.png');
    this.load.image('platform2', '../assets/platform.png');

  }
 
  create () {
    this.add.image(500, 300, 'bg').setScale(2);

    const platforms = this.physics.add.staticGroup();
    platforms.create(250, 550, 'platform1').refreshBody();
    platforms.create(600, 550, 'platform2').refreshBody();
  }

};