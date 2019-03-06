import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },

 

  { path: 'register', 
  loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'profilo', 
  loadChildren: './profilo/profilo.module#ProfiloPageModule' },  { path: 'supporto', loadChildren: './supporto/supporto.module#SupportoPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
