import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidat-view',
  templateUrl: './candidat-view.component.html',
  styleUrls: ['./candidat-view.component.css']
})
export class CandidatViewComponent implements OnInit {
  tabCandidats = [ 
   {nom:'Popey',image:'assets/popey.jpg', nb:16, parti:true},
   {nom:'Sam',image:'assets/smile.png', nb:14, parti:false }, 
   {nom:'Donald',image:'assets/Donald.png', nb:44, parti:false}
   ]; 
  constructor() { }

  ngOnInit() {
  }

}
