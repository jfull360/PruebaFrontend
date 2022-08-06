import { AbstractControl, ValidatorFn, } from '@angular/forms';

export function longitudes(valParams: { longitud_minima: number; longitd_maxima: number; }): ValidatorFn {

  return (control: AbstractControl): { [key: string]: any } | null => {

    let numero_documento = 0
    if (control.get('numero_documento')?.value != null) {
      numero_documento = ((control.get('numero_documento')?.value).toString()).length
    }

    return (numero_documento >= valParams.longitud_minima && numero_documento <= valParams.longitd_maxima) ?
      null : { longitudes_incorrectas: true }

  };
}
