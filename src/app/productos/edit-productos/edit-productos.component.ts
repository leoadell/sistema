import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { DataService } from 'src/app/data/data.service';
import { Producto } from 'src/app/data/producto';

@Component({
  selector: 'app-baza',
  templateUrl: './edit-productos.component.html',
  styleUrls: ['./edit-productos.component.css']
})
export class EditProductosComponent {

  constructor(public dialogRef: MatDialogRef<EditProductosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Producto, public dataService: DataService) {
      console.log("openng dialog component");

  }


  formControl = new FormControl('', [
    Validators.required
  ]);

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Campo Requerido' : '';
  }

  submit() {
    //EMPTY
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  stopEdit(): void {
    this.dataService.updateProduct(this.data.nombre, this.data)
  }

}
