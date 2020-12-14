import 'phaser';
 
export default class BootScene extends Phaser.Scene {
  constructor () {
    super('Boot');
  }
 
  preload () {
    this.load.image('hero-logo', '../assets/hero-logo.png')
  }
 
  create () {
    this.scene.start('Preloader')
  }
};