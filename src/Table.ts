import * as PIXI from "pixi.js";
import { BetData } from './export_types.ts';

import * as gsap from "gsap";
const { TweenMax } = gsap;

export class Table{
    mainUpdate:any;
    container: PIXI.Container;

    tie_button: PIXI.Graphics;
    player_button: PIXI.Graphics;
    banker_button: PIXI.Graphics;

    tieValue_txt: PIXI.Text;
    playerValue_txt: PIXI.Text;
    bankerValue_txt: PIXI.Text;

    betLimitsLabel_txt: PIXI.Text;
    resultLabel_txt: PIXI.Text;

    totalBetLabel_txt:PIXI.Text;
    totalBetValue_txt:PIXI.Text;
    balanceLabel_txt:PIXI.Text;
    balanceValue_txt:PIXI.Text;

    betMinimum: number;
    chipValue: number;
    totalBet:number;
    balance: number;
    balanceAfterBet: number;
    
    betLimits:BetData;
    currentBets:BetData;
    previousBets:BetData;

    playerWinHighlight:PIXI.Sprite;
    bankerWinHighlight:PIXI.Sprite;
    tieWinHighlight:PIXI.Sprite;

    tweenAnim;

    constructor(_update:any,app:PIXI.Application) {
        this.mainUpdate = _update;
        this.betLimits = {player:500,banker:500,tie:250};
        this.betMinimum = 10;
        this.currentBets = {player:0,banker:0,tie:0};
        this.totalBet = 0;
        this.balance = this.mainUpdate({type:'GET_BALANCE'});

        let gameSheet = PIXI.loader.resources["assets/GameAssets.json"];

        this.container = new PIXI.Container(); 
        app.stage.addChild(this.container);

        this.tie_button = new PIXI.Graphics();
        this.tie_button.beginFill(0xff0000);
        this.tie_button.drawCircle(42,42,42);
        this.tie_button.endFill();
        this.tie_button.alpha = 0.01;
        this.tie_button.interactive = true;
        this.tie_button.buttonMode = true;
        this.tie_button.on('pointerdown', this.betOnTie,this);
        this.tie_button.position.set(412,160);

        this.player_button = new PIXI.Graphics();
        this.player_button.beginFill(0xff0000);
        this.player_button.drawCircle(42,42,42);
        this.player_button.endFill();
        this.player_button.alpha = 0.01;
        this.player_button.interactive = true;
        this.player_button.buttonMode = true;
        this.player_button.on('pointerdown', this.betOnPlayer,this);
        this.player_button.position.set(320,316);

        this.banker_button = new PIXI.Graphics();
        this.banker_button.beginFill(0xff0000);
        this.banker_button.drawCircle(42,42,42);
        this.banker_button.endFill();
        this.banker_button.alpha = 0.01;
        this.banker_button.interactive = true;
        this.banker_button.buttonMode = true;
        this.banker_button.on('pointerdown', this.betOnBanker,this);
        this.banker_button.position.set(506,316);

        let tableBetStyle:PIXI.TextStyle = new PIXI.TextStyle({
            fontFamily: 'Arial',
            fontSize: 24,
            fontWeight: 'bold',
            fill: ['#ffffff', '#00ff99'], // gradient
            stroke: '#4a1850',
            strokeThickness: 2,
            dropShadow: true,
            dropShadowColor: '#000000',
            dropShadowBlur: 4,
            dropShadowAngle: Math.PI / 6,
            dropShadowDistance: 6,
            wordWrap: true,
            wordWrapWidth: 440,
        });
        let txtStyle:PIXI.TextStyle = new PIXI.TextStyle({
            fontFamily: 'Arial',
            fontSize: 14,
            fontWeight: 'bold',
            fill: ['#ffffff', '#00ff99'], // gradient
            stroke: '#4a1850',
            strokeThickness: 2,
            dropShadow: true,
            dropShadowColor: '#000000',
            dropShadowBlur: 4,
            dropShadowAngle: Math.PI / 6,
            dropShadowDistance: 6,
            wordWrap: true,
            wordWrapWidth: 440,
        });

        this.tieValue_txt = new PIXI.Text('0', tableBetStyle);
        this.tieValue_txt.position.set(454,204);
        this.tieValue_txt.anchor.set(0.5);

        this.playerValue_txt = new PIXI.Text('0', tableBetStyle);
        this.playerValue_txt.position.set(362,358);
        this.playerValue_txt.anchor.set(0.5);

        this.bankerValue_txt = new PIXI.Text('0', tableBetStyle);
        this.bankerValue_txt.position.set(548,358);
        this.bankerValue_txt.anchor.set(0.5);

        this.balanceLabel_txt = new PIXI.Text('BALANCE :', txtStyle);
        this.balanceLabel_txt.position.set(5,550);

        this.balanceValue_txt = new PIXI.Text(this.balance.toFixed(2), txtStyle);
        this.balanceValue_txt.position.set(90,550);

        this.totalBetLabel_txt = new PIXI.Text('TOTAL BET :', txtStyle);
        this.totalBetLabel_txt.position.set(736,550);

        this.totalBetValue_txt = new PIXI.Text(this.totalBet.toFixed(2), txtStyle);
        this.totalBetValue_txt.position.set(830,550);

        this.betLimitsLabel_txt = new PIXI.Text('Player / Banker : Min : '+this.betMinimum+'  -  Max : '+this.betLimits.player+'    Tie : Min : '+this.betMinimum+'  -  Max : '+this.betLimits.tie, txtStyle);
        this.betLimitsLabel_txt.position.set(5,576);
        this.betLimitsLabel_txt.anchor.set(0);

        this.resultLabel_txt = new PIXI.Text('', txtStyle);
        this.resultLabel_txt.position.set(895,576);
        this.resultLabel_txt.anchor.set(1,0);

        this.playerWinHighlight = new PIXI.Sprite(gameSheet.textures["player_win_highlight.png"]);
        this.playerWinHighlight.position.set(286,388);
        this.playerWinHighlight.alpha = 0.5;

        this.bankerWinHighlight = new PIXI.Sprite(gameSheet.textures["banker_win_highlight.png"]);
        this.bankerWinHighlight.position.set(472,388);
        this.bankerWinHighlight.alpha = 0.5;

        this.tieWinHighlight = new PIXI.Sprite(gameSheet.textures["tie_win_highlight.png"]);
        this.tieWinHighlight.position.set(408,234);
        this.tieWinHighlight.alpha = 0.5;

        this.container.addChild(this.tie_button,this.player_button,this.banker_button);
        //this.container.addChild(this.tieValue_txt,this.playerValue_txt,this.bankerValue_txt);
        this.container.addChild(this.balanceLabel_txt,this.balanceValue_txt,this.betLimitsLabel_txt);
        //this.container.addChild(this.playerWinHighlight,this.bankerWinHighlight,this.tieWinHighlight);
    }

    betOnTie(e) {
        if(this.totalBet + this.chipValue > this.balance){
            alert('NOT ENOUGH BALANCE');
            return;
        }
        if(this.currentBets.tie + this.chipValue < this.betLimits.tie){
            this.currentBets.tie += this.chipValue;
        }else{
            this.currentBets.tie = this.betLimits.tie; 
            this.tie_button.interactive = false;
        }
        this.container.addChild(this.tieValue_txt);
        this.tieValue_txt.text = this.currentBets.tie.toString(); 

        this.update({type:'UPDATE_VALUES'});
    }
    betOnPlayer(e) {
        if(this.totalBet + this.chipValue > this.balance){ 
            alert('NOT ENOUGH BALANCE');
            return;
        }
        if(this.currentBets.player + this.chipValue < this.betLimits.player){
            this.currentBets.player += this.chipValue;
        }else{
            this.currentBets.player = this.betLimits.player;
            this.player_button.interactive = false;
        }
        this.container.addChild(this.playerValue_txt);
        this.playerValue_txt.text = this.currentBets.player.toString();
        this.update({type:'UPDATE_VALUES'});
    }
    betOnBanker(e) {
        if(this.totalBet + this.chipValue > this.balance){
            alert('NOT ENOUGH BALANCE');
            return;
        }
        if(this.currentBets.banker + this.chipValue < this.betLimits.banker){
            this.currentBets.banker += this.chipValue;
        }else{
            this.currentBets.banker = this.betLimits.banker;
            this.banker_button.interactive = false;
        }
        this.container.addChild(this.bankerValue_txt);
        this.bankerValue_txt.text = this.currentBets.banker.toString();
        this.update({type:'UPDATE_VALUES'});
    }

    update(_params){
        switch(_params.type){
            case 'CHIP_SELECTED':
                this.chipValue = _params.value;
            break;
            case 'UPDATE_VALUES':
                if(this.totalBet == 0){
                    //show controls
                    this.mainUpdate({type:'SHOW_CONTROLS_BET',});
                    this.container.addChild(this.totalBetLabel_txt,this.totalBetValue_txt);
                }
                this.totalBet = this.currentBets.player + this.currentBets.banker + this.currentBets.tie;
                this.totalBetValue_txt.text = this.totalBet.toFixed(2);

                this.balanceAfterBet = this.balance - this.totalBet;
                this.balanceValue_txt.text = this.balanceAfterBet.toFixed(2);
            break;
            case 'CLEAR_ALL':
                this.container.removeChild(this.totalBetValue_txt);
                this.container.removeChild(this.totalBetLabel_txt);

                this.resultLabel_txt.text = '';

                this.totalBet = 0;
                this.currentBets.player = this.currentBets.banker = this.currentBets.tie = 0;

                this.totalBetValue_txt.text = this.totalBet.toFixed(2);
                this.balanceAfterBet = this.balance;
                this.balanceValue_txt.text = this.balance.toFixed(2);

                this.playerValue_txt.text = this.currentBets.player.toString();
                this.bankerValue_txt.text = this.currentBets.banker.toString();
                this.tieValue_txt.text = this.currentBets.tie.toString();
                this.container.removeChild(this.playerValue_txt);
                this.container.removeChild(this.bankerValue_txt);
                this.container.removeChild(this.tieValue_txt);

                this.player_button.interactive = true;
                this.banker_button.interactive = true;
                this.tie_button.interactive = true;
            break;
            case 'ERASE':
                this.update({type:'CLEAR_ALL'});
            break;
            case 'DEAL':
                this.player_button.interactive = false;
                this.banker_button.interactive = false;
                this.tie_button.interactive = false;
            break;
            case 'GET_BET_DATA':
                return this.currentBets;
            break;
            case 'SHOW_RESULT':
                this.balance = _params.data.balance;
                this.balanceValue_txt.text = this.balance.toFixed(2);

                this.previousBets = JSON.parse(JSON.stringify(this.currentBets));

                this.resultLabel_txt.text = '';
                switch(_params.data.WinResult){
                    case 'P':
                        this.playerWinHighlight.alpha = 0;
                        this.container.addChild(this.playerWinHighlight);
                        this.tweenAnim = TweenMax.to(this.playerWinHighlight, 0.2, { alpha: 0.3,  ease: gsap.Linear.easeNone, onCompleteScope:this}).repeat(-1);

                        if(_params.data.payout.player > 0){
                            this.resultLabel_txt.text = 'TOTAL WINS: '+ _params.data.payout.player.toFixed(2);
                        }

                        this.container.removeChild(this.bankerValue_txt);
                        this.container.removeChild(this.tieValue_txt);
                    break;
                    case 'B':
                        this.bankerWinHighlight.alpha = 0;
                        this.container.addChild(this.bankerWinHighlight);
                        this.tweenAnim = TweenMax.to(this.bankerWinHighlight, 0.2, { alpha: 0.3,  ease: gsap.Linear.easeNone, onCompleteScope:this}).repeat(-1);

                        if(_params.data.payout.banker > 0){
                            this.resultLabel_txt.text = 'TOTAL WINS: '+ _params.data.payout.banker.toFixed(2);
                        }

                        this.container.removeChild(this.playerValue_txt);
                        this.container.removeChild(this.tieValue_txt);
                    break;
                    case 'T':
                        this.tieWinHighlight.alpha = 0;
                        this.container.addChild(this.tieWinHighlight);
                        this.tweenAnim = TweenMax.to(this.tieWinHighlight, 0.2, { alpha: 0.3,  ease: gsap.Linear.easeNone, onCompleteScope:this}).repeat(-1);

                        if(_params.data.payout.tie > 0){
                            this.resultLabel_txt.text = 'TOTAL WINS: '+ _params.data.payout.tie.toFixed(2);
                        }

                        this.container.removeChild(this.playerValue_txt);
                        this.container.removeChild(this.bankerValue_txt);
                    break;
                }
                if(this.resultLabel_txt.text != ''){
                    this.container.addChild(this.resultLabel_txt);
                }
                setTimeout(() => {
                    _params.data.allowRebet = (this.previousBets.player + this.previousBets.banker + this.previousBets.tie) <= this.balance ? true : false;
                    this.mainUpdate({type:'SHOW_SUMMARY',data:_params.data});
                }, 3000);  

            break;
            case 'RESET':
                this.update({type:'CLEAR_ALL'});

                this.tweenAnim.kill();
                this.container.removeChild(this.playerWinHighlight);
                this.container.removeChild(this.bankerWinHighlight);
                this.container.removeChild(this.tieWinHighlight);
            break;
            case 'REBET':
                this.update({type:'RESET'});
                
                this.currentBets.player = this.previousBets.player;
                if(this.currentBets.player > 0){
                    if(this.currentBets.player >= this.betLimits.player){
                        this.player_button.interactive = false;
                    }
                    this.container.addChild(this.playerValue_txt);
                    this.playerValue_txt.text = this.currentBets.player.toString();
                }

                this.currentBets.banker = this.previousBets.banker;
                if(this.currentBets.banker > 0){
                    if(this.currentBets.banker >= this.betLimits.banker){
                        this.banker_button.interactive = false;
                    }
                    this.container.addChild(this.bankerValue_txt);
                    this.bankerValue_txt.text = this.currentBets.banker.toString();
                }
                
                this.currentBets.tie = this.previousBets.tie;
                if(this.currentBets.tie > 0){
                    if(this.currentBets.tie >= this.betLimits.tie){
                        this.tie_button.interactive = false;
                    }
                    this.container.addChild(this.tieValue_txt);
                    this.tieValue_txt.text = this.currentBets.tie.toString();
                }
                this.update({type:'UPDATE_VALUES'});

            break;

        }
    }
}
