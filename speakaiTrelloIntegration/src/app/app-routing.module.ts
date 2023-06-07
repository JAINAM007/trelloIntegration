import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardCreationComponent } from './card-creation/card-creation.component';
import { CardDisplayComponent } from './card-display/card-display.component';

const routes: Routes = [
  { path: 'api/cards/create', component: CardCreationComponent },
  { path: 'api/cards/display', component: CardDisplayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
