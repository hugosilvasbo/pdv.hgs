import React from "react";
import Modal from "./Modal";
import { IModal } from "./interface/IModal";

export default class ModalAjuda extends React.Component<IModal, {}> {
  render() {
    return (
      <>
        <Modal
          title="Ajuda de comandos"
          showModal={this.props.showModal}
          onClose={this.props.onClose}
        >
          <div>
            <h2>Coisas a se melhorar...</h2>
            <br />
            Tab orders das coisas principalmente na home...
            <br />
            No modal dos clientes, criar tela de consulta assim como edição, etc.
            <br />
            Ter opção de remover o item incluso na venda... (saber como que faz pra focar
            no grid e selecionar com as teclas up and down)
            <br />
            Fazer a seleção do cliente... Trazer o nro do pedido...
            <br />
            Criar classe para calculo da venda, para levar na finalização da venda! :)
            <br />
            <h3>Aprender fazer o esquema de loading enquanto algo carrega/inclui...</h3>
            <br />
            Melhorar o componente do botao porque ta mto simples... e tbm tratar o componente numerico, mudar para State igual fiz com o esquema no ModalCliente , item etc! ^^
            <br />
            Etc...
            <br />
            <br />
            <h1>Descobrir como diminuir esse modal dinamicamente</h1>
          </div>
        </Modal>
      </>
    );
  }
}
