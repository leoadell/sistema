import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Producto } from 'src/app/data/producto';
import { DataService } from 'src/app/data/data.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'add-productos',
  templateUrl: './add-productos.component.html',
  styleUrls: ['./add-productos.component.css']
})
export class AddProductosComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddProductosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Producto, public dataService: DataService) { }

  ngOnInit() {
  }

  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
  ]);

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
      this.formControl.hasError('email') ? 'Not a valid email' :
        '';
  }

  submit() {
    // emppty stuff
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public confirmAdd(): void {
    const prod = {
      codigo: this.data.codigo,
      nombre: this.data.nombre,
      precio: this.data.precio,
      detalle: this.data.detalle
    }
    this.dataService.createProduct(prod);
  }
}
