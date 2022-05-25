import React, { useEffect } from "react";
import styles from "../../../styles/componentes/modal/Modal.module.scss";

/**
 * Componente Modal.
 * Ex: Trabalhamos com callback na chama do props.onClose.
 */

interface IModal {
  showModal: boolean;
  onClose: any;
  title: string;
  children: any;
}

const Modal = (props: IModal) => {
  if (!props.showModal) {
    return null;
  }

  const closeOnEscapeKeyDown = (e: any) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  return (
    <>
      <div className={styles.modal} onClick={props.onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h4 className="modal-title">{props.title}</h4>
          </div>
          <div className="modal-body">{props.children}</div>
          <div className="modal-footer">
            <button
              onClick={props.onClose}
              type="button"
              className="btn btn-danger"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
