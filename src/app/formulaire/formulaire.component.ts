import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.less']
})
export class FormulaireComponent implements OnInit {

  nom:string = "";
  prenom:string = "";
  adresse:string = "";
  postalCode:string ="";
  ville:string = "";
  telephone:string = "";
  email:string = "";
  password:string = "";

  nameInvalid:boolean = false;
  firstNameInvalid:boolean = false;
  postalCodeInvalid:boolean = false;
  passwordInvalid:boolean = false;
  formSent:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  formSubmit()
  {
    this.formSent = true;
  }

  formChanged():void {
    this.nameInvalid = this.nom === "";
    this.firstNameInvalid = this.prenom === "";
    this.postalCodeInvalid = this.postalCode?.length !== 5;
    this.passwordInvalid =this.password!.length < 4;
  }

}
