import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.less']
})
export class RecapComponent implements OnInit {

  constructor() { }
  @Input() nom:string="";
  @Input() prenom:string="";
  @Input() adresse:string="";
  @Input() postalCode:string="";
  @Input() ville:string="";
  @Input() telephone:string="";
  @Input() email:string="";


  ngOnInit(): void {
  }

  onGoBack():void {
    
  }

}
