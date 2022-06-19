import React from "react";
import Modal from "../Modal";
import { IModal } from "../../../interfaces/componentes/modal/interface/IModal";

const ModalSelecaoPessoa = (props: IModal) => {
    return (
        <Modal
           onClose={props.onClose}
           showModal={props.showModal}
           title={props.title}
        >
            Opa...
        </Modal>
    )
}

export default ModalSelecaoPessoa;