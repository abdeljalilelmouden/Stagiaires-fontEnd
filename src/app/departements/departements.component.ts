import { Component, OnInit } from '@angular/core';
import { Departement } from '../module/departement';
import { DepartementService } from '../services/departements/departement.service';

@Component({
  selector: 'app-departements',
  templateUrl: './departements.component.html',
  styleUrls: ['./departements.component.css']
})
export class DepartementsComponent implements OnInit {

  departements: Departement[];
  constructor(private _departementService:DepartementService) { }
  
  ngOnInit(): void {
    this.listDepartements();
  }

  public listDepartements(){

    this._departementService.getAllDepartements().subscribe(
      data=> this.departements = data
    )
    
  }

}
