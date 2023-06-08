import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardCreationComponent } from './card-creation/card-creation.component';
import { CardDisplayComponent } from './card-display/card-display.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/api/login', pathMatch: 'full' }, // Default route
  { path: 'api/login', component: LoginComponent },
  { path: 'api/cards/create', component: CardCreationComponent },
  { path: 'api/cards/display', component: CardDisplayComponent },
  { path: 'api/login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
