import * as PIXI from "pixi.js";

interface ControlsBtnData {
    icon: PIXI.Sprite;
    texture:PIXI.Texture;
    texture_mouseover:PIXI.Texture;
}

export class Controls{
    app:any;
    mainUpdate:any;
    container: PIXI.Container;

    deal_btn:ControlsBtnData;
    erase_btn:ControlsBtnData;
    rebet_btn:ControlsBtnData; 

    isSummary:boolean;

    constructor(_mainUpdate:any,_app:PIXI.Application) {
        this.mainUpdate = _mainUpdate;
        this.app = _app;

        this.isSummary = false;

        this.container = new PIXI.Container(); 
        this.app.stage.addChild(this.container);

        let gameSheet = PIXI.loader.resources["assets/GameAssets.json"];

        //deal
        this.deal_btn = {
            texture: gameSheet.textures["btn_controls_send_mouseout.png"],
            texture_mouseover: gameSheet.textures["btn_controls_send_mouseover.png"],
            icon: new PIXI.Sprite(),
        };
        this.deal_btn.icon.texture = this.deal_btn.texture;
        this.deal_btn.icon.interactive = true;
        this.deal_btn.icon.buttonMode = true;
        this.deal_btn.icon.position.set(798,124);
        this.deal_btn.icon.on('pointerdown', function(e){
            this.update({type:'HIDE_CONTROLS'});
            this.mainUpdate({type:'DEAL',});
        },this);
        this.deal_btn.icon.on('pointerover', function(e){
            this.deal_btn.icon.texture = this.deal_btn.texture_mouseover;
        },this);
        this.deal_btn.icon.on('pointerout', function(e){
            this.deal_btn.icon.texture = this.deal_btn.texture;
        },this);
        //this.container.addChild(this.deal_btn.icon);


        //erase
        this.erase_btn = {
            texture: gameSheet.textures["btn_controls_erase_mouseout.png"],
            texture_mouseover: gameSheet.textures["btn_controls_erase_mouseover.png"],
            icon: new PIXI.Sprite(),
        };
        this.erase_btn.icon.texture = this.erase_btn.texture;
        this.erase_btn.icon.interactive = true;
        this.erase_btn.icon.buttonMode = true;
        this.erase_btn.icon.position.set(798,252);
        this.erase_btn.icon.on('pointerdown', function(e){
            this.update({type:'HIDE_CONTROLS'});
            if(this.isSummary){
                this.isSummary = false;
                this.mainUpdate({type:'RESET'});
            }else{
                this.mainUpdate({type:'ERASE'});
            }
            
        },this);
        this.erase_btn.icon.on('pointerover', function(e){
            this.erase_btn.icon.texture = this.erase_btn.texture_mouseover;
        },this);
        this.erase_btn.icon.on('pointerout', function(e){
            this.erase_btn.icon.texture = this.erase_btn.texture;
        },this);
        //this.container.addChild(this.erase_btn.icon);


        //rebet
        this.rebet_btn = {
            texture: gameSheet.textures["btn_controls_rebet_mouseout.png"],
            texture_mouseover: gameSheet.textures["btn_controls_rebet_mouseover.png"],
            icon: new PIXI.Sprite(),
        };
        this.rebet_btn.icon.texture = this.rebet_btn.texture;
        this.rebet_btn.icon.interactive = true;
        this.rebet_btn.icon.buttonMode = true;
        this.rebet_btn.icon.position.set(798,124);
        this.rebet_btn.icon.on('pointerdown', function(e){
            this.update({type:'HIDE_CONTROLS'});
            this.mainUpdate({type:'REBET',});
        },this);
        this.rebet_btn.icon.on('pointerover', function(e){
            this.rebet_btn.icon.texture = this.rebet_btn.texture_mouseover;
        },this);
        this.rebet_btn.icon.on('pointerout', function(e){
            this.rebet_btn.icon.texture = this.rebet_btn.texture;
        },this);
        

        //this.update({type:'HIDE_CONTROLS'});
        //this.update({type:'SHOW_SUMMARY'});
    }

    update(_params){
        //console.log('CONTROLS UPDATE',_params);
        switch(_params.type){
            case 'HIDE_CONTROLS':
                this.app.stage.removeChild(this.container);
                this.container.removeChild(this.rebet_btn.icon);
                this.container.removeChild(this.erase_btn.icon);
                this.container.removeChild(this.deal_btn.icon);
            break;
            case 'SHOW_CONTROLS_BET':
                this.app.stage.addChild(this.container);

                this.container.addChild(this.erase_btn.icon);
                this.container.addChild(this.deal_btn.icon);
            break;
            case 'SHOW_SUMMARY':
                this.app.stage.addChild(this.container);

                if(_params.data.allowRebet){
                    this.container.addChild(this.rebet_btn.icon);
                }
                this.container.addChild(this.erase_btn.icon);

                this.isSummary = true;
            break;
        }
    }
}
