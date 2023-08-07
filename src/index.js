import Phaser from 'phaser';
import Game from "./scenes/game"

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 950,
    height: 780,
    scene: Game
};

const game = new Phaser.Game(config);
