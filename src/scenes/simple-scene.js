export default class SimpleScene extends Phaser.Scene {
  preload(){
    this.load.image('background', '../assets/background.png');
  }
  create() {
    this.add.sprite(100,200,'background')
    this.add.text(100, 100, 'Hello Phaser!', { fill: '#0f0' });
  }
}