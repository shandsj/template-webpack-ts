import { Scene } from 'phaser';

const BACKGROUND_X = 512;
const BACKGROUND_Y = 384;
const BACKGROUND_ALPHA = .5;
const MESSAGE_ORIGIN = .5;
const COLOR_GREEN = 0X00FF00;

export class Game extends Scene {
    private camera: Phaser.Cameras.Scene2D.Camera;
    private background: Phaser.GameObjects.Image;
    private msgText: Phaser.GameObjects.Text;

    public constructor() {
        super('Game');
    }

    public create(): void {
        this.camera = this.cameras.main;
        this.camera.setBackgroundColor(COLOR_GREEN);

        this.background = this.add.image(BACKGROUND_X, BACKGROUND_Y, 'background');
        this.background.setAlpha(BACKGROUND_ALPHA);

        this.msgText = this.add.text(BACKGROUND_X, BACKGROUND_Y, 'Make something fun!\nand share it with us:\nsupport@phaser.io', {
            fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        });
        this.msgText.setOrigin(MESSAGE_ORIGIN);

        this.input.once('pointerdown', () => {

            this.scene.start('GameOver');

        });
    }
}
