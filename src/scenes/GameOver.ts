import { Scene } from 'phaser';

const BACKGROUND_X = 512;
const BACKGROUND_Y = 384;
const BACKGROUND_ALPHA = .5;
const TEXT_ORIGIN = .5;
const COLOR_RED = 0XFF0000;

export class GameOver extends Scene {
    private camera: Phaser.Cameras.Scene2D.Camera;
    private background: Phaser.GameObjects.Image;
    private gameOverText: Phaser.GameObjects.Text;

    public constructor() {
        super('GameOver');
    }

    public create(): void {
        this.camera = this.cameras.main
        this.camera.setBackgroundColor(COLOR_RED);

        this.background = this.add.image(BACKGROUND_X, BACKGROUND_Y, 'background');
        this.background.setAlpha(BACKGROUND_ALPHA);

        this.gameOverText = this.add.text(BACKGROUND_X, BACKGROUND_Y, 'Game Over', {
            fontFamily: 'Arial Black', fontSize: 64, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        });
        this.gameOverText.setOrigin(TEXT_ORIGIN);

        this.input.once('pointerdown', () => {

            this.scene.start('MainMenu');

        });
    }
}
