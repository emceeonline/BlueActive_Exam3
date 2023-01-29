import * as PIXI from "pixi.js";

export class Summary{
    app:any;
    mainUpdate:any;
    container: PIXI.Container;

    winnerContainer:PIXI.Container;
    winnerBG:PIXI.Graphics;
    winnerLabel_txt:PIXI.Text;

    youWonContainer:PIXI.Container;
    youWonBG:PIXI.Graphics;
    youWonLabel_txt:PIXI.Text;
    youWonValue_txt:PIXI.Text;

    totalWin:number;

    constructor(_mainUpdate:any,_app:PIXI.Application) {
        this.mainUpdate = _mainUpdate;
        this.app = _app;

        this.container = new PIXI.Container(); 
        //this.app.stage.addChild(this.container);

        this.winnerContainer = new PIXI.Container(); 
        this.container.addChild(this.winnerContainer);

        this.winnerBG = new PIXI.Graphics();
        this.winnerBG.lineStyle(2, 0x999999, 1);
        this.winnerBG.beginFill(0xCCCCCC);
        this.winnerBG.drawRect(0,0,400,60);
        this.winnerBG.endFill();
        this.winnerBG.position.set((900-400)/2,180);
        this.winnerContainer.addChild(this.winnerBG);
        
        this.winnerLabel_txt = new PIXI.Text('PLAYER WINS', new PIXI.TextStyle({
            fontFamily: 'Arial',
            fontSize: 36,
            fontWeight: 'bold',
            fill: ['#000000'],
            stroke: '#FFFF00',
            strokeThickness: 4,
        }));
        this.winnerLabel_txt.position.set(900/2,210);
        this.winnerLabel_txt.anchor.set(0.5);
        this.winnerContainer.addChild(this.winnerLabel_txt);

        this.youWonContainer = new PIXI.Container(); 
        //this.container.addChild(this.youWonContainer);

        this.youWonBG = new PIXI.Graphics();
        this.youWonBG.lineStyle(2, 0x999999, 1);
        this.youWonBG.beginFill(0xCCCCCC);
        this.youWonBG.drawRect(0,0,400,80);
        this.youWonBG.endFill();
        this.youWonBG.position.set((900-400)/2,256);
        this.youWonContainer.addChild(this.youWonBG);

        this.youWonLabel_txt = new PIXI.Text('YOU HAVE WON', new PIXI.TextStyle({
            fontFamily: 'Arial',
            fontSize: 24,
            fontWeight: 'bold',
            fill: ['#000000'],
            stroke: '#FFFF00',
            strokeThickness: 4,
        }));
        this.youWonLabel_txt.position.set(900/2,280);
        this.youWonLabel_txt.anchor.set(0.5);
        this.youWonContainer.addChild(this.youWonLabel_txt);

        this.youWonValue_txt = new PIXI.Text('999.00', new PIXI.TextStyle({
            fontFamily: 'Arial',
            fontSize: 34,
            fontWeight: 'bold',
            fill: ['#000000'],
            stroke: '#FFFF00',
            strokeThickness: 4,
        }));
        this.youWonValue_txt.position.set(900/2,310);
        this.youWonValue_txt.anchor.set(0.5);
        this.youWonContainer.addChild(this.youWonValue_txt);
    }

    update(_params){
        switch(_params.type){
            case 'SHOW_SUMMARY':
                this.app.stage.addChild(this.container);

                switch(_params.data.WinResult){
                    case 'P':
                        this.winnerLabel_txt.text = 'PLAYER WINS';
                    break;
                    case 'B':
                        this.winnerLabel_txt.text = 'BANKER WINS';
                    break;
                    case 'T':
                        this.winnerLabel_txt.text = 'TIE WINS';
                    break;
                }

                this.totalWin = _params.data.payout.player + _params.data.payout.banker + _params.data.payout.tie;

                if(this.totalWin > 0){
                    this.youWonValue_txt.text = this.totalWin.toFixed(2);
                    this.container.addChild(this.youWonContainer);
                }
            break;
            case 'RESET':
            case 'REBET':
                this.app.stage.removeChild(this.container);
                this.container.removeChild(this.youWonContainer);
            break;
        }
    }
}
