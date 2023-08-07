export default class Card {
    constructor(scene) {
        this.render = (x, y, sprite) => {
            let card = scene.add.image(x, y, sprite).setScale(.3, .3).setInteractive();
            scene.input.setDraggable(card);
        }
    }
}