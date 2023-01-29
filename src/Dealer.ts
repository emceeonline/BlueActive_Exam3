import * as PIXI from "pixi.js";
import { BetData } from './export_types.ts';

interface CardData {
    face: string,
    value: number,
}

export class Dealer{
    mainUpdate:any;

    allCards:Array<CardData>;

    shuffledCard:Array<CardData>;

    deckCount:number;

    playerCard:Array<CardData>;
    bankerCard:Array<CardData>;

    removedCard:CardData;
    playerCount: number;
    bankerCount: number;

    winResult:string;
    player3rdCard: CardData;

    recievedBets:BetData;
    payouts:BetData;
    balance:number;

    constructor(_mainUpdate:any) {
        this.mainUpdate = _mainUpdate;
        this.deckCount = 8;
        this.allCards = [];
        this.balance = 1200;

        let newCard:CardData;

        
        for(let i:number = 1; i <= 13; i++){
            for(let a:number = 0; a < this.deckCount; a++){
                if(i < 10){
                    //Club
                    newCard = {face: 'C'+i, value:i}
                    this.allCards.push(newCard);

                    //Spade
                    newCard = {face: 'S'+i, value:i}
                    this.allCards.push(newCard);

                    //Heart
                    newCard = {face: 'H'+i, value:i}
                    this.allCards.push(newCard);

                    //Diamond
                    newCard = {face: 'D'+i, value:i}
                    this.allCards.push(newCard);
                }else if(i == 10){
                    //Club
                    newCard = {face: 'C0', value:0}
                    this.allCards.push(newCard);

                    //Spade
                    newCard = {face: 'S0', value:0}
                    this.allCards.push(newCard);

                    //Heart
                    newCard = {face: 'H0', value:0}
                    this.allCards.push(newCard);

                    //Diamond
                    newCard = {face: 'D0', value:0}
                    this.allCards.push(newCard);
                }else if(i == 11){
                    //Club
                    newCard = {face: 'CJ', value:0}
                    this.allCards.push(newCard);

                    //Spade
                    newCard = {face: 'SJ', value:0}
                    this.allCards.push(newCard);

                    //Heart
                    newCard = {face: 'HJ', value:0}
                    this.allCards.push(newCard);

                    //Diamond
                    newCard = {face: 'DJ', value:0}
                    this.allCards.push(newCard);
                }else if(i == 12){
                    //Club
                    newCard = {face: 'CQ', value:0}
                    this.allCards.push(newCard);

                    //Spade
                    newCard = {face: 'SQ', value:0}
                    this.allCards.push(newCard);

                    //Heart
                    newCard = {face: 'HQ', value:0}
                    this.allCards.push(newCard);

                    //Diamond
                    newCard = {face: 'DQ', value:0}
                    this.allCards.push(newCard);
                }else if(i == 13){
                    //Club
                    newCard = {face: 'CK', value:0}
                    this.allCards.push(newCard);

                    //Spade
                    newCard = {face: 'SK', value:0}
                    this.allCards.push(newCard);

                    //Heart
                    newCard = {face: 'HK', value:0}
                    this.allCards.push(newCard);

                    //Diamond
                    newCard = {face: 'DK', value:0}
                    this.allCards.push(newCard);
                }
                
            }
        }
        this.update({type:'SHUFFLE_CARD'});
    }

    update(_params){
        switch(_params.type){
            case 'HIDE_CONTROLS':
                
            break;
            case 'DEAL':
                if(this.shuffledCard.length < 6){
                    this.update({type:'SHUFFLE_CARD'});
                }
                this.recievedBets = _params.betData;

                this.balance -= (this.recievedBets.player + this.recievedBets.banker + this.recievedBets.tie);

                this.playerCard = [];
                this.bankerCard = [];
                this.playerCount = 0;
                this.bankerCount = 0;

                //first card
                this.removedCard = this.shuffledCard.shift();
                this.playerCard.push(this.removedCard);
                this.playerCount = this.removedCard.value;

                this.removedCard = this.shuffledCard.shift();
                this.bankerCard.push(this.removedCard);
                this.bankerCount = this.removedCard.value;

                //2nd card
                this.removedCard = this.shuffledCard.shift();
                this.playerCard.push(this.removedCard);
                this.playerCount += this.removedCard.value;
                if(this.playerCount >= 10){
                    this.playerCount -= 10;
                }

                this.removedCard = this.shuffledCard.shift();
                this.bankerCard.push(this.removedCard);
                this.bankerCount += this.removedCard.value;
                if(this.bankerCount >= 10){
                    this.bankerCount -= 10;
                }

                //check for 3rd card
                this.player3rdCard = null;

                //natural cards
                //If the Player (or Banker) is dealt a score of 8 or 9 in their first two cards, known as a ‘natural’ hand, they win (or tie if the opposing hand is worth the same number of points), and a new deal begins. A natural 9 will beat a natural 8.
                if(this.playerCount >= 8 || this.bankerCount >= 8){
                    //no draw natural cards
                }else {
                    //If the Player’s first two cards equal 0-5, the Player must draw a third card.
                    if(this.playerCount <= 5){
                        this.removedCard = this.shuffledCard.shift();
                        this.playerCard.push(this.removedCard);
                        this.playerCount += this.removedCard.value;
                        if(this.playerCount >= 10){
                            this.playerCount -= 10;
                        }
                        this.player3rdCard = this.removedCard;
                        //console.log('Player <= 5 Draw card',this.playerCard);

                        if(this.bankerCount <= 2){
                            //Automatically draws
                            this.removedCard = this.shuffledCard.shift();
                            this.bankerCard.push(this.removedCard);
                            this.bankerCount += this.removedCard.value;
                            if(this.bankerCount >= 10){
                                this.bankerCount -= 10;
                            }
                            //console.log('Dealer <= 2 Draw card',this.bankerCard);
                        }else if(this.bankerCount == 3 && this.player3rdCard.value < 8){
                            //If Player draws any third card (unless it is an 8)
                            this.removedCard = this.shuffledCard.shift();
                            this.bankerCard.push(this.removedCard);
                            this.bankerCount += this.removedCard.value;
                            if(this.bankerCount >= 10){
                                this.bankerCount -= 10;
                            }
                            //console.log('Dealer == 3 Draw card if not 8: ',this.player3rdCard.value,this.bankerCard);
                        }else if(this.bankerCount == 4 && this.player3rdCard.value >= 2 && this.player3rdCard.value <= 7){
                            //If Player draws a third card between 2-7
                            this.removedCard = this.shuffledCard.shift();
                            this.bankerCard.push(this.removedCard);
                            this.bankerCount += this.removedCard.value;
                            if(this.bankerCount >= 10){
                                this.bankerCount -= 10;
                            }
                            //console.log('Dealer == 4 Draw card if not 2-7: ',this.player3rdCard.value,this.bankerCard);
                        }else if(this.bankerCount == 5 && this.player3rdCard.value >= 4 && this.player3rdCard.value <= 7){
                            //If Player draws a third card between 4-7
                            this.removedCard = this.shuffledCard.shift();
                            this.bankerCard.push(this.removedCard);
                            this.bankerCount += this.removedCard.value;
                            if(this.bankerCount >= 10){
                                this.bankerCount -= 10;
                            }
                            //console.log('Dealer == 5 Draw card if not 4-7: ',this.player3rdCard.value,this.bankerCard);
                        }else if(this.bankerCount == 6 && this.player3rdCard.value >= 6 && this.player3rdCard.value <= 7){
                            //If Player draws a third card between 6-7
                            this.removedCard = this.shuffledCard.shift();
                            this.bankerCard.push(this.removedCard);
                            this.bankerCount += this.removedCard.value;
                            if(this.bankerCount >= 10){
                                this.bankerCount -= 10;
                            }
                            //console.log('Dealer == 6 Draw card if not 6-7: ',this.player3rdCard.value,this.bankerCard);
                        }else if(this.bankerCount >= 7){
                            //Does not draw
                        }
                    }

                    //If the Player’s first two cards equal 6 or 7, they cannot draw a third card and the Banker will draw on a score of 0-5
                    if(this.playerCount >= 6 && this.playerCount <= 7 && this.player3rdCard == null){
                        //console.log('Player == 6-7, banker Draw card if  0-5: ',this.bankerCount);
                        if(this.bankerCount <= 5){
                            this.removedCard = this.shuffledCard.shift();
                            this.bankerCard.push(this.removedCard);
                            this.bankerCount += this.removedCard.value;
                            if(this.bankerCount >= 10){
                                this.bankerCount -= 10;
                            }
                        }
                    }
                }

                if(this.playerCount >= 10){
                    this.playerCount -= 10;
                }
                if(this.bankerCount >= 10){
                    this.bankerCount -= 10;
                }

                this.payouts = {player:0,banker:0,tie:0}
                if(this.playerCount > this.bankerCount){
                    this.winResult = 'P';

                    if(this.recievedBets.player > 0){
                        this.payouts.player = this.recievedBets.player * 1;
                        this.balance += this.payouts.player * 2;
                    }
                 }else if(this.bankerCount > this.playerCount){
                    this.winResult = 'B';

                    if(this.recievedBets.banker > 0){
                        this.payouts.banker = this.recievedBets.banker * 1;
                        this.balance += this.payouts.banker * 2;
                    }
                 }else{
                    this.winResult = 'T';

                    if(this.recievedBets.tie > 0){
                        this.payouts.tie = this.recievedBets.tie * 8;
                        this.balance += this.payouts.tie + this.recievedBets.tie;
                    }
                 }

                this.mainUpdate({
                    type:'DEAL_RESULT',
                    PlayerCard:this.playerCard,
                    PlayerCount:this.playerCount,
                    BankerCard:this.bankerCard,
                    BankerCount:this.bankerCount,
                    WinResult:this.winResult,
                    payout: this.payouts,
                    balance: this.balance,
                });
            break;
            case 'SHUFFLE_CARD':
                this.shuffledCard = JSON.parse(JSON.stringify(this.allCards));
                for (let i:number = this.shuffledCard.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [this.shuffledCard[i], this.shuffledCard[j]] = [this.shuffledCard[j], this.shuffledCard[i]];
                }

                //cut card, get a random number between and throw it away, 30-70;
                let cutRandom:number = Math.round(Math.random() * (70 - 30) + 30);
                this.shuffledCard.splice(this.shuffledCard.length - cutRandom, cutRandom);
            break;
            case 'GET_BALANCE':
                return this.balance;
            break;
        }
    }
}
