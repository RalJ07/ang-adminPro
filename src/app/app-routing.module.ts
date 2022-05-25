import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing.module';


import { NopageComponent } from './nopage/nopage.component';
import { PagesRoutingModule } from './pages/pages-routing.module';



const routes: Routes = [
 // {
 //   path:'',
 //   loadChildren: () => import ('./pages/pages.module').then(m => m.PagesModule)
  //},
  //{
 //   path:'',
 //   loadChildren: () => import ('./auth/auth.module').then( m => m.AuthModule)
//  },
  {path: '', redirectTo:'/dashboard', pathMatch: 'full'},
  {path: '**',component: NopageComponent},
  

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes ),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
