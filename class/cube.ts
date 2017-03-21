export class cubeGraph{
  title: string;
  amount: number;
  color: string;
  ionIcon: string;

  constructor(title: string, amount: number, color: string = "aqua", ionIcon="ion-person-stalker"){
      this.title = title;
      this.amount = amount;
      this.color = color;
      this.ionIcon = ionIcon;
  }
}
