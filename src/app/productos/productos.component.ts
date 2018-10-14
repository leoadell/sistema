import {Component, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';

/**
 * @title Table with sorting
 */
@Component({
  selector: 'productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  displayedColumns = ['position', 'name', 'precio', 'detalle'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  /**
   * Set the sort after the view init since this component will
   * be able to query its view for the initialized sort.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}

export interface Producto {
  name: string;
  position: number;
  precio: number;
  detalle: string;
}

const ELEMENT_DATA: Producto[] = [
  {position: 1, name: 'Hilo Nego', precio: 35, detalle: 'Hilo negro de 10mts'},
  {position: 2, name: 'Elastico ancho', precio: 8, detalle: 'Elastico para bebe'},
  {position: 3, name: 'Lithium', precio: 6.941, detalle: 'Li'},
  {position: 4, name: 'Beryllium', precio: 9.0122, detalle: 'Be'},
  {position: 5, name: 'Boron', precio: 10.811, detalle: 'B'},
  {position: 6, name: 'Carbon', precio: 12.0107, detalle: 'C'},
  {position: 7, name: 'Nitrogen', precio: 14.0067, detalle: 'N'},
  {position: 8, name: 'Oxygen', precio: 15.9994, detalle: 'O'},
  {position: 9, name: 'Fluorine', precio: 18.9984, detalle: 'F'},
  {position: 10, name: 'Neon', precio: 20.1797, detalle: 'Ne'},
  {position: 11, name: 'Sodium', precio: 22.9897, detalle: 'Na'},
  {position: 12, name: 'Magnesium', precio: 24.305, detalle: 'Mg'},
  {position: 13, name: 'Aluminum', precio: 26.9815, detalle: 'Al'},
  {position: 14, name: 'Silicon', precio: 28.0855, detalle: 'Si'},
  {position: 15, name: 'Phosphorus', precio: 30.9738, detalle: 'P'},
  {position: 16, name: 'Sulfur', precio: 32.065, detalle: 'S'},
  {position: 17, name: 'Chlorine', precio: 35.453, detalle: 'Cl'},
  {position: 18, name: 'Argon', precio: 39.948, detalle: 'Ar'},
  {position: 19, name: 'Potassium', precio: 39.0983, detalle: 'K'},
  {position: 20, name: 'Calcium', precio: 40.078, detalle: 'Ca'},
];


