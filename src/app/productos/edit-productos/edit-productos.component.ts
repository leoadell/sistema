import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { DataService } from 'src/app/data/data.service';

@Component({
  selector: 'edit-productos',
  templateUrl: './edit-productos.component.html',
  styleUrls: ['./edit-productos.component.css']
})
export class EditProductosComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditProductosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public dataService: DataService) { }

  ngOnInit() {
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
    this.dataService.updateProduct("1", this.data)
  }

}
