import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { ListuserComponent } from './listuser/listuser.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { UserloginComponent } from './userlogin/userlogin.component';

const routes: Routes = [ 
  //entry point 
  {path:'', component: MainpageComponent},
  {path:'user/register', component: RegisteruserComponent},
  {path:'user/list', component: ListuserComponent},
  {path:'user/login', component: UserloginComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
