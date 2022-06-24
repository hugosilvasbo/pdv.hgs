import { useEffect } from "react";
import styles from "../../../styles/componentes/modal/Modal.module.scss";
import { IModal } from "../../../utils/interfaces/IModal";

/**
 * Componente Modal.
 * Ex: Trabalhamos com callback na chama do props.onClose.
 */

const Modal = (props: IModal) => {
  if (!props.showModal) {
    return null
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

  const btnSair = (
    <button
      type="button"
      id="btnCancel"
      className="btn btn-danger btn-sm"
      onClick={props.onClose}
    >
      Sair
    </button>
  );

  const btnConcluir = (
    <button
      type="button"
      id="btnSubmit"
      className="btn btn-primary btn-sm me-2"
      onClick={props.onFinish}
    >
      {props.btnFinishCaption ? props.btnFinishCaption : "Concluir"}
    </button>
  );

  return (
    <>
      <div className={styles.modal} onClick={props.onClose}>
        <div className={styles.modal_content} onClick={(e) => e.stopPropagation()}>
          <div className={styles.modal_header}>
            <div className={styles.modal_title}>{props.title}</div>
          </div>
          <div className={styles.modal_body}>{props.children}</div>
          <div className={styles.modal_footer}>
            <div className={styles.fs_subtitle}>
              {props.footer_title ? "* " + props.footer_title : ""}
            </div>
            <div className="btn-toolbar">
              {props.onFinish ? btnConcluir : ""}
              {props.onClose ? btnSair : ""}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
