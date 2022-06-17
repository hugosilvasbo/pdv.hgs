export interface IModal {
  showModal: boolean;
  onClose: any;
  onFinish?: any;
  title?: string;
  children?: any;
  clickedObject?: {};
  btnFinishCaption?: string
}
