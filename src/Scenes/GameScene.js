import 'phaser';
let gameState ={
  active: true
}
 
export default class GameScene extends Phaser.Scene {
  constructor () {
    super('Game');
  }
  
  preload () {
    this.load.spritesheet('coin', 'assets/Full Coins.png', { frameWidth: 16, frameHeight: 15 })
    // map tiles
    this.load.image('tiles', 'assets/map/spritesheet.png');
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
 
    gameState.player = this.physics.add.sprite(100, 150, 'player', 6);
    this.physics.world.bounds.width = map.widthInPixels;
    this.physics.world.bounds.height = map.heightInPixels;
    gameState.player.setCollideWorldBounds(true);
  

    gameState.coins = this.physics.add.group();

    this.anims.create({
      key: 'blink',
      delay:1000,
      frames: this.anims.generateFrameNumbers('coin', { start: 0, end: 5 }),
      frameRate: 4,
      repeat: -1
    });

    function coinGen() {
      const xCoord = (Math.random() * 420) + 20
      const yCoord = (Math.random() * 420) + 20;
      gameState.coins.create(xCoord, yCoord, 'coin').anims.play('blink', true)
    } 
  
   
    for(let i=0; i< 20; i++){
      coinGen()
   }

   gameState.score =0
   this.physics.add.collider(gameState.coins, gameState.player, (coin) => {
     gameState.score += 10
     coin.destroy()
   })
 
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
    // animation with key 'up'
  this.anims.create({
      key: 'up',
      frames: this.anims.generateFrameNumbers('player', { frames: [2, 8, 2, 14]}),
      frameRate: 10,
      repeat: -1
  });
    // animation with key 'down'
  this.anims.create({
      key: 'down',
      frames: this.anims.generateFrameNumbers('player', { frames: [ 0, 6, 0, 12 ] }),
      frameRate: 10,
      repeat: -1
  });
	
  this.physics.add.collider(gameState.player, obstacles);
  // this.physics.add.collider(gameState.player, coins);
    // this.add.image(500, 300, 'bg');

    // gameState.hero = this.physics.add.sprite(20,300, 'hero').setScale(0.3)

    //  const platforms = this.physics.add.staticGroup();
    //  platforms.create(200, 550, 'platform1').refreshBody();
    //  platforms.create(600, 550, 'platform2').refreshBody();

    //  this.physics.add.collider(gameState.hero, platforms);
    //  gameState.hero.setCollideWorldBounds(true);

    // this.anims.create({
    //   key: 'run',
    //   frames: this.anims.generateFrameNumbers('hero', { start: 0, end: 3 }),
    //   frameRate: 5,
    //   repeat: -1
    // });

    // this.anims.create({
    //   key: 'idle',
    //   frames: this.anims.generateFrameNumbers('hero', { start: 0, end: 3 }),
    //   frameRate: 0,
    //   repeat: -1
    // });
  
     gameState.cursors = this.input.keyboard.createCursorKeys();


    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    this.cameras.main.startFollow(gameState.player);
    this.cameras.main.roundPixels = true;

    this.spawns = this.physics.add.group({ classType: Phaser.GameObjects.Zone });
    for(var i = 0; i < 3; i++) {
        var x = Phaser.Math.RND.between(0, this.physics.world.bounds.width);
        var y = Phaser.Math.RND.between(0, this.physics.world.bounds.height);
        // parameters are x, y, width, height
        this.spawns.create(x, y, 20, 20);            
    }        
    this.physics.add.overlap(gameState.player, this.spawns, this.onMeetEnemy, false, this);

    function onMeetEnemy(player, zone) {        
      zone.x = Phaser.Math.RND.between(0, this.physics.world.bounds.width);
      zone.y = Phaser.Math.RND.between(0, this.physics.world.bounds.height);  
  
      // shake the Effect
      this.cameras.main.shake(300);
      camera.flash(duration);
      // camera.fade(duration);
    }
  }

  update(time, delta){
    // gameState.player.body.setVelocity(0);

     // Vertical movement
     if (gameState.cursors.up.isDown)
     {
         gameState.player.setVelocityY(-100);
         gameState.player.anims.play('up', true);
     }
     else if (gameState.cursors.down.isDown)
     {
         gameState.player.setVelocityY(100);
         gameState.player.anims.play('down', true);
     }else{
       gameState.player.setVelocityY(0);
       gameState.player.anims.stop();
     }

        // Horizontal movement
        if (gameState.cursors.left.isDown)
        {
            gameState.player.setVelocityX(-100);
            gameState.player.anims.play('left', true);
            gameState.player.flipX = true;
        }
        else if (gameState.cursors.right.isDown)
        {
          gameState.player.setVelocityX(100);
          gameState.player.anims.play('right', true);
          gameState.player.flipX = false;
        }else{
          gameState.player.setVelocityX(0);
          gameState.player.anims.stop();
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