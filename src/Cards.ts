import * as PIXI from "pixi.js";
import * as gsap from "gsap";
const { TweenMax } = gsap;

interface CardData {
    face: string,
    value: number,
    icon:PIXI.Sprite,
    backCard:PIXI.Sprite,
    type?:string,
    targetPosition?:{x:number,y:number},
}


export class Cards{
    mainUpdate:any;
    container: PIXI.Container;

    cardPool:Array<CardData>;

    playerContainer: PIXI.Container;
    bankerContainer: PIXI.Container;

    resultData;
    targetCard:CardData;

    cardSheet;
    allCardsToDeal:Array<CardData>;

    cardsOnTable:number;
    targetDealCount:number;

    playerCount_txt:PIXI.Text;
    bankerCount_txt:PIXI.Text;

    totalPlayerCount:number;
    totalBankerCount:number;

    constructor(_mainUpdate:any,app:PIXI.Application) {
        this.mainUpdate = _mainUpdate;

        this.container = new PIXI.Container(); 
        app.stage.addChild(this.container);

        this.playerContainer = new PIXI.Container(); 
        
        //this.playerContainer.visible = false;

        this.bankerContainer = new PIXI.Container(); 
        
        //this.bankerContainer.visible = false;

        this.cardSheet = PIXI.loader.resources["assets/CardAssets.json"];

        this.cardPool = [];

        //max cards for display is 6
        let newCard:CardData;
        for(let i:number = 0; i < 6; i++){
            newCard = {
                face: 'A1',
                value: 1,
                icon: new PIXI.Sprite(this.cardSheet.textures['C1_Full.png']),
                backCard: new PIXI.Sprite(this.cardSheet.textures['BACK_Full.png']),
            };

            this.cardPool.push(newCard);
        }

        this.playerCount_txt = new PIXI.Text('0', new PIXI.TextStyle({
            fontFamily: 'Arial',
            fontSize: 36,
            fontWeight: 'bold',
            fill: ['#0000FF'],
            stroke: '#FFFFFF',
            strokeThickness: 4,
        }));
        this.playerCount_txt.position.set(204,56);
        this.playerCount_txt.anchor.set(0.5);
        this.playerCount_txt.visible = false;
        this.container.addChild(this.playerCount_txt);

        this.bankerCount_txt = new PIXI.Text('0', new PIXI.TextStyle({
            fontFamily: 'Arial',
            fontSize: 36,
            fontWeight: 'bold',
            fill: ['#FF0000'],
            stroke: '#FFFFFF',
            strokeThickness: 4,
        }));
        this.bankerCount_txt.position.set(700,56);
        this.bankerCount_txt.anchor.set(0.5);
        this.bankerCount_txt.visible = false;
        this.container.addChild(this.bankerCount_txt);


        this.container.addChild(this.playerContainer);
        this.container.addChild(this.bankerContainer);

    }

    update(_params){
        switch(_params.type){
            case 'DEAL_RESULT':
                this.resultData = _params;

                this.cardsOnTable = 0;
                this.targetDealCount = 4;
                this.totalPlayerCount = 0;
                this.totalBankerCount = 0;

                this.playerContainer.visible = true;
                this.bankerContainer.visible = true;

                this.allCardsToDeal = [];
                for(let i:number = 0; i < 3; i++){
                    if(this.resultData.PlayerCard[i]){
                        let newCard:CardData = this.cardPool[i];
                        newCard.face = this.resultData.PlayerCard[i].face;
                        newCard.value = this.resultData.PlayerCard[i].value;
                        newCard.icon.texture = this.cardSheet.textures[newCard.face+'_Full.png'];
                        newCard.icon.pivot.set(49,60);
                        newCard.backCard.pivot.set(49,60);
                        newCard.backCard.rotation = -20.05;
                        newCard.backCard.position.set(870,5);
                        newCard.type = 'P';
                        switch(i){
                            case 0:
                                newCard.targetPosition = {x:190, y:180};
                            break;
                            case 1:
                                newCard.targetPosition = {x:210, y:180};
                            break;
                            case 2:
                                newCard.targetPosition = {x:230, y:180};
                            break;
                        }
                        
                        this.playerContainer.addChild(newCard.backCard);

                        this.allCardsToDeal.push(newCard);
                    }
                    if(this.resultData.BankerCard[i]){
                        let newCard:CardData = this.cardPool[3 + i];
                        newCard.face = this.resultData.BankerCard[i].face;
                        newCard.value = this.resultData.BankerCard[i].value;
                        newCard.icon.texture = this.cardSheet.textures[newCard.face+'_Full.png'];
                        newCard.icon.pivot.set(49,60);
                        newCard.backCard.pivot.set(49,60);
                        newCard.backCard.rotation = -20.05;
                        newCard.backCard.position.set(870,5);
                        newCard.type = 'B';
                        switch(i){
                            case 0:
                                newCard.targetPosition = {x:690, y:180};
                            break;
                            case 1:
                                newCard.targetPosition = {x:710, y:180};
                            break;
                            case 2:
                                newCard.targetPosition = {x:730, y:180};
                            break;
                        }
                        this.allCardsToDeal.push(newCard);
                    }
                }

                this.update({type:'DEAL_CARD'});
            break;

            case 'DEAL_CARD':
                if(this.allCardsToDeal.length > 0){
                    this.cardsOnTable++;
                    this.targetCard = this.allCardsToDeal.shift();
                    this.targetCard.backCard.scale.set(1);
                    let animTime:number;
                    switch(this.targetCard.type){
                        case 'P':
                            this.totalPlayerCount += this.targetCard.value;
                            if(this.totalPlayerCount >= 10){
                                this.totalPlayerCount -= 10;
                            }
                            this.playerContainer.addChild(this.targetCard.backCard);
                            animTime = 0.4;
                        break;
                        case 'B':
                            this.totalBankerCount += this.targetCard.value;
                            if(this.totalBankerCount >= 10){
                                this.totalBankerCount -= 10;
                            }
                            this.bankerContainer.addChild(this.targetCard.backCard);
                            animTime = 0.2;
                        break;
                    }
                    TweenMax.to(this.targetCard.backCard, animTime, { rotation: Math.PI * 2, ease: gsap.Linear.easeNone});
                    TweenMax.to(this.targetCard.backCard, animTime, { x:this.targetCard.targetPosition.x, y:this.targetCard.targetPosition.y, ease: gsap.Linear.easeNone, onComplete:this.cardAnimComplete, onCompleteScope:this });
                }
            break;
            case 'CHECK_DRAW_CARD':
                //wait time before draw
                setTimeout(() => {
                    if(this.allCardsToDeal.length > 0){
                        this.targetDealCount++;
                        this.update({type:'DEAL_CARD'});
                    }else{
                        this.update({type:'SHOW_RESULT',data:this.resultData});
                    }
                }, 2000);  
            break;
            case 'SHOW_RESULT':
                this.mainUpdate(_params);
            break;
            case 'RESET':
            case 'REBET':
                for(let i:number = 0; i < this.cardPool.length;i++){
                    this.targetCard = this.cardPool[i];
                    TweenMax.to(this.targetCard.icon, 0.3, { rotation: Math.PI * 2, ease: gsap.Linear.easeNone});
                    TweenMax.to(this.targetCard.icon, 0.3, { x:-100, y:-100, ease: gsap.Linear.easeNone, onCompleteScope:this });
                }
            break;
        }
    }

    cardAnimComplete(){
        this.targetCard.icon.position = this.targetCard.backCard.position;

        this.targetCard.icon.scale.set(0,1);
        TweenMax.to(this.targetCard.backCard.scale, 0.2, { x:0 , ease: gsap.Linear.easeNone, onComplete:function(){
            TweenMax.to(this.targetCard.icon.scale, 0.2, { x:1 , ease: gsap.Linear.easeNone, onCompleteScope:this,onComplete:function(){
                switch(this.targetCard.type){
                    case 'P':
                        this.playerCount_txt.visible = true;
                        this.playerCount_txt.text = this.totalPlayerCount;
                    break;
                    case 'B':
                        this.bankerCount_txt.visible = true;
                        this.bankerCount_txt.text = this.totalBankerCount;
                    break;
                }
                if(this.cardsOnTable < this.targetDealCount){
                    this.update({type:'DEAL_CARD'});
                }else{
                    this.update({type:'CHECK_DRAW_CARD'});
                }
            }});
            }, onCompleteScope:this
        });
        switch(this.targetCard.type){
            case 'P':
                //this.playerContainer.removeChild(this.targetCard.backCard);
                this.playerContainer.addChild(this.targetCard.icon);
            break;
            case 'B':
                //this.bankerContainer.removeChild(this.targetCard.backCard);
                this.bankerContainer.addChild(this.targetCard.icon);
            break;
        }
    }
}
