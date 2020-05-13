import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { StagiairesComponent } from './stagiaires/stagiaires.component';
import { DepartementsComponent } from './departements/departements.component';
 

const routes: Routes = [
    {path:"stagiaires", component: StagiairesComponent},
    {path:"departements", component: DepartementsComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

