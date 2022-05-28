export interface IItemPedido {
    codigo_produto?: string|"";
    descricao?: string|"";
    preco_unitario?: number|0;
    estoque_atual?: number|0;
    quantidade?: number|0;
    desconto_total?: number|0;
    total?: number|0;
    sequencia?: number|0;
  }
  