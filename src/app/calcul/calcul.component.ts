import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcul',
  templateUrl: './calcul.component.html',
  styleUrls: ['./calcul.component.css']
})
export class CalculComponent implements OnInit {
carre:number;

oncalculcarre(x:number)
{
this.carre =x*x;
}
  
 

  constructor() { }
  

  ngOnInit() {
     
  }

}
