import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GestionCancionesComponent } from './gestion-canciones/gestion-canciones.component';
import { LoginComponent } from './login/login.component';
import { KaraokeComponent } from './karaoke/karaoke.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './services/login.service';
import { GestionCancionesEditComponent } from './gestion-canciones/gestion-canciones-edit/gestion-canciones-edit.component';
import { GestionCancionesListComponent } from './gestion-canciones/gestion-canciones-list/gestion-canciones-list.component';
import { GestionCancionesDetailComponent } from './gestion-canciones/gestion-canciones-detail/gestion-canciones-detail.component';
import { CancionService } from './services/cancion.service';
import { GestionCancionesItemComponent } from './gestion-canciones/gestion-canciones-list/gestion-canciones-item/gestion-canciones-item.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import {HttpClientModule} from '@angular/common/http';
import { DataStorageService } from './shared/data-storage.service';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    GestionCancionesComponent,
    LoginComponent,
    KaraokeComponent,
    HeaderComponent,
    GestionCancionesEditComponent,
    GestionCancionesListComponent,
    GestionCancionesDetailComponent,
    GestionCancionesItemComponent,
    DropdownDirective,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    HttpClientModule
    
  ],

  providers: [LoginService, CancionService, DataStorageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
