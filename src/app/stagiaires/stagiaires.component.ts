import { Component, OnInit } from '@angular/core'; 
import { StagiaireService } from '../services/stagiaires/stagiaire.service'; 
import { Stagiaire } from '../module/stagiaire';

@Component({
  selector: 'app-stagiaires',
  templateUrl: './stagiaires.component.html',
  styleUrls: ['./stagiaires.component.css']
})
export class StagiairesComponent implements OnInit {

  stagiaires: Stagiaire[];
  constructor(private _stagiaireService:StagiaireService) { }
  
  ngOnInit(): void {
    this.listStagiaires();
  }

  public listStagiaires(){

    this._stagiaireService.getAllStagiaires().subscribe(
      data=> this.stagiaires = data
    )
    
  }

}
