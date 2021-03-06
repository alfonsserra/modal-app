
export interface ModalComponent<T> {
}

export class SystelabModalContext {

  public dialogClass: string;

  public width: number = null;
  public height: number = null;

  public minWidth: number = null;
  public minHeight: number = null;

  public maxWidth: number = null;
  public maxHeight: number = null;

  public widthRelative: string = null;
  public heightRelative: string = null;

  public minWidthRelative: string = null;
  public minHeightRelative: string = null;

  public maxWidthRelative: string = null;
  public maxHeightRelative: string = null;

  public fullScreen: boolean = false;

  public showClose: boolean;

  public setDefaultSize( w: number, h: number ) {
    if ( !this.width ) {
      this.width = w;
    }
    if ( !this.height ) {
      this.height = h;
    }
  }

}
