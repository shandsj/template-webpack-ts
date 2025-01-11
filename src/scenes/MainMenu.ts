import { Scene } from 'phaser';

const BACKGROUND_X = 512;
const BACKGROUND_Y = 384;
const LOGO_X = 512;
const LOGO_Y = 300;
const TEXT_X = 512;
const TEXT_Y = 460;
const TEXT_ORIGIN = .5;

export class MainMenu extends Scene {

    public constructor() {
        super('MainMenu');
    }

    public create(): void {
        this.add.image(BACKGROUND_X, BACKGROUND_Y, 'background');

        this.add.image(LOGO_X, LOGO_Y, 'logo');

        this.add.text(TEXT_X, TEXT_Y, 'Main Menu', {
            fontFamily: '"Press Start 2P"', fontSize: 38, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(TEXT_ORIGIN);

        this.input.once('pointerdown', () => {

            this.scene.start('Game');

        });
    }
}
