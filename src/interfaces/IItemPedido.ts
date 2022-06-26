import { IItem } from "./IItem";

export interface IItemPedido {
  id?: number;
  quantidade?: number;
  desconto?: number;
  preco?: number;
  sequencia?: number;
  subtotal?: number;
  IItem?: IItem;
}
