import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { Login2Component } from './login2/login2.component';
import { NgifDemoComponent } from './ngif-demo/ngif-demo.component';
import { NgswitchDemoComponent } from './ngswitch-demo/ngswitch-demo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegFormComponent } from './reg-form/reg-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { HttpClientModule } from '@angular/common/http';
import { ShowDetailsComponent } from './show-details/show-details.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Login2Component,
    NgifDemoComponent,
    NgswitchDemoComponent,
    RegFormComponent,
    ShowDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
