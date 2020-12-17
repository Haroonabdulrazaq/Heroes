import 'phaser';
 
export default class UIScene extends Phaser.Scene {
  constructor () {
    super('UI');
  }
 
  preload () {
  }
 
  create () {
    this.graphics = this.add.graphics();
    this.graphics.lineStyle(1, 0xffffff);
    this.graphics.fillStyle(0x031f4c, 1);        
    this.graphics.strokeRect(5, 200, 150, 100);
    this.graphics.fillRect(5, 200, 150, 100);
    this.graphics.strokeRect(135, 200, 130, 100);
    this.graphics.fillRect(135, 200, 130, 100);
    this.graphics.strokeRect(260, 200, 130, 100);
    this.graphics.fillRect(260, 200, 130, 100);
  }
};