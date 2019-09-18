import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {Component, Inject} from '@angular/core';
import {DataService} from 'src/app/data/data.service';
import { Producto } from 'src/app/data/producto';


@Component({
  selector: 'delete-products',
  templateUrl: './delete-products.component.html',
  styleUrls: ['./delete-products.component.css']
})
export class DeleteProductsComponent  {

  constructor(public dialogRef: MatDialogRef<DeleteProductsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Producto, public dataService: DataService) { }

onNoClick(): void {
this.dialogRef.close();
}

confirmDelete(): void {
this.dataService.deleteProduct(this.data);
}

}
