import Phaser from 'phaser';

import BootScene from './scenes/boot';
import PreloadScene from './scenes/preload';
import TitleScreen from './scenes/title';


var config = {scene: [ BootScene, PreloadScene, TitleScreen ]};

window.addEventListener('load', ()=>
{
    window.game = new Phaser.Game(config);
});

