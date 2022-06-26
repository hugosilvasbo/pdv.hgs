export interface IModal {
  showModal: boolean;
  onClose: any;
  onFinish?: any;
  title?: string;
  footer_title?: string;
  children?: any;
  clickedObject?: {};
  btnFinishCaption?: string
}
