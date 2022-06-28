import { Generica } from "./Generica";

export class Pessoa extends Generica {
    constructor() {
        super();
        this.table = "pessoa";
        this.primaryKey = [{ key: "id" }]
    }
}