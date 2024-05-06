import Vec2 from "../../Wolfie2D/DataTypes/Vec2";
import Button from "../../Wolfie2D/Nodes/UIElements/Button";
import { UIElementType } from "../../Wolfie2D/Nodes/UIElements/UIElementTypes";
import Color from "../../Wolfie2D/Utils/Color";
import GameScene from "../Scenes/GameScene";
import { Layers_enum } from "../Utils/Layers_enum";
import { Objective_Event } from "../Utils/Objective_Event";
import ObjectivesConstructor from "./ObjectivesConstructor";

export default class NoFire extends ObjectivesConstructor{
    private currentnum: number
    
    constructor(game_scene: GameScene, pos: Vec2, currentnum: number){
        super(game_scene, pos);
        this.currentnum = currentnum;
        this.text = this.createLabel("Get rid of all fire. Current: " + this.currentnum + " remaining", new Vec2(pos.x + 140, pos.y))
        this.receiver.subscribe(Objective_Event.FIRESIZE)
    }

    update(){
        while(this.receiver.hasNextEvent()){
            let event = this.receiver.getNextEvent();
            this.currentnum = event.data.get("size");
            console.log(event)
            if (this.currentnum == 0){
                this.setCheck();
            }
            else{
                this.unsetCheck();
            }
            this.text.text = ("Get rid of all fire. Current: " + this.currentnum + " remaining");
        }
    }
}