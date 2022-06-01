import { IItemPreco } from "./IItemPreco";

export interface IItem {
  id?: number;
  descricao?: string | "";
  estoque_atual?: number | 0;
  itemPreco?: IItemPreco;
}
