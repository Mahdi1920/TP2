import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  nom:string="Mahdi";
  age:number=21;
  actif:boolean=true;
  contenu;

  constructor() 
  { 
   
  }

  infos()
  { 
    return this.nom +" a pour âge " + this.age; 
  }

  onAfficher()   
  {    
    console.log(this.nom); 
  } 

/**onKeyUp(event:any)
{
  console.log(event.target + " "+ event.target.value);
  this.contenu = event.target.value; 
}**/
onKeyUp(event:KeyboardEvent)
{
this.contenu = 'Bonjour '+(<HTMLInputElement>event.target).value;
}


onAfficherContenu(val:string)
{
console.log(val); }
  ngOnInit() {
  }

}
