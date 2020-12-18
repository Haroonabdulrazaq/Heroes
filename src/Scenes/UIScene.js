import 'phaser';

var MenuItem = new Phaser.Class({
    Extends: Phaser.GameObjects.Text,
    
    initialize:
            
    function MenuItem(x, y, text, scene) {
        Phaser.GameObjects.Text.call(this, scene, x, y, text, { color: '#ffffff', align: 'left', fontSize: 15});
    },
    
    select: function() {
        this.setColor('#f8ff38');
    },
    
    deselect: function() {
        this.setColor('#ffffff');
    }
    
});

var Menu = new Phaser.Class({
  Extends: Phaser.GameObjects.Container,
  
  initialize:
          
  function Menu(x, y, scene, heroes) {
      Phaser.GameObjects.Container.call(this, scene, x, y);
      this.menuItems = [];
      this.menuItemIndex = 0;
      this.heroes = heroes;
      this.x = x;
      this.y = y;
  },     
  addMenuItem: function(unit) {
      var menuItem = new MenuItem(0, this.menuItems.length * 20, unit, this.scene);
      this.menuItems.push(menuItem);
      this.add(menuItem);        
  },            
  moveSelectionUp: function() {
      this.menuItems[this.menuItemIndex].deselect();
      this.menuItemIndex--;
      if(this.menuItemIndex < 0)
          this.menuItemIndex = this.menuItems.length - 1;
      this.menuItems[this.menuItemIndex].select();
  },
  moveSelectionDown: function() {
      this.menuItems[this.menuItemIndex].deselect();
      this.menuItemIndex++;
      if(this.menuItemIndex >= this.menuItems.length)
          this.menuItemIndex = 0;
      this.menuItems[this.menuItemIndex].select();
  },
  // select the menu as a whole and an element with index from it
  select: function(index) {
      if(!index)
          index = 0;
      this.menuItems[this.menuItemIndex].deselect();
      this.menuItemIndex = index;
      this.menuItems[this.menuItemIndex].select();
  },
  // deselect this menu
  deselect: function() {        
      this.menuItems[this.menuItemIndex].deselect();
      this.menuItemIndex = 0;
  },
  confirm: function() {
      // wen the player confirms his slection, do the action
  }, 

  clear: function() {
    for(var i = 0; i < this.menuItems.length; i++) {
        this.menuItems[i].destroy();
    }
    this.menuItems.length = 0;
    this.menuItemIndex = 0;
  },
  remap: function(units) {
      this.clear();        
      for(var i = 0; i < units.length; i++) {
          var unit = units[i];
          this.addMenuItem(unit.type);
      }
  }
});
 
var HeroesMenu = new Phaser.Class({
    Extends: Menu,
    
    initialize:
            
    function HeroesMenu(x, y, scene) {
        Menu.call(this, x, y, scene);                    
    }
});
 
var ActionsMenu = new Phaser.Class({
    Extends: Menu,
    
    initialize:
            
    function ActionsMenu(x, y, scene) {
        Menu.call(this, x, y, scene);   
        this.addMenuItem('Attack');
    },
    confirm: function() {
        // do something when the player selects an action
    }
    
});
 
var EnemiesMenu = new Phaser.Class({
    Extends: Menu,
    
    initialize:
            
    function EnemiesMenu(x, y, scene) {
        Menu.call(this, x, y, scene);        
    },       
    confirm: function() {        
        // do something when the player selects an enemy
    }
});

 
export default class UIScene extends Phaser.Scene {
  constructor () {
    super('UI');
  }
 
  preload () {
  }
 
  create () {
    this.battleScene = this.scene.get('BattleScene');

    this.graphics = this.add.graphics();
    this.graphics.lineStyle(1, 0xffffff);
    this.graphics.fillStyle(0x031f4c, 1);        
    this.graphics.strokeRect(5, 200, 150, 100);
    this.graphics.fillRect(5, 200, 150, 100);
    this.graphics.strokeRect(135, 200, 130, 100);
    this.graphics.fillRect(135, 200, 130, 100);
    this.graphics.strokeRect(260, 200, 130, 100);
    this.graphics.fillRect(260, 200, 130, 100);

    this.menus = this.add.container();
                
    this.heroesMenu = new HeroesMenu(280, 220, this);           
    this.actionsMenu = new ActionsMenu(155, 220, this);            
    this.enemiesMenu = new EnemiesMenu(15, 220, this);   
    
    // the currently selected menu 
    this.currentMenu = this.actionsMenu;
    
    // add menus to the container
    this.menus.add(this.heroesMenu);
    this.menus.add(this.actionsMenu);
    this.menus.add(this.enemiesMenu);
  }
};