import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { GestionCancionesDetailComponent } from './gestion-canciones/gestion-canciones-detail/gestion-canciones-detail.component';
import { GestionCancionesEditComponent } from './gestion-canciones/gestion-canciones-edit/gestion-canciones-edit.component';
import { GestionCancionesComponent } from './gestion-canciones/gestion-canciones.component';
import { KaraokeComponent } from './karaoke/karaoke.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CancionResolverService } from './services/user-resolver.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'gestion-canciones',
    component: GestionCancionesComponent,
   //resolve: [CancionResolverService],
    children: [
      { path: 'new', component: GestionCancionesEditComponent },
      {
        path: ':id',
        component: GestionCancionesDetailComponent,
        //resolve: [CancionResolverService],
      },
      {
        path: ':id/edit',
        component: GestionCancionesEditComponent,
        //resolve: [CancionResolverService],
      },
    ],
  },
  {
    path: 'karaoke',
    component: KaraokeComponent,
    //resolve: [CancionResolverService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule, ReactiveFormsModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
