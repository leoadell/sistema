import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Producto } from 'src/app/data/producto';
import { DataService } from 'src/app/data/data.service';
import { FormControl, Validators } from '@angular/forms';
//import{csvjson} from 'src\assets\csvjson.json'

@Component({
  selector: 'add-productos',
  templateUrl: './add-productos.component.html',
  styleUrls: ['./add-productos.component.css']
})
export class AddProductosComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddProductosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Producto, public dataService: DataService) { }

  ngOnInit() { }

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

 /*  public confirmFill(): void {
    var csvjson = [
      {
        "CODIGO": 87566,
        "nombre": "BOMBACHA COCOT 5445 NENA ESTAMPADA",
        "DESCRIPCION": "BOMBACHA COCOT 5445 NENA ESTAMPADA",
        "PRECIO": 70.51
      },
      {
        "CODIGO": 87570,
        "nombre": "BOMBACHA COCOT 5448",
        "DESCRIPCION": "BOMBACHA COCOT 5448",
        "PRECIO": 146.75
      },
      {
        "CODIGO": 87577,
        "nombre": "BOMBACHA COCOT 5601 ALG. Y LYCRA",
        "DESCRIPCION": "BOMBACHA COCOT 5601 ALG. Y LYCRA",
        "PRECIO": 114.19
      },
      {
        "CODIGO": 87578,
        "nombre": "BOMBACHA COCOT 5602 UNIVERSAL",
        "DESCRIPCION": "BOMBACHA COCOT 5602 UNIVERSAL",
        "PRECIO": 120.65
      },
      {
        "CODIGO": 87177,
        "nombre": "BOMBACHA COCOT 5603 ESPECIAL",
        "DESCRIPCION": "BOMBACHA COCOT 5603 ESPECIAL",
        "PRECIO": 134.76
      },
      {
        "CODIGO": 51695,
        "nombre": "BOMBACHA COCOT 6141 TIRO CORTO TOP CONTROL",
        "DESCRIPCION": "BOMBACHA COCOT 6141 TIRO CORTO TOP CONTROL",
        "PRECIO": 124.56
      },
      {
        "CODIGO": 51704,
        "nombre": "BOMBACHA COCOT 6142 UNIVERSAL TOP CONTROL",
        "DESCRIPCION": "BOMBACHA COCOT 6142 UNIVERSAL TOP CONTROL",
        "PRECIO": 178.95
      },
      {
        "CODIGO": 51766,
        "nombre": "BOXER DUFOUR 11929 ALG./LYCRA",
        "DESCRIPCION": "BOXER DUFOUR 11929 ALG./LYCRA",
        "PRECIO": 182.5
      },
      {
        "CODIGO": 50921,
        "nombre": "BOXER DUFOUR 11976 KIDS",
        "DESCRIPCION": "BOXER DUFOUR 11976 KIDS",
        "PRECIO": 155.13
      },
      {
        "CODIGO": 86706,
        "nombre": "BOXER DUFOUR 11979 MORLEY",
        "DESCRIPCION": "BOXER DUFOUR 11979 MORLEY",
        "PRECIO": 40.49
      },
      {
        "CODIGO": 87415,
        "nombre": "BOXER DUFOUR 11980 JERSEY RAYADO",
        "DESCRIPCION": "BOXER DUFOUR 11980 JERSEY RAYADO",
        "PRECIO": 77.85
      },
      {
        "CODIGO": 86439,
        "nombre": "BOXER DUFOUR 11989 NI�O",
        "DESCRIPCION": "BOXER DUFOUR 11989 NI�O",
        "PRECIO": 137.55
      },
      {
        "CODIGO": 11042,
        "nombre": "BOXER DUFOUR 12024",
        "DESCRIPCION": "BOXER DUFOUR 12024",
        "PRECIO": 219.51
      },
      {
        "CODIGO": 50920,
        "nombre": "BOXER DUFOUR 12029",
        "DESCRIPCION": "BOXER DUFOUR 12029",
        "PRECIO": 201.54
      },
      {
        "CODIGO": 86594,
        "nombre": "BOXER DUFOUR 12049 COMPETITION",
        "DESCRIPCION": "BOXER DUFOUR 12049 COMPETITION",
        "PRECIO": 51.51
      },
      {
        "CODIGO": 87112,
        "nombre": "BOXER DUFOUR 12050 LISO SIN COSTURA",
        "DESCRIPCION": "BOXER DUFOUR 12050 LISO SIN COSTURA",
        "PRECIO": 155.33
      },
      {
        "CODIGO": 86897,
        "nombre": "BOXER DUFOUR 12052 ELASTICO ANCHO",
        "DESCRIPCION": "BOXER DUFOUR 12052 ELASTICO ANCHO",
        "PRECIO": 194.36
      },
      {
        "CODIGO": 11041,
        "nombre": "BOXER DUFOUR 12058 ELASTICO COLOR",
        "DESCRIPCION": "BOXER DUFOUR 12058 ELASTICO COLOR",
        "PRECIO": 224.42
      },
      {
        "CODIGO": 86645,
        "nombre": "BUCANERA COCOT 400 ULTRAOPACA",
        "DESCRIPCION": "BUCANERA COCOT 400 ULTRAOPACA",
        "PRECIO": 167.56
      },
      {
        "CODIGO": 50400,
        "nombre": "CAMISETA COCOT 5150 M/LARGA MULTIFILAMENTO",
        "DESCRIPCION": "CAMISETA COCOT 5150 M/LARGA MULTIFILAMENTO",
        "PRECIO": 233.71
      },
      {
        "CODIGO": 86987,
        "nombre": "CAMISETA COCOT 5151 ULTRAOPACA",
        "DESCRIPCION": "CAMISETA COCOT 5151 ULTRAOPACA",
        "PRECIO": 263.55
      },
      {
        "CODIGO": 87271,
        "nombre": "CAMISETA COCOT 5154 MULTIFILAMENTO C/BRETEL",
        "DESCRIPCION": "CAMISETA COCOT 5154 MULTIFILAMENTO C/BRETEL",
        "PRECIO": 196.59
      },
      {
        "CODIGO": 87482,
        "nombre": "CAMISETA COCOT 5158 MULTIFILAMENTO C/CUELLO",
        "DESCRIPCION": "CAMISETA COCOT 5158 MULTIFILAMENTO C/CUELLO",
        "PRECIO": 137.73
      },
      {
        "CODIGO": 86719,
        "nombre": "CAMISETA COCOT 5165 NENA M/LARGA",
        "DESCRIPCION": "CAMISETA COCOT 5165 NENA M/LARGA",
        "PRECIO": 253.6
      },
      {
        "CODIGO": 11063,
        "nombre": "CAMISETA COCOT 5167 BRETEL",
        "DESCRIPCION": "CAMISETA COCOT 5167 BRETEL",
        "PRECIO": 67.83
      },
      {
        "CODIGO": 87446,
        "nombre": "CAMISON COCOT S/MANGAS 7078/7037",
        "DESCRIPCION": "CAMISON COCOT S/MANGAS 7078/7037",
        "PRECIO": 105.26
      },
      {
        "CODIGO": 86851,
        "nombre": "COLA LESS COCOT 5604",
        "DESCRIPCION": "COLA LESS COCOT 5604",
        "PRECIO": 77.57
      },
      {
        "CODIGO": 51712,
        "nombre": "COLA LESS COCOT 6264",
        "DESCRIPCION": "COLA LESS COCOT 6264",
        "PRECIO": 14.94
      },
      {
        "CODIGO": 51701,
        "nombre": "COLA LESS COCOT 6274 ESTAMPADA",
        "DESCRIPCION": "COLA LESS COCOT 6274 ESTAMPADA",
        "PRECIO": 92.44
      },
      {
        "CODIGO": 86732,
        "nombre": "COLA LESS COCOT 6284",
        "DESCRIPCION": "COLA LESS COCOT 6284",
        "PRECIO": 17.48
      },
      {
        "CODIGO": 86847,
        "nombre": "COLA LESS COCOT 6304",
        "DESCRIPCION": "COLA LESS COCOT 6304",
        "PRECIO": 21.32
      },
      {
        "CODIGO": 51802,
        "nombre": "COLA LESS COCOT 6314 ROMANTICA",
        "DESCRIPCION": "COLA LESS COCOT 6314 ROMANTICA",
        "PRECIO": 23.72
      },
      {
        "CODIGO": 87572,
        "nombre": "COLA LESS COCOT 6354- 5502",
        "DESCRIPCION": "COLA LESS COCOT 6354- 5502",
        "PRECIO": 26.11
      },
      {
        "CODIGO": 86459,
        "nombre": "COLA LESS COCOT 6374 PAZ",
        "DESCRIPCION": "COLA LESS COCOT 6374 PAZ",
        "PRECIO": 17.97
      },
      {
        "CODIGO": 86512,
        "nombre": "COLA LESS COCOT 6384 FOREVER",
        "DESCRIPCION": "COLA LESS COCOT 6384 FOREVER",
        "PRECIO": 86.68
      },
      {
        "CODIGO": 86772,
        "nombre": "COLA LESS COCOT 6424 FTE.ESTAMP.",
        "DESCRIPCION": "COLA LESS COCOT 6424 FTE.ESTAMP.",
        "PRECIO": 30.9
      },
      {
        "CODIGO": 86455,
        "nombre": "COLA LESS COCOT 6434-6104",
        "DESCRIPCION": "COLA LESS COCOT 6434-6104",
        "PRECIO": 19.17
      },
      {
        "CODIGO": 87567,
        "nombre": "COLA LESS COCOT 6514 ILOVE LOVE",
        "DESCRIPCION": "COLA LESS COCOT 6514 ILOVE LOVE",
        "PRECIO": 27.55
      },
      {
        "CODIGO": 86668,
        "nombre": "COLA LESS COCOT 6554-5574",
        "DESCRIPCION": "COLA LESS COCOT 6554-5574",
        "PRECIO": 26.11
      },
      {
        "CODIGO": 86849,
        "nombre": "COLA LESS COCOT 6564 LUNARES",
        "DESCRIPCION": "COLA LESS COCOT 6564 LUNARES",
        "PRECIO": 22.16
      },
      {
        "CODIGO": 10977,
        "nombre": "COLA LESS COCOT 6614 FLORCITAS",
        "DESCRIPCION": "COLA LESS COCOT 6614 FLORCITAS",
        "PRECIO": 29.34
      },
      {
        "CODIGO": 86833,
        "nombre": "COLA LESS COCOT 6634",
        "DESCRIPCION": "COLA LESS COCOT 6634",
        "PRECIO": 36.41
      },
      {
        "CODIGO": 86670,
        "nombre": "COLA LESS COCOT 6664 DOTS",
        "DESCRIPCION": "COLA LESS COCOT 6664 DOTS",
        "PRECIO": 39.52
      },
      {
        "CODIGO": 86510,
        "nombre": "COLA LESS COCOT 6674 CALADA",
        "DESCRIPCION": "COLA LESS COCOT 6674 CALADA",
        "PRECIO": 35.7
      },
      {
        "CODIGO": 86712,
        "nombre": "COLA LESS COCOT 6694 RAYADA",
        "DESCRIPCION": "COLA LESS COCOT 6694 RAYADA",
        "PRECIO": 30.54
      },
      {
        "CODIGO": 87500,
        "nombre": "COLA LESS COCOT 6724",
        "DESCRIPCION": "COLA LESS COCOT 6724",
        "PRECIO": 76.36
      },
      {
        "CODIGO": 86661,
        "nombre": "COLA LESS COCOT 6783 CORAZON",
        "DESCRIPCION": "COLA LESS COCOT 6783 CORAZON",
        "PRECIO": 103.73
      },
      {
        "CODIGO": 50402,
        "nombre": "COLA LESS COCOT 6789 SIN COSTURA",
        "DESCRIPCION": "COLA LESS COCOT 6789 SIN COSTURA",
        "PRECIO": 122.45
      },
      {
        "CODIGO": 51776,
        "nombre": "COLA LESS COCOT 6793 S/COSTURA",
        "DESCRIPCION": "COLA LESS COCOT 6793 S/COSTURA",
        "PRECIO": 101.06
      },
      {
        "CODIGO": 86809,
        "nombre": "COLA LESS COCOT 6794",
        "DESCRIPCION": "COLA LESS COCOT 6794",
        "PRECIO": 58.58
      },
      {
        "CODIGO": 86436,
        "nombre": "COLA LESS COCOT 6854",
        "DESCRIPCION": "COLA LESS COCOT 6854",
        "PRECIO": 47.77
      },
      {
        "CODIGO": 87293,
        "nombre": "COLA LESS COCOT 6864 2DA PIEL C/PUNTILLA",
        "DESCRIPCION": "COLA LESS COCOT 6864 2DA PIEL C/PUNTILLA",
        "PRECIO": 86.43
      },
      {
        "CODIGO": 87568,
        "nombre": "COLA LESS COCOT 6884",
        "DESCRIPCION": "COLA LESS COCOT 6884",
        "PRECIO": 124.82
      },
      {
        "CODIGO": 51739,
        "nombre": "COLA LESS COCOT 6914 TULL FANTASIA",
        "DESCRIPCION": "COLA LESS COCOT 6914 TULL FANTASIA",
        "PRECIO": 102.14
      },
      {
        "CODIGO": 86811,
        "nombre": "COLA LESS COCOT 6954",
        "DESCRIPCION": "COLA LESS COCOT 6954",
        "PRECIO": 115.58
      },
      {
        "CODIGO": 86731,
        "nombre": "COLALESS COCOT 6944 BASICA",
        "DESCRIPCION": "COLALESS COCOT 6944 BASICA",
        "PRECIO": 111.26
      },
      {
        "CODIGO": 86558,
        "nombre": "CONJUNTO COCOT 1459",
        "DESCRIPCION": "CONJUNTO COCOT 1459",
        "PRECIO": 35.04
      },
      {
        "CODIGO": 87823,
        "nombre": "CONJUNTO COCOT 1495 CORPI�O ARMADO",
        "DESCRIPCION": "CONJUNTO COCOT 1495 CORPI�O ARMADO",
        "PRECIO": 49.31
      },
      {
        "CODIGO": 50320,
        "nombre": "CONJUNTO COCOT 5659 ARM.TUL Y PUNT",
        "DESCRIPCION": "CONJUNTO COCOT 5659 ARM.TUL Y PUNT",
        "PRECIO": 293.63
      },
      {
        "CODIGO": 51735,
        "nombre": "CONJUNTO COCOT 5663 ARM.TUL",
        "DESCRIPCION": "CONJUNTO COCOT 5663 ARM.TUL",
        "PRECIO": 337.66
      },
      {
        "CODIGO": 86574,
        "nombre": "CONJUNTO COCOT 5733",
        "DESCRIPCION": "CONJUNTO COCOT 5733",
        "PRECIO": 128.16
      },
      {
        "CODIGO": 86914,
        "nombre": "CONJUNTO COCOT 5773 CORAZON PUSH UP/TANGA",
        "DESCRIPCION": "CONJUNTO COCOT 5773 CORAZON PUSH UP/TANGA",
        "PRECIO": 183.45
      },
      {
        "CODIGO": 87181,
        "nombre": "CONJUNTO COCOT 5775",
        "DESCRIPCION": "CONJUNTO COCOT 5775",
        "PRECIO": 143.49
      },
      {
        "CODIGO": 86627,
        "nombre": "CONJUNTO COCOT 5807 PUSH UP",
        "DESCRIPCION": "CONJUNTO COCOT 5807 PUSH UP",
        "PRECIO": 50.25
      },
      {
        "CODIGO": 86589,
        "nombre": "CONJUNTO COCOT 5811",
        "DESCRIPCION": "CONJUNTO COCOT 5811",
        "PRECIO": 45.51
      },
      {
        "CODIGO": 86652,
        "nombre": "CONJUNTO COCOT 5816",
        "DESCRIPCION": "CONJUNTO COCOT 5816",
        "PRECIO": 38.57
      },
      {
        "CODIGO": 86651,
        "nombre": "CONJUNTO COCOT 5817",
        "DESCRIPCION": "CONJUNTO COCOT 5817",
        "PRECIO": 43.87
      },
      {
        "CODIGO": 87128,
        "nombre": "CONJUNTO COCOT 5820 C/CAMISETA",
        "DESCRIPCION": "CONJUNTO COCOT 5820 C/CAMISETA",
        "PRECIO": 25.81
      },
      {
        "CODIGO": 86650,
        "nombre": "CONJUNTO COCOT 5821 TOP Y SHORT",
        "DESCRIPCION": "CONJUNTO COCOT 5821 TOP Y SHORT",
        "PRECIO": 65.11
      },
      {
        "CODIGO": 50187,
        "nombre": "CONJUNTO COCOT 5828 CORPI�O-COLALESS",
        "DESCRIPCION": "CONJUNTO COCOT 5828 CORPI�O-COLALESS",
        "PRECIO": 178.21
      },
      {
        "CODIGO": 87569,
        "nombre": "CONJUNTO COCOT 5832 TRIANGULO CRUZADO",
        "DESCRIPCION": "CONJUNTO COCOT 5832 TRIANGULO CRUZADO",
        "PRECIO": 66.55
      },
      {
        "CODIGO": 86557,
        "nombre": "CONJUNTO COCOT 5846 C/COLALESS",
        "DESCRIPCION": "CONJUNTO COCOT 5846 C/COLALESS",
        "PRECIO": 137.2
      },
      {
        "CODIGO": 50908,
        "nombre": "CONJUNTO COCOT 5851 MARINERO",
        "DESCRIPCION": "CONJUNTO COCOT 5851 MARINERO",
        "PRECIO": 51.62
      },
      {
        "CODIGO": 87185,
        "nombre": "CONJUNTO COCOT 5869-5840",
        "DESCRIPCION": "CONJUNTO COCOT 5869-5840",
        "PRECIO": 56.3
      },
      {
        "CODIGO": 86774,
        "nombre": "CONJUNTO COCOT 5882 SPORT TOP C/BRETEL",
        "DESCRIPCION": "CONJUNTO COCOT 5882 SPORT TOP C/BRETEL",
        "PRECIO": 95.58
      },
      {
        "CODIGO": 86654,
        "nombre": "CONJUNTO COCOT 5891 PUSH UP",
        "DESCRIPCION": "CONJUNTO COCOT 5891 PUSH UP",
        "PRECIO": 117.38
      },
      {
        "CODIGO": 86730,
        "nombre": "CONJUNTO COCOT 5899 MICROMASAJE C/COLA LESS",
        "DESCRIPCION": "CONJUNTO COCOT 5899 MICROMASAJE C/COLA LESS",
        "PRECIO": 286.92
      },
      {
        "CODIGO": 50344,
        "nombre": "CONJUNTO COCOT 5908 CAMISETA Y COLA LESS",
        "DESCRIPCION": "CONJUNTO COCOT 5908 CAMISETA Y COLA LESS",
        "PRECIO": 90.19
      },
      {
        "CODIGO": 50911,
        "nombre": "CONJUNTO COCOT 5911 TRIKINI",
        "DESCRIPCION": "CONJUNTO COCOT 5911 TRIKINI",
        "PRECIO": 95.08
      },
      {
        "CODIGO": 50406,
        "nombre": "CONJUNTO COCOT 5916 C/PORTALIGA",
        "DESCRIPCION": "CONJUNTO COCOT 5916 C/PORTALIGA",
        "PRECIO": 131.76
      },
      {
        "CODIGO": 11496,
        "nombre": "CONJUNTO COCOT 5918 ARMADO C/PUNTILLA",
        "DESCRIPCION": "CONJUNTO COCOT 5918 ARMADO C/PUNTILLA",
        "PRECIO": 93.73
      },
      {
        "CODIGO": 86417,
        "nombre": "CONJUNTO COCOT 5920 PUSH UP",
        "DESCRIPCION": "CONJUNTO COCOT 5920 PUSH UP",
        "PRECIO": 83.94
      },
      {
        "CODIGO": 86656,
        "nombre": "CONJUNTO COCOT 5936 ENSEMBLE",
        "DESCRIPCION": "CONJUNTO COCOT 5936 ENSEMBLE",
        "PRECIO": 358.87
      },
      {
        "CODIGO": 86630,
        "nombre": "CONJUNTO COCOT 5969 PUNTILLA Y CRISTAL",
        "DESCRIPCION": "CONJUNTO COCOT 5969 PUNTILLA Y CRISTAL",
        "PRECIO": 43.33
      },
      {
        "CODIGO": 86767,
        "nombre": "CONJUNTO COCOT 5980 PUNTILLA",
        "DESCRIPCION": "CONJUNTO COCOT 5980 PUNTILLA",
        "PRECIO": 51.62
      },
      {
        "CODIGO": 86629,
        "nombre": "CONJUNTO COCOT 5982 CAMISETA-PORTALIGAS",
        "DESCRIPCION": "CONJUNTO COCOT 5982 CAMISETA-PORTALIGAS",
        "PRECIO": 105.17
      },
      {
        "CODIGO": 86586,
        "nombre": "CONJUNTO COCOT 5982 PORTA LIGAS",
        "DESCRIPCION": "CONJUNTO COCOT 5982 PORTA LIGAS",
        "PRECIO": 87.6
      },
      {
        "CODIGO": 86649,
        "nombre": "CONJUNTO COCOT 5983 PUSH UP PUNTILLA",
        "DESCRIPCION": "CONJUNTO COCOT 5983 PUSH UP PUNTILLA",
        "PRECIO": 91
      },
      {
        "CODIGO": 50405,
        "nombre": "CONJUNTO COCOT CAMISETA Y CULOTE 5929",
        "DESCRIPCION": "CONJUNTO COCOT CAMISETA Y CULOTE 5929",
        "PRECIO": 66.01
      },
      {
        "CODIGO": 86621,
        "nombre": "CORPI�O COCOT 1482 PUSH UP ENCAJE",
        "DESCRIPCION": "CORPI�O COCOT 1482 PUSH UP ENCAJE",
        "PRECIO": 36.68
      },
      {
        "CODIGO": 10956,
        "nombre": "CORPI�O COCOT 5782 SEGUNDA PIEL",
        "DESCRIPCION": "CORPI�O COCOT 5782 SEGUNDA PIEL",
        "PRECIO": 579.92
      },
      {
        "CODIGO": 86561,
        "nombre": "CORPI�O COCOT 5799 PUSH UP ARMADO",
        "DESCRIPCION": "CORPI�O COCOT 5799 PUSH UP ARMADO",
        "PRECIO": 438.67
      },
      {
        "CODIGO": 86628,
        "nombre": "CORPI�O COCOT 5801 PUSH UP",
        "DESCRIPCION": "CORPI�O COCOT 5801 PUSH UP",
        "PRECIO": 52.97
      },
      {
        "CODIGO": 86626,
        "nombre": "CORPI�O COCOT 5809 TASA",
        "DESCRIPCION": "CORPI�O COCOT 5809 TASA",
        "PRECIO": 111.39
      },
      {
        "CODIGO": 86588,
        "nombre": "CORPI�O COCOT 5813",
        "DESCRIPCION": "CORPI�O COCOT 5813",
        "PRECIO": 85.04
      },
      {
        "CODIGO": 86552,
        "nombre": "CORPI�O COCOT 5818",
        "DESCRIPCION": "CORPI�O COCOT 5818",
        "PRECIO": 35.04
      },
      {
        "CODIGO": 86655,
        "nombre": "CORPI�O COCOT 5818 DEPORTIVO",
        "DESCRIPCION": "CORPI�O COCOT 5818 DEPORTIVO",
        "PRECIO": 31.79
      },
      {
        "CODIGO": 86551,
        "nombre": "CORPI�O COCOT 5819",
        "DESCRIPCION": "CORPI�O COCOT 5819",
        "PRECIO": 40.08
      },
      {
        "CODIGO": 50389,
        "nombre": "CORPI�O COCOT 5829 PUSH UP C/B.SILICONA",
        "DESCRIPCION": "CORPI�O COCOT 5829 PUSH UP C/B.SILICONA",
        "PRECIO": 77.85
      },
      {
        "CODIGO": 50186,
        "nombre": "CORPI�O COCOT 5835",
        "DESCRIPCION": "CORPI�O COCOT 5835",
        "PRECIO": 78.11
      },
      {
        "CODIGO": 86770,
        "nombre": "CORPI�O COCOT 5852 DEPORTIVO",
        "DESCRIPCION": "CORPI�O COCOT 5852 DEPORTIVO",
        "PRECIO": 119.28
      },
      {
        "CODIGO": 51777,
        "nombre": "CORPI�O COCOT 5854 PUSH C/ALMOHADILLA",
        "DESCRIPCION": "CORPI�O COCOT 5854 PUSH C/ALMOHADILLA",
        "PRECIO": 76.06
      },
      {
        "CODIGO": 51769,
        "nombre": "CORPI�O COCOT 5934 ARMADO",
        "DESCRIPCION": "CORPI�O COCOT 5934 ARMADO",
        "PRECIO": 71.98
      },
      {
        "CODIGO": 11026,
        "nombre": "CORPI�O COCOT 5941",
        "DESCRIPCION": "CORPI�O COCOT 5941",
        "PRECIO": 42.06
      },
      {
        "CODIGO": 87182,
        "nombre": "CORPI�O COCOT 5954 ARMADO DESM.",
        "DESCRIPCION": "CORPI�O COCOT 5954 ARMADO DESM.",
        "PRECIO": 104.21
      },
      {
        "CODIGO": 86580,
        "nombre": "CORPI�O COCOT 5956",
        "DESCRIPCION": "CORPI�O COCOT 5956",
        "PRECIO": 104.21
      },
      {
        "CODIGO": 86461,
        "nombre": "CORPI�O COCOT 5961 ARO PREMOLDEADO",
        "DESCRIPCION": "CORPI�O COCOT 5961 ARO PREMOLDEADO",
        "PRECIO": 33.41
      },
      {
        "CODIGO": 86587,
        "nombre": "CORPI�O COCOT 5967 TASA ARMADA",
        "DESCRIPCION": "CORPI�O COCOT 5967 TASA ARMADA",
        "PRECIO": 493.51
      },
      {
        "CODIGO": 86653,
        "nombre": "CORPI�O COCOT 5968 DE AMAMANTAR",
        "DESCRIPCION": "CORPI�O COCOT 5968 DE AMAMANTAR",
        "PRECIO": 239.98
      },
      {
        "CODIGO": 86768,
        "nombre": "CORPI�O COCOT 5975 C/ARO",
        "DESCRIPCION": "CORPI�O COCOT 5975 C/ARO",
        "PRECIO": 205.54
      },
      {
        "CODIGO": 11497,
        "nombre": "CORPI�O COCOT 5994 MICROFIBRA",
        "DESCRIPCION": "CORPI�O COCOT 5994 MICROFIBRA",
        "PRECIO": 211.65
      },
      {
        "CODIGO": 86573,
        "nombre": "CORSET COCOT PUSH UP 5974",
        "DESCRIPCION": "CORSET COCOT PUSH UP 5974",
        "PRECIO": 57.6
      },
      {
        "CODIGO": 10954,
        "nombre": "CULOTTE COCOT 12124",
        "DESCRIPCION": "CULOTTE COCOT 12124",
        "PRECIO": 78.81
      },
      {
        "CODIGO": 87450,
        "nombre": "CULOTTE COCOT 5436 NI�A ESTAMPA LUMINOSA",
        "DESCRIPCION": "CULOTTE COCOT 5436 NI�A ESTAMPA LUMINOSA",
        "PRECIO": 32.82
      },
      {
        "CODIGO": 10980,
        "nombre": "CULOTTE COCOT 5516 FANTASIA RAYADA",
        "DESCRIPCION": "CULOTTE COCOT 5516 FANTASIA RAYADA",
        "PRECIO": 21.55
      },
      {
        "CODIGO": 86852,
        "nombre": "CULOTTE COCOT 5522-23",
        "DESCRIPCION": "CULOTTE COCOT 5522-23",
        "PRECIO": 41.16
      },
      {
        "CODIGO": 86555,
        "nombre": "CULOTTE COCOT 5525",
        "DESCRIPCION": "CULOTTE COCOT 5525",
        "PRECIO": 32.94
      },
      {
        "CODIGO": 86810,
        "nombre": "CULOTTE COCOT 5542 ELAST. CROCHET",
        "DESCRIPCION": "CULOTTE COCOT 5542 ELAST. CROCHET",
        "PRECIO": 25.16
      },
      {
        "CODIGO": 86716,
        "nombre": "CULOTTE COCOT 5552",
        "DESCRIPCION": "CULOTTE COCOT 5552",
        "PRECIO": 19.02
      },
      {
        "CODIGO": 86680,
        "nombre": "CULOTTE COCOT 5562",
        "DESCRIPCION": "CULOTTE COCOT 5562",
        "PRECIO": 19.02
      },
      {
        "CODIGO": 86703,
        "nombre": "CULOTTE COCOT 5642 DEPORTIVO",
        "DESCRIPCION": "CULOTTE COCOT 5642 DEPORTIVO",
        "PRECIO": 13.66
      },
      {
        "CODIGO": 87183,
        "nombre": "CULOTTE COCOT 5803",
        "DESCRIPCION": "CULOTTE COCOT 5803",
        "PRECIO": 29.46
      },
      {
        "CODIGO": 50923,
        "nombre": "CULOTTE COCOT 5913 C/PORTALIGA",
        "DESCRIPCION": "CULOTTE COCOT 5913 C/PORTALIGA",
        "PRECIO": 34.67
      },
      {
        "CODIGO": 87433,
        "nombre": "CULOTTE COCOT 5972 PUNTILLA",
        "DESCRIPCION": "CULOTTE COCOT 5972 PUNTILLA",
        "PRECIO": 33.89
      },
      {
        "CODIGO": 50909,
        "nombre": "CULOTTE COCOT 6152",
        "DESCRIPCION": "CULOTTE COCOT 6152",
        "PRECIO": 19.17
      },
      {
        "CODIGO": 51786,
        "nombre": "CULOTTE COCOT 6232 MICROPUNTILLA",
        "DESCRIPCION": "CULOTTE COCOT 6232 MICROPUNTILLA",
        "PRECIO": 21.73
      },
      {
        "CODIGO": 86794,
        "nombre": "CULOTTE COCOT 6352 JUV.CONTRATONO",
        "DESCRIPCION": "CULOTTE COCOT 6352 JUV.CONTRATONO",
        "PRECIO": 29.1
      },
      {
        "CODIGO": 86646,
        "nombre": "CULOTTE COCOT 6382 FOREVER",
        "DESCRIPCION": "CULOTTE COCOT 6382 FOREVER",
        "PRECIO": 31.15
      },
      {
        "CODIGO": 86887,
        "nombre": "CULOTTE COCOT 6432-5972",
        "DESCRIPCION": "CULOTTE COCOT 6432-5972",
        "PRECIO": 33.89
      },
      {
        "CODIGO": 86541,
        "nombre": "CULOTTE COCOT 6532 ANIMAL",
        "DESCRIPCION": "CULOTTE COCOT 6532 ANIMAL",
        "PRECIO": 51.74
      },
      {
        "CODIGO": 86644,
        "nombre": "CULOTTE COCOT 6562",
        "DESCRIPCION": "CULOTTE COCOT 6562",
        "PRECIO": 25.16
      },
      {
        "CODIGO": 86888,
        "nombre": "CULOTTE COCOT 6612 FLORCITAS",
        "DESCRIPCION": "CULOTTE COCOT 6612 FLORCITAS",
        "PRECIO": 32.34
      },
      {
        "CODIGO": 86456,
        "nombre": "CULOTTE COCOT 6662 JUVENIL DOTS",
        "DESCRIPCION": "CULOTTE COCOT 6662 JUVENIL DOTS",
        "PRECIO": 47.19
      },
      {
        "CODIGO": 86511,
        "nombre": "CULOTTE COCOT CALADO 6672",
        "DESCRIPCION": "CULOTTE COCOT CALADO 6672",
        "PRECIO": 40
      },
      {
        "CODIGO": 86848,
        "nombre": "CULOTTE COCOT COLA LESS 5592.4",
        "DESCRIPCION": "CULOTTE COCOT COLA LESS 5592.4",
        "PRECIO": 11.54
      },
      {
        "CODIGO": 51702,
        "nombre": "CULOTTE COCOT ESTAMPADO 6272",
        "DESCRIPCION": "CULOTTE COCOT ESTAMPADO 6272",
        "PRECIO": 37.03
      },
      {
        "CODIGO": 51729,
        "nombre": "CULOTTE COCOT JUVENIL 6222 COMBINADO",
        "DESCRIPCION": "CULOTTE COCOT JUVENIL 6222 COMBINADO",
        "PRECIO": 22.69
      },
      {
        "CODIGO": 86835,
        "nombre": "CULOTTE COCOT JUVENIL 6552-6452",
        "DESCRIPCION": "CULOTTE COCOT JUVENIL 6552-6452",
        "PRECIO": 25.16
      },
      {
        "CODIGO": 51662,
        "nombre": "CULOTTE COCOT JUVENIL JEAN 6202",
        "DESCRIPCION": "CULOTTE COCOT JUVENIL JEAN 6202",
        "PRECIO": 21.47
      },
      {
        "CODIGO": 51820,
        "nombre": "CULOTTE COCOT JUVENIL RAYAS 6322",
        "DESCRIPCION": "CULOTTE COCOT JUVENIL RAYAS 6322",
        "PRECIO": 19.01
      },
      {
        "CODIGO": 87443,
        "nombre": "MEDIA COCOT 1002 MULTIFILAMENTO",
        "DESCRIPCION": "MEDIA COCOT 1002 MULTIFILAMENTO",
        "PRECIO": 81.71
      },
      {
        "CODIGO": 87427,
        "nombre": "MEDIA COCOT 1053 MULTIFILAMENTO",
        "DESCRIPCION": "MEDIA COCOT 1053 MULTIFILAMENTO",
        "PRECIO": 90
      },
      {
        "CODIGO": 87422,
        "nombre": "MEDIA COCOT 110 MULTI MINI C/LIGA",
        "DESCRIPCION": "MEDIA COCOT 110 MULTI MINI C/LIGA",
        "PRECIO": 73.89
      },
      {
        "CODIGO": 86504,
        "nombre": "MEDIA COCOT 14 3/4 OPACA",
        "DESCRIPCION": "MEDIA COCOT 14 3/4 OPACA",
        "PRECIO": 95.92
      },
      {
        "CODIGO": 86773,
        "nombre": "MEDIA COCOT 2011.3 HOMBRE",
        "DESCRIPCION": "MEDIA COCOT 2011.3 HOMBRE",
        "PRECIO": 60.39
      },
      {
        "CODIGO": 86808,
        "nombre": "MEDIA COCOT 203 RED C/LIGA LICRA",
        "DESCRIPCION": "MEDIA COCOT 203 RED C/LIGA LICRA",
        "PRECIO": 144.68
      },
      {
        "CODIGO": 86691,
        "nombre": "MEDIA COCOT 21 CALADO LATERAL",
        "DESCRIPCION": "MEDIA COCOT 21 CALADO LATERAL",
        "PRECIO": 80.14
      },
      {
        "CODIGO": 86690,
        "nombre": "MEDIA COCOT 22 GRIEGA",
        "DESCRIPCION": "MEDIA COCOT 22 GRIEGA",
        "PRECIO": 80.14
      },
      {
        "CODIGO": 86570,
        "nombre": "MEDIA COCOT 220 3/4 DESCANSO",
        "DESCRIPCION": "MEDIA COCOT 220 3/4 DESCANSO",
        "PRECIO": 99.97
      },
      {
        "CODIGO": 50207,
        "nombre": "MEDIA COCOT 2200-264 3/4",
        "DESCRIPCION": "MEDIA COCOT 2200-264 3/4",
        "PRECIO": 11.14
      },
      {
        "CODIGO": 86565,
        "nombre": "MEDIA COCOT 223 SUPPLEX",
        "DESCRIPCION": "MEDIA COCOT 223 SUPPLEX",
        "PRECIO": 211.48
      },
      {
        "CODIGO": 87579,
        "nombre": "MEDIA COCOT 2398.3",
        "DESCRIPCION": "MEDIA COCOT 2398.3",
        "PRECIO": 133.22
      },
      {
        "CODIGO": 86793,
        "nombre": "MEDIA COCOT 246 FOOTLESS MICROPUNTILLA",
        "DESCRIPCION": "MEDIA COCOT 246 FOOTLESS MICROPUNTILLA",
        "PRECIO": 143.48
      },
      {
        "CODIGO": 87403,
        "nombre": "MEDIA COCOT 249 FANTASIA ESCOCESA",
        "DESCRIPCION": "MEDIA COCOT 249 FANTASIA ESCOCESA",
        "PRECIO": 38.33
      },
      {
        "CODIGO": 86543,
        "nombre": "MEDIA COCOT 250 PUNTEADA",
        "DESCRIPCION": "MEDIA COCOT 250 PUNTEADA",
        "PRECIO": 33.3
      },
      {
        "CODIGO": 86687,
        "nombre": "MEDIA COCOT 253 ULTRAOPACA FOOTLESS",
        "DESCRIPCION": "MEDIA COCOT 253 ULTRAOPACA FOOTLESS",
        "PRECIO": 139.77
      },
      {
        "CODIGO": 87399,
        "nombre": "MEDIA COCOT 268-270 3/4",
        "DESCRIPCION": "MEDIA COCOT 268-270 3/4",
        "PRECIO": 9.83
      },
      {
        "CODIGO": 86685,
        "nombre": "MEDIA COCOT 280 FANTASIA CREPE",
        "DESCRIPCION": "MEDIA COCOT 280 FANTASIA CREPE",
        "PRECIO": 54.86
      },
      {
        "CODIGO": 87420,
        "nombre": "MEDIA COCOT 291 3/4 ESPIGA",
        "DESCRIPCION": "MEDIA COCOT 291 3/4 ESPIGA",
        "PRECIO": 23.35
      },
      {
        "CODIGO": 87261,
        "nombre": "MEDIA COCOT 3030.2",
        "DESCRIPCION": "MEDIA COCOT 3030.2",
        "PRECIO": 52.04
      },
      {
        "CODIGO": 51738,
        "nombre": "MEDIA COCOT 3030.3",
        "DESCRIPCION": "MEDIA COCOT 3030.3",
        "PRECIO": 38.08
      },
      {
        "CODIGO": 87498,
        "nombre": "MEDIA COCOT 3033.3",
        "DESCRIPCION": "MEDIA COCOT 3033.3",
        "PRECIO": 27.24
      },
      {
        "CODIGO": 10967,
        "nombre": "MEDIA COCOT 3036.3 3039.3 DEP. CORTA PU�O x3",
        "DESCRIPCION": "MEDIA COCOT 3036.3 3039.3 DEP. CORTA PU�O x3",
        "PRECIO": 15.57
      },
      {
        "CODIGO": 10577,
        "nombre": "MEDIA COCOT 3069.3 CON DEDOS",
        "DESCRIPCION": "MEDIA COCOT 3069.3 CON DEDOS",
        "PRECIO": 7.01
      },
      {
        "CODIGO": 86396,
        "nombre": "MEDIA COCOT 3117 3/4 LISA",
        "DESCRIPCION": "MEDIA COCOT 3117 3/4 LISA",
        "PRECIO": 64.49
      },
      {
        "CODIGO": 86467,
        "nombre": "MEDIA COCOT 3131 RAYADO",
        "DESCRIPCION": "MEDIA COCOT 3131 RAYADO",
        "PRECIO": 26.11
      },
      {
        "CODIGO": 87540,
        "nombre": "MEDIA COCOT 3132-33 RAYAS-COMBINADA",
        "DESCRIPCION": "MEDIA COCOT 3132-33 RAYAS-COMBINADA",
        "PRECIO": 21.32
      },
      {
        "CODIGO": 87419,
        "nombre": "MEDIA COCOT 3153 CALADA",
        "DESCRIPCION": "MEDIA COCOT 3153 CALADA",
        "PRECIO": 50.41
      },
      {
        "CODIGO": 50112,
        "nombre": "MEDIA COCOT 3167 RAYAS 3/4",
        "DESCRIPCION": "MEDIA COCOT 3167 RAYAS 3/4",
        "PRECIO": 27.55
      },
      {
        "CODIGO": 35496,
        "nombre": "MEDIA COCOT 3170 CUADROS 3/4",
        "DESCRIPCION": "MEDIA COCOT 3170 CUADROS 3/4",
        "PRECIO": 27.55
      },
      {
        "CODIGO": 86445,
        "nombre": "MEDIA COCOT 3179 RAYADA",
        "DESCRIPCION": "MEDIA COCOT 3179 RAYADA",
        "PRECIO": 18.21
      },
      {
        "CODIGO": 10966,
        "nombre": "MEDIA COCOT 3180 DEP. CORTA",
        "DESCRIPCION": "MEDIA COCOT 3180 DEP. CORTA",
        "PRECIO": 16.53
      },
      {
        "CODIGO": 87437,
        "nombre": "MEDIA COCOT 3212 3/4",
        "DESCRIPCION": "MEDIA COCOT 3212 3/4",
        "PRECIO": 27.55
      },
      {
        "CODIGO": 86827,
        "nombre": "MEDIA COCOT 3214 3/4",
        "DESCRIPCION": "MEDIA COCOT 3214 3/4",
        "PRECIO": 28.27
      },
      {
        "CODIGO": 87389,
        "nombre": "MEDIA COCOT 3215-3218 3/4",
        "DESCRIPCION": "MEDIA COCOT 3215-3218 3/4",
        "PRECIO": 24.66
      },
      {
        "CODIGO": 86688,
        "nombre": "MEDIA COCOT 3220 3/4 INVISIBLE",
        "DESCRIPCION": "MEDIA COCOT 3220 3/4 INVISIBLE",
        "PRECIO": 17.39
      },
      {
        "CODIGO": 75991,
        "nombre": "MEDIA COCOT 3221-3222 INVISIBLE",
        "DESCRIPCION": "MEDIA COCOT 3221-3222 INVISIBLE",
        "PRECIO": 17.39
      },
      {
        "CODIGO": 86567,
        "nombre": "MEDIA COCOT 3223.3 INVISIBLE",
        "DESCRIPCION": "MEDIA COCOT 3223.3 INVISIBLE",
        "PRECIO": 145.94
      },
      {
        "CODIGO": 86952,
        "nombre": "MEDIA COCOT 3228 3/4 SKY",
        "DESCRIPCION": "MEDIA COCOT 3228 3/4 SKY",
        "PRECIO": 51.33
      },
      {
        "CODIGO": 87296,
        "nombre": "MEDIA COCOT 3229 PU�O VOLCADO",
        "DESCRIPCION": "MEDIA COCOT 3229 PU�O VOLCADO",
        "PRECIO": 63.82
      },
      {
        "CODIGO": 86823,
        "nombre": "MEDIA COCOT 3230 3/4 FANTASIA",
        "DESCRIPCION": "MEDIA COCOT 3230 3/4 FANTASIA",
        "PRECIO": 83.37
      },
      {
        "CODIGO": 86559,
        "nombre": "MEDIA COCOT 3231 3/4 RAYADA",
        "DESCRIPCION": "MEDIA COCOT 3231 3/4 RAYADA",
        "PRECIO": 87.12
      },
      {
        "CODIGO": 86486,
        "nombre": "MEDIA COCOT 3232 RAYADO",
        "DESCRIPCION": "MEDIA COCOT 3232 RAYADO",
        "PRECIO": 63.14
      },
      {
        "CODIGO": 86769,
        "nombre": "MEDIA COCOT 3233 FANTASIA",
        "DESCRIPCION": "MEDIA COCOT 3233 FANTASIA",
        "PRECIO": 69.18
      },
      {
        "CODIGO": 86398,
        "nombre": "MEDIA COCOT 3234 FANTASIA",
        "DESCRIPCION": "MEDIA COCOT 3234 FANTASIA",
        "PRECIO": 88.11
      },
      {
        "CODIGO": 86951,
        "nombre": "MEDIA COCOT 3235",
        "DESCRIPCION": "MEDIA COCOT 3235",
        "PRECIO": 67.45
      },
      {
        "CODIGO": 50913,
        "nombre": "MEDIA COCOT 3239 INVISIBLE",
        "DESCRIPCION": "MEDIA COCOT 3239 INVISIBLE",
        "PRECIO": 53.25
      },
      {
        "CODIGO": 51707,
        "nombre": "MEDIA COCOT 3243.3 INVISIBLE",
        "DESCRIPCION": "MEDIA COCOT 3243.3 INVISIBLE",
        "PRECIO": 28.31
      },
      {
        "CODIGO": 51768,
        "nombre": "MEDIA COCOT 3249.3",
        "DESCRIPCION": "MEDIA COCOT 3249.3",
        "PRECIO": 177.87
      },
      {
        "CODIGO": 50323,
        "nombre": "MEDIA COCOT 3250 MICROMEDIA",
        "DESCRIPCION": "MEDIA COCOT 3250 MICROMEDIA",
        "PRECIO": 78.82
      },
      {
        "CODIGO": 51805,
        "nombre": "MEDIA COCOT 3251.3 INVISIBLE.3u",
        "DESCRIPCION": "MEDIA COCOT 3251.3 INVISIBLE.3u",
        "PRECIO": 152.91
      },
      {
        "CODIGO": 50802,
        "nombre": "MEDIA COCOT 3253.3 CORTA",
        "DESCRIPCION": "MEDIA COCOT 3253.3 CORTA",
        "PRECIO": 170.9
      },
      {
        "CODIGO": 50114,
        "nombre": "MEDIA COCOT 3255 INVISIBLE C/PLANTILLA RELAX",
        "DESCRIPCION": "MEDIA COCOT 3255 INVISIBLE C/PLANTILLA RELAX",
        "PRECIO": 59.83
      },
      {
        "CODIGO": 51004,
        "nombre": "MEDIA COCOT 3256  ANTIDESLIZANTE",
        "DESCRIPCION": "MEDIA COCOT 3256  ANTIDESLIZANTE",
        "PRECIO": 94.79
      },
      {
        "CODIGO": 51736,
        "nombre": "MEDIA COCOT 3259 MICROMEDIA",
        "DESCRIPCION": "MEDIA COCOT 3259 MICROMEDIA",
        "PRECIO": 58.25
      },
      {
        "CODIGO": 50360,
        "nombre": "MEDIA COCOT 3260 MICROMEDIA",
        "DESCRIPCION": "MEDIA COCOT 3260 MICROMEDIA",
        "PRECIO": 62.41
      },
      {
        "CODIGO": 86579,
        "nombre": "MEDIA COCOT 3262.2 INVISIBLE",
        "DESCRIPCION": "MEDIA COCOT 3262.2 INVISIBLE",
        "PRECIO": 111.38
      },
      {
        "CODIGO": 86466,
        "nombre": "MEDIA COCOT 3540",
        "DESCRIPCION": "MEDIA COCOT 3540",
        "PRECIO": 32.57
      },
      {
        "CODIGO": 86448,
        "nombre": "MEDIA COCOT 3541",
        "DESCRIPCION": "MEDIA COCOT 3541",
        "PRECIO": 126.42
      },
      {
        "CODIGO": 86465,
        "nombre": "MEDIA COCOT 3542",
        "DESCRIPCION": "MEDIA COCOT 3542",
        "PRECIO": 142.42
      },
      {
        "CODIGO": 86426,
        "nombre": "MEDIA COCOT 3543",
        "DESCRIPCION": "MEDIA COCOT 3543",
        "PRECIO": 43.12
      },
      {
        "CODIGO": 86425,
        "nombre": "MEDIA COCOT 3544",
        "DESCRIPCION": "MEDIA COCOT 3544",
        "PRECIO": 174.42
      },
      {
        "CODIGO": 86464,
        "nombre": "MEDIA COCOT 3545",
        "DESCRIPCION": "MEDIA COCOT 3545",
        "PRECIO": 190.43
      },
      {
        "CODIGO": 86399,
        "nombre": "MEDIA COCOT 3560",
        "DESCRIPCION": "MEDIA COCOT 3560",
        "PRECIO": 31.15
      },
      {
        "CODIGO": 85025,
        "nombre": "MEDIA COCOT 3561",
        "DESCRIPCION": "MEDIA COCOT 3561",
        "PRECIO": 34.13
      },
      {
        "CODIGO": 86397,
        "nombre": "MEDIA COCOT 3563",
        "DESCRIPCION": "MEDIA COCOT 3563",
        "PRECIO": 39.52
      },
      {
        "CODIGO": 50925,
        "nombre": "MEDIA COCOT 3564",
        "DESCRIPCION": "MEDIA COCOT 3564",
        "PRECIO": 42.52
      },
      {
        "CODIGO": 85024,
        "nombre": "MEDIA COCOT 3565",
        "DESCRIPCION": "MEDIA COCOT 3565",
        "PRECIO": 45.28
      },
      {
        "CODIGO": 86954,
        "nombre": "MEDIA COCOT 3645",
        "DESCRIPCION": "MEDIA COCOT 3645",
        "PRECIO": 35.96
      },
      {
        "CODIGO": 50330,
        "nombre": "MEDIA COCOT 3646",
        "DESCRIPCION": "MEDIA COCOT 3646",
        "PRECIO": 81.53
      },
      {
        "CODIGO": 51782,
        "nombre": "MEDIA COCOT 3647.3",
        "DESCRIPCION": "MEDIA COCOT 3647.3",
        "PRECIO": 150.28
      },
      {
        "CODIGO": 87463,
        "nombre": "MEDIA COCOT 39 CURVAS PELIGROSAS",
        "DESCRIPCION": "MEDIA COCOT 39 CURVAS PELIGROSAS",
        "PRECIO": 78.8
      },
      {
        "CODIGO": 50926,
        "nombre": "MEDIA COCOT 405 PINTITAS FANTASIA",
        "DESCRIPCION": "MEDIA COCOT 405 PINTITAS FANTASIA",
        "PRECIO": 188.41
      },
      {
        "CODIGO": 86859,
        "nombre": "MEDIA COCOT 41 RED FANTASIA",
        "DESCRIPCION": "MEDIA COCOT 41 RED FANTASIA",
        "PRECIO": 241.99
      },
      {
        "CODIGO": 86575,
        "nombre": "MEDIA COCOT 410 3/4 FANTASIA PINTITAS",
        "DESCRIPCION": "MEDIA COCOT 410 3/4 FANTASIA PINTITAS",
        "PRECIO": 56.18
      },
      {
        "CODIGO": 86953,
        "nombre": "MEDIA COCOT 412 SEXI SHAPER",
        "DESCRIPCION": "MEDIA COCOT 412 SEXI SHAPER",
        "PRECIO": 163.86
      },
      {
        "CODIGO": 87416,
        "nombre": "MEDIA COCOT 420 3/4 MULTIFILAMENTO x2 PARES",
        "DESCRIPCION": "MEDIA COCOT 420 3/4 MULTIFILAMENTO x2 PARES",
        "PRECIO": 76.98
      },
      {
        "CODIGO": 86431,
        "nombre": "MEDIA COCOT 422 MICROMEDIA 2 PARES",
        "DESCRIPCION": "MEDIA COCOT 422 MICROMEDIA 2 PARES",
        "PRECIO": 89.65
      },
      {
        "CODIGO": 86782,
        "nombre": "MEDIA COCOT 43 PIES LIBRES",
        "DESCRIPCION": "MEDIA COCOT 43 PIES LIBRES",
        "PRECIO": 167.45
      },
      {
        "CODIGO": 86689,
        "nombre": "MEDIA COCOT 434 3/4 TRAMADA",
        "DESCRIPCION": "MEDIA COCOT 434 3/4 TRAMADA",
        "PRECIO": 123.69
      },
      {
        "CODIGO": 51816,
        "nombre": "MEDIA COCOT 435 3/4 FANTASIA COLOR",
        "DESCRIPCION": "MEDIA COCOT 435 3/4 FANTASIA COLOR",
        "PRECIO": 30.83
      },
      {
        "CODIGO": 86550,
        "nombre": "MEDIA COCOT 44 PIES LIBRES RAYAS",
        "DESCRIPCION": "MEDIA COCOT 44 PIES LIBRES RAYAS",
        "PRECIO": 13.31
      },
      {
        "CODIGO": 86427,
        "nombre": "MEDIA COCOT 459 ROSAS",
        "DESCRIPCION": "MEDIA COCOT 459 ROSAS",
        "PRECIO": 111.3
      },
      {
        "CODIGO": 51806,
        "nombre": "MEDIA COCOT 460 CORAZONES",
        "DESCRIPCION": "MEDIA COCOT 460 CORAZONES",
        "PRECIO": 113
      },
      {
        "CODIGO": 10962,
        "nombre": "MEDIA COCOT 464 3/4 ROSAS",
        "DESCRIPCION": "MEDIA COCOT 464 3/4 ROSAS",
        "PRECIO": 44.49
      },
      {
        "CODIGO": 10961,
        "nombre": "MEDIA COCOT 465 3/4 CORAZONES",
        "DESCRIPCION": "MEDIA COCOT 465 3/4 CORAZONES",
        "PRECIO": 44.49
      },
      {
        "CODIGO": 50386,
        "nombre": "MEDIA COCOT 47 PESCADORA",
        "DESCRIPCION": "MEDIA COCOT 47 PESCADORA",
        "PRECIO": 14.81
      },
      {
        "CODIGO": 50905,
        "nombre": "MEDIA COCOT 476 3/4 ANIMAL",
        "DESCRIPCION": "MEDIA COCOT 476 3/4 ANIMAL",
        "PRECIO": 66.08
      },
      {
        "CODIGO": 86416,
        "nombre": "MEDIA COCOT 478 3/4 ROMBOS",
        "DESCRIPCION": "MEDIA COCOT 478 3/4 ROMBOS",
        "PRECIO": 66.08
      },
      {
        "CODIGO": 50359,
        "nombre": "MEDIA COCOT 48 GITANAS",
        "DESCRIPCION": "MEDIA COCOT 48 GITANAS",
        "PRECIO": 14.81
      },
      {
        "CODIGO": 86840,
        "nombre": "MEDIA COCOT 6 3/4 ROMBOS",
        "DESCRIPCION": "MEDIA COCOT 6 3/4 ROMBOS",
        "PRECIO": 8.29
      },
      {
        "CODIGO": 50363,
        "nombre": "MEDIA COCOT 61 3/4 LYCRA ANTIDESLIZANTE",
        "DESCRIPCION": "MEDIA COCOT 61 3/4 LYCRA ANTIDESLIZANTE",
        "PRECIO": 77.88
      },
      {
        "CODIGO": 50383,
        "nombre": "MEDIA COCOT 62 C/LIGA ANTIDESLIZANTE",
        "DESCRIPCION": "MEDIA COCOT 62 C/LIGA ANTIDESLIZANTE",
        "PRECIO": 51.03
      },
      {
        "CODIGO": 50380,
        "nombre": "MEDIA COCOT 63/23 C/ANTIDESLIZANTE TIRO BAJO",
        "DESCRIPCION": "MEDIA COCOT 63/23 C/ANTIDESLIZANTE TIRO BAJO",
        "PRECIO": 121.22
      },
      {
        "CODIGO": 87408,
        "nombre": "MEDIA COCOT 64 LYCRA SUAVE S/PUNTERA",
        "DESCRIPCION": "MEDIA COCOT 64 LYCRA SUAVE S/PUNTERA",
        "PRECIO": 116.31
      },
      {
        "CODIGO": 87274,
        "nombre": "MEDIA COCOT 65 LIGHT",
        "DESCRIPCION": "MEDIA COCOT 65 LIGHT",
        "PRECIO": 93.04
      },
      {
        "CODIGO": 87489,
        "nombre": "MEDIA COCOT 66 TIRO BAJO",
        "DESCRIPCION": "MEDIA COCOT 66 TIRO BAJO",
        "PRECIO": 139.55
      },
      {
        "CODIGO": 86858,
        "nombre": "MEDIA COCOT 67 DESCANSO",
        "DESCRIPCION": "MEDIA COCOT 67 DESCANSO",
        "PRECIO": 219.89
      },
      {
        "CODIGO": 86860,
        "nombre": "MEDIA COCOT 7 3/4 MICROMASAJE",
        "DESCRIPCION": "MEDIA COCOT 7 3/4 MICROMASAJE",
        "PRECIO": 120.99
      },
      {
        "CODIGO": 87440,
        "nombre": "MEDIA COCOT 71 LYCRA VERANO",
        "DESCRIPCION": "MEDIA COCOT 71 LYCRA VERANO",
        "PRECIO": 136.29
      },
      {
        "CODIGO": 87430,
        "nombre": "MEDIA COCOT 715 LYCRA VERANO ESPECIAL",
        "DESCRIPCION": "MEDIA COCOT 715 LYCRA VERANO ESPECIAL",
        "PRECIO": 135.27
      },
      {
        "CODIGO": 86839,
        "nombre": "MEDIA COCOT 72 LYCRA ULTRA OPACA",
        "DESCRIPCION": "MEDIA COCOT 72 LYCRA ULTRA OPACA",
        "PRECIO": 211.48
      },
      {
        "CODIGO": 51630,
        "nombre": "MEDIA COCOT 725 ULTRAOPACA",
        "DESCRIPCION": "MEDIA COCOT 725 ULTRAOPACA",
        "PRECIO": 223.66
      },
      {
        "CODIGO": 87449,
        "nombre": "MEDIA COCOT 76 LYCRA SEMI OPACA",
        "DESCRIPCION": "MEDIA COCOT 76 LYCRA SEMI OPACA",
        "PRECIO": 104.79
      },
      {
        "CODIGO": 87431,
        "nombre": "MEDIA COCOT 765 LYCRA ESPECIAL",
        "DESCRIPCION": "MEDIA COCOT 765 LYCRA ESPECIAL",
        "PRECIO": 102.43
      },
      {
        "CODIGO": 86855,
        "nombre": "MEDIA COCOT 812 NENA C/LYCRA",
        "DESCRIPCION": "MEDIA COCOT 812 NENA C/LYCRA",
        "PRECIO": 23.72
      },
      {
        "CODIGO": 86783,
        "nombre": "MEDIA COCOT 84 MINI C/LYCRA",
        "DESCRIPCION": "MEDIA COCOT 84 MINI C/LYCRA",
        "PRECIO": 69.21
      },
      {
        "CODIGO": 86836,
        "nombre": "MEDIA COCOT 85 LYCRA SIN PUNTERA",
        "DESCRIPCION": "MEDIA COCOT 85 LYCRA SIN PUNTERA",
        "PRECIO": 53.83
      },
      {
        "CODIGO": 87445,
        "nombre": "MEDIA COCOT 86 PASION LYCRA C/LIGA",
        "DESCRIPCION": "MEDIA COCOT 86 PASION LYCRA C/LIGA",
        "PRECIO": 195.73
      },
      {
        "CODIGO": 51753,
        "nombre": "MEDIA COCOT 902 NI�A",
        "DESCRIPCION": "MEDIA COCOT 902 NI�A",
        "PRECIO": 209.33
      },
      {
        "CODIGO": 86667,
        "nombre": "MEDIA COCOT 906 NENA RAYAS",
        "DESCRIPCION": "MEDIA COCOT 906 NENA RAYAS",
        "PRECIO": 69.56
      },
      {
        "CODIGO": 86856,
        "nombre": "MEDIA COCOT 907 NENA FANTASIA",
        "DESCRIPCION": "MEDIA COCOT 907 NENA FANTASIA",
        "PRECIO": 12.22
      },
      {
        "CODIGO": 86781,
        "nombre": "MEDIA COCOT 909 NENA PIES LIBRES",
        "DESCRIPCION": "MEDIA COCOT 909 NENA PIES LIBRES",
        "PRECIO": 28.14
      },
      {
        "CODIGO": 86549,
        "nombre": "MEDIA COCOT 91 MODEL UP",
        "DESCRIPCION": "MEDIA COCOT 91 MODEL UP",
        "PRECIO": 250.77
      },
      {
        "CODIGO": 86686,
        "nombre": "MEDIA COCOT 910",
        "DESCRIPCION": "MEDIA COCOT 910",
        "PRECIO": 32.71
      },
      {
        "CODIGO": 86447,
        "nombre": "MEDIA COCOT 911-912 SIN PIE",
        "DESCRIPCION": "MEDIA COCOT 911-912 SIN PIE",
        "PRECIO": 11.41
      },
      {
        "CODIGO": 86857,
        "nombre": "MEDIA COCOT 92 TRUS UP",
        "DESCRIPCION": "MEDIA COCOT 92 TRUS UP",
        "PRECIO": 77.02
      },
      {
        "CODIGO": 87268,
        "nombre": "MEDIA COCOT 930 CORAZONES",
        "DESCRIPCION": "MEDIA COCOT 930 CORAZONES",
        "PRECIO": 37.13
      },
      {
        "CODIGO": 86446,
        "nombre": "MEDIA COCOT 950 NENA MULTIFILAMENTO",
        "DESCRIPCION": "MEDIA COCOT 950 NENA MULTIFILAMENTO",
        "PRECIO": 86.39
      },
      {
        "CODIGO": 87047,
        "nombre": "MEDIA COCOT 97 DEDOS",
        "DESCRIPCION": "MEDIA COCOT 97 DEDOS",
        "PRECIO": 170.82
      },
      {
        "CODIGO": 87405,
        "nombre": "MEDIA COCOT 98 TIRO BAJO",
        "DESCRIPCION": "MEDIA COCOT 98 TIRO BAJO",
        "PRECIO": 183.63
      },
      {
        "CODIGO": 87424,
        "nombre": "MEDIA COCOT NI�A 900",
        "DESCRIPCION": "MEDIA COCOT NI�A 900",
        "PRECIO": 77.48
      },
      {
        "CODIGO": 86824,
        "nombre": "MEDIA DUFOUR 2000 x3 CHICOS",
        "DESCRIPCION": "MEDIA DUFOUR 2000 x3 CHICOS",
        "PRECIO": 25.81
      },
      {
        "CODIGO": 50322,
        "nombre": "MEDIA DUFOUR 2001.3 HOMBRE",
        "DESCRIPCION": "MEDIA DUFOUR 2001.3 HOMBRE",
        "PRECIO": 56.82
      },
      {
        "CODIGO": 51740,
        "nombre": "MEDIA DUFOUR 2003.3 CREW",
        "DESCRIPCION": "MEDIA DUFOUR 2003.3 CREW",
        "PRECIO": 41.03
      },
      {
        "CODIGO": 87544,
        "nombre": "MEDIA DUFOUR 2012.3",
        "DESCRIPCION": "MEDIA DUFOUR 2012.3",
        "PRECIO": 120.98
      },
      {
        "CODIGO": 86960,
        "nombre": "MEDIA DUFOUR 2013.3 QUARTERS",
        "DESCRIPCION": "MEDIA DUFOUR 2013.3 QUARTERS",
        "PRECIO": 14.62
      },
      {
        "CODIGO": 50601,
        "nombre": "MEDIA DUFOUR 2015.3 HOMBRE CORTA",
        "DESCRIPCION": "MEDIA DUFOUR 2015.3 HOMBRE CORTA",
        "PRECIO": 131.06
      },
      {
        "CODIGO": 51519,
        "nombre": "MEDIA DUFOUR 2030",
        "DESCRIPCION": "MEDIA DUFOUR 2030",
        "PRECIO": 113.93
      },
      {
        "CODIGO": 86542,
        "nombre": "MEDIA DUFOUR 2039.3 CORTA C/LOGO",
        "DESCRIPCION": "MEDIA DUFOUR 2039.3 CORTA C/LOGO",
        "PRECIO": 142.1
      },
      {
        "CODIGO": 51788,
        "nombre": "MEDIA DUFOUR 2059 KIDS",
        "DESCRIPCION": "MEDIA DUFOUR 2059 KIDS",
        "PRECIO": 29.37
      },
      {
        "CODIGO": 50339,
        "nombre": "MEDIA DUFOUR 2063.3 CREW",
        "DESCRIPCION": "MEDIA DUFOUR 2063.3 CREW",
        "PRECIO": 51.88
      },
      {
        "CODIGO": 50701,
        "nombre": "MEDIA DUFOUR 2064.3 CORTA",
        "DESCRIPCION": "MEDIA DUFOUR 2064.3 CORTA",
        "PRECIO": 118.58
      },
      {
        "CODIGO": 11495,
        "nombre": "MEDIA DUFOUR 2086.3-2361.3",
        "DESCRIPCION": "MEDIA DUFOUR 2086.3-2361.3",
        "PRECIO": 67.86
      },
      {
        "CODIGO": 50163,
        "nombre": "MEDIA DUFOUR 2100.3 TUBO",
        "DESCRIPCION": "MEDIA DUFOUR 2100.3 TUBO",
        "PRECIO": 12.6
      },
      {
        "CODIGO": 50189,
        "nombre": "MEDIA DUFOUR 2101.3 KIDS",
        "DESCRIPCION": "MEDIA DUFOUR 2101.3 KIDS",
        "PRECIO": 29.37
      },
      {
        "CODIGO": 86950,
        "nombre": "MEDIA DUFOUR 2119 HOMBRE CRUZ",
        "DESCRIPCION": "MEDIA DUFOUR 2119 HOMBRE CRUZ",
        "PRECIO": 67.2
      },
      {
        "CODIGO": 86676,
        "nombre": "MEDIA DUFOUR 2140 TIEMPO LIBRE",
        "DESCRIPCION": "MEDIA DUFOUR 2140 TIEMPO LIBRE",
        "PRECIO": 67.2
      },
      {
        "CODIGO": 50200,
        "nombre": "MEDIA DUFOUR 2211.3 CORTAS SIN TOALLA",
        "DESCRIPCION": "MEDIA DUFOUR 2211.3 CORTAS SIN TOALLA",
        "PRECIO": 128.94
      },
      {
        "CODIGO": 11185,
        "nombre": "MEDIA DUFOUR 2216.3 INVISIBLE",
        "DESCRIPCION": "MEDIA DUFOUR 2216.3 INVISIBLE",
        "PRECIO": 99.86
      },
      {
        "CODIGO": 50503,
        "nombre": "MEDIA DUFOUR 2217 COMPETICION",
        "DESCRIPCION": "MEDIA DUFOUR 2217 COMPETICION",
        "PRECIO": 11.13
      },
      {
        "CODIGO": 50502,
        "nombre": "MEDIA DUFOUR 2218 S/TOALLA",
        "DESCRIPCION": "MEDIA DUFOUR 2218 S/TOALLA",
        "PRECIO": 12.93
      },
      {
        "CODIGO": 51790,
        "nombre": "MEDIA DUFOUR 2236-2386.3 QUARTER",
        "DESCRIPCION": "MEDIA DUFOUR 2236-2386.3 QUARTER",
        "PRECIO": 14.7
      },
      {
        "CODIGO": 50343,
        "nombre": "MEDIA DUFOUR 2274.3 KIDS",
        "DESCRIPCION": "MEDIA DUFOUR 2274.3 KIDS",
        "PRECIO": 104.58
      },
      {
        "CODIGO": 86722,
        "nombre": "MEDIA DUFOUR 2275.3 CORTAS",
        "DESCRIPCION": "MEDIA DUFOUR 2275.3 CORTAS",
        "PRECIO": 126.11
      },
      {
        "CODIGO": 50501,
        "nombre": "MEDIA DUFOUR 2283.3 KIDS",
        "DESCRIPCION": "MEDIA DUFOUR 2283.3 KIDS",
        "PRECIO": 21.79
      },
      {
        "CODIGO": 86929,
        "nombre": "MEDIA DUFOUR 2285.3 KIDS",
        "DESCRIPCION": "MEDIA DUFOUR 2285.3 KIDS",
        "PRECIO": 115.22
      },
      {
        "CODIGO": 86956,
        "nombre": "MEDIA DUFOUR 2289",
        "DESCRIPCION": "MEDIA DUFOUR 2289",
        "PRECIO": 82.53
      },
      {
        "CODIGO": 50376,
        "nombre": "MEDIA DUFOUR 2300-01-02-03-2123",
        "DESCRIPCION": "MEDIA DUFOUR 2300-01-02-03-2123",
        "PRECIO": 21.32
      },
      {
        "CODIGO": 86449,
        "nombre": "MEDIA DUFOUR 2307 COLOR CORTO",
        "DESCRIPCION": "MEDIA DUFOUR 2307 COLOR CORTO",
        "PRECIO": 12.63
      },
      {
        "CODIGO": 87392,
        "nombre": "MEDIA DUFOUR 2320.3 ROMBOS",
        "DESCRIPCION": "MEDIA DUFOUR 2320.3 ROMBOS",
        "PRECIO": 200.67
      },
      {
        "CODIGO": 51718,
        "nombre": "MEDIA DUFOUR 2331 INVISIBLE S/TOALLA",
        "DESCRIPCION": "MEDIA DUFOUR 2331 INVISIBLE S/TOALLA",
        "PRECIO": 45.33
      },
      {
        "CODIGO": 87545,
        "nombre": "MEDIA DUFOUR 2332",
        "DESCRIPCION": "MEDIA DUFOUR 2332",
        "PRECIO": 14.37
      },
      {
        "CODIGO": 87206,
        "nombre": "MEDIA DUFOUR 2335.3",
        "DESCRIPCION": "MEDIA DUFOUR 2335.3",
        "PRECIO": 11.37
      },
      {
        "CODIGO": 86746,
        "nombre": "MEDIA DUFOUR 2340-2344-45-46 CREW",
        "DESCRIPCION": "MEDIA DUFOUR 2340-2344-45-46 CREW",
        "PRECIO": 16.04
      },
      {
        "CODIGO": 10573,
        "nombre": "MEDIA DUFOUR 2341-2376 DEPORTIVA",
        "DESCRIPCION": "MEDIA DUFOUR 2341-2376 DEPORTIVA",
        "PRECIO": 14.37
      },
      {
        "CODIGO": 50338,
        "nombre": "MEDIA DUFOUR 2347 CREW",
        "DESCRIPCION": "MEDIA DUFOUR 2347 CREW",
        "PRECIO": 14.37
      },
      {
        "CODIGO": 51633,
        "nombre": "MEDIA DUFOUR 2347 DEP.",
        "DESCRIPCION": "MEDIA DUFOUR 2347 DEP.",
        "PRECIO": 13.77
      },
      {
        "CODIGO": 50337,
        "nombre": "MEDIA DUFOUR 2349.3 CREW",
        "DESCRIPCION": "MEDIA DUFOUR 2349.3 CREW",
        "PRECIO": 21.31
      },
      {
        "CODIGO": 34316,
        "nombre": "MEDIA DUFOUR 2350.3 INVISIBLE",
        "DESCRIPCION": "MEDIA DUFOUR 2350.3 INVISIBLE",
        "PRECIO": 89.72
      },
      {
        "CODIGO": 51821,
        "nombre": "MEDIA DUFOUR 2353 OUTDOOR SKI",
        "DESCRIPCION": "MEDIA DUFOUR 2353 OUTDOOR SKI",
        "PRECIO": 39.53
      },
      {
        "CODIGO": 86569,
        "nombre": "MEDIA DUFOUR 2354 RAYADA",
        "DESCRIPCION": "MEDIA DUFOUR 2354 RAYADA",
        "PRECIO": 17.24
      },
      {
        "CODIGO": 11013,
        "nombre": "MEDIA DUFOUR 2355 TIEMPO LIBRE",
        "DESCRIPCION": "MEDIA DUFOUR 2355 TIEMPO LIBRE",
        "PRECIO": 19.17
      },
      {
        "CODIGO": 35468,
        "nombre": "MEDIA DUFOUR 2356.3 TIEMPO LIBRE",
        "DESCRIPCION": "MEDIA DUFOUR 2356.3 TIEMPO LIBRE",
        "PRECIO": 28.71
      },
      {
        "CODIGO": 11186,
        "nombre": "MEDIA DUFOUR 2357 3/4 MELANGE",
        "DESCRIPCION": "MEDIA DUFOUR 2357 3/4 MELANGE",
        "PRECIO": 79.05
      },
      {
        "CODIGO": 51509,
        "nombre": "MEDIA DUFOUR 2358  3/4 MELANGE",
        "DESCRIPCION": "MEDIA DUFOUR 2358  3/4 MELANGE",
        "PRECIO": 21.34
      },
      {
        "CODIGO": 51008,
        "nombre": "MEDIA DUFOUR 2360 CREW",
        "DESCRIPCION": "MEDIA DUFOUR 2360 CREW",
        "PRECIO": 13.42
      },
      {
        "CODIGO": 51010,
        "nombre": "MEDIA DUFOUR 2361.3 CREW C/LOGO",
        "DESCRIPCION": "MEDIA DUFOUR 2361.3 CREW C/LOGO",
        "PRECIO": 25.56
      },
      {
        "CODIGO": 86678,
        "nombre": "MEDIA DUFOUR 2362-2387 QUARTER",
        "DESCRIPCION": "MEDIA DUFOUR 2362-2387 QUARTER",
        "PRECIO": 17.36
      },
      {
        "CODIGO": 86791,
        "nombre": "MEDIA DUFOUR 2370 LISAS",
        "DESCRIPCION": "MEDIA DUFOUR 2370 LISAS",
        "PRECIO": 9.83
      },
      {
        "CODIGO": 50335,
        "nombre": "MEDIA DUFOUR 2377 CALADA",
        "DESCRIPCION": "MEDIA DUFOUR 2377 CALADA",
        "PRECIO": 14.37
      },
      {
        "CODIGO": 86583,
        "nombre": "MEDIA DUFOUR 2379.3  VELA CALADO",
        "DESCRIPCION": "MEDIA DUFOUR 2379.3  VELA CALADO",
        "PRECIO": 147.45
      },
      {
        "CODIGO": 51749,
        "nombre": "MEDIA DUFOUR 2381.3",
        "DESCRIPCION": "MEDIA DUFOUR 2381.3",
        "PRECIO": 21.74
      },
      {
        "CODIGO": 86959,
        "nombre": "MEDIA DUFOUR 2382.3",
        "DESCRIPCION": "MEDIA DUFOUR 2382.3",
        "PRECIO": 11.98
      },
      {
        "CODIGO": 51000,
        "nombre": "MEDIA DUFOUR 2385.3 QUARTERS S/TOALLA",
        "DESCRIPCION": "MEDIA DUFOUR 2385.3 QUARTERS S/TOALLA",
        "PRECIO": 14.02
      },
      {
        "CODIGO": 86826,
        "nombre": "MEDIA DUFOUR 2404.3",
        "DESCRIPCION": "MEDIA DUFOUR 2404.3",
        "PRECIO": 14.12
      },
      {
        "CODIGO": 86792,
        "nombre": "MEDIA DUFOUR 2405.3",
        "DESCRIPCION": "MEDIA DUFOUR 2405.3",
        "PRECIO": 15.09
      },
      {
        "CODIGO": 51731,
        "nombre": "MEDIA DUFOUR 2408.3 CREW VELA",
        "DESCRIPCION": "MEDIA DUFOUR 2408.3 CREW VELA",
        "PRECIO": 49.14
      },
      {
        "CODIGO": 51727,
        "nombre": "MEDIA DUFOUR 2411 CREW",
        "DESCRIPCION": "MEDIA DUFOUR 2411 CREW",
        "PRECIO": 22.99
      },
      {
        "CODIGO": 86468,
        "nombre": "MEDIA DUFOUR 2415/18  3/4",
        "DESCRIPCION": "MEDIA DUFOUR 2415/18  3/4",
        "PRECIO": 17.73
      },
      {
        "CODIGO": 86563,
        "nombre": "MEDIA DUFOUR 2416 3/4 TIEMPO LIBRE",
        "DESCRIPCION": "MEDIA DUFOUR 2416 3/4 TIEMPO LIBRE",
        "PRECIO": 25.75
      },
      {
        "CODIGO": 86450,
        "nombre": "MEDIA DUFOUR 2419 SKY",
        "DESCRIPCION": "MEDIA DUFOUR 2419 SKY",
        "PRECIO": 39.53
      },
      {
        "CODIGO": 86955,
        "nombre": "MEDIA DUFOUR 2425.3 INVISIBLE",
        "DESCRIPCION": "MEDIA DUFOUR 2425.3 INVISIBLE",
        "PRECIO": 12.45
      },
      {
        "CODIGO": 51748,
        "nombre": "MEDIA DUFOUR 2426.3 INVISIBLE",
        "DESCRIPCION": "MEDIA DUFOUR 2426.3 INVISIBLE",
        "PRECIO": 12.71
      },
      {
        "CODIGO": 50929,
        "nombre": "MEDIA DUFOUR 2427.3 S/TOALLA",
        "DESCRIPCION": "MEDIA DUFOUR 2427.3 S/TOALLA",
        "PRECIO": 10.54
      },
      {
        "CODIGO": 50914,
        "nombre": "MEDIA DUFOUR 2429 CORTAS",
        "DESCRIPCION": "MEDIA DUFOUR 2429 CORTAS",
        "PRECIO": 17.13
      },
      {
        "CODIGO": 50906,
        "nombre": "MEDIA DUFOUR 2430.3 CORTA",
        "DESCRIPCION": "MEDIA DUFOUR 2430.3 CORTA",
        "PRECIO": 33.21
      },
      {
        "CODIGO": 50185,
        "nombre": "MEDIA DUFOUR 2431.3 2432.3 CORTA",
        "DESCRIPCION": "MEDIA DUFOUR 2431.3 2432.3 CORTA",
        "PRECIO": 24.66
      },
      {
        "CODIGO": 51011,
        "nombre": "MEDIA DUFOUR 2434.3 QUATERS",
        "DESCRIPCION": "MEDIA DUFOUR 2434.3 QUATERS",
        "PRECIO": 36.23
      },
      {
        "CODIGO": 87201,
        "nombre": "MEDIA DUFOUR 2435.3",
        "DESCRIPCION": "MEDIA DUFOUR 2435.3",
        "PRECIO": 25.59
      },
      {
        "CODIGO": 51001,
        "nombre": "MEDIA DUFOUR 2453.3 QUARTERS",
        "DESCRIPCION": "MEDIA DUFOUR 2453.3 QUARTERS",
        "PRECIO": 14.37
      },
      {
        "CODIGO": 51007,
        "nombre": "MEDIA DUFOUR 2454 QUARTERS",
        "DESCRIPCION": "MEDIA DUFOUR 2454 QUARTERS",
        "PRECIO": 50.78
      },
      {
        "CODIGO": 51636,
        "nombre": "MEDIA DUFOUR 2457.3 CREW",
        "DESCRIPCION": "MEDIA DUFOUR 2457.3 CREW",
        "PRECIO": 49.15
      },
      {
        "CODIGO": 86958,
        "nombre": "MEDIA DUFOUR 2458 CREW",
        "DESCRIPCION": "MEDIA DUFOUR 2458 CREW",
        "PRECIO": 20.5
      },
      {
        "CODIGO": 51640,
        "nombre": "MEDIA DUFOUR 2459 CREW",
        "DESCRIPCION": "MEDIA DUFOUR 2459 CREW",
        "PRECIO": 23
      },
      {
        "CODIGO": 86677,
        "nombre": "MEDIA DUFOUR 2467 3/4 TOALLA",
        "DESCRIPCION": "MEDIA DUFOUR 2467 3/4 TOALLA",
        "PRECIO": 27.55
      },
      {
        "CODIGO": 51648,
        "nombre": "MEDIA DUFOUR 2468 C/TOALLA",
        "DESCRIPCION": "MEDIA DUFOUR 2468 C/TOALLA",
        "PRECIO": 39.17
      },
      {
        "CODIGO": 51664,
        "nombre": "MEDIA DUFOUR 2469 TOALLA",
        "DESCRIPCION": "MEDIA DUFOUR 2469 TOALLA",
        "PRECIO": 27.64
      },
      {
        "CODIGO": 51745,
        "nombre": "MEDIA DUFOUR 2470 TOALLA",
        "DESCRIPCION": "MEDIA DUFOUR 2470 TOALLA",
        "PRECIO": 17.24
      },
      {
        "CODIGO": 51015,
        "nombre": "MEDIA DUFOUR 2473 INVISIBLE",
        "DESCRIPCION": "MEDIA DUFOUR 2473 INVISIBLE",
        "PRECIO": 21.07
      },
      {
        "CODIGO": 86564,
        "nombre": "MEDIA DUFOUR 2474.3",
        "DESCRIPCION": "MEDIA DUFOUR 2474.3",
        "PRECIO": 48.88
      },
      {
        "CODIGO": 86666,
        "nombre": "MEDIA DUFOUR 2504 3/4 INDIVIDUAL SKY",
        "DESCRIPCION": "MEDIA DUFOUR 2504 3/4 INDIVIDUAL SKY",
        "PRECIO": 66.9
      },
      {
        "CODIGO": 51638,
        "nombre": "MEDIA DUFOUR 2506 3/4 C/TOALLA",
        "DESCRIPCION": "MEDIA DUFOUR 2506 3/4 C/TOALLA",
        "PRECIO": 34.38
      },
      {
        "CODIGO": 87153,
        "nombre": "MEDIA DUFOUR 2508",
        "DESCRIPCION": "MEDIA DUFOUR 2508",
        "PRECIO": 32.37
      },
      {
        "CODIGO": 86957,
        "nombre": "MEDIA DUFOUR 2509 3/4 C/TOALLA",
        "DESCRIPCION": "MEDIA DUFOUR 2509 3/4 C/TOALLA",
        "PRECIO": 34.38
      },
      {
        "CODIGO": 87527,
        "nombre": "MEDIA DUFOUR 2513.3 3/4 MORLEY x3u",
        "DESCRIPCION": "MEDIA DUFOUR 2513.3 3/4 MORLEY x3u",
        "PRECIO": 70.86
      },
      {
        "CODIGO": 50919,
        "nombre": "MEDIA DUFOUR 2514 INVISIBLE",
        "DESCRIPCION": "MEDIA DUFOUR 2514 INVISIBLE",
        "PRECIO": 24.6
      },
      {
        "CODIGO": 50924,
        "nombre": "MEDIA DUFOUR 2515.3 INVISIBLE",
        "DESCRIPCION": "MEDIA DUFOUR 2515.3 INVISIBLE",
        "PRECIO": 79.46
      },
      {
        "CODIGO": 51526,
        "nombre": "MEDIA DUFOUR 2519.3 CORTA",
        "DESCRIPCION": "MEDIA DUFOUR 2519.3 CORTA",
        "PRECIO": 31.84
      },
      {
        "CODIGO": 50262,
        "nombre": "MEDIA DUFOUR 2524.3",
        "DESCRIPCION": "MEDIA DUFOUR 2524.3",
        "PRECIO": 161.33
      },
      {
        "CODIGO": 51815,
        "nombre": "MEDIA DUFOUR 2526 TIEMPO LIBRE",
        "DESCRIPCION": "MEDIA DUFOUR 2526 TIEMPO LIBRE",
        "PRECIO": 65.61
      },
      {
        "CODIGO": 86585,
        "nombre": "MEDIA DUFOUR 2540.3 CREW",
        "DESCRIPCION": "MEDIA DUFOUR 2540.3 CREW",
        "PRECIO": 28.85
      },
      {
        "CODIGO": 87299,
        "nombre": "MEDIA DUFOUR 2541",
        "DESCRIPCION": "MEDIA DUFOUR 2541",
        "PRECIO": 60.94
      },
      {
        "CODIGO": 86789,
        "nombre": "MEDIA DUFOUR 2542",
        "DESCRIPCION": "MEDIA DUFOUR 2542",
        "PRECIO": 81.66
      },
      {
        "CODIGO": 50370,
        "nombre": "MEDIA DUFOUR 2543 RAYA GRUESA",
        "DESCRIPCION": "MEDIA DUFOUR 2543 RAYA GRUESA",
        "PRECIO": 91.37
      },
      {
        "CODIGO": 87270,
        "nombre": "MEDIA DUFOUR 2549 C/TALON Y PUNTERA",
        "DESCRIPCION": "MEDIA DUFOUR 2549 C/TALON Y PUNTERA",
        "PRECIO": 69.45
      },
      {
        "CODIGO": 50918,
        "nombre": "MEDIA DUFOUR 2551 CREW C/PLANTILLA",
        "DESCRIPCION": "MEDIA DUFOUR 2551 CREW C/PLANTILLA",
        "PRECIO": 42.94
      },
      {
        "CODIGO": 86664,
        "nombre": "MEDIA DUFOUR 2554.3",
        "DESCRIPCION": "MEDIA DUFOUR 2554.3",
        "PRECIO": 148.23
      },
      {
        "CODIGO": 86584,
        "nombre": "MEDIA DUFOUR 2555.3",
        "DESCRIPCION": "MEDIA DUFOUR 2555.3",
        "PRECIO": 63.14
      },
      {
        "CODIGO": 87541,
        "nombre": "MEDIA DUFOUR 3252.2 INVISIBLE x2u",
        "DESCRIPCION": "MEDIA DUFOUR 3252.2 INVISIBLE x2u",
        "PRECIO": 88.66
      },
      {
        "CODIGO": 10955,
        "nombre": "MEDIA DUFOUR DEPORTIVA 2030.3",
        "DESCRIPCION": "MEDIA DUFOUR DEPORTIVA 2030.3",
        "PRECIO": 160.58
      },
      {
        "CODIGO": 86665,
        "nombre": "MEDIA ELEGANCE 2092",
        "DESCRIPCION": "MEDIA ELEGANCE 2092",
        "PRECIO": 90.9
      },
      {
        "CODIGO": 50922,
        "nombre": "MEDIA ELEGANCE 2098",
        "DESCRIPCION": "MEDIA ELEGANCE 2098",
        "PRECIO": 93.05
      },
      {
        "CODIGO": 86663,
        "nombre": "MEDIA ELEGANCE 2099",
        "DESCRIPCION": "MEDIA ELEGANCE 2099",
        "PRECIO": 82.09
      },
      {
        "CODIGO": 50910,
        "nombre": "MEDIA ELEGANCE 2167",
        "DESCRIPCION": "MEDIA ELEGANCE 2167",
        "PRECIO": 19.88
      },
      {
        "CODIGO": 86566,
        "nombre": "MEDIA ELEGANCE 3/4 ANGORA 2359",
        "DESCRIPCION": "MEDIA ELEGANCE 3/4 ANGORA 2359",
        "PRECIO": 21.32
      },
      {
        "CODIGO": 87448,
        "nombre": "MEDIA NUIT 1319 C/ANTIDESLIZANTE",
        "DESCRIPCION": "MEDIA NUIT 1319 C/ANTIDESLIZANTE",
        "PRECIO": 23.72
      },
      {
        "CODIGO": 10952,
        "nombre": "MEDIA NUIT 1385 3/4 RAYAS RELIEVE",
        "DESCRIPCION": "MEDIA NUIT 1385 3/4 RAYAS RELIEVE",
        "PRECIO": 12.25
      },
      {
        "CODIGO": 87326,
        "nombre": "MEDIA WINDSTAR ESCOLAR 4041",
        "DESCRIPCION": "MEDIA WINDSTAR ESCOLAR 4041",
        "PRECIO": 32.44
      },
      {
        "CODIGO": 86707,
        "nombre": "MICROMEDIA COCOT 3155",
        "DESCRIPCION": "MICROMEDIA COCOT 3155",
        "PRECIO": 80.11
      },
      {
        "CODIGO": 50118,
        "nombre": "MICROMEDIA COCOT 3240",
        "DESCRIPCION": "MICROMEDIA COCOT 3240",
        "PRECIO": 69.32
      },
      {
        "CODIGO": 51006,
        "nombre": "MICROMEDIA DUFOUR ALTA 2562",
        "DESCRIPCION": "MICROMEDIA DUFOUR ALTA 2562",
        "PRECIO": 63.78
      },
      {
        "CODIGO": 51737,
        "nombre": "MUSCULOSA COCOT 5169 SUPPLEX",
        "DESCRIPCION": "MUSCULOSA COCOT 5169 SUPPLEX",
        "PRECIO": 124.3
      },
      {
        "CODIGO": 86648,
        "nombre": "MUSCULOSA COCOT REDUCTORA 5161",
        "DESCRIPCION": "MUSCULOSA COCOT REDUCTORA 5161",
        "PRECIO": 74.26
      },
      {
        "CODIGO": 50365,
        "nombre": "PIJAMA COCOT 7098 C/BRETEL MICROFIBRA",
        "DESCRIPCION": "PIJAMA COCOT 7098 C/BRETEL MICROFIBRA",
        "PRECIO": 95.08
      },
      {
        "CODIGO": 86420,
        "nombre": "PIJAMA COCOT 7128 MARCIANITOS",
        "DESCRIPCION": "PIJAMA COCOT 7128 MARCIANITOS",
        "PRECIO": 153.48
      },
      {
        "CODIGO": 86790,
        "nombre": "PIJAMA COCOT 7129 COLLEGE",
        "DESCRIPCION": "PIJAMA COCOT 7129 COLLEGE",
        "PRECIO": 132.83
      },
      {
        "CODIGO": 86843,
        "nombre": "PIJAMA COCOT 7161 PARIS",
        "DESCRIPCION": "PIJAMA COCOT 7161 PARIS",
        "PRECIO": 131.5
      },
      {
        "CODIGO": 86537,
        "nombre": "PIJAMA COCOT 7170 BRETEL RAYADO",
        "DESCRIPCION": "PIJAMA COCOT 7170 BRETEL RAYADO",
        "PRECIO": 123.36
      },
      {
        "CODIGO": 86743,
        "nombre": "PIJAMA COCOT 7176 PESCADOR",
        "DESCRIPCION": "PIJAMA COCOT 7176 PESCADOR",
        "PRECIO": 200.98
      },
      {
        "CODIGO": 11062,
        "nombre": "PIJAMA COCOT 7190 CALADO",
        "DESCRIPCION": "PIJAMA COCOT 7190 CALADO",
        "PRECIO": 191.64
      },
      {
        "CODIGO": 86462,
        "nombre": "PIJAMA COCOT 7200 DOTS",
        "DESCRIPCION": "PIJAMA COCOT 7200 DOTS",
        "PRECIO": 239.54
      },
      {
        "CODIGO": 86547,
        "nombre": "PIJAMA COCOT 7270 GRAFITY",
        "DESCRIPCION": "PIJAMA COCOT 7270 GRAFITY",
        "PRECIO": 336.33
      },
      {
        "CODIGO": 86647,
        "nombre": "PIJAMA COCOT 7272 CORAZON ANIMAL",
        "DESCRIPCION": "PIJAMA COCOT 7272 CORAZON ANIMAL",
        "PRECIO": 336.33
      },
      {
        "CODIGO": 86976,
        "nombre": "PIJAMA COCOT FLOREADO 7111",
        "DESCRIPCION": "PIJAMA COCOT FLOREADO 7111",
        "PRECIO": 138.55
      },
      {
        "CODIGO": 51660,
        "nombre": "PIJAMA COCOT MICROFIBRA Y LUREX 7120",
        "DESCRIPCION": "PIJAMA COCOT MICROFIBRA Y LUREX 7120",
        "PRECIO": 122.23
      },
      {
        "CODIGO": 51606,
        "nombre": "PIJAMA COCOT MORLEY 7123",
        "DESCRIPCION": "PIJAMA COCOT MORLEY 7123",
        "PRECIO": 88.28
      },
      {
        "CODIGO": 51667,
        "nombre": "PIJAMA COCOT MUSCULOSA SUMMER 7125",
        "DESCRIPCION": "PIJAMA COCOT MUSCULOSA SUMMER 7125",
        "PRECIO": 96.44
      },
      {
        "CODIGO": 87581,
        "nombre": "PIJAMA COCOT NEVER STOP DREAMING 7333",
        "DESCRIPCION": "PIJAMA COCOT NEVER STOP DREAMING 7333",
        "PRECIO": 1183.25
      },
      {
        "CODIGO": 51771,
        "nombre": "POLAINAS COCOT 51 ULTRAOPACAS",
        "DESCRIPCION": "POLAINAS COCOT 51 ULTRAOPACAS",
        "PRECIO": 14.94
      },
      {
        "CODIGO": 87815,
        "nombre": "POLERA COCOT S/MANGAS 5159",
        "DESCRIPCION": "POLERA COCOT S/MANGAS 5159",
        "PRECIO": 175.29
      },
      {
        "CODIGO": 86523,
        "nombre": "SET MITON Y POLAINAS COCOT 3550.2",
        "DESCRIPCION": "SET MITON Y POLAINAS COCOT 3550.2",
        "PRECIO": 13.59
      },
      {
        "CODIGO": 86721,
        "nombre": "SHORT COCOT 1468",
        "DESCRIPCION": "SHORT COCOT 1468",
        "PRECIO": 17.55
      },
      {
        "CODIGO": 86886,
        "nombre": "SLIP DUFOUR",
        "DESCRIPCION": "SLIP DUFOUR",
        "PRECIO": 96.16
      },
      {
        "CODIGO": 86591,
        "nombre": "SLIP DUFOUR 11962",
        "DESCRIPCION": "SLIP DUFOUR 11962",
        "PRECIO": 176.7
      },
      {
        "CODIGO": 86702,
        "nombre": "SLIP DUFOUR 11994 ALG./LYCRA",
        "DESCRIPCION": "SLIP DUFOUR 11994 ALG./LYCRA",
        "PRECIO": 63.48
      },
      {
        "CODIGO": 87555,
        "nombre": "SLIP DUFOUR 12053 ELASTICO ANCHO",
        "DESCRIPCION": "SLIP DUFOUR 12053 ELASTICO ANCHO",
        "PRECIO": 183.84
      },
      {
        "CODIGO": 86623,
        "nombre": "SLIP DUFOUR 12059 JERSEY",
        "DESCRIPCION": "SLIP DUFOUR 12059 JERSEY",
        "PRECIO": 40.49
      },
      {
        "CODIGO": 10983,
        "nombre": "TANGA COCOT 5526 MICROFIBRA",
        "DESCRIPCION": "TANGA COCOT 5526 MICROFIBRA",
        "PRECIO": 21.47
      },
      {
        "CODIGO": 86437,
        "nombre": "VEDETINA COCOT 5524 MICROF Y PUNTILLA",
        "DESCRIPCION": "VEDETINA COCOT 5524 MICROF Y PUNTILLA",
        "PRECIO": 63.09
      },
      {
        "CODIGO": 86681,
        "nombre": "VEDETINA COCOT 5560",
        "DESCRIPCION": "VEDETINA COCOT 5560",
        "PRECIO": 17.11
      },
      {
        "CODIGO": 87576,
        "nombre": "VEDETINA COCOT 5600",
        "DESCRIPCION": "VEDETINA COCOT 5600",
        "PRECIO": 90.1
      },
      {
        "CODIGO": 87176,
        "nombre": "VEDETINA COCOT 5605 JUVENIL",
        "DESCRIPCION": "VEDETINA COCOT 5605 JUVENIL",
        "PRECIO": 12.63
      },
      {
        "CODIGO": 50928,
        "nombre": "VEDETINA COCOT 5607 TIRO BAJO",
        "DESCRIPCION": "VEDETINA COCOT 5607 TIRO BAJO",
        "PRECIO": 29.14
      },
      {
        "CODIGO": 86502,
        "nombre": "VEDETINA COCOT 5608 CINTURA DE TELA",
        "DESCRIPCION": "VEDETINA COCOT 5608 CINTURA DE TELA",
        "PRECIO": 50.25
      },
      {
        "CODIGO": 86893,
        "nombre": "VEDETINA COCOT 5610",
        "DESCRIPCION": "VEDETINA COCOT 5610",
        "PRECIO": 31.51
      },
      {
        "CODIGO": 86582,
        "nombre": "VEDETINA COCOT 5615 JUVENIL",
        "DESCRIPCION": "VEDETINA COCOT 5615 JUVENIL",
        "PRECIO": 8.42
      },
      {
        "CODIGO": 86622,
        "nombre": "VEDETINA COCOT 5630-5632 PUNTILLA",
        "DESCRIPCION": "VEDETINA COCOT 5630-5632 PUNTILLA",
        "PRECIO": 12.5
      },
      {
        "CODIGO": 86705,
        "nombre": "VEDETINA COCOT 5640 DEPORTIVA",
        "DESCRIPCION": "VEDETINA COCOT 5640 DEPORTIVA",
        "PRECIO": 13.59
      },
      {
        "CODIGO": 86715,
        "nombre": "VEDETINA COCOT 5690",
        "DESCRIPCION": "VEDETINA COCOT 5690",
        "PRECIO": 14.13
      },
      {
        "CODIGO": 86581,
        "nombre": "VEDETINA COCOT 5695 JUVENIL",
        "DESCRIPCION": "VEDETINA COCOT 5695 JUVENIL",
        "PRECIO": 8.83
      },
      {
        "CODIGO": 86458,
        "nombre": "VEDETINA COCOT 5697 LYCRA",
        "DESCRIPCION": "VEDETINA COCOT 5697 LYCRA",
        "PRECIO": 9.51
      },
      {
        "CODIGO": 86850,
        "nombre": "VEDETINA COCOT 5710",
        "DESCRIPCION": "VEDETINA COCOT 5710",
        "PRECIO": 11.95
      },
      {
        "CODIGO": 86435,
        "nombre": "VEDETINA COCOT 5768 CINTURA TELA",
        "DESCRIPCION": "VEDETINA COCOT 5768 CINTURA TELA",
        "PRECIO": 13.72
      },
      {
        "CODIGO": 86554,
        "nombre": "VEDETINA COCOT 5937 PUNTILLA",
        "DESCRIPCION": "VEDETINA COCOT 5937 PUNTILLA",
        "PRECIO": 46.72
      },
      {
        "CODIGO": 50907,
        "nombre": "VEDETINA COCOT 6190 SEGUNDA PIEL",
        "DESCRIPCION": "VEDETINA COCOT 6190 SEGUNDA PIEL",
        "PRECIO": 119.71
      },
      {
        "CODIGO": 51666,
        "nombre": "VEDETINA COCOT 6200 JEAN",
        "DESCRIPCION": "VEDETINA COCOT 6200 JEAN",
        "PRECIO": 20.38
      },
      {
        "CODIGO": 86913,
        "nombre": "VEDETINA COCOT 6270 ESTAMPADA",
        "DESCRIPCION": "VEDETINA COCOT 6270 ESTAMPADA",
        "PRECIO": 104.19
      },
      {
        "CODIGO": 86660,
        "nombre": "VEDETINA COCOT 6340 VISCOSA",
        "DESCRIPCION": "VEDETINA COCOT 6340 VISCOSA",
        "PRECIO": 29.95
      },
      {
        "CODIGO": 86831,
        "nombre": "VEDETINA COCOT 6380",
        "DESCRIPCION": "VEDETINA COCOT 6380",
        "PRECIO": 86.68
      },
      {
        "CODIGO": 86457,
        "nombre": "VEDETINA COCOT 6400 2DA PIEL",
        "DESCRIPCION": "VEDETINA COCOT 6400 2DA PIEL",
        "PRECIO": 31.74
      },
      {
        "CODIGO": 87575,
        "nombre": "VEDETINA COCOT 6430 SAFARI",
        "DESCRIPCION": "VEDETINA COCOT 6430 SAFARI",
        "PRECIO": 19.76
      },
      {
        "CODIGO": 86576,
        "nombre": "VEDETINA COCOT 6450",
        "DESCRIPCION": "VEDETINA COCOT 6450",
        "PRECIO": 26.11
      },
      {
        "CODIGO": 86418,
        "nombre": "VEDETINA COCOT 6510 I LOVE LOVE",
        "DESCRIPCION": "VEDETINA COCOT 6510 I LOVE LOVE",
        "PRECIO": 28.02
      },
      {
        "CODIGO": 86578,
        "nombre": "VEDETINA COCOT 6550 CORAZONES",
        "DESCRIPCION": "VEDETINA COCOT 6550 CORAZONES",
        "PRECIO": 23.72
      },
      {
        "CODIGO": 87573,
        "nombre": "VEDETINA COCOT 6560 LUNARES",
        "DESCRIPCION": "VEDETINA COCOT 6560 LUNARES",
        "PRECIO": 27.55
      },
      {
        "CODIGO": 87580,
        "nombre": "VEDETINA COCOT 6610 FLORCITAS",
        "DESCRIPCION": "VEDETINA COCOT 6610 FLORCITAS",
        "PRECIO": 30.18
      },
      {
        "CODIGO": 86713,
        "nombre": "VEDETINA COCOT 6630 FSIA OPACO",
        "DESCRIPCION": "VEDETINA COCOT 6630 FSIA OPACO",
        "PRECIO": 37.13
      },
      {
        "CODIGO": 87520,
        "nombre": "VEDETINA COCOT 6660 DOTS",
        "DESCRIPCION": "VEDETINA COCOT 6660 DOTS",
        "PRECIO": 41.93
      },
      {
        "CODIGO": 10978,
        "nombre": "VEDETINA COCOT 6670 CALADA",
        "DESCRIPCION": "VEDETINA COCOT 6670 CALADA",
        "PRECIO": 36.29
      },
      {
        "CODIGO": 86832,
        "nombre": "VEDETINA COCOT 6690 RAYADA",
        "DESCRIPCION": "VEDETINA COCOT 6690 RAYADA",
        "PRECIO": 31.74
      },
      {
        "CODIGO": 86829,
        "nombre": "VEDETINA COCOT 6780 RAYADA S/COSTURA",
        "DESCRIPCION": "VEDETINA COCOT 6780 RAYADA S/COSTURA",
        "PRECIO": 96.05
      },
      {
        "CODIGO": 86669,
        "nombre": "VEDETINA COCOT 6790 SIN COSTURA",
        "DESCRIPCION": "VEDETINA COCOT 6790 SIN COSTURA",
        "PRECIO": 122.48
      },
      {
        "CODIGO": 87432,
        "nombre": "VEDETINA COCOT 6791 S/COSTURA",
        "DESCRIPCION": "VEDETINA COCOT 6791 S/COSTURA",
        "PRECIO": 101.06
      },
      {
        "CODIGO": 86948,
        "nombre": "VEDETINA COCOT 6880",
        "DESCRIPCION": "VEDETINA COCOT 6880",
        "PRECIO": 124.82
      },
      {
        "CODIGO": 50916,
        "nombre": "VEDETINA COCOT 6940 BASICA",
        "DESCRIPCION": "VEDETINA COCOT 6940 BASICA",
        "PRECIO": 111.26
      },
      {
        "CODIGO": 86548,
        "nombre": "VEDETINA COCOT 6950 ESTAMPADA",
        "DESCRIPCION": "VEDETINA COCOT 6950 ESTAMPADA",
        "PRECIO": 115.58
      },
      {
        "CODIGO": 86659,
        "nombre": "VEDETINA COCOT C/PUNTILLA 5740",
        "DESCRIPCION": "VEDETINA COCOT C/PUNTILLA 5740",
        "PRECIO": 29.22
      },
      {
        "CODIGO": 86830,
        "nombre": "VEDETINA COCOT ESTAMPADA 6850",
        "DESCRIPCION": "VEDETINA COCOT ESTAMPADA 6850",
        "PRECIO": 45.9
      },
      {
        "CODIGO": 86729,
        "nombre": "VEDETINA COCOT PAZ 6370",
        "DESCRIPCION": "VEDETINA COCOT PAZ 6370",
        "PRECIO": 19.64
      },
      {
        "CODIGO": 51803,
        "nombre": "VEDETINA COCOT RAYAS 6320",
        "DESCRIPCION": "VEDETINA COCOT RAYAS 6320",
        "PRECIO": 17.65
      },
      {
        "CODIGO": 51811,
        "nombre": "VEDETINA COCOT ROMANTICA 6310",
        "DESCRIPCION": "VEDETINA COCOT ROMANTICA 6310",
        "PRECIO": 25.16
      },
      {
        "CODIGO": 50165,
        "nombre": "ZOQUETE COCOT 176 BLANCO",
        "DESCRIPCION": "ZOQUETE COCOT 176 BLANCO",
        "PRECIO": 16.32
      },
      {
        "CODIGO": 50156,
        "nombre": "ZOQUETE COCOT 176 NEGRO",
        "DESCRIPCION": "ZOQUETE COCOT 176 NEGRO",
        "PRECIO": 17.73
      },
      {
        "CODIGO": 50113,
        "nombre": "ZOQUETE COCOT 178 GRIEGO C/PUNTILLA",
        "DESCRIPCION": "ZOQUETE COCOT 178 GRIEGO C/PUNTILLA",
        "PRECIO": 19.83
      },
      {
        "CODIGO": 86571,
        "nombre": "ZOQUETE COCOT 207-211 VARIOS-ESCOCES",
        "DESCRIPCION": "ZOQUETE COCOT 207-211 VARIOS-ESCOCES",
        "PRECIO": 20.36
      },
      {
        "CODIGO": 50196,
        "nombre": "ZOQUETE COCOT 2281 KIDS",
        "DESCRIPCION": "ZOQUETE COCOT 2281 KIDS",
        "PRECIO": 17.97
      },
      {
        "CODIGO": 86825,
        "nombre": "ZOQUETE COCOT 3050-3514",
        "DESCRIPCION": "ZOQUETE COCOT 3050-3514",
        "PRECIO": 9.23
      },
      {
        "CODIGO": 87539,
        "nombre": "ZOQUETE COCOT 3056 LISO",
        "DESCRIPCION": "ZOQUETE COCOT 3056 LISO",
        "PRECIO": 9.78
      },
      {
        "CODIGO": 86530,
        "nombre": "ZOQUETE COCOT 3089 -3139",
        "DESCRIPCION": "ZOQUETE COCOT 3089 -3139",
        "PRECIO": 16.53
      },
      {
        "CODIGO": 86742,
        "nombre": "ZOQUETE COCOT 3123 x3 MORLEY",
        "DESCRIPCION": "ZOQUETE COCOT 3123 x3 MORLEY",
        "PRECIO": 9.95
      },
      {
        "CODIGO": 85036,
        "nombre": "ZOQUETE COCOT 3137 x3 INVISIBLE",
        "DESCRIPCION": "ZOQUETE COCOT 3137 x3 INVISIBLE",
        "PRECIO": 8.63
      },
      {
        "CODIGO": 86787,
        "nombre": "ZOQUETE COCOT 3140 LUNARES",
        "DESCRIPCION": "ZOQUETE COCOT 3140 LUNARES",
        "PRECIO": 20.12
      },
      {
        "CODIGO": 87542,
        "nombre": "ZOQUETE COCOT 3144 CORAZONES",
        "DESCRIPCION": "ZOQUETE COCOT 3144 CORAZONES",
        "PRECIO": 14.5
      },
      {
        "CODIGO": 50149,
        "nombre": "ZOQUETE COCOT 3146 CALADA",
        "DESCRIPCION": "ZOQUETE COCOT 3146 CALADA",
        "PRECIO": 13.65
      },
      {
        "CODIGO": 87455,
        "nombre": "ZOQUETE COCOT 3147 FLOREADO",
        "DESCRIPCION": "ZOQUETE COCOT 3147 FLOREADO",
        "PRECIO": 12.93
      },
      {
        "CODIGO": 50190,
        "nombre": "ZOQUETE COCOT 3148 MIAMI",
        "DESCRIPCION": "ZOQUETE COCOT 3148 MIAMI",
        "PRECIO": 13.18
      },
      {
        "CODIGO": 86562,
        "nombre": "ZOQUETE COCOT 3149 x3 INVISIBLE",
        "DESCRIPCION": "ZOQUETE COCOT 3149 x3 INVISIBLE",
        "PRECIO": 35.33
      },
      {
        "CODIGO": 86845,
        "nombre": "ZOQUETE COCOT 3163 RAYADO",
        "DESCRIPCION": "ZOQUETE COCOT 3163 RAYADO",
        "PRECIO": 18.92
      },
      {
        "CODIGO": 50901,
        "nombre": "ZOQUETE COCOT 3174-3042-3115",
        "DESCRIPCION": "ZOQUETE COCOT 3174-3042-3115",
        "PRECIO": 15.33
      },
      {
        "CODIGO": 87394,
        "nombre": "ZOQUETE COCOT 3176 INVISIBLE FLORES",
        "DESCRIPCION": "ZOQUETE COCOT 3176 INVISIBLE FLORES",
        "PRECIO": 16.53
      },
      {
        "CODIGO": 50927,
        "nombre": "ZOQUETE COCOT 3233",
        "DESCRIPCION": "ZOQUETE COCOT 3233",
        "PRECIO": 68.64
      },
      {
        "CODIGO": 50912,
        "nombre": "ZOQUETE COCOT 3241 INVISIBLE",
        "DESCRIPCION": "ZOQUETE COCOT 3241 INVISIBLE",
        "PRECIO": 30.32
      },
      {
        "CODIGO": 86744,
        "nombre": "ZOQUETE COCOT 3244.3 RAYADA",
        "DESCRIPCION": "ZOQUETE COCOT 3244.3 RAYADA",
        "PRECIO": 24.66
      },
      {
        "CODIGO": 87486,
        "nombre": "ZOQUETE COCOT 3245.3 FANTASIA",
        "DESCRIPCION": "ZOQUETE COCOT 3245.3 FANTASIA",
        "PRECIO": 30.6
      },
      {
        "CODIGO": 50904,
        "nombre": "ZOQUETE COCOT 483",
        "DESCRIPCION": "ZOQUETE COCOT 483",
        "PRECIO": 66.34
      },
      {
        "CODIGO": 50391,
        "nombre": "ZOQUETE COCOT 484",
        "DESCRIPCION": "ZOQUETE COCOT 484",
        "PRECIO": 89.77
      },
      {
        "CODIGO": 51824,
        "nombre": "ZOQUETE COCOT 491 RED",
        "DESCRIPCION": "ZOQUETE COCOT 491 RED",
        "PRECIO": 152.54
      }
    ];
    for(var j in csvjson){
      const prod = {
        codigo: csvjson[j].CODIGO,
        nombre: csvjson[j].nombre,
        precio: csvjson[j].PRECIO,
        detalle: csvjson[j].DESCRIPCION
      }
      this.dataService.createProduct(prod);
    }
  } */
}
