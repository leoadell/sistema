import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LayoutModule } from '@angular/cdk/layout';

import {
  MatToolbarModule,
  MatButtonModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatTableModule,
  MatCardModule,
  MatSortModule,
  MatPaginatorModule,
  }
  from '@angular/material';

  import {MatFormFieldModule, MatFormFieldControl} from '@angular/material/form-field';

import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';
import { ProductosComponent } from './productos/productos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';

const appRoutes: Routes = [
  { path: 'first-page', component: FirstPageComponent },
  { path: 'second-page', component: SecondPageComponent },
  { path: 'third-page', component: ThirdPageComponent },
  { path: 'Productos', component: ProductosComponent },
  { path: 'Clientes', component: ClientesComponent },
  { path: 'Proveedores', component: ProveedoresComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FirstPageComponent,
    SecondPageComponent,
    ThirdPageComponent,
    ProductosComponent,
    ClientesComponent,
    ProveedoresComponent    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatFormFieldModule, 
    MatCheckboxModule,   
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
