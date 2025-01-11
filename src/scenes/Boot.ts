import { Scene } from 'phaser';
import { WebFontFile } from '../util/WebFontFile';

export class Boot extends Scene {
    public constructor() {
        super('Boot');
    }

    public preload(): void {
        //  The Boot Scene is typically used to load in any assets you require for your Preloader, such as a game logo or background.
        //  The smaller the file size of the assets, the better, as the Boot Scene itself has no preloader.

        this.load.image('background', 'assets/bg.png');
        this.load.addFile(new WebFontFile(this.load, ['Press Start 2P']));
    }

    public create(): void {
        this.scene.start('Preloader');
    }
}
