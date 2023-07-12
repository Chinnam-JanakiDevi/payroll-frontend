import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillComponent } from './bill/bill.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ViewComponent } from './view/view.component';
import { PftableComponent } from './pftable/pftable.component';
import { HraupdateComponent } from './hraupdate/hraupdate.component';
import { HradeleteComponent } from './hradelete/hradelete.component';
import { PfdeleteComponent } from './pfdelete/pfdelete.component';
import { PfupdateComponent } from './pfupdate/pfupdate.component';
import { PfreadComponent } from './pfread/pfread.component';
import { ExampleComponent } from './example/example.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'bill', component:BillComponent },
  {path:'view', component:ViewComponent },
  {path:'contactus', component:ContactusComponent },
  {path:'login', component:LoginComponent },
  {path:'pftable',component:PftableComponent},
  {path:'hraupdate',component:HraupdateComponent},
  {path:'hradelete',component:HradeleteComponent},
  {path:"pfdelete",component:PfdeleteComponent},
  {path:"pfupdate",component:PfupdateComponent},
  {path:"pfread",component:PfreadComponent},
  {path:"example",component:ExampleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const myRoutings=[
  HomeComponent,
  BillComponent,
  ViewComponent,
  ContactusComponent,
  LoginComponent,
  PftableComponent,
  HraupdateComponent,
  HradeleteComponent,
  PfdeleteComponent,
  PfreadComponent,
  PfupdateComponent,
  ExampleComponent
]