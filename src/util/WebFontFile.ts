import Phaser from 'phaser';
import WebFontLoader from 'webfontloader';

/**
 * Provides an implementation of a Phaser File that loads web fonts.
 */
export class WebFontFile extends Phaser.Loader.File {

    private readonly fontNames: string[]
    private readonly service: string;

    /**
     * Initializes a new instance of the WebFontFile class.
     * @param loader The plugin loader.
     * @param fontNames The collection of font names.
     * @param service The service used to load fonts.
     */
    public constructor(loader: Phaser.Loader.LoaderPlugin, fontNames: string[], service = 'google') {
        super(loader, {
            key: fontNames.toString(),
            type: 'webfont',
        });

        this.fontNames = fontNames;
        this.service = service;
    }

    /**
     * Loads the file.
     */
    public load(): void {
        const config: WebFont.Config = {
            active: () => {
                this.loader.nextFile(this, true);
            },
        };

        switch (this.service) {
            case 'google':
                config.google = {
                    families: this.fontNames,
                };
                break;

            default:
                throw new Error('Unsupported font service');
        }

        WebFontLoader.load(config);
    }
}