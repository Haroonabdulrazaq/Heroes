import 'phaser';
let gameState ={
  active: true
}
 
export default class GameScene extends Phaser.Scene {
  constructor () {
    super('Game');
  }
  
  preload () {
    // load images
    this.load.image('bg', 'assets/background.png');
    this.load.image('platform1', '../assets/platform.png');
    this.load.image('platform2', '../assets/platform.png');
    this.load.spritesheet('hero', '../assets/spritesheet.png', {frameWidth:250, frameHeight:210})
  }
 
  create () {
    this.add.image(500, 300, 'bg').setScale(2);

    gameState.hero = this.physics.add.sprite(200,300, 'hero').setScale(0.5)

    const platforms = this.physics.add.staticGroup();
    platforms.create(250, 550, 'platform1').refreshBody();
    platforms.create(600, 550, 'platform2').refreshBody();

    this.physics.add.collider(gameState.hero, platforms);
    gameState.hero.setCollideWorldBounds(true);

    this.anims.create({
      key: 'run',
      frames: this.anims.generateFrameNumbers('hero', { start: 0, end: 3 }),
      frameRate: 5,
      repeat: -1
    });

    this.anims.create({
      key: 'idle',
      frames: this.anims.generateFrameNumbers('hero', { start: 0, end: 3 }),
      frameRate: 0,
      repeat: -1
    });
    gameState.cursors = this.input.keyboard.createCursorKeys();
  }

  update(){
    if(gameState.active){
      if(gameState.cursors.right.isDown){
        gameState.hero.setVelocityX(350);
        gameState.hero.anims.play('run', true);
        gameState.hero.flipX = false;
      }else if (gameState.cursors.left.isDown){
        gameState.hero.setVelocityX(-350);
        gameState.hero.anims.play('run', true);
        gameState.hero.flipX = true;
      }else{
        gameState.hero.setVelocityX(0);
        gameState.hero.anims.play('idle', true);
      }
    }

  }

};