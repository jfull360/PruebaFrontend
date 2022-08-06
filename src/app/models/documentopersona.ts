
export class documentoPersona {
    constructor(
        private id_?: string,
        private primerNombre_?: string,
        private segundoNombre_?: string,
        private primerApellido_?: string,
        private telefono_?: string,
        private direccion_?: string,
        private ciudadResidencia_?: string,
    ) { }
    public get id(): string {
        return this.id_!;
    }
    public set id(value: string) {
        this.id_ = value;
    }
    public get primerNombre(): string {
        return this.primerNombre_!;
    }
    public set primerNombre(value: string) {
        this.primerNombre_ = value;
    }
    public get segundoNombre(): string {
        return this.segundoNombre_!;
    }
    public set segundoNombre(value: string) {
        this.segundoNombre_ = value;
    }
    public get primerApellido(): string {
        return this.primerApellido_!;
    }
    public set primerApellido(value: string) {
        this.primerApellido_ = value;
    }
    public get telefono(): string {
        return this.telefono_!;
    }
    public set telefono(value: string) {
        this.telefono_ = value;
    }
    public get direccion(): string {
        return this.direccion_!;
    }
    public set direccion(value: string) {
        this.direccion_ = value;
    }
    public get ciudadResidencia(): string {
        return this.ciudadResidencia_!;
    }
    public set ciudadResidencia(value: string) {
        this.ciudadResidencia_ = value;
    }

}
