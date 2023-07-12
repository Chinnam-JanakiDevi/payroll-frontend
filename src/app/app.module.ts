import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';
import { BillComponent } from './bill/bill.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { PftableComponent } from './pftable/pftable.component';
import { EmptableComponent } from './emptable/emptable.component';
import { HraupdateComponent } from './hraupdate/hraupdate.component';
import { HradeleteComponent } from './hradelete/hradelete.component';
import { PfdeleteComponent } from './pfdelete/pfdelete.component';
import { PfupdateComponent } from './pfupdate/pfupdate.component';
import { PfreadComponent } from './pfread/pfread.component';
import { ExampleComponent } from './example/example.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewComponent,
    BillComponent,
    ContactusComponent,
    LoginComponent,
    PftableComponent,
    EmptableComponent,
    HraupdateComponent,
    HradeleteComponent,
    PfdeleteComponent,
    PfupdateComponent,
    PfreadComponent,
    ExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
