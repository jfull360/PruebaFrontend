
export class documento {
    constructor(
        private documento_?: string,
        private id_?: string,
    ){}
    public get documento(): string {
        return this.documento_!;
    }
    public set documento(value: string) {
        this.documento_ = value;
    }
    public get id(): string {
        return this.id_!;
    }
    public set id(value: string) {
        this.id_ = value;
    }
    
}