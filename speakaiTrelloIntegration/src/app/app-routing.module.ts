import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardCreationComponent } from './card-creation/card-creation.component';

const routes: Routes = [
  { path: 'api/cards/create', component: CardCreationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
