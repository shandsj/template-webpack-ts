import { Scene } from 'phaser';

const BACKGROUND_X = 512;
const BACKGROUND_Y = 384;
const OUTLINE_BAR_X = 512;
const OUTLINE_BAR_Y = 384;
const OUTLINE_BAR_WIDTH = 468;
const OUTLINE_BAR_HEIGHT = 32;
const COLOR_WHITE = 0XFFFFFF;
const ONE = 1;
const BAR_X_OUTLINE_DIFFERENCE = 230;
const BAR_X = OUTLINE_BAR_X - BAR_X_OUTLINE_DIFFERENCE;
const BAR_Y = OUTLINE_BAR_Y;
const BAR_WIDTH = 4;
const BAR_HEIGHT = 28;
const PROGRESS_WIDTH = 460;



export class Preloader extends Scene {
    public constructor() {
        super('Preloader');
    }

    public init(): void {
        //  We loaded this image in our Boot Scene, so we can display it here
        this.add.image(BACKGROUND_X, BACKGROUND_Y, 'background');

        //  A simple progress bar. This is the outline of the bar.
        this.add.rectangle(OUTLINE_BAR_X, OUTLINE_BAR_Y, OUTLINE_BAR_WIDTH, OUTLINE_BAR_HEIGHT).setStrokeStyle(ONE, COLOR_WHITE);

        //  This is the progress bar itself. It will increase in size from the left based on the % of progress.
        const bar = this.add.rectangle(BAR_X, BAR_Y, BAR_WIDTH, BAR_HEIGHT, COLOR_WHITE);

        //  Use the 'progress' event emitted by the LoaderPlugin to update the loading bar
        this.load.on('progress', (progress: number) => {

            //  Update the progress bar (our bar is 464px wide, so 100% = 464px)
            bar.width = BAR_WIDTH + (PROGRESS_WIDTH * progress);

        });
    }

    public preload(): void {
        //  Load the assets for the game - Replace with your own assets
        this.load.setPath('assets');

        this.load.image('logo', 'logo.png');
    }

    public create(): void {
        //  When all the assets have loaded, it's often worth creating global objects here that the rest of the game can use.
        //  For example, you can define global animations here, so we can use them in other scenes.

        //  Move to the MainMenu. You could also swap this for a Scene Transition, such as a camera fade.
        this.scene.start('MainMenu');
    }
}
