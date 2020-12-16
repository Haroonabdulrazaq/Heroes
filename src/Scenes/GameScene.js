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
    // this.load.image('bg', 'assets/background1.png');
    // this.load.image('platform1', '../assets/platform.png');
    // this.load.image('platform2', '../assets/platform.png');
    //  this.load.spritesheet('hero', '../assets/spritesheet.png', {frameWidth:240, frameHeight:210})
           // map tiles
    this.load.image('tiles', 'assets/map/spritesheet.png');
    this.load.spritesheet('coin-blink', 'assets/Full Coins.png', { frameWidth: 16, frameHeight: 15 })

    // map in json format
      this.load.tilemapTiledJSON('map', 'assets/map/map.json');
    
    // our two characters
    this.load.spritesheet('player', 'assets/RPG_assets.png', { frameWidth: 16, frameHeight: 16 });
  }
 
  create () {
    var map = this.make.tilemap({ key: 'map' });
    var tiles = map.addTilesetImage('spritesheet', 'tiles');
        
    var grass = map.createStaticLayer('Grass', tiles, 0, 0);
    var obstacles = map.createStaticLayer('Obstacles', tiles, 0, 0);
    obstacles.setCollisionByExclusion([-1]);
 
    this.player = this.physics.add.sprite(50, 100, 'player', 6);
    this.physics.world.bounds.width = map.widthInPixels;
    this.physics.world.bounds.height = map.heightInPixels;
    this.player.setCollideWorldBounds(true);
    // this.cursors = this.input.keyboard.createCursorKeys();


    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    this.cameras.main.startFollow(this.player);
    this.cameras.main.roundPixels = true;

    const coins = this.physics.add.group()

    this.anims.create({
      key: 'blink',
      frames: this.anims.generateFrameNumbers('coin-blink', { start: 0, end: 5 }),
      frameRate: 4,
      repeat: -1
    });
    
    function coinGen() {
      const xCoord = Math.random() * 420
      const yCoord = Math.random() * 400
      // gameState.xCoord = xCoord
      // gameState.yCoord = yCoord
      coins.create(xCoord, yCoord, 'coin-blink').anims.play('blink', true)
    } 

    // gameState.coinBlink = this.physics.add.sprite(50, 142, 'coin-blink').setScale(1.5);
  
   
    for(let i=0; i< 20; i++){
      coinGen()
   }



    //  animation with key 'left', we don't need left and right as we will use one and flip the sprite
    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('player', { frames: [1, 7, 1, 13]}),
      frameRate: 10,
      repeat: -1
  });
  
  // animation with key 'right'
  this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('player', { frames: [1, 7, 1, 13] }),
      frameRate: 10,
      repeat: -1
  });
  this.anims.create({
      key: 'up',
      frames: this.anims.generateFrameNumbers('player', { frames: [2, 8, 2, 14]}),
      frameRate: 10,
      repeat: -1
  });
  this.anims.create({
      key: 'down',
      frames: this.anims.generateFrameNumbers('player', { frames: [ 0, 6, 0, 12 ] }),
      frameRate: 10,
      repeat: -1
  });
	
  this.physics.add.collider(this.player, obstacles);
    // this.add.image(500, 300, 'bg');

    // gameState.hero = this.physics.add.sprite(20,300, 'hero').setScale(0.3)

    //  const platforms = this.physics.add.staticGroup();
    //  platforms.create(200, 550, 'platform1').refreshBody();
    //  platforms.create(600, 550, 'platform2').refreshBody();

    //  this.physics.add.collider(gameState.hero, platforms);
    //  gameState.hero.setCollideWorldBounds(true);

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
  
     this.cursors = this.input.keyboard.createCursorKeys();
  }

  update(time, delta){
    this.player.body.setVelocity(0);

        // Horizontal movement
        if (this.cursors.left.isDown)
        {
            this.player.body.setVelocityX(-100);
            this.player.anims.play('left', true);
            this.player.flipX = true;
        }
        else if (this.cursors.right.isDown)
        {
            this.player.body.setVelocityX(100);
            this.player.anims.play('right', true);
            this.player.flipX = false;
        }else{
          this.player.body.setVelocityX(0);
          this.player.anims.stop();
        }
 
        // Vertical movement
        if (this.cursors.up.isDown)
        {
            this.player.body.setVelocityY(-100);
            this.player.anims.play('up', true);
        }
        else if (this.cursors.down.isDown)
        {
            this.player.body.setVelocityY(100);
            this.player.anims.play('down', true);
        }else{
          this.player.body.setVelocityY(0);
          this.player.anims.stop();
        }


        // if (this.gameState.cursors.left.isDown)
        // {
        //     this.player.anims.play('left', true);
        // }
        // else if (this.gameState.cursors.right.isDown)
        // {
        //     this.player.anims.play('right', true);
        // }
        // else if (this.gameState.cursors.up.isDown)
        // {
        //     this.player.anims.play('up', true);
        // }
        // else if (this.cursgameState.cursorsors.down.isDown)
        // {
        //     this.player.anims.play('down', true);
        // }
        // else
        // {
        //     this.player.anims.stop();
        // }


    // if(gameState.active){
    //   if(gameState.cursors.right.isDown){
   
    //     gameState.hero.setVelocityX(350);
    //     gameState.hero.anims.play('run', true);
    //     gameState.hero.flipX = false;
    //   }else if (gameState.cursors.left.isDown){
    //     gameState.hero.setVelocityX(-350);
    //     gameState.hero.anims.play('run', true);
    //     gameState.hero.flipX = true;
    //   }else{
    //     gameState.hero.setVelocityX(0);
    //     gameState.hero.anims.play('idle', true);
    //   }

    //   if ((gameState.cursors.space.isDown || gameState.cursors.up.isDown) && (gameState.hero.y >= 492)) {
    //     gameState.hero.setVelocityY(-300);
    //   }
    // }

  }
  // this.jumpAnim = this.anims.create({
  //   key: 'jump',
  //   frames: this.anims.generateFrameNames('hero', {prefix:'adventurer-jump-', suffix: '-1.3', start: 0, end: 5, zeroPad: 2}),
  //   frameRate: 10,
  //   repeat: -1
  // });
};