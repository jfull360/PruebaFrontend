import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Service } from 'src/app/services/apis.service';
import { Router } from '@angular/router';
import { consulta } from 'src/app/models/consulta';
import { longitudes } from './customValidators/ValidatorsObligatorios';

@Component({
  selector: 'app-ingreso-informacion',
  templateUrl: './ingreso-informacion.component.html',
  styleUrls: ['./ingreso-informacion.component.css'],
  providers: [Service, { provide: '', useValue: '' }],
})
export class IngresoInformacionComponent implements OnInit {

  constructor(private fb: FormBuilder, private services: Service, private router : Router) { }

  form!: FormGroup;
  subscriptions: Subscription[] = [];
  loading: boolean=false;
  catalogo = [];
  mensaje_error="";

  ngOnInit(): void {

    this.form = this.fb.group({
      tipo_documento: ["", Validators.required],
      numero_documento: ["", Validators.required]
    },
    {
      validators: [
        longitudes({ longitud_minima: 8, longitd_maxima: 11 }),
      ],
    })

    this.onFetchData();
  }

  get loading_(): boolean {
    return this.loading == false ? true : false;
  }

  get error_(): boolean {
    return this.mensaje_error == "" ? false : true;
  }

  onFetchData = (): void => {
    this.subscriptions.push(this.services.consultar_catalogo()
      .subscribe(res => {
        if (res !== null) {
          this.catalogo = res;
        }
      }));
  }

  Solo_Numeros(event: any) {
    let key;
    if (event.type === 'paste') {
      key = event.clipboardData.getData('text/plain');
    } else {
      key = event.keyCode;
      key = String.fromCharCode(key);
    }
    const regex = /[0-9]|\./;
    if (!regex.test(key)) {
      event.returnValue = false;
      if (event.preventDefault) {
        event.preventDefault();
      }
    }
  }

  json = (): consulta => {
    return {
      "documento": {
        "id": this.form.get('tipo_documento')?.value["id"],
        "documento": this.form.get('tipo_documento')?.value["documento"]
      },
      "numeroDocumento": this.form.get('numero_documento')?.value
    }
  }

  onSave = (): void => {
    this.loading = true;
    this.subscriptions.push(this.services.consultar(this.json()).subscribe(res => {
      if (res && res.code==200) {
        localStorage.setItem("userData", JSON.stringify(res.data));
        localStorage.setItem("message", res.message);
        this.loading = false;
        this.router.navigateByUrl('/resumen');
      }
    }, error => {
      let error_=error.error
      if(error_.code == 400){
         this.mensaje_error = error_.errors
      }
      if(error_.code == 404){
        this.mensaje_error = error_.message
      }
      if(error_.code == 500){
        this.mensaje_error = error_.message
      }
      this.loading = false;
    })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(elemento => elemento.unsubscribe());
  }

}
