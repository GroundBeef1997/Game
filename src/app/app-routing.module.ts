import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PenduComponent } from './pendu/pendu.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {path: '', component: MenuComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'pendu', component: PenduComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
