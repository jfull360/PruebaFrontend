
import { documento } from "./documento"

export class consulta {
    constructor(
        private documento_?: documento,
        private numeroDocumento_?: number,
    ){}
    public get documento(): documento {
        return this.documento_!;
    }
    public set documento(value: documento) {
        this.documento_ = value;
    }
    public get numeroDocumento(): number {
        return this.numeroDocumento_!;
    }
    public set numeroDocumento(value: number) {
        this.numeroDocumento_ = value;
    }
    
}