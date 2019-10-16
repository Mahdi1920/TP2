import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcul',
  templateUrl: './calcul.component.html',
  styleUrls: ['./calcul.component.css']
})
export class CalculComponent implements OnInit {
carre:number;
som:number;
actif:boolean=true;
onKeyUp(event:any)
{
  this.carre=((event.target.value)*(event.target.value)); 
} 
  
Somme(a:string,b:string)
{
  this.som=Number(a)+Number(b);
}

  constructor() { }
  

  ngOnInit() {
     
  }

}
