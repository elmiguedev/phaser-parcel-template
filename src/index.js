import Phaser from "phaser";
import MainScene from "./scenes/main.scene";

new Phaser.Game({
    type: Phaser.AUTO,
    width: 320,
    height: 200,
    render: {
        pixelArt: true
    },
    physics: {
        default: "arcade",
        arcade: {
            gravity: {
                y: 0
            }
        }
    },
    scene: [
        MainScene
    ]
});