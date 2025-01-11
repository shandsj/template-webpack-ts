import { Boot } from './scenes/Boot';
import UIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin';
import GesturesPlugin from 'phaser3-rex-plugins/plugins/gestures-plugin';
import { Game as MainGame } from './scenes/Game';
import { GameOver } from './scenes/GameOver';
import { MainMenu } from './scenes/MainMenu';
import { Preloader } from './scenes/Preloader';

import type { Types } from "phaser";
import { Game } from "phaser";

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config: Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 1024,
    height: 768,
    parent: 'game-container',
    backgroundColor: '#028af8',
    pixelArt: true,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    plugins: {
        scene: [{
            key: 'rexUI',
            plugin: UIPlugin,
            mapping: 'rexUI',
        },{
            key: 'rexGestures',
            plugin: GesturesPlugin,
            mapping: 'rexGestures',
        }],
    },
    scene: [
        Boot,
        Preloader,
        MainMenu,
        MainGame,
        GameOver
    ]
};

/**
 * The web font config variable has to exist before the game loads.
 */
export const WEB_FONT_CONFIG = {
    google: {
        families: ['Press Start 2P'],
    },
};

export default new Game(config);
