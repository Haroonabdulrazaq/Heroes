import 'phaser';
 
export default {
  type: Phaser.AUTO,
    parent: 'content',
    width: 400,  //320
    height: 300,  //240
    zoom: 2,
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: true
        }
    },
};