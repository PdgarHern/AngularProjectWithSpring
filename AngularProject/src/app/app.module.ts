import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BtnInicioComponent } from './btn-inicio/btn-inicio.component';
import { HeaderLogoComponent } from './header-logo/header-logo.component';
import { BtnContactoComponent } from './btn-contacto/btn-contacto.component';
import { BtnConfigComponent } from './btn-config/btn-config.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { SliderComponent } from './slider/slider.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './views/contact/contact.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './views/login/login.component';
import { PersonalZoneComponent } from './views/personal-zone/personal-zone.component';
import { Menu2Component } from './menu2/menu2.component';
import { BtnBuscarComponent } from './btn-buscar/btn-buscar.component';
import { ProductosComponent } from './productos/productos.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BtnInicioComponent,
    HeaderLogoComponent,
    BtnContactoComponent,
    BtnConfigComponent,
    FooterComponent,
    HomeComponent,
    SliderComponent,
    EmpleadosComponent,
    ContactComponent,
    LoginComponent,
    PersonalZoneComponent,
    Menu2Component,
    BtnBuscarComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
    
  }
}
