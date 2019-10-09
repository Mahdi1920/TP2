import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {
  titre:string ="Opérations sur un tableau";
  tabnb=[41,18,23,59];
 minim(){
   var min=this.tabnb[0];
   var i;
   for (i=1;i<4;i++){
     if (this.tabnb[i]<min) {
       min=this.tabnb[i];
     }
   }
 return min;
 }
 moyenne(){
   var moy=0;
   let s=0.;
   var i;
   for (let i=0;i<4;i++){
 s=s+this.tabnb[i];
   }
   moy=s/4;
 return moy;
 }
  constructor() { }

  ngOnInit() {
  }

}
