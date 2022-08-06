import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'separadorcomas' })
export class separadorcomas implements PipeTransform {
    transform(value: string): any {
        if(value){
                return value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }
        /* let cadenaConComa = ""

        if(value != undefined){
        if (value.length > 3) {
            for (let i = 0; i < value.length; i++) {
                if ((i + 1) % 3 == 0 && i != 0) {
                    cadenaConComa += value.charAt(i) + ",";
                } else {
                    cadenaConComa += value.charAt(i);
                }
            }
        } else {
            cadenaConComa += value.substring(value.length);
        }

    }
        return cadenaConComa; */
    }


}
