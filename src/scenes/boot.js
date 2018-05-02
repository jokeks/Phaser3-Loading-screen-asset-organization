import Phaser from 'phaser';

export default class BootScene extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'boot' });
    }

    preload ()
    {
        // load all files necessary for the loading screen
        this.load.json('assets', 'assets/json/assets.json');
        this.load.image('logo', 'assets/image/logo.png');
    }

    create ()
    {
        this.scene.start('preload');
    }

}
