import Phaser from "phaser";

export default class MainScene extends Phaser.Scene {
    constructor() {
        super("MainScene");
    }

    preload() {

    }

    create() {
        this.add.text(10,10,"Hola mundo!");
    }

    update() {

    }
}