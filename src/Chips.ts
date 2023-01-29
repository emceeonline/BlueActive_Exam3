import * as PIXI from "pixi.js";

export class Chips{
    mainUpdate:any;
    allChips:Object; 
    container: PIXI.Container;
    
    allDenomination:Array<number> = [10,20,50,100,250];

    public selectedChipValue:number;
    name: string;

    constructor(_mainUpdate:any,app:PIXI.Application) {
        this.mainUpdate = _mainUpdate;

        this.container = new PIXI.Container(); 
        app.stage.addChild(this.container);

        let gameSheet = PIXI.loader.resources["assets/GameAssets.json"];

        this.allChips = {}; 

        interface ChipData { 
            value: number;
            name: string;
            icon: PIXI.Sprite;
            container:PIXI.Container;
            texture:PIXI.Texture;
            texture_selected:PIXI.Texture;
            //button: PIXI.Graphics;
        }

        let newChip = <ChipData> { };
        let newButton:PIXI.Graphics;
        let newIcon:PIXI.Sprite;
        let newTxt:PIXI.Text;

        let txtStyle:PIXI.TextStyle = new PIXI.TextStyle({
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
        for(let i:number = 0; i < this.allDenomination.length; i++){
            newChip = <ChipData> { };  
            newChip.value = this.allDenomination[i];
            newChip.name ='Chip_' + this.allDenomination[i];

            newChip.container = new PIXI.Container(); 
            this.container.addChild(newChip.container);

            newChip.texture = gameSheet.textures["chips"+i+".png"];
            newChip.texture_selected = gameSheet.textures["chips"+i+"_selected.png"];

            newIcon = new PIXI.Sprite(newChip.texture);
            newTxt = new PIXI.Text(this.allDenomination[i].toString(), txtStyle);


            switch(i){ 
                case 0:
                    newIcon.position.set(81, 412);
                    newTxt.position.set(110, 440);
                break;
                case 1:
                    newIcon.position.set(242, 453);
                    newTxt.position.set(274, 480);
                break;
                case 2:
                    newIcon.position.set(402, 465);
                    newTxt.position.set(434, 494);
                break;
                case 3:
                    newIcon.position.set(563, 453);
                    newTxt.position.set(586, 482);
                break;
                case 4:
                    newIcon.position.set(721, 409);
                    newTxt.position.set(746, 438);
                break;
            }
            newIcon.interactive = true;
            newIcon.buttonMode = true;
            newIcon.name = 'Chip_'+this.allDenomination[i];

            this.allChips['Chip_'+this.allDenomination[i]] = newChip;

            newIcon.on('pointerdown', function(e){
                let targetData;

                for (const property in this.allChips) {
                  targetData = this.allChips[property];
                  targetData.icon.texture = targetData.texture;
                }

                targetData = this.allChips[e.target.name];
                targetData.icon.texture = targetData.texture_selected;
                this.selectedChipValue = targetData.value;

                this.mainUpdate({type:'CHIP_SELECTED',value:this.selectedChipValue});
            },this);
            newChip.icon = newIcon;
            newChip.container.addChild(newIcon,newTxt);
        }

        //default chips
        console.log(this.allChips,this.allDenomination[0].toString());
        this.selectedChipValue = this.allChips['Chip_'+this.allDenomination[0].toString()].value;
        this.allChips['Chip_'+this.allDenomination[0].toString()].icon.texture = this.allChips['Chip_'+this.allDenomination[0].toString()].texture_selected;
        this.mainUpdate({type:'CHIP_SELECTED',value:this.selectedChipValue});
    } 
}
