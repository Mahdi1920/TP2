import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tp3-parti1',
  templateUrl: './tp3-parti1.component.html',
  styleUrls: ['./tp3-parti1.component.css']
})
export class Tp3Parti1Component implements OnInit {
tab=[15,46,0,89,80];
p:string="pair";
ip:string="impair";
  constructor() { }
onPosition(indice:number)
{
  console.log(indice)
}
  ngOnInit() {
  }

}
