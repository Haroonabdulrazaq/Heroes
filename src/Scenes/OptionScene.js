import 'phaser';

export default class OptionScene extends Phaser.Scene {
  constructor () {
    super('Option');

  }
  
  preload () {
   
  }

 
  create () {
    const gameState = {
      onColor: 0xaaffaa,
      offColor: 0xffaaaa
    }
    gameState.play = this.add.text(100,200, "Play");
    gameState.rect2 = this.add.rectangle(200, 300, 100, 100, gameState.offColor);
    gameState.play.setInteractive();

    gameState.play.on('pointerup', ()=>{
      gameState.rect2.fillColor = gameState.onColor
      // this.scene.restart()
      this.scene.stop('Option')
      this.scene.start('Game')
    });

  }
};