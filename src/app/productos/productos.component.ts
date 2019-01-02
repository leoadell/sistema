import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort, MatDialog } from '@angular/material';
import { Producto } from '../data/producto';
import { DataService } from '../data/data.service';
import { DataSource } from '@angular/cdk/table';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { AddProductosComponent } from './add-productos/add-productos.component';


/**
 * @title Table with sorting
 */
@Component({
  selector: 'productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})

export class ProductosComponent {

  displayedColumns = ['posicion', 'nombre', 'precio', 'detalle', 'actions'];
  dataSource: MatTableDataSource<any>;

  tempDataService: DataService;
  constructor(private afs: AngularFirestore, public dialog: MatDialog, public dataService: DataService) { }


  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  /**
  * Set the sort after the view init since this component will
  * be able to query its view for the initialized sort.
  */
  ngAfterViewInit() {

    this.afs.collection<any>('productos').valueChanges().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
  }

  addNew(producto: Producto) {
    const dialogRef = this.dialog.open(AddProductosComponent, {
      data: { producto: Producto }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        // After dialog is closed we're doing frontend updates
        // For add we're just pushing a new row inside DataService
        this.tempDataService.dataChange.value.push(this.dataService.getDialogData());
        this.refreshTable();
      }
    });
  }
  
  private refreshTable() {
    //refresca la tabla usando el paginador, seteando el mismo numero de pagesize.
    // https://github.com/marinantonio/angular-mat-table-crud/issues/12
    this.paginator._changePageSize(this.paginator.pageSize);
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  // openDialog(data): void {
  //   const dialogRef = this.dialog.open(EditDialogComponent, {
  //     width: '350px',
  //     data: data
  //   });
  // }


}



/* const ELEMENT_DATA: Producto[] = [
  { posicion: 1, nombre: 'Hilo Nego', precio: 35, detalle: 'Hilo negro de 10mts' },
  { posicion: 2, nombre: 'Elastico ancho', precio: 8, detalle: 'Elastico para bebe' },
  { posicion: 3, nombre: 'Lithium', precio: 6.941, detalle: 'Li' },
  { posicion: 4, nombre: 'Beryllium', precio: 9.0122, detalle: 'Be' },
  { posicion: 5, nombre: 'Boron', precio: 10.811, detalle: 'B' },
  { posicion: 6, nombre: 'Carbon', precio: 12.0107, detalle: 'C' },
  { posicion: 7, nombre: 'Nitrogen', precio: 14.0067, detalle: 'N' },
  { posicion: 8, nombre: 'Oxygen', precio: 15.9994, detalle: 'O' },
  { posicion: 9, nombre: 'Fluorine', precio: 18.9984, detalle: 'F' },
  { posicion: 10, nombre: 'Neon', precio: 20.1797, detalle: 'Ne' },
  { posicion: 11, nombre: 'Sodium', precio: 22.9897, detalle: 'Na' },
  { posicion: 12, nombre: 'Magnesium', precio: 24.305, detalle: 'Mg' },
  { posicion: 13, nombre: 'Aluminum', precio: 26.9815, detalle: 'Al' },
  { posicion: 14, nombre: 'Silicon', precio: 28.0855, detalle: 'Si' },
  { posicion: 15, nombre: 'Phosphorus', precio: 30.9738, detalle: 'P' },
  { posicion: 16, nombre: 'Sulfur', precio: 32.065, detalle: 'S' },
  { posicion: 17, nombre: 'Chlorine', precio: 35.453, detalle: 'Cl' },
  { posicion: 18, nombre: 'Argon', precio: 39.948, detalle: 'Ar' },
  { posicion: 19, nombre: 'Potassium', precio: 39.0983, detalle: 'K' },
  { posicion: 20, nombre: 'Calcium', precio: 40.078, detalle: 'Ca' },
];
 */
export class MyDataSource extends DataSource<any> {
  constructor(private afs: AngularFirestore) {
    super();
  }
  connect(): Observable<any[]> {
    return this.afs.collection('products').valueChanges();
  }

  disconnect() { }
}

export class FilterDataSource extends DataSource<any> {
  constructor(private afs: AngularFirestore) {
    super();
  }
  connect(): Observable<any[]> {

    return this.afs.collection<Account[]>('accounts').snapshotChanges().pipe(map((accounts) => {
      return accounts.map(a => {
        const data = a[0].payload.doc.data() as Account;
        const id = a.payload.doc.id;
        return { id, ...data }
      });
    }));

    //return this.afs.collection('products').valueChanges();
  }

  disconnect() { }
}
