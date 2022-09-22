import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserRegistrationFormComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule, 
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
