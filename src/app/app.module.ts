import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// components
import { AppComponent } from './app.component';
import { CepComponent } from './cep/cep.component';

// services
import { CepService } from './cep.service';
import { ValidFormComponent } from './valid-form/valid-form.component';


@NgModule({
  declarations: [
    AppComponent,
    CepComponent,
    ValidFormComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule
  ],

  providers: [ CepService ],
  bootstrap: [AppComponent]

})

export class AppModule { }
