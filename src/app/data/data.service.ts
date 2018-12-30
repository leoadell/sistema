import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Producto } from './producto';
import { BehaviorSubject } from 'rxjs';

@Injectable(
  { providedIn: 'root' }
)
export class DataService {

  constructor(
    private db: AngularFirestore
  ) { }

  //Crea un nuevo objeto
  public createProduct(producto: any) {
    return this.db.collection('productos').add(producto);
  }

  //Obtiene un objeto
  public getProduct(documentId: string) {
    return this.db.collection('productos').doc(documentId).snapshotChanges();
  }

  //Obtiene todos los objetos
  public getProducts() {
    return this.db.collection('productos').snapshotChanges();
  }

  //Actualiza un objeto
  public updateProduct(key: string, value: any) {
    return this.db.collection('productos').doc(key).set(value);
  }

  //Borra un objeto
  deleteProduct(key: string) {
    return this.db.collection('productos').doc(key).delete();
  }

  dataChange: BehaviorSubject<Producto[]> = new BehaviorSubject<Producto[]>([]);
  //guarda temporalmente los datos del dialogo

  dialogData: any;

  getDialogData() {
    return this.dialogData;
  }
}
