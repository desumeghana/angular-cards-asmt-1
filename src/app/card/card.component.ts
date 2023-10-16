import { Component,Input } from '@angular/core';
interface FeatureItems{
  name: String,
  isEnabled? : boolean
}
interface PlanDetail{
  plan: string;
  price: number;
  features: Array<FeatureItems>
}
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent {
  @Input() planObj: PlanDetail | undefined;
}

 



























// import { Component,EventEmitter,Input} from '@angular/core';
// interface listItems{
//   data:string;
//   isE?:boolean;
// }
// interface Card{
//   cardTitle:string;
//   price:number;
//   list:Array<listItems>;
// }
// @Component({
//   selector: 'app-card',
//   templateUrl: './card.component.html',
//   styleUrls: ['./card.component.css']
// })
// export class CardComponent {
//   @Input()
//   card:Card|undefined;
// }
