import { IItem } from "./IItem";

export interface IItemPedido {
  item: IItem
  preco_unitario?: number | 0;
  quantidade?: number | 0;
  desconto_total?: number | 0;
  subtotal?: number | 0;
  sequencia?: number | 0;
}
