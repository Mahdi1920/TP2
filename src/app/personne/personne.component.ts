import { Component, OnInit } from '@angular/core';
/*import { checkServerIdentity } from 'tls';*/

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent implements OnInit {
  nom:string="Mahdi";
  image:string="assets/popey.jpg" ;
  age:number=21;
  actif:boolean=true;
  chek:boolean=this.age<18;

  
    
  constructor() { 
    
  }

  ngOnInit() {
  }

}
