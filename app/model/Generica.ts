import axios from "axios";

interface IPrimaryKey {
    key: string;
}

export abstract class Generica {
    table: string | undefined;
    primaryKey: [IPrimaryKey] | undefined

    async findAll() {
        let res = await axios.get("/api/generica/findAll/", {
            params: {
                table: this.table
            }
        }).then((data: any) => {
            return data;
        });

        return res;
    }
}