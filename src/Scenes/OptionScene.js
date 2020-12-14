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

    gameState.play = this.add.text(380,150, "Play",{
      fontFamily: 'monospace',
      fontSize: 18,
      fontStyle: 'bold',
      color: '#000000',
      backgroundColor: '#00ff00',
      padding: 7,
    });

    gameState.sound = this.add.text(380,250, "Sound",{
      fontFamily: 'monospace',
      fontSize: 18,
      fontStyle: 'bold',
      color: '#000000',
      backgroundColor: '#00ff00',
      padding: 7,
    });

    gameState.exit = this.add.text(380,350, "Exit",{
      fontFamily: 'monospace',
      fontSize: 18,
      fontStyle: 'bold',
      color: '#000000',
      backgroundColor: '#00ff00',
      padding: 7,
    });

    gameState.play.setInteractive();

    gameState.play.on('pointerup', ()=>{
      // gameState.rect2.fillColor = gameState.onColor
      this.scene.stop('Option')
      this.scene.start('Game')
    });

    // gameState.exit.on('pointerup', ()=>{
      
    // });

  }
};