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
        <div
          className={styles.modal_content}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles.modal_header}>
            <h4 className={styles.modal_title}>{props.title}</h4>
          </div>
          <div className={styles.modal_body}>{props.children}</div>
          <div className={styles.modal_footer}>
            <div className="btn-toolbar">
              <button
                type="button"
                id="btnSubmit"
                className="btn btn-primary btn-sm me-2"
              >
                Selecionar
              </button>
              <button
                type="button"
                id="btnCancel"
                className="btn btn-danger btn-sm"
                onClick={props.onClose}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
