import Scene from "../../Wolfie2D/Scene/Scene";

export default class Test_Scene extends Scene {

    public loadScene() {
        // Load tilemap
        this.load.tilemap("tileJSON", "Game_Resources/tilemaps/test_3.json");

        // Load tile animations
        this.load.spritesheet("tile_animations", "Game_Resources/tilemaps/tile_animations.json");
    }

    public override startScene() {
        // keep in order
        this.addLayer("tiles", 10);
        let tilemap = this.add.tilemap("tileJSON");
            // change size/scale later
            // I think that the right side of the tileset is cut off   

    }

}