import 'phaser';
 
export default class BootScene extends Phaser.Scene {
  constructor () {
    super('Boot');
  }
 
  preload () {
    this.load.image('hero-logo', '../assets/hero-logo.png')
    this.load.image('dragonblue', 'assets/dragonblue.png');
    this.load.image('dragonorrange', 'assets/dragonorrange.png');
  }
 
  create () {
    this.scene.start('Preloader');
  }
};