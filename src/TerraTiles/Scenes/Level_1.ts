import Vec2 from "../../Wolfie2D/DataTypes/Vec2";
import Debug from "../../Wolfie2D/Debug/Debug";
import { GameEventType } from "../../Wolfie2D/Events/GameEventType";
import Input from "../../Wolfie2D/Input/Input";
import OrthogonalTilemap from "../../Wolfie2D/Nodes/Tilemaps/OrthogonalTilemap";
import Scene from "../../Wolfie2D/Scene/Scene";
import Timer from "../../Wolfie2D/Timing/Timer";
import { Layers_enum } from "../Utils/Layers_enum";
import { Tile, DesertTile, FireTile, WaterTile } from "../Tiles/Tile";
import GameScene from "./GameScene";


export default class Level1 extends GameScene {
    loadScene(): void {
        this.load.tilemap("level1", "Game_Resources/tilemaps/lvl_1.json");
    }

    unloadScene() {}

    startScene(): void {
        this.addLayer("tiles", 10);
        let tilemapLayers = this.add.tilemap("level1");
        this.tilemap = <OrthogonalTilemap>tilemapLayers[0].getItems()[0]

        // Set the viewport bounds to the tilemap
        let tilemapSize: Vec2 = this.tilemap.size;
        this.viewport.setBounds(0, 0, tilemapSize.x, tilemapSize.y);
        this.viewport.setZoomLevel(2.5);

        this.tiles = new Map<string, Tile>();




        
        for (let col = 0; col < this.tilemap.numCols; col++) {
            for (let row = 0; row < this.tilemap.numRows; row++) {
                let tileId = this.tilemap.getTileAtRowCol(new Vec2(row, col));


                if (tileId === 120) {
                    let b = this.tilemap.getWorldPosition(row,col);
                    console.log("불 저장", `${b},`);
                    this.fireTiles.push(b);
                }
            }
        }

        this.fireTimer = new Timer(5000, () => this.spreadFire());
        this.fireTimer.start();

        
    }
}