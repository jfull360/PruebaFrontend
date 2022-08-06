import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {

  form!: FormGroup;
  constructor(private fb: FormBuilder) { }
  userData = JSON.parse(localStorage.getItem('userData')!);
  mensaje = "";
  size:boolean=false;

  ngOnInit(): void {

    this.mensaje = localStorage.getItem('message')!;
    this.form = this.fb.group({
      id: [""],
      primerNombre: [""],
      segundoNombre: [""],
      primerApellido: [""],
      segundoApellido: [""],
      telefono: [""],
      direccion: [""],
      ciudadResidencia: [""]
    });

    this.Recibir_Data_local();
  }

  get mensaje_(): boolean {
    return this.mensaje != "";
  }

  Recibir_Data_local = (): void => {
    if (this.userData !== null) {
      this.form.patchValue(this.userData);
    }
  };

  limpiarMemorialocal(){
    localStorage.clear();
  }


}
