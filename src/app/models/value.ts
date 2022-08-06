
export class value_ {
    constructor(
        private id_?: number,
        private documento_?: string,
    ){}
    public get id(): number {
        return this.id_!;
    }
    public set id(value: number) {
        this.id_ = value;
    }
    public get documento(): string {
        return this.documento_!;
    }
    public set documento(value: string) {
        this.documento_ = value;
    }
    
}

