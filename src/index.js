import 'phaser';

import BootScene from './scenes/boot';
import PreloadScene from './scenes/preload';
import TitleScreen from './scenes/title';


var config = {
    scene: [BootScene, PreloadScene, TitleScreen]
};

var game = new Phaser.Game(config);
