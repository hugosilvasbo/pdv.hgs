export interface IProdutoDetalheHome {
  codigo_produto: string;
  preco_unitario: number;
  estoque_atual: number;
  quantidade: number;
  desconto_total: number;
  total?: number;
}
