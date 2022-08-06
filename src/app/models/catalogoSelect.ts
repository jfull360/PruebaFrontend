import { value_ } from "./value";

export class catalogoSelect {
    constructor(
        private label_?: string,
        private value_?: value_,
    ){}
    public get label(): string {
        return this.label_!;
    }
    public set label(value: string) {
        this.label_ = value;
    }
    public get value(): value_ {
        return this.value_!;
    }
    public set value(value: value_) {
        this.value_ = value;
    }
    
}
