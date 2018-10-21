import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { DataService } from '../data/data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

/**
 * @title Table with sorting
 */
@Component({
  selector: 'productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  public productos: any;

  displayedColumns = ['position', 'name', 'precio', 'detalle'];
  dataSource = new MatTableDataSource(this.productos);//ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  public key = null;
  public products = [];
  public currentStatus = 1;
  public newProductForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    url: new FormControl('', Validators.required),
    id: new FormControl('')
  });

  constructor(
    private ds: DataService
  ) {
    this.newProductForm.setValue({
      key: '',
      name: '',
      position: 0,
      precio: 0,
      detalle: ''
    });
  }
  ngOnInit() {
    this.getProductsList();
  }

  /**
   * Set the sort after the view init since this component will
   * be able to query its view for the initialized sort.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getProductsList() {
    this.ds.getProducts().subscribe((productSnapshot) => {
      this.productos = [];
      productSnapshot.forEach((productData: any) => {
        this.productos.push({
          id: productData.payload.doc.id,
          data: productData.payload.doc.data()
        });
      });
    });
    // this.ds.getProducts().pipe(
    //   map(changes =>
    //         changes.map(p => ({ key: p.payload.key, ...p.payload.val() }))
    //       )
    //     ).subscribe(productos => {
    //       this.productos = productos;
    //     });

    // this.ds.getProducts().snapshotChanges().pipe(
    //   map(changes =>
    //     changes.map(p => ({ key: p.payload.key, ...p.payload.val() }))
    //   )
    // ).subscribe(productos => {
    //   this.productos = productos;
    // });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  public newProduct(form, key = this.key) {
    console.log('Status: ${this.currentStatus}');
    let data = {
      nombre: form.nombre,
      precio: form.precio,
      detalle: form.detalle
    }
    if (this.currentStatus == 1) {

      this.ds.createProduct(data).then(() => {
        console.log('Documento creado exitósamente!');
        this.cleraForm();
      }, (error) => {
        console.error(error);
      });
    } else {
      this.ds.updateProduct(key, data).then(() => {
        this.currentStatus = 1;
        this.cleraForm();
        console.log('Documento editado exitosamente');
      }, (error) => {
        console.log(error);
      });
    }
  }

  private cleraForm() {
    this.newProductForm.setValue({
      nombre: '',
      precio: 0.00,
      detalle: ''
    });
  }

  public editProduct(key) {
    let editSubscribe = this.ds.getProduct(key).subscribe((product) => {
      this.currentStatus = 2;
      this.key = key;
      this.newProductForm.setValue({
        id: key,
        nombre: product.payload.data().nombre,
        precio: product.payload.data().precio,
        detalle: product.payload.data().detalle
      });
      editSubscribe.unsubscribe();
    });
  }

  public deleteProduct(documentId) {
    this.ds.deleteProduct(documentId).then(() => {
      console.log('Documento eliminado!');
    }, (error) => {
      console.error(error);
    });
  }
}
