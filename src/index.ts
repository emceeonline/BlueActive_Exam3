import * as PIXI from "pixi.js";
import * as gsap from "gsap";

const { TweenMax } = gsap;

import { Positioner } from "./AppUtils/Positioner";
import { Table } from "./Table";
import { Chips } from "./Chips";
import { Controls } from "./Controls";
import { Dealer } from "./Dealer";
import { Cards } from "./Cards";
import { Summary } from "./Summary";


const width:number = 900;
const height:number = 600;

const app = new PIXI.Application({
    width: width,
    height: height,
    antialias: true,
});

const appContainer = document.getElementById("app_container")
appContainer.appendChild(app.view);

let table:Table;
let chips:Chips;
let controls:Controls;
let dealer:Dealer;
let cards:Cards;
let summary:Summary;

function loadAssets() {
    PIXI.loader
       .add("assets/backgroud.jpg")
       .add("assets/GameAssets.json")
       .add("assets/CardAssets.json")
       .load(run);
}


function run() {
    //background
    const texture_bg = PIXI.loader.resources["assets/backgroud.jpg"].texture;
    texture_bg.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
    const sprite_bg:PIXI.Sprite = new PIXI.Sprite(texture_bg);
    app.stage.addChild(sprite_bg); 
    //end background

    dealer = new Dealer(update);
    table = new Table(update,app);
    chips = new Chips(update,app);
    controls = new Controls(update,app);
    cards = new Cards(update,app);
    summary = new Summary(update,app);
}

function update(_params){
    switch(_params.type){
        case 'GET_BALANCE':
            return dealer.update(_params);
        break;
        case 'CHIP_SELECTED':
            table.update(_params);
        break;
        case 'GET_CHIP_VALUE':
            return chips.selectedChipValue;
        break;
        case 'SHOW_CONTROLS_BET': 
        case 'HIDE_CONTROLS':
            controls.update(_params);
        break;
        case 'ERASE':
            table.update(_params);
        break;
        case 'DEAL':
            table.update(_params);
            _params.betData = table.update({type:'GET_BET_DATA'})
            dealer.update(_params);
        break;
        case 'DEAL_RESULT':
            cards.update(_params);
        break;
        case 'SHOW_RESULT':
            table.update(_params);
        break;
        case 'SHOW_SUMMARY':
            summary.update(_params);
            controls.update(_params);
        break;
        case 'RESET':
            summary.update(_params);
            table.update(_params);
            cards.update(_params);
        break;
        case 'REBET':
            summary.update(_params);
            table.update(_params);
            cards.update(_params);
        break;
    }
}

loadAssets();

