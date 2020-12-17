import 'phaser';
 
export default class BootScene extends Phaser.Scene {
  constructor () {
    super('BattleScene');
  }
 
  preload () {
    // load resources
    
  }
 
  create () {
    this.cameras.main.setBackgroundColor('rgba(0, 200, 0, 0.5)');
    this.scene.launch('UI');
  }
};